import React from "react";
import { Link , Outlet } from "react-router-dom";

const AdminUser = () => {
  return (
    <>
      <div className="heading">AdminUser</div>
      <Link className="btn" to="/admin/user1">User1</Link>
      <Link className="btn" to="/admin/user2">User2</Link>
      <Outlet/>
    </>
  );
};

export default AdminUser;
