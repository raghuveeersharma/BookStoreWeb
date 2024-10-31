import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex items-center justify-center h-screen ">
        <div className="modal-box border shadow-xl  rounded-lg hover:shadow-2xl hover:shadow-blue-400  hover:scale-105 duration-8000 ">
          <div className="">
            <h3 className="font-bold text-lg">Login</h3>
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
                    placeholder="Enter your Full-Name"
                    {...register("Name", { required: true })}
                    className="outline-none w-80 rounded px-3"
                  />
                   <br />
                   {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                {/* email */}
                <div className="space-y-2 mt-4">
                  <span>Email</span>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", { required: true })}
                    className="outline-none  w-80 rounded px-3"
                  />
                   <br />
                   {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                {/* password */}
                <div className="space-y-2 mt-4 ">
                  <span>Password</span>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    {...register("password", { required: true })}
                    className="outline-none w-80 rounded px-3"
                  />
                   <br />
                   {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                {/* button */}
                <div className="flex justify-around mt-4">
                  <button className="bg-pink-500 text-white px-4 py-2 rounded  hover:bg-pink-700 duration-300 mt-8 mx-14">
                    Signup
                  </button>
                  <div className="mt-9 text-black text-sm">
                    Have account?
                    <button type="submit">
                      <span
                        className="text-blue-500 underline cursor-pointer"
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        Login
                      </span>
                    </button>
                  </div>
                </div>
              </form>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
