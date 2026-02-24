import { useState } from "react";
function ThemeToggle(){
    const[isDark,setIsDark]=useState(false);
    const themeClass=isDark 
    ? "bg-gray-900 text-white"
    : "bg-gray-100 text-gray-900";
    return(
        <div className={`${themeClass} min-h-screen flex items-center justify-center`}>
            <div className="text-center bg-white/10 p-10 rounded-2xl shadow-xl">
            { }
            <h1 className="text-3xl font-bold mb-4">
                {isDark ? "Dark Mode":"Light Mode"}
                </h1>
                <p className="mb-6 text-lg">
                    Click the Button to switch theme</p>
                    { }
                    <button
                    onClick={()=>setIsDark(!isDark)}
                    className="px-6 py-2 rounded-lg font-semibold bg-blue-500 text-white hover:bg-blue-600">
                        Switch Theme
                    </button>
            
                    </div>

        </div>
    );
}
export default ThemeToggle;