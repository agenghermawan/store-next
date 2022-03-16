/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import React from "react";
import Menu from "./SmallComponent/Navbar/menu";
import Auth from "./SmallComponent/Navbar/Auth";
import Button from "./SmallComponent/Navbar/ToggleMenu";

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src="/assets/icon/logo.svg" width={60} height={60} />
          </a>
          <Button />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu />
              <Menu title="Home" active href="/" />
              <Menu title="Games" href="/games" />
              <Menu title="Rewards" />
              <Menu title="Discover" />
              <Menu title="Global Rank" />
              <Auth isLogin />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
