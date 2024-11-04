import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      
      <div>
        <Navbar/>
        <div className="flex items-center justify-center h-screen ">
          <div className="dark:bg-slate-800 dark:text-white modal-box border shadow-xl  rounded-lg hover:shadow-2xl hover:shadow-green-400  hover:scale-105 duration-8000 ">
            <div className="">
              <h3 className="font-bold text-lg">Contact</h3>
              <div className="space-y-8">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <Link
                    to="/"
                    className="text-black btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  >
                    ✕
                  </Link>

                  <div className="space-y-2 mt-4 ">
                    {/* Name */}
                    <span>Name</span>
                    <br />
                    <input
                      type="text"
                      autoFocus={true}
                      placeholder="Enter your Full-Name"
                      {...register("Name", { required: true })}
                      className="outline-none w-80 rounded px-3 dark:bg-slate-800 dark:text-white"
                    />
                    <br />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>
                  {/* email */}
                  <div className="space-y-2 mt-4">
                    <span>Email</span>
                    <br />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      {...register("email", { required: true })}
                      className="outline-none  w-80 rounded px-3 dark:bg-slate-800 dark:text-white"
                    />
                    <br />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>
                  {/* password */}
                  <div className="space-y-2 mt-4 ">
                    <span>Message</span>
                    <br />
                    <input
                      type="text-area"
                      placeholder="Enter your message"
                      rows="5"
                      {...register("message", { required: true })}
                      className="outline-none w-80 rounded px-3 dark:bg-slate-800 dark:text-white"
                    />
                    <br />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>
                  {/* button */}
                  <div className="flex justify-around mt-4">
                    <button
                      type="submit"
                      className="bg-green-500 text-white px-4 py-2 rounded  hover:bg-green-700 duration-300 mt-8 mx-14"
                    >
                      Send
                    </button>
                  </div>
                </form>
                <Login />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
