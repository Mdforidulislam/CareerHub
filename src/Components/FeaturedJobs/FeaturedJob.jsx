import { useEffect, useState } from "react";
import { IoLocation } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const FeaturedJob = () => {
    const [jobs,setJobs] = useState([]);
    const [ hidden,setHidden] = useState(false)
  
    useEffect(()=>{
        fetch('jobs.json').then(res => res.json()).then(data => setJobs(data) )
    },[]);
   const handleClick =()=>{
    setHidden(true)
   }
   let trueJob;
   if (hidden) {
       trueJob = jobs.slice(0,6);
   }else{
      trueJob = jobs.slice(0,4);
   }

    return (

        <div>
            <div className="text-center">
                <h1 className=" text-4xl font-bold">Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pt-7">
                {  
                    trueJob.map((job) =>(
                        <div key={job.id} className=" bg-slate-500 p-6 rounded-lg text-white space-y-5">
                                <img className="w-[100px]" src={job.logo} alt="" />
                                <h2 className=" text-3xl font-semibold">{job.job_title}</h2>
                                <div className="flex gap-4">
                                    <button className="px-8 py-3 border rounded-xl">{job.remote_or_onsite}</button>
                                    <button className="px-8 py-3 border rounded-xl font-semibold">{job.job_type}</button>
                                </div>
                                <div className="flex gap-4">
                                    <h1 className="flex items-center"><span><IoLocation></IoLocation></span>{job.location}</h1>
                                    <h1 className="flex items-center"><span><FiDollarSign></FiDollarSign></span>{job.salary}</h1>
                                </div>
                            <NavLink to={`/jobdetails/${job.id}`}><button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 border-none text-white">View Details</button></NavLink>
                        </div>
                    ))
                }
            </div>
            <div onClick={handleClick} className={`flex justify-center p-10 ${hidden? 'hidden':''}`}>
                <button className="btn  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJob;