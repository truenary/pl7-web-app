



import Button from "../components/shared/Button";

import { useForm } from 'react-hook-form'



type InitialFormData = {
    phone: string;
}
type FinalFormData = InitialFormData & {
    first_name: string;
    last_name: string;
    liscence_number: number;
    vehicle_number: number;
    vehicle_type: string;
    vechicle_model: string;
}




function Reg() {



    const inputClassName = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    const lable = "block mb-2 text-sm font-medium text-gray-900 dark:text-white"


    const { register, handleSubmit, reset } = useForm<FinalFormData>(

        {
            defaultValues: {
                "vechicle_model": "Auto"
            }
        });

    const handlesub = (data: FinalFormData) => {

        console.log(data);
        reset();

    }

    return (

        <section className="">
            <div className="md:my-10 bg-white md:flex  flex-col space-y-5 md:flex-row px-5 h-full">
                {/* image part */}
                <div className="md:w-1/3 md:me-10 md:items-center md:block hidden h-[700px] overflow-y-hidden ">
                    <img
                        src="kals.JPG"
                        alt="Rickshaw"
                        className="rounded-lg "
                    />
                </div>
                <div className="flex flex-col  md:w-1/2 lg:mx-20 md:mx-10">

                    <form onSubmit={handleSubmit(handlesub)}>
                        <div className="grid gap-9 mb-6 md:grid-cols-2 mt-24 ">

                            {/* TODO: Optimize code by creating generic component for label and input components */}

                            <div>
                                <label htmlFor="first_name" className={lable}>First name</label>
                                <input type="text" id="first_name" className={inputClassName} placeholder=""    {...register("first_name", { required: true })} />
                            </div>
                            <div>
                                <label htmlFor="last_name" className={lable} >Last name</label>
                                <input type="text" id="last_name" className={inputClassName}  {...register("last_name", { required: true })} />
                            </div>
                            <div>
                                <label htmlFor="liscence_number" className={lable}>liscence number</label>
                                <input type="string" id="liscence_number" className={inputClassName} {...register("liscence_number", { required: true })} />
                            </div>
                            <div>
                                <label htmlFor="phone" className={lable}>Phone number</label>
                                <input type="string" id="phone" className={inputClassName}  {...register("phone", { required: true })} />
                            </div>
                            <div>
                                <label htmlFor="vehicle_number" className={lable}>vehicle number</label>
                                <input type="string" id="vehicle_number" className={inputClassName}  {...register("vehicle_number", { required: true })} />
                            </div>
                            <div>
                                <label htmlFor="vehicle_type" className={lable}>vehicle type</label>
                                <input type="string" id="vehicle_type" className={inputClassName} {...register("vehicle_type", { required: true })} />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="vehicle_model" className={lable}>vehicle model</label>
                            <select id="vehicle_model" className={inputClassName} {...register("vechicle_model", { required: true })}>
                                <option value="Auto">Auto</option>
                                <option value="Mayuri">Mayuri</option>
                            </select> </div>



                        <Button label="Register" style="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 p" />
                    </form>


                </div>

            </div >
        </section >);
}

export default Reg;

