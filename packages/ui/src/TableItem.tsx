
interface TableItemProp {
    name: string,
    value: string
}

export const TableItem = ({name, value} : TableItemProp ) => {
    return <div className="flex justify-between w-full border-b border-slate-300 py-2">
        <div className="">
            {name}
        </div>
        <div className="">
            {value}
        </div>
    </div>
}