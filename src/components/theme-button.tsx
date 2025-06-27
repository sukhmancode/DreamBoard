"use client";
import { Switch } from './ui/switch';
import { Sun,Moon } from 'lucide-react';
import {useTheme} from 'next-themes'
import {useState,useEffect} from 'react'
export function ToggleThemeSwitch() {
    const {theme,setTheme} = useTheme();
    const [mounted,setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        console.log(theme);
        
    },[])

if(!mounted) return null;

const isDarkMode =
theme === "dark" ||
(theme === "system" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches);


  const handleThemeChange = (checked:boolean) => {
    setTheme(checked ? "dark" : "light")
  }


  return (
    <div className='flex items-center gap-2'>
        <Sun className={`h-5 w-5 ${isDarkMode ? "text-primary/50" : "text-primary"}`}></Sun>
        <Switch checked={isDarkMode}
        onCheckedChange={handleThemeChange}/>
        <Moon
        className={`h-5 w-5 ${isDarkMode ? "text-primary" : "text-primary/50"}`}
      /> 
    </div>
  )
}
