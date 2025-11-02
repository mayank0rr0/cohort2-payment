"use client"

interface InputProp {
    name: string;
    onChange: ( x: string) => void
}

export const Input = ( { name, onChange } : InputProp) => {

    return <div className="my-4 w-full">
        <div className="pb-1 text font-bold pl-1">
            {name}
        </div>
        <input className="m-0 w-full p-2 border border-slate-300 rounded-md " 
            type="number" placeholder={name} onChange={(e) => {onChange(e.target.value)}} />
    </div>
}