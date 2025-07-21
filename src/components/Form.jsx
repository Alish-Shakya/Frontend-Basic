import React from "react";
import LocalStorage from "./localStorage";
import SessionStorage from "./SessionStorage";
import { useNavigate } from "react-router";

const Form = () => {
  let nagigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("button clicked");

    let a = 10;
    let b = 20;
    let finalOutput = `the sum of ${a} and ${b} is ${a + b}`;
    console.log(finalOutput);

    let first = "Alish";
    let last = "Shakya";
    let fullName = `${first} ${last}`;
    console.log(fullName);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-md"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          User Form
        </h2>

        {/* <LocalStorage /> */}
        <SessionStorage />

        {/* All form fields inside one parent div */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className="mb-1 font-medium text-gray-700"
            >
              Full Name:
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mb-1 font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="age" className="mb-1 font-medium text-gray-700">
              Age:
            </label>
            <input
              type="number"
              name="age"
              id="age"
              className="border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div className="flex items-center space-x-2 md:col-span-2">
            <input type="checkbox" name="isMarried" id="isMarried" />
            <label htmlFor="isMarried" className="font-medium text-gray-700">
              Are you married?
            </label>
          </div>

          <div className="flex items-center space-x-4 md:col-span-2">
            <span className="font-medium text-gray-700">Gender:</span>
            <label className="inline-flex items-center">
              <input type="radio" name="gender" value="male" className="mr-1" />
              Male
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                className="mr-1"
              />
              Female
            </label>
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="text" className="mb-1 font-medium text-gray-700">
              Description:
            </label>
            <textarea
              name="text"
              id="text"
              className="border border-gray-300 rounded px-4 py-2 h-24 resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="drop" className="mb-1 font-medium text-gray-700">
              Country:
            </label>
            <select
              name="drop"
              id="drop"
              className="border border-gray-300 rounded px-4 py-2"
            >
              <option value="">Select a country</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="Nepal">Nepal</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600
            text-white font-semibold px-8 py-3 rounded shadow-md transition"
          >
            Submit
          </button>
        </div>

        <button
          onClick={() => {
            nagigate("/contact", { replace: true });
          }}
        >
          go to contact page
        </button>
      </form>
    </div>
  );
};

export default Form;
