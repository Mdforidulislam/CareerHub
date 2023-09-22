const getJobApplicationFLS = () =>{
    const getJobApplication = localStorage.getItem('job-application');
    if (getJobApplication) {
        return JSON.parse(getJobApplication)
    }else{
        return[]
    }
}

const saveApplicationFLS = (jobId) => {
    const saveDataApplicaiotnLs = getJobApplicationFLS();
    const exiteApplication = saveDataApplicaiotnLs.find(Application => Application === jobId)
    if (!exiteApplication) {
        saveDataApplicaiotnLs.push(jobId)
        localStorage.setItem('job-application',JSON.stringify(saveDataApplicaiotnLs))
    }
}

export {getJobApplicationFLS , saveApplicationFLS}