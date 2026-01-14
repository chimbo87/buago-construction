import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
// import Navbar from "../header/Navbar";

import { Analytics } from '@vercel/analytics/react';
function RootLayOut() {
  return (
    <div>
      <div>
        <div>
          {/* <Navbar/> */}
          <ScrollRestoration />
        </div>
        <main>
          <Outlet />
          <Analytics />
      
        </main>
      </div>
    </div>
  );
}

export default RootLayOut;