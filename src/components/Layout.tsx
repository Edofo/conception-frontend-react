import { Suspense } from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
