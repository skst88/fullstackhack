import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { cardsContext } from "../contexts/cardsContext";
import Comment from "../components/main-page/Comments/Comment";

const DetailPage = () => {
  const { getProductsToEdit, cardToEdit } = useContext(cardsContext);

  const params = useParams();
  useEffect(() => {
    getProductsToEdit(params.id);
  }, []);
  let user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container">
      {cardToEdit ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "20px",
          }}
        >
          <div>
            <img width="500px" src={cardToEdit.image} alt="product" />
          </div>
          <div>
            <h3> Name of card: {cardToEdit.title}</h3>
            <h3> Description of card: {cardToEdit.description}</h3>
            <h3> Price: {cardToEdit.price}$</h3>
            <div
              style={{
                marginBottom: "-10px",
                width: "30px",
                borderRadius: "50%",
                height: "30px",
                display: "inline-block",
              }}
            ></div>
            <br />
            <br />
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}

      <Comment />
    </div>
  );
};

export default DetailPage;
