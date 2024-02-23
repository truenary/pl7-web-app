

function Banner() {
  return (
    <div className="bg-white my-9">
      <div className="relative overflow-hidden">
       
        <img
          src="banner.png"
          alt="Welcome to Dhoka - Your Platform for Auto Services"
          className="object-cover w-full max-h-[600px] md:max-h-[900px]"
          width="1920"
          height="600"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Banner;
