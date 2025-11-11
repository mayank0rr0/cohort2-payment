
export const Title = ({title} : {title : string} ) => {

    return <div className="text-2xl pb-2 mb-2 border-b font-semibold text-shadow-2xs dark:text-purple-300 dark:text-shadow text-pink-700 dark:border-zinc-400 border-slate-200">
        {title}
    </div>
}