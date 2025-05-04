import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const link = import.meta.env.VITE_API_BASE_URL;
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post(`${link}/user/login`, userInfo)
      .then((res) => {
        document.getElementById("my_modal_3").close();
        localStorage.setItem("user", JSON.stringify(res.data.user));
        console.log(res.data);
        toast.success(`login success ${res.data.user.username}`);
        Navigate("/");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        if (err) {
          toast.error("error : " + err.response.data.error);
          setTimeout(() => {
            {
            }
          }, 1000);
          console.log(err);
        }
      });
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-800 dark:text-white">
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
                <div className="space-y-2 mt-4 dark:bg-slate-800 dark:text-white">
                  <span className="text-black">Email</span>
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
                  <span className="text-black">Password</span>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    {...register("password", { required: true })}
                    className="outline-none w-80 rounded px-3 dark:bg-slate-800 dark:text-white"
                  />
                  <br />
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      This field is required
                    </span>
                  )}
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
