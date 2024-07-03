import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext';

const Header = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className='p-5 flex justify-end'>
    <a href="#"  onClick={() => setDarkMode((darkMode) => !darkMode)} className={` ${darkMode ? "bg-black" : "bg-blue-500"} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full `}>
    {darkMode ? <span>Dark</span> : <span>Light</span>}

    </a>
       
    </div>
  )
}

export default Header