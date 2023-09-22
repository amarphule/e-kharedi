import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../slices/UserSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState(null);
  const [asGuest, setAsGuest] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, userInfo, success, userToken } = useSelector(
    (store) => store.user
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setAsGuest(false);
    setUser(null);
    if (asGuest) {
      dispatch(userLogin(user));
    }
  };
  useEffect(() => {
    if (!!userToken) {
      navigate("/");
    }
  });
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className="h-screen flex bg-gray-50">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-slate-300 shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to your account 🔐
        </h1>
        {success && (
          <p className="text-center text-green-600">
            {`${success} Welcome`}
            <span className="font-bold uppercase ml-1">
              {userInfo?.username}
            </span>
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={user?.username}
              onChange={handleChange}
              className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              id="username"
              placeholder="Your username"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={handleChange}
              value={user?.password}
              className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              id="password"
              placeholder="Your Password"
              required
            />
          </div>
          <div>
            <input
              type="checkbox"
              checked={asGuest}
              onChange={(e) => setAsGuest(e.target.checked)}
            />
            <label className="ml-2">Login as Guest</label>
            {asGuest && (
              <p className="text-sm text-slate-500">
                "Username:<span className=" text-green-600"> "mor_2314"</span>,
                Password: <span className="text-green-600">"83r5^_"</span>
              </p>
            )}
            {error && <p className="text-center text-red-500">{error}</p>}
          </div>
          <div className="flex flex-col justify-center items-center mt-6">
            <button className="bg-indigo-600 py-2 px-4 my-1 text-sm text-white rounded hover:bg-indigo-950">
              {asGuest
                ? isLoading
                  ? "Loading..."
                  : "Login as guest"
                : "Login"}
            </button>
            <small className="text-xs text-slate-400">
              Please check Login as Guest
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
