'use client'

import MenuIcon from '@mui/icons-material/Menu';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

function SideBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  
  return (
    <motion.div className={`bg-blue-200/70 dark:bg-black/5 h-screen ${isSideBarOpen ? 'w-64' : 'w-24'} border-r border-[#007CFF] dark:border-black`} animate={{ width: isSideBarOpen ? 256 : 96 }}>

      <div className='flex gap-y-20 flex-col'>

        <motion.button onClick={() => {setIsSideBarOpen(!isSideBarOpen)}} className='flex w-fit rounded-2xl dark:text-white/70 hover:bg-blue-400 p-3.5' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <MenuIcon  sx={{ fontSize: '58px' }} className='hover:cursor-pointer'/>
        </motion.button>

        <div className='flex flex-row items-center cursor-pointer rounded-2xl hover:bg-blue-300 p-4 hover:text-red-300 dark:text-white/70'>
          <Link href='/Loan' className='flex items-center'>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <CreditScoreIcon sx={{ fontSize: '58px' }} className='hover:cursor-pointer'/>
          </motion.button>  
          { isSideBarOpen && <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 'auto' }} exit={{ opacity: 0, width: 0 }} transition={{ duration: 0.1, delay: 0.1 }} className='font-serif text-black text-4xl pl-2 dark:text-white/70'>Loan</motion.span> }
          </Link>
        </div> 
        
        <div className='flex flex-row items-center cursor-pointer rounded-2xl hover:bg-blue-300 p-4 hover:text-yellow-300 dark:text-white/70'>
          <Link href='/Trade' className='flex items-center'>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <CurrencyExchangeIcon sx={{ fontSize: '58px' }} className='hover:cursor-pointer'/>
          </motion.button>  
          { isSideBarOpen && <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 'auto' }} exit={{ opacity: 0, width: 0 }} transition={{ duration: 0.1, delay: 0.1 }} className='font-serif text-black text-4xl pl-2 dark:text-white/70'>Trade</motion.span> }
          </Link>
        </div> 

        <div className='flex flex-row items-center cursor-pointer rounded-2xl hover:bg-blue-300 p-4 hover:text-green-300 dark:text-white/70'>
          <Link href='/Invest' className='flex items-center'>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <AddBusinessIcon sx={{ fontSize: '58px' }} className='hover:cursor-pointer'/>
          </motion.button>  
          { isSideBarOpen && <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 'auto' }} exit={{ opacity: 0, width: 0 }} transition={{ duration: 0.1, delay: 0.1 }} className='font-serif text-black text-4xl pl-2 dark:text-white/70'>Invest</motion.span> }
          </Link>
        </div> 

        <div className='flex flex-row items-center cursor-pointer rounded-2xl hover:bg-blue-300 p-4 hover:text-slate-300 dark:text-white/70'>
          <Link href='/Settings' className='flex items-center'>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SettingsIcon sx={{ fontSize: '58px' }} className='hover:cursor-pointer '/>
          </motion.button>  
          { isSideBarOpen && <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 'auto' }} exit={{ opacity: 0, width: 0 }} transition={{ duration: 0.1, delay: 0.1 }} className='font-serif text-black text-4xl pl-2 dark:text-white/70'>Settings</motion.span> }
          </Link>
        </div> 

      </div>
    </motion.div>
  )
}

export default SideBar