import { NavLink, useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const jobLoaderData = useLoaderData();
    return (
        <div>
            <div><h1>Applied Jobs</h1></div>
            <dir>
                <div> </div>
               {
                jobLoaderData.map((job)=>(
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