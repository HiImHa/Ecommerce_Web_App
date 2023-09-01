"use client"
import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import Spinner from "../components/Spinner";

export default function Page() {
    const { user } = UserAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
          await new Promise((resolve) => setTimeout(resolve, 50));
          setLoading(false);
        };
        checkAuthentication();
      }, [user]);
    
    return (
        <div>
            { loading ? (
            <Spinner/>
            ) : (
                user ? (
                    <p>
                      Welcome, {user.displayName} - you are logged in to the profile page -
                      a protected route.
                    </p>
                    ) : (
                    <p>You must be logged in to view this page - protected route.</p>
                    )
                )
            }
        </div>   
    ) 
}

