import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import $axios from "../axios";
import { useNavigate } from "react-router-dom";
import { cardsContext } from "../contexts/cardsContext";
import "./AllCardsPage.css";

const AllCardsPage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("Greeting card");
  const { getCards, addCards, cards, deleteCard } = useContext(cardsContext);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    tag: "Greeting card",
    image: "",
  });

  let obj = new URLSearchParams(window.location.search);
  const [brandValue, setBrandValue] = useState("");
  const filterCards = (key, value) => {
    obj.set(key, value);
    let newUrl = `${window.location.pathname}?${obj.toString()}`;
    navigate(newUrl);
    getCards();
    setBrandValue(value);
  };
  useEffect(() => {
    setBrandValue(obj.get("tag"));
  }, [obj]);

  const getProducts = async () => {
    try {
      const { data } = await $axios.get("/product");
      console.log(data);
      setData(data.rows);
    } catch (error) {
      console.log(error);
      console.log("error ");
    }
  };
  const navigate = useNavigate();

  // const handleSearch = async (e) => {
  //   const value = e.target.value;
  //   setSearch(value);
  //   const { data } = await $axios.get("/product?limit=20&q=" + value);
  //   console.log(data);
  //   setData(data.rows);
  // };

  // const handleFilter = async (e) => {
  //   const value = e.target.value;
  //   getCards(value);
  //   console.log(data);
  //   setData(data.rows);
  // };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    addCards(inputs);
  };

  const handleDelete = async (id) => {
    deleteCard(id);
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      <center>
        <div className="main-addproducts">
          <h3>Add products</h3>
        </div>
        <div className="add-products">
          <div className="search-products">
            <input
              type="text"
              placeholder="Search your cards"
              onChange={(e) => {
                filterCards("q", e.target.value);
              }}
            />
          </div>
          <br />
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={inputs.title}
          />
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={inputs.description}
          />
          <input
            type="text"
            name="price"
            onChange={handleChange}
            value={inputs.price}
          />
          <input
            type="text"
            name="image"
            onChange={handleChange}
            value={inputs.image}
          />
          <select name="tag" id="" onChange={handleChange}>
            <option value="Greeting card">Greeting card</option>
            <option value="Notebook">Notebook</option>
            <option value="Assorted card sets">Assorted card sets</option>
            <option value="Wallpaper">Wallpaper</option>
          </select>
          <div>
            <select
              id=""
              value={brandValue}
              onChange={(e) => {
                filterCards("tag", e.target.value);
              }}
            >
              <option value="Greeting card">Greeting card</option>
              <option value="Notebook">Notebook</option>
              <option value="Assorted card sets">Assorted card sets</option>
              <option value="Wallpaper">Wallpaper</option>
            </select>
          </div>
          <button onClick={handleClick}>Create</button>
          <div className="main-cards">
            {cards ? (
              cards.map((p) => (
                <div key={p.id} className="main-cardss">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={p.image} />
                    <Card.Body>
                      <Card.Title>{p.title}</Card.Title>
                      <Card.Text>{p.description}</Card.Text>
                      <Card.Title>{p.price}</Card.Title>
                      <Card.Title>{p.tag}</Card.Title>
                      <Button
                        variant="primary"
                        onClick={() => {
                          navigate(`/detail/${p.id}`);
                        }}
                      >
                        Update
                      </Button>

                      <Button
                        onClick={() => handleDelete(p.id)}
                        variant="primary"
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </center>
    </>
  );
};

export default AllCardsPage;
