import Notify from './Notify';
import NavBar from './NavBar';
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      
      <NavBar />
      <Notify />
      {children}
      
    </div>
  );
}
