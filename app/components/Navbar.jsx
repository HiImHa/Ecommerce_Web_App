import Link from "next/link";
import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";

export default function Navbar(){
    const { user,googleSignIn, logOut } = UserAuth();
    const [loading, setLoading] = useState(true)
    const handleSignIn = async () => {
        try {
          await googleSignIn();
        } catch (error) {
          console.log(error);
        }
      };
    
      const handleSignOut = async () => {
        try {
          await logOut();
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        const checkAuthentication = async () => {
          await new Promise((resolve) => setTimeout(resolve, 50));
          setLoading(false);
        };
        checkAuthentication();
      }, [user]);

    return (
        <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
            <ul className="flex">
                <li className="p-2 cursor-pointer">
                    <Link href={"/"}> Home</Link>
                </li>
                <li className="p-2 cursor-pointer">
                    <Link href={"/about"}> About</Link>
                </li>
                {!user ? null : (
                  <li className="p-2 cursor-pointer">
                    <Link href={"/profile"}> Profile</Link>
                </li>
                )}
            </ul>
                {loading ? null : !user ? (
                  <ul className="flex">
                      <li onClick={handleSignIn} className="p-2 cursor-pointer">
                      Login
                      </li>
                  </ul>
                ) : (
                  <ul className="flex items-center">
                      <li>Welcome, {user.displayName}</li>
                      <li onClick={handleSignOut} className="p-2 cursor-pointer">
                      Logout
                      </li>
                  </ul>
                ) }
        </div>
    )
}