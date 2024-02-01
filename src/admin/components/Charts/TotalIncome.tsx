

type inputProps = {
    children: number;
    labelText: string;
};

function TotalIncome({ children, labelText }: inputProps) {
    return (
        <div className='h-12 w-auto bg-slate-300 mx-10 flex flex-col  text-center text-xl'>
            {children}
            <label className=' font-light text-sm'> {labelText}</label>


        </div>
    )
}

export default TotalIncome
