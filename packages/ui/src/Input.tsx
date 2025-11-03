"use client"

import { InputTitle } from "./InputTitle";

interface InputProp {
    name: string;
    onChange: ( x: string) => void
}

export const Input = ( { name, onChange } : InputProp) => {

    return <div className="pt-2 mb-4 w-full">
        <InputTitle name={name} />
        <input className="m-0 w-full p-2 border border-slate-300 rounded-md " 
            type="number" placeholder={name} onChange={(e) => {onChange(e.target.value)}} />
    </div>
}