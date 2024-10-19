'use client'
import MenuIcon from '@mui/icons-material/Menu';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import MaterialUISwitch from "./MUI/Switch"

function SideBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if(isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <motion.div className={`bg-[#5aabf3] border-r-2 border-blue-600 dark:bg-slate-800 h-screen ${isSideBarOpen ? 'w-64' : 'w-24'} border-r border-slate-300 dark:border-black fixed z-10`} animate={{ width: isSideBarOpen ? 256 : 96 }}>
      <div className='flex p-4'>
        <MaterialUISwitch onClick={() => {setIsDark(!isDark)}} />
      </div>
      <div className='flex gap-y-4 flex-col'>

        <motion.button onClick={() => {setIsSideBarOpen(!isSideBarOpen)}} className='flex w-fit rounded-2xl dark:text-white/70 hover:bg-blue-500 p-4' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <MenuIcon  sx={{ fontSize: '58px' }} className='hover:cursor-pointer'/>
        </motion.button>

        <div className='flex flex-row items-center cursor-pointer rounded-2xl hover:bg-blue-300 p-4 hover:text-red-500 dark:text-white/70'>
          <Link href='/Loan' className='flex items-center'>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <CreditScoreIcon sx={{ fontSize: '58px' }} className='hover:cursor-pointer'/>
          </motion.button>  
          { isSideBarOpen && <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 'auto' }} exit={{ opacity: 0, width: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className='font-serif text-black text-4xl pl-2 dark:text-white/70'>Loan</motion.span> }
          </Link>
        </div> 
        
        <div className='flex flex-row items-center cursor-pointer rounded-2xl hover:bg-blue-300 p-4 hover:text-yellow-300 dark:text-white/70'>
          <Link href='/Trade' className='flex items-center'>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <CurrencyExchangeIcon sx={{ fontSize: '58px' }} className='hover:cursor-pointer'/>
          </motion.button>  
          { isSideBarOpen && <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 'auto' }} exit={{ opacity: 0, width: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className='font-serif text-black text-4xl pl-2 dark:text-white/70'>Trade</motion.span> }
          </Link>
        </div> 

        <div className='flex flex-row items-center cursor-pointer rounded-2xl hover:bg-blue-300 p-4 hover:text-green-300 dark:text-white/70'>
          <Link href='/Invest' className='flex items-center'>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <AddBusinessIcon sx={{ fontSize: '58px' }} className='hover:cursor-pointer'/>
          </motion.button>  
          { isSideBarOpen && <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 'auto' }} exit={{ opacity: 0, width: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className='font-serif text-black text-4xl pl-2 dark:text-white/70'>Invest</motion.span> }
          </Link>
        </div> 

        <div className='flex flex-row items-center cursor-pointer rounded-2xl hover:bg-blue-300 p-4 hover:text-slate-300 dark:text-white/70'>
          <Link href='/Settings' className='flex items-center'>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SettingsIcon sx={{ fontSize: '58px' }} className='hover:cursor-pointer '/>
          </motion.button>  
          { isSideBarOpen && <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 'auto' }} exit={{ opacity: 0, width: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className='font-serif text-black text-4xl pl-2 dark:text-white/70'>Settings</motion.span> }
          </Link>
        </div> 

      </div>
    </motion.div>
  )
}

export default SideBar