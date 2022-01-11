import React from "react";
import Navibar from "./Navibar";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
// import Registration from "./Registration";

const Header = () => {
  return (
    <div>
      <Navibar />
      <MainHeader />
      <Footer />
      {/* <Registration /> */}
    </div>
  );
};

export default Header;
