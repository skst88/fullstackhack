import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Toastify from "toastify-js";
import { registrationContext } from "../contexts/registrationContext";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("http://4.bp.blogspot.com/-ccSG7LuASXM/UaUjzNJk8rI/AAAAAAAAKCw/x41c4CSIrAE/s1600/White+girl+and+rose.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #f5eee6;
  color: black;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // eslint-disable-line
  const { loginUser, errorMSG, logSuccess } = useContext(registrationContext);
  console.log(logSuccess);
  useEffect(() => {
    if (logSuccess) navigate("/");
  }, [logSuccess]);
  let message;
  const handleClick = () => {
    navigate("/registration");
  };
  return (
    <Container>
      <Wrapper>
        <Title>Log in</Title>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();

            if (!email || !password) {
            }
            setIsSubmitting(true);
            loginUser(email, password)
              .then((response) => {})
              .catch((error) => {
                console.log(error.message);
                Toastify({
                  text: error.message,
                  className: "error",
                  style: {
                    background:
                      "linear-gradient(to right, rgb(71, 22, 22), red)",
                  },
                }).showToast();
              })
              .finally(() => setIsSubmitting(false));
          }}
        >
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="your email"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            autoComplete="password"
            placeholder="password"
          />
          {logSuccess ? <></> : <p style={{ color: "red" }}>{errorMSG}</p>}

          <Button type="submit">Log in</Button>
          {/* <button>Forgot password?</button> */}
          <button
            style={{ border: "none", backgroundColor: "#f5eee6" }}
            onClick={handleClick}
          >
            Create an account
          </button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
