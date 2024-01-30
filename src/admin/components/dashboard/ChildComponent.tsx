


type inputProps = {
    children: string;
    value: string;
    backgroundColor: string;
};

function ChildComponent({ backgroundColor, children, value }: inputProps) {
    return (
        <div className="rounded-lg overflow-hidden w-48 border-2 border-cyan-500 text-center h-auto">
            <div className={`${backgroundColor}  text-white p-4 h-auto`}>
                <div className="flex items-center justify-center mb-2">


                    <h3 className="text-lg font-semibold">{children}</h3>
                </div>
                <p className="text-xl">{value}</p>
            </div>
        </div >

    )
}

export default ChildComponent
