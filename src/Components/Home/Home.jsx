import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import FeaturedJob from "../FeaturedJobs/FeaturedJob";
import JobCatagory from "../JobCatagory/JobCatagory";

const Home = () => {
    const categorisList = useLoaderData();
    return (
        <div className=" space-y-6"> 
                    <Banner></Banner>
                    <JobCatagory categorisList={categorisList}></JobCatagory>
                    <FeaturedJob></FeaturedJob>
            
        </div>
    );
};

export default Home;