const Blogs = () => {
    return (
            <div className="bg-gray-100 min-h-screen px-8">
              <header className="bg-blue-600 text-white py-4 ">
                <div className="container mx-auto">
                  <h1 className="text-4xl font-semibold text-center">My Blog</h1>
                </div>
              </header>
        
              <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Blog Post 1 */}
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="https://i.ibb.co/PzrbTxh/google-1-1-1.png" alt="Blog Post 1" className="w-full h-40 object-cover" />
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-2">Blog Post 1</h2>
                      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <a href="#" className="text-blue-600 hover:underline block mt-4">Read More</a>
                    </div>
                  </div>
        
                  {/* Blog Post 2 */}
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="https://i.ibb.co/JRXgX92/tesla-9-1.png" alt="Blog Post 2" className="w-full h-40 object-cover" />
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-2">Blog Post 2</h2>
                      <p className="text-gray-600">Nullam at efficitur augue, eget malesuada sapien.</p>
                      <a href="#" className="text-blue-600 hover:underline block mt-4">Read More</a>
                    </div>
                  </div>
        
                  {/* Blog Post 3 */}
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="https://i.ibb.co/H4wJGhb/netflix-4-1.png" alt="Blog Post 3" className="w-full h-40 object-cover" />
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-2">Blog Post 3</h2>
                      <p className="text-gray-600">Sed eu lacus ullamcorper, fermentum lectus quis.</p>
                      <a href="#" className="text-blue-600 hover:underline block mt-4">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
};

export default Blogs;