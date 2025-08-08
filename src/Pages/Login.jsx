import React, { useState } from "react";

export const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  console.log("loginInfo", loginInfo);
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("first");
  };
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-600 mt-2">
            Please enter your credentials to login
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* <i className="fas fa-envelope text-gray-400"></i> */}
              </div>
              <input
                onChange={(e) =>
                  setLoginInfo((prev) => ({ ...prev, email: e.target.value }))
                }
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* <i className="fas fa-lock text-gray-400"></i> */}
              </div>
              <input
                onChange={(e) =>
                  setLoginInfo((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                required
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                {/* <i
                  className="fas fa-eye-slash text-gray-400 hover:text-gray-600"
                  id="togglePassword"
                ></i> */}
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <a
                href="#"
                className="text-sm text-orange-600 hover:text-orange-800"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              onClick={handleLogin}
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-orange-200 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              {/* <i className="fab fa-google text-red-500 mr-2"></i>  */}
              Google
            </button>

            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-orange-200 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              {/* <i className="fab fa-facebook-f text-blue-600 mr-2"></i>  */}
              Facebook
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?
            <a
              href="#"
              className="font-medium text-orange-500 hover:text-orange-600"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
