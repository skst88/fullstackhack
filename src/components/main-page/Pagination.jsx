import { Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { cardsContext } from "../../contexts/cardsContext";
import "./MainHeader.css";

const Pagination = () => {
  const { cards, getCards, countOfCards } = useContext(cardsContext);
  const pageNumbers = [];
  const handlePage = (page) => {
    getCards(page.toString());
  };
  useEffect(() => {
    getCards();
  }, []);
  for (let i = 1; i <= Math.ceil(countOfCards / 3); i++) {
    pageNumbers.push(i);
  }
  console.log(cards);
  return (
    <div className="pagination">
      <div className="pagination-div">
        <ul>
          {pageNumbers.map((page) => (
            // <li key={page}>
            <Button
              variant="black"
              onClick={() => {
                handlePage(page);
              }}
            >
              {page}
            </Button>
            // </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
