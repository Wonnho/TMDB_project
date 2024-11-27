import React from "react";
import AdminPage from "./AdminPage";
import UserPage from "./UserPage";

export default function LogInPage() {
  const userType = "Admin";
  return <div>{userType === "Admin" ? (<AdminPage />) :userType==="User"?(<UserPage />):null}</div>;

}
