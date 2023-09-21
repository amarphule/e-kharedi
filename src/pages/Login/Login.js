import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to your account 🔐
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              id="password"
              placeholder="Your Password"
            />
          </div>

          <div className="flex flex-col justify-center items-center mt-6">
            <button className="bg-indigo-600 py-2 px-4 my-1 text-sm text-white rounded hover:bg-indigo-950">
              Login
            </button>
            <button className="border-indigo-600 py-2 px-4 my-1 text-sm text-slate-600 rounded hover:bg-indigo-950 hover:text-slate-300">
              Login as guest
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
