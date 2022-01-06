import React from "react";

const Footer = () => {
  return (
    <div className="my-footer">
      <div
        style={{
          backgroundColor: "#212806",
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "space-evenly",
          color: "white",
          paddingTop: "25px",
          paddingBottom: "25px",
          marginTop: "20px",
          fontSize: "15px",
        }}
      >
        <div>
          <strong>Shop</strong>
          <h3> ------------ </h3>
          <p className="para">Shop all</p>
          <p className="para">Greeting card</p>
          <p className="para">Assorted Card Sets</p>
          <p className="para">Notebooks</p>
        </div>
        {/* qwe */}
        <div className="first_footer_inner">
          <strong>About</strong>
          <h3> ------------ </h3>
          <p className="para">Our story</p>
          <p className="para">Our Values</p>
          <p className="para">Journal</p>
          <p className="para">Sustainability</p>
        </div>
        <div className="second_footer_inner">
          <strong>Customer care</strong>
          <h3> ------------ </h3>
          <p className="para">Contact Us</p>
          <p className="para">FAQs</p>
          <p className="para">Returns & Exchanges</p>
          <p className="para">Support</p>
        </div>
        <div className="third_footer_inner">
          <strong>Wholesale</strong>
          <h3> ------------ </h3>
          <p className="para">Overview</p>
          <p className="para">Register as a Wholesaler</p>
          <p className="para">Access the Wholesale Store</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
