import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "./Navbar";

function Signup() {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo ={
      username:data.Name,
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:3000/user/signup",userInfo)
    .then((res)=>{
      if(res.data){
        toast.success(`signup success welcome : ${res.data.user.username}`)
        document.getElementById("my_modal_3").close()
        Navigate("/")
        localStorage.setItem("user",JSON.stringify(res.data.user))
        setTimeout(() => {
          window.location.reload();
        },2000)
        console.log(res.data)
      }
      console.log(res.data)
    }).catch((err)=>{
      if(err){
        toast.error("error : "+err.response.data.message);
        console.log(err)
      }
    })
  };
  
 
  return (
    <> 
    <Navbar/>
      <div className="flex items-center justify-center h-screen dark:bg-slate-800 dark:text-white">
        <div className="dark:bg-slate-800 dark:text-white modal-box border shadow-xl  rounded-lg hover:shadow-2xl hover:shadow-red-400  hover:scale-105 duration-8000 ">
          <div className="">
            <h3 className="font-bold text-lg">Sign-up</h3>
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
                    className="outline-none w-80 rounded px-3 dark:bg-slate-800 dark:text-white"
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
                    className="outline-none  w-80 rounded px-3 dark:bg-slate-800 dark:text-white"
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
                    className="outline-none w-80 rounded px-3 dark:bg-slate-800 dark:text-white"
                  />
                   <br />
                   {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                {/* button */}
                <div className="flex justify-around mt-4">
                  <button className="bg-pink-500 text-white px-4 py-2 rounded  hover:bg-pink-700 duration-300 mt-8 mx-14" onClick={handleSubmit(onSubmit)}>
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
