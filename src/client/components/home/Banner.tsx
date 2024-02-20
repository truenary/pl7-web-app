function Banner() {
    return (
        <div className='bg-white'>
            <div className='relative overflow-hidden'>
                <img
                    src="banner.png"
                    alt=""
                    className="object-cover w-full max-h-[600px] md:max-h-[900px]"
                />
            </div>
        </div>
    );
}

export default Banner;
