'use client'
import MaterialUISwitch from "./MUI/Switch"
import { useEffect, useState } from "react"

function Header({ title }) {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if(isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
  }, [isDark])
  return (
    <div className="bg-[#007CFF] dark:bg-black/70 h-24 w-auto rounded-3xl m-8 flex justify-center items-center relative">
      <h1 className="text-6xl text-white">{title}</h1>
      <div className="absolute right-5">
        <MaterialUISwitch onClick={() => {setIsDark(!isDark)}} />
      </div>
    </div>
  )
}

export default Header