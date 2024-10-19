
import Link from 'next/link';



export const metadata = {
  title: "Loan Tracker",
  description: "Calculate Loan and More",
};

export default function Home() {
  return (
    <main className={`w-full overflow-visible ml-24`}>
      <div className="bg-[#007CFF] dark:bg-black/70 min-h-48 w-auto rounded-3xl m-8 flex flex-col p-6">
        <h1 className="md:text-4xl text-2xl text-white mb-2">Welcome to <span className='text-5xl bg-gradient-to-r from-red-600  to-yellow-500 bg-clip-text text-transparent'>Accoutify</span> – Your Financial Toolkit for <span className='text-green-500'>Success!</span></h1>
        <p className='text-2xl text-slate-200'>Take control of your finances with our comprehensive suite of calculators. Whether you’re planning to take out a loan, make a trade, or invest for the future, Accountify has the tools you need to make informed decisions with confidence.</p>
      </div>

      <Link href='/Loan' className='flex dark:text-white/80 '>
        <div className='max-w-full border w-full shadow-xl rounded-3xl mx-8 p-6 font-sans  min-h-64 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-slate-900 dark:border-black'>
          <h1 className='text-4xl mb-2'>Loan Planner</h1>
          <br />
          <p className='text-2xl'>Navigate the trading world with precision. Our Trade Analyzer provides the insights you need to make profitable trades.</p>
        </div>
      </Link>

      <div className='md:flex md:flex-row flex flex-col justify-center items-center m-8 gap-8 dark:text-white/80'>

        <Link href='/Trade' className='md:w-1/2 w-full border shadow-xl min-h-80 rounded-3xl p-6 font-sans bg-gradient-to-br from-pink-100 to-purple-100 dark:from-slate-900 dark:border-black'>
          <h1 className='text-4xl mb-2'>Trade Analyzer</h1>
          <br />
          <p className='text-xl'>Navigate the trading world with precision. Our Trade Analyzer provides the insights you need to make profitable trades.</p>
        </Link>
        
        <Link href='/Trade' className='md:w-1/2 w-full border shadow-xl min-h-80 rounded-3xl p-6 font-sans bg-gradient-to-br from-pink-100 to-purple-100 dark:from-slate-900 dark:border-black'>
          <h1 className='text-4xl mb-2'>Investment Forecaster</h1>
          <br />
          <p className='text-xl'>Plan for the future with confidence. Our Investment Forecaster helps you map out your financial goals.</p>
        </Link>

      </div>
    </main>
  );
}
