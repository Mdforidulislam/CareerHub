import { NavLink, useLoaderData } from 'react-router-dom';
import { getJobApplicationFLS } from '../../utility/localStore';
import { useEffect, useState } from 'react';

const AppliedJobs = () => {
    const jobLoaderData = useLoaderData();
    const [ displayJob,setDisplayJob] = useState([])
    const [ jobSortView,setJobSortView] = useState([])
const handleSortAllView = (fillterAply) =>{
     if (fillterAply === 'all') {
        setJobSortView(displayJob);
     } else if(fillterAply === 'Onsite'){
            const onsiteJobs = displayJob.filter((job) => job.remote_or_onsite === 'Onsite')
            setJobSortView(onsiteJobs);
     }else if(fillterAply === 'Remote'){
        const remoteJob = displayJob.filter((job) => job.remote_or_onsite === 'Remote')
        setJobSortView(remoteJob);      
    }
    else{
    setJobSortView(displayJob)
    }

}
    useEffect(()=>{
        const getDataFormLostore = getJobApplicationFLS()
        const getValueDisplay = jobLoaderData.filter(jobs =>  getDataFormLostore.includes(jobs.id))
        setDisplayJob(getValueDisplay);
    },[jobLoaderData])

    return (
        <div>
            <div><h1>Applied Jobs</h1></div>
            <dir>
                <div>  <div className="form-control w-full max-w-xs">
                                   <div>
                                    <details className="dropdown mb-32">
                                            <summary className="m-1 btn">open or close</summary>
                                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                                <li onClick={()=>handleSortAllView('all')}><a>All</a></li>
                                                <li onClick={()=>handleSortAllView('Onsite')}><a>OnSite</a></li>
                                                <li onClick={()=>handleSortAllView('Remote')}><a>Remote</a></li>
                                            </ul>
                                            </details>
                                    </div>
                       </div>

 </div>
               {
                jobSortView.map((job)=>(
                <div key={job.id}>
                    <div className='block md:flex gap-6 justify-between p-7 rounded-xl bg-slate-500 m-5 items-center'>
                        <div className='block md:flex gap-5 items-center'>
                            <div className=' bg-slate-100 p-11 rounded-lg'>
                                <img className='w-[150px]' src={job.logo} alt="" />
                            </div>
                            <div className=' space-y-4'>
                                <h1 className=' text-xl md:text-3xl font-semi text-white'>{job.job_title}</h1>
                                <div className='flex gap-8'>
                                    <button className=' border px-4 py-1 md:px-8 md:py-2 rounded-lg text-blue-50 font-semibold'>{job.remote_or_onsite}</button>
                                    <button className=' border px-4 py-1 md:px-8 md:py-2 rounded-lg text-blue-50 font-semibold'>{job.job_type}</button>
                                </div>
                                <div className='flex gap-7'>
                                    <p className=' flex items-center md:text-xl font-thin text-white'><span></span>{job.location}</p>
                                    <p className=' flex items-center md:text-xl font-thin text-white'><span></span>{job.salary}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <NavLink><button className='btn w-full mt-4 md:mt-0 md:btn '>View Details</button></NavLink>
                        </div>
                    </div>
                </div>
                ))
               }
            </dir>
        </div>
    );
};

export default AppliedJobs;