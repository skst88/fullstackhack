import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import $axios from "../axios";
import { Link, useNavigate } from "react-router-dom";
import { cardsContext } from "../contexts/cardsContext";
import "./AllCardsPage.css";
import Pagination from "../components/main-page/Pagination";

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
  const user = JSON.parse(localStorage.getItem("user"));
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
      <div className="addproducts-page">
        <center>
          <div>
            <Link to="/">
              <h3 className="main-addproducts">Add products</h3>
            </Link>
          </div>
          <div className="add-products">
            <div className="search-products">
              <h3>Search what you want</h3>
              <input
                type="text"
                placeholder="Search your cards"
                onChange={(e) => {
                  filterCards("q", e.target.value);
                }}
              />
            </div>
            <br />
            <h3>Add products for your client</h3>
            <input
              type="text"
              name="title"
              placeholder="Name of card"
              onChange={handleChange}
              value={inputs.title}
            />
            <input
              type="text"
              name="description"
              placeholder="Description of card"
              onChange={handleChange}
              value={inputs.description}
            />
            <input
              type="text"
              name="price"
              placeholder="Price of card"
              onChange={handleChange}
              value={inputs.price}
            />
            <input
              type="text"
              name="image"
              placeholder="Url"
              onChange={handleChange}
              value={inputs.image}
            />

            <select name="tag" id="" onChange={handleChange}>
              <option value="Greeting card">Greeting card</option>
              <option value="Notebook">Notebook</option>
              <option value="Assorted card sets">Assorted card sets</option>
              <option value="Wallpaper">Wallpaper</option>
            </select>
            <br />
            <button className="create-btn" onClick={handleClick}>
              Create
            </button>
            <div className="filterside">
              <h3 className="filterword">Filter</h3>
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
                        <div className="buttons-in-card">
                          {user ? (
                            user.role === "ADMIN" ? (
                              <>
                                <Button
                                  onClick={() => {
                                    navigate(`/detail/${p.id}`);
                                  }}
                                >
                                  Update
                                </Button>
                                <Button onClick={() => handleDelete(p.id)}>
                                  Delete
                                </Button>
                              </>
                            ) : (
                              <></>
                            )
                          ) : (
                            <></>
                          )}

                          <Button onClick={() => navigate("detail/" + p.id)}>
                            More...
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              ) : (
                <h2>Loading...</h2>
              )}
            </div>
            <div className="pagination">
              <Pagination />
            </div>
          </div>
        </center>
      </div>
    </>
  );
};

export default AllCardsPage;
