"use client";
import { useState } from "react";
import {
  Banner,
  Footer,
  Foot,
  Iconic,
  Membership,
  Nav1,
  Nav2,
  Navbar,
  School,
  Sport,
  Trending,
} from "../components";
export default function Home() {
  const [menu, setMenu] = useState(false);

  return (
    <main
      style={{
        overflow: menu && "hidden",
        height: menu && "100vh",
      }}
      className={menu && "hide__scrollbar"}
    >
      <div className="top-links">
        <Nav1 />
      </div>
      <Navbar menu={menu} setMenu={setMenu} />
      <div className="nav2">
        <Nav2 />
      </div>

      <Banner />
      <div className="p-5">
        <School />
        <Trending />
      </div>
      <Iconic />
      <div className="p-3">
        <Sport />
        <Membership />
        <Foot />
      </div>
      <Footer />
    </main>
  );
}
