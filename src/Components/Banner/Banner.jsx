const Banner = () => {
    return (
        <div className="block md:flex items-center">
          <div className=" space-y-7">
              <h1 className=" text-3xl xl:text-6xl text-black font-bold">One Step <br></br> Closer To Your<br></br> <span className="text-[#808dfe]"> Dream Job</span></h1>
              <p className="">Explore thousands of job opportunities with all the<br></br> information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
              <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Get Started</button>
          </div>
          <div >
             <img  className="w-[100%] h-[auto]"src="https://i.ibb.co/zGgH3c0/user.png" alt="" />
          </div>
        </div>
    );
};

export default Banner;