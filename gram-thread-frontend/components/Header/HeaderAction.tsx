"use client";
import { ShoppingCart, User, LogOut } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HeaderActions() {
  const router = useRouter();
const handleLogout = () => {
  localStorage.removeItem("token");

  setIsLoggedIn(false);

  router.push("/");
};

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  useEffect(() => {
  const token = localStorage.getItem("token");
const name = localStorage.getItem("userName");
  if (token) {
    setIsLoggedIn(true);
  }
   if (name) {
    setUserName(name);
  }
}, []);
  return (
    <div className="flex items-center gap-3">
      {isLoggedIn ? (
  <button onClick={handleLogout} className="flex items-center gap-2">
    <LogOut size={18} />
    <span>Logout</span>
  </button>
) : (
  <Link href="/auth/login">
    <button className="flex items-center gap-2">
      <User size={18} />
      <span>Login</span>
    </button>
  </Link>
)}
      <button className="flex items-center gap-2">
        <ShoppingCart size={18} />
        <span>Cart</span>
      </button>

       <div className="flex items-center gap-2">
        
        <User size={18} />
        {isLoggedIn && (
        <span>Hello, {userName}</span>)}
      </div>
    </div>
  );
}