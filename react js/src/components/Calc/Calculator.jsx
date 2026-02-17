import { useState } from "react";

export function Calculator(){
    const[num1,setNum1]=useState("");
    const[num2,setNum2]=useState("");

    const number1= parseFloat(num1) || 0;
    const number2= parseFloat(num2) || 0;

    const addition= number1 + number2;
    const subtraction= number1 - number2;
    const multiplication= number1 * number2;
    const division= number2 !== 0 ? (number1 / number2).toFixed(2) : " ∞ Cannot divide by zero";

    return(
            <div className="bg-white shadow-xl rounded-2xl p-8 w-96">
                <h1 className="text-2xl font-bold text-center mb-6">
                Real-Time Calculator
                </h1>
                {/*inputs */}
                <input 
                type="number"
                placeholder="enter first num"
                value={num1}
                onChange={(e)=>setNum1(e.target.value)}
                className="w-full p-2 mb-4 border rounded-lg"
                />
                <input
                type="number"
                placeholder="enter second num"
                value={num2}
                onChange={(e)=>setNum2(e.target.value)}
                className="w-full p-2 mb-4 border rounded-lg"
                />
                {/*results */}
                <div className="space-y-2">
                    <p className="text-lg">Addition: <span className="font-semibold">{addition}</span></p>
                    <p className="text-lg">Subtraction: <span className="font-semibold">{subtraction}</span></p>
                    <p className="text-lg">Multiplication: <span className="font-semibold">{multiplication}</span></p>
                    <p className="text-lg">Division: <span className="font-semibold">{division}</span></p>

                    </div>
                </div>
        )  
}