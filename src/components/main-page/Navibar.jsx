import React, { useContext } from "react";
import { Carousel, Container, Nav, Navbar } from "react-bootstrap";
import Search from "./Search";
import Registration from "./Registration";
import mainphoto from "../../images/mainphoto.svg";
import Cart from "./Cart";
import "./Navibar.css";
import { Link, useNavigate } from "react-router-dom";
import { registrationContext } from "../../contexts/registrationContext";
import { BsDoorClosed } from "react-icons/bs";
import { BsXSquare } from "react-icons/bs";

const Navibar = () => {
  const { logOut } = useContext(registrationContext);
  const navigate = useNavigate();
  function handleLogOut() {
    logOut();
    localStorage.clear();
    navigate("/");
  }

  const user = JSON.parse(localStorage.getItem("token"));
  return (
    <>
      <div>
        <Navbar className="navbar-bla">
          <Container>
            <Nav className="">
              <Nav.Link href="#">MY WISHES</Nav.Link>
              <Nav.Link href="#home">Shop +</Nav.Link>
              <Nav.Link href="#features">About +</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            {user ? (
              <div className="registration" onClick={handleLogOut}>
                <BsXSquare />
              </div>
            ) : (
              <Registration />
            )}
          </Container>
          <div className="registration">
            <Link to="/login">
              <BsDoorClosed />
            </Link>
          </div>
          <Search />
          <Cart />
        </Navbar>
      </div>
      <div className="navbar-main">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={mainphoto} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={mainphoto} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={mainphoto} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Navibar;
