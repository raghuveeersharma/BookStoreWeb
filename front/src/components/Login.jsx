import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

              <h3 className="font-bold text-lg text-black">Login</h3>
              <div className="space-y-8">
                {/* email */}
                <div className="space-y-2 mt-4">
                  <span className="text-black">Email</span>
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
                  <span className="text-black">Password</span>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    {...register("password", { required: true })}
                    className="outline-none w-80 rounded px-3"
                  />
                  <br />
                   {errors.password &&  <span className="text-red-500 text-sm">This field is required</span>}
                </div>
              </div>
              {/* button */}
              <div className="flex justify-around">
                <button
                  className="bg-pink-500 text-white px-4 py-2 rounded  hover:bg-pink-700 duration-300 mt-8 mx-14"
                  type="submit"
                >
                  Login
                </button>
                <p className="mt-9 text-black">
                  {" "}
                  Not registerd?
                  <Link to="/Sign-up">
                    <span className="text-blue-500 underline cursor-pointer">
                      sign-up
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
