const Statistics = () => {
    return (
        <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="mt-4">
          Have questions or need assistance? Feel free to contact us using the
          information below.
        </p>
  
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <ul className="mt-2">
            <li>
              <strong>Email:</strong> contact@yourwebsite.com
            </li>
            <li>
              <strong>Phone:</strong> +1 (123) 456-7890
            </li>
            <li>
              <strong>Address:</strong> 123 Main Street, City, Country
            </li>
          </ul>
        </div>
  
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Contact Form</h2>
          <form>
            <div className="mt-4">
              <label htmlFor="name" className="block text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Your Name"
              />
            </div>
  
            <div className="mt-4">
              <label htmlFor="email" className="block text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Email Address"
              />
            </div>
  
            <div className="mt-4">
              <label htmlFor="message" className="block text-gray-600">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Your Message"
              ></textarea>
            </div>
  
            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Statistics;