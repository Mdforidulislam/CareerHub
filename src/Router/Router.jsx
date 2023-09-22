import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Statistics from "../Components/Statistics/Statistics";
import AppliedJobs from "../Components/AppliedJobs/AppliedJobs";
import Blogs from "../Components/Blogs/Blogs";
import JobDetails from "../Components/JobDetails/JobDetails";
const Router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                loader: ()=> fetch('categories.json'),
                element: <Home></Home>,
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            },
            {
                path:'/appliedJobs',
                loader: ()=>fetch('jobs.json'),
                element:<AppliedJobs></AppliedJobs>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/jobdetails/:jobId',
                loader: () => fetch('jobs.json'),
                element: <JobDetails></JobDetails>
            }
        ]
    }
]);

export default Router;