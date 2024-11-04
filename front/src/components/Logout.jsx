import React from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthProvider';

function Logout() {
    const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("user");
      toast.success("Logout successfully");
      setTimeout(() => {
        window.location.reload();
      },1000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button className='bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
