import React, { useEffect, useState } from "react";
import { signupUserInfo } from "../Components/Api/UsersInfo";

export const SignUp = () => {
  const [signupInput, setSignupInput] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    terms: "",
  });

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    const response = await signupUserInfo(signupInput);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-600 mt-2">Join us today!</p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-user text-gray-400"></i>
                </div>
                <input
                  onChange={(e) =>
                    setSignupInput((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-user text-gray-400"></i>
                </div>
                <input
                  onChange={(e) =>
                    setSignupInput((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Gender
            </label>
            <select
              onChange={(e) =>
                setSignupInput((prev) => ({ ...prev, gender: e.target.value }))
              }
              id="gender"
              name="gender"
              className="w-full pl-3 pr-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>

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
                  setSignupInput((prev) => ({ ...prev, email: e.target.value }))
                }
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* <i className="fas fa-at text-gray-400"></i> */}
              </div>
              <input
                onChange={(e) =>
                  setSignupInput((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }
                type="text"
                id="username"
                name="username"
                placeholder="johndoe"
                className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
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
                  setSignupInput((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                required
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                {/* <i
                  className="fas fa-eye-slash text-gray-400 hover:text-gray-600"
                  id="togglePassword"
                ></i> */}
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* <i className="fas fa-lock text-gray-400"></i> */}
              </div>
              <input
                onChange={(e) =>
                  setSignupInput((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value,
                  }))
                }
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="••••••••"
                className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                required
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                {/* <i
                  className="fas fa-eye-slash text-gray-400 hover:text-gray-600"
                  id="toggleConfirmPassword"
                ></i> */}
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <input
              onChange={(e) =>
                setSignupInput((prev) => ({ ...prev, terms: e.target.value }))
              }
              type="checkbox"
              id="terms"
              name="terms"
              className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I agree to the
              <a href="#" className="text-orange-500 hover:text-orange-600">
                Terms and Conditions
              </a>
            </label>
          </div>

          <div>
            <button
              onClick={(e) => handleCreateAccount(e)}
              type="submit"
              className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
            >
              Create Account
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?
            <a
              href="#"
              className="font-medium text-orange-500 hover:text-orange-600"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
