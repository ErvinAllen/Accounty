'use client'
import Header from "@/components/Header"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PercentIcon from '@mui/icons-material/Percent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AddIcon from '@mui/icons-material/Add';
import { useState , useRef } from "react";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BasicBars from "./LineChart";
import BasicPie from "./PieChart";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

export var eachMonthData = {};
export var totals = [];

function page() {

  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [term, setTerm] = useState(0);
  const [down, setDown] = useState(0);
  const [extra, setExtra] = useState(0);

  function loanAmortization(principal, annualRate, years, down, extra) {
    let monthlyRate = (annualRate / 100) / 12;
    let totalMonths = years * 12;
    let monthlyPayment = (((principal - down) * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths))) + Number(extra);
    let amortizationSchedule = [];
    let remainingPrincipal = principal - down;

    for (let month = 1; month <= totalMonths; month++) {
      let interestForMonth = remainingPrincipal * monthlyRate;
      let principalForMonth = (monthlyPayment - interestForMonth);
        
      remainingPrincipal -= principalForMonth;
        if(Number(interestForMonth) >= 0) {
        amortizationSchedule.push({
            month: month,
            interest: Number(interestForMonth).toFixed(2),
            principal: Number(principalForMonth).toFixed(2),
            remainingPrincipal: Number(remainingPrincipal).toFixed(2)
        });
      }
    }

    return {
      monthlyPayment: Number(monthlyPayment).toFixed(2),
      amortizationSchedule: amortizationSchedule
    };
  }

  eachMonthData = loanAmortization(amount, interest, term, down, extra);

  function PrincipalAvg() {
    if(eachMonthData.amortizationSchedule.length > 0) {
    let sum = 0;
    eachMonthData.amortizationSchedule.forEach(object => {
      return sum += Number(object.principal);
    })
    return (sum / eachMonthData.amortizationSchedule.length).toFixed(2);
    } else return 0;
  }

  function InterestAvg() {
    if(eachMonthData.amortizationSchedule.length > 0) {
    let sum = 0;
    eachMonthData.amortizationSchedule.forEach(object => {
      return sum += Number(object.interest);
    })
    return (sum / eachMonthData.amortizationSchedule.length).toFixed(2);
    } else return 0;
  }

  const handleChange = e => {
    const input = e.target.value;
    if(Number(input) <= 30) {
      setTerm(input)
    } else {
      setTerm(0)
    }
  }

  totals.push(PrincipalAvg() * eachMonthData.amortizationSchedule.length);
  totals.push(InterestAvg() * eachMonthData.amortizationSchedule.length);

  const pie = useRef();
  const bar = useRef();
  const alert = useRef();

  function handleAnalyze() {
    if(eachMonthData.amortizationSchedule.length > 0) {
    pie.current.classList.remove('hidden')
    bar.current.classList.remove('hidden')
    alert.current.classList.remove('hidden')
    }
  }

  return (
    <div className="w-full ml-24 ">
      <Header title='Loan' />
      <div className="flex 2xl:flex-row flex-col">
        <div className="flex flex-col 2xl:w-1/2 max-w-full mx-8 mb-4">
          <TextField autoComplete="off" required onChange={(e) => setAmount(e.target.value)} sx={{ caretColor: 'gray' , color: 'gray' }} slotProps={{
              input: {
                startAdornment: <InputAdornment position="start"><AttachMoneyIcon className="dark:text-white" /></InputAdornment>,
              },
            }} helperText={ <span className="dark:text-blue-300">Enter The Loan Amount</span> } className="w-full mb-2" label={ <span className="dark:text-blue-500">Amount</span> } />
          <div className="flex flex-row gap-4 mb-4">
            <TextField autoComplete="off" required onChange={(e) => setInterest(e.target.value)} sx={{ caretColor: 'gray' }} slotProps={{
              input: {
                startAdornment: <InputAdornment position="start"><PercentIcon className="dark:text-white" /></InputAdornment>,
              },
            }} helperText={ <span className="dark:text-blue-300">Enter Annual Interest Rate</span> } className=" w-1/2"  label={ <span className="dark:text-blue-500">Interest</span> }/>
  
            <TextField autoComplete="off" required onChange={handleChange} sx={{ caretColor: 'gray' }} slotProps={{
              input: {
                startAdornment: <InputAdornment position="start"><CalendarMonthIcon className="dark:text-white" /></InputAdornment>,
              },
            }} helperText={ <span className="dark:text-blue-300">Enter Term in Year Under 30</span> } className=" w-1/2" label={ <span className="dark:text-blue-500">Term</span> }/>
          </div>
          <div className="flex flex-row gap-4 mb-4">
            <TextField autoComplete="off" onChange={(e) => setDown((e.target.value / 100) * amount)} sx={{ caretColor: 'gray' }} slotProps={{
              input: {
                startAdornment: <InputAdornment position="start"><PercentIcon className="dark:text-white" /></InputAdornment>,
              },
            }} helperText={ <span className="dark:text-blue-300">Enter Down Payment in Percent</span> } className=" w-1/2"  label={ <span className="dark:text-blue-500">Down Payment</span> }/>
            <TextField autoComplete="off" onChange={(e) => setExtra(e.target.value)} sx={{ caretColor: 'gray' }} slotProps={{
              input: {
                startAdornment: <InputAdornment position="start"><AddIcon className="dark:text-white" /></InputAdornment>,
              },
            }} helperText={ <span className="dark:text-blue-300">Enter Extra Payment For Each Month</span> } className=" w-1/2" label={ <span className="dark:text-blue-500">Extra</span> }/>
          </div>
  
          <Button variant="contained" endIcon={<ShowChartIcon/>} className="mb-4" onClick={handleAnalyze}>
             Analyze
          </Button>
          
          <div className=" w-full h-full border min-h-28 flex p-2 flex-col bg-[#ffe675] dark:bg-slate-500 border-black rounded-lg dark:text-white/70">
            <div className="border-b border-slate-700 w-full h-1/3 flex items-center">
                <pre>   Monthly Payment</pre>
              <div className=" w-full h-full flex justify-end pr-3 pt-1">
                <pre>&#36;{ eachMonthData.monthlyPayment > 0 ? eachMonthData.monthlyPayment : 0 }</pre>
              </div>
            </div>
  
            <div className="border-b border-slate-700 w-full h-1/3 flex items-center">
              <pre>   Avg. Monthly Interest</pre>
              <div className=" w-full h-full flex justify-end pr-3 pt-1">
                <pre>&#36;{ InterestAvg() }</pre>
              </div>
            </div>
      
            <div className="w-full h-1/3 flex items-center">
              <pre>   Avg. Monthly Principle</pre>
              <div className=" w-full h-full flex justify-end pr-3 pt-1">
                <pre>&#36;{ PrincipalAvg() }</pre>
              </div>
            </div>
  
          </div>
        </div>
  
        <div className="flex flex-row 2xl:flex-col">
          <div className="chart 2xl:max-w-full ml-8 hidden" ref={pie}>
            <BasicPie />
          </div>
  
          <div className=" 2xl:max-w-full mx-8 hidden 2xl:mt-16" ref={alert}>
            <Alert variant="outlined" severity="info" className="dark:text-white">
              With { extra } extra payment each month, it takes { eachMonthData.amortizationSchedule.length > 0 ? Number(Math.round((eachMonthData.amortizationSchedule[eachMonthData.amortizationSchedule.length - 1].month) / 12)) : 0 } year to complete.
            </Alert>
          </div>
        </div>
  
      </div>
  
      <div className='chart w-full h-2/3 hidden' ref={bar}>
        <BasicBars />  
      </div>
    </div>
  )
}

export default page