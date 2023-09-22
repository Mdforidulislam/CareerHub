import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { saveApplicationFLS } from "../../utility/localStore";



const JobDetails = () => {
    const jobData = useLoaderData()
    const id = useParams();
    const parId = parseInt(id.jobId);
    const jobDetails = jobData.find(job => job.id === parId)
    const goHome = useNavigate();
    const handleGohome = () =>{
        goHome(-1)
    }
const handleSaveLocal = (jobId) =>{
    saveApplicationFLS(jobId)
    
}
    return (
        <div>
                <button onClick={handleGohome} className="btn">
                    Go Home
                </button>
                
                <div className="text-center text-3xl font-semibold capitalize"> <h1>Job Details</h1></div>
                <div className="block md:flex gap-7 mt-5 space-y-7">
                    <div>
                        <h1>{jobDetails.job_description}</h1><br></br>
                        <h1>{jobDetails.job_responsibility}</h1><br></br>
                        <h1>Educational Requirements:</h1>
                        <p>{jobDetails.educational_requirements}</p><br></br>
                        <h1>Experiences:</h1><br></br>
                        <p>{jobDetails.experiences}</p>
                    </div>
                    <div className=" space-y-6">
                        <div className="w-[425px] bg-slate-600 rounded-lg shadow-lg p-8 space-y-6">
                            <h1>Job Details</h1>
                            <hr></hr>
                            <p><span></span>Salary: {jobDetails.salary}</p>
                            <p><span></span>Job Title: {jobDetails.job_title}</p>
                            <h1>Contact Information</h1>
                            <hr></hr>
                            <p><span></span>Phone: {jobDetails?.contact_information.phone}</p>
                            <p><span></span>Email: {jobDetails?.contact_information.email}</p>
                            <p><span></span>Address: {jobDetails?.contact_information.address}</p>
                        </div>
                        <button onClick={()=>handleSaveLocal(jobDetails.id)} className=" w-full btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Apply Now</button>
                    </div>
                </div>
        </div>
      );
};

export default JobDetails;