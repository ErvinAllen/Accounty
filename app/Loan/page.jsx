'use client'
import Header from "@/components/Header"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PercentIcon from '@mui/icons-material/Percent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useState , useEffect } from "react";
import CustomizedTables from "./table";
import BasicBars from "./LineChart";
import BasicPie from "./PieChart";


function page() {
  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [term, setTerm] = useState(0);
  
  
  
  return (
    <div className="w-full ml-24 ">

      <Header title='Loan' />

    <div className="flex 2xl:flex-row flex-col">
      <div className="flex flex-col 2xl:w-1/2 max-w-full mx-8 mb-4">

        <TextField onChange={(e) => setAmount(e.target.value)} sx={{ caretColor: 'gray' }} slotProps={{
            input: {
              startAdornment: <InputAdornment position="start"><AttachMoneyIcon className="dark:text-white" /></InputAdornment>,
            },
          }} helperText={ <span className="dark:text-blue-300">Enter The Loan Amount</span> } className="w-full mb-2" label={ <span className="dark:text-blue-500">Amount</span> } />

        <div className="flex flex-row gap-4 mb-4">
          <TextField onChange={(e) => setInterest(e.target.value)} sx={{ caretColor: 'gray' }} slotProps={{
            input: {
              startAdornment: <InputAdornment position="start"><PercentIcon className="dark:text-white" /></InputAdornment>,
            },
          }} helperText={ <span className="dark:text-blue-300">Enter Interest Rate</span> } className=" w-1/2"  label={ <span className="dark:text-blue-500">Interest</span> }/>
          <TextField onChange={(e) => setTerm(e.target.value)} sx={{ caretColor: 'gray' }} slotProps={{
            input: {
              startAdornment: <InputAdornment position="start"><CalendarMonthIcon className="dark:text-white" /></InputAdornment>,
            },
          }} helperText={ <span className="dark:text-blue-300">Enter Term in Year</span> } className=" w-1/2" label={ <span className="dark:text-blue-500">Term</span> }/>
        </div>

        <CustomizedTables />
      </div>

      <div className="flex max-w-full mx-8 justify-center items-center">
        <BasicPie />
      </div>

    </div>

    <BasicBars />  
    </div>
  )
}

export default page