import React from 'react';

function Banner() {
    return (
        <div className='bg-white h-auto'>
            <div className='h-[600px] my-36 relative overflow-hidden md:min-w-fit md:me-10'>

                <img
                    src="banner.png"
                    alt=""
                    className="object-cover w-full h-full max-h-[900px] absolute top-0 left-0  "
                />

            </div>
        </div>
    );
}

export default Banner;