"use client"

import { InputTitle } from "./InputTitle";


interface SelectProp {
    title : string;
    options : {
        name: string
        url: string,
    }[];
    onChange: (x: string) => void
}

export const Select = ( {options, title, onChange} : SelectProp) => {
    return <div>
        <InputTitle name={title} />
        <select className="border border-slate-300 rounded-md p-2 w-full" 
            onChange={(e) => {onChange(e.target.value)}}>
            {options.map( (x, i) => <option key={i} value={x.url}>{x.name}</option>)}
        </select>
    </div>
}