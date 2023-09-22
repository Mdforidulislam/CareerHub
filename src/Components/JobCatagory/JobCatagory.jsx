

const JobCatagory = ({categorisList}) => {

    return (
        <div className=" space-y-6 mt-6">
            <div className="text-center">
                <h1 className="text-4xl font-semibold">Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="block md:flex gap-6 justify-between">
                {
                    categorisList.map(categoris => (
                        <div key={categoris.id} className=" bg-slate-500 rounded-lg text-white p-6 mt-6">
                            <img src={categoris.logo} alt="" />
                            <h1 className=" text-2xl font-semibold">{categoris.category_name}</h1>
                            <p>{categoris.availability}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default JobCatagory;