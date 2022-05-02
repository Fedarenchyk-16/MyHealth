import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./pages/Main";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import { Navbar, Nav, Container, Row, Col, Card } from 'react-bootstrap';
import { Routes, Route, Link, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Account from "./components/Account";
import Axios from 'axios';
import Doctors from './components/Doctors'
import GetHelp from "./components/GetHelp";
import HelpSomeone from "./components/HelpSomeone";
import UserQuerys from "./components/UserQuerys";
import EditProfile from "./components/EditProfile";
import Logout from "./components/Logout";
import Test from "./components/Test";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setIsAuth(true);
        setRole(response.data.user[0].role);
      } else {
        setIsAuth(false);
      }
    });
  }, [isAuth]);

  return (
    <div>
      {console.log("rerender")}
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">MyHealth</Navbar.Brand>
          <Nav className="me-auto">
            {isAuth ? <Nav.Link as={Link} to="/account">Account</Nav.Link> : ""}
            {isAuth ? <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link> : ""}
            {isAuth && role === "patient" ? <Nav.Link as={Link} to="/getHelp">Get help</Nav.Link> : ""}
            {isAuth && role === "doctor" ? <Nav.Link as={Link} to="/helpSomeone">Help someone</Nav.Link> : ""}
            {isAuth && role === "patient" ? <Nav.Link as={Link} to="/myQuerys">My Querys</Nav.Link> : ""}
            {isAuth && role === "patient" ? <Nav.Link as={Link} to="/test">Fell bad?</Nav.Link> : ""}
          </Nav>
          <Nav>
            {!isAuth ? <Nav.Link as={Link} to="/login">Login</Nav.Link> : ""}
            {!isAuth ? <Nav.Link as={Link} to="/registration">Registration</Nav.Link> : ""}
            {isAuth ? <Nav.Link as={Link} to="/logout">Logout</Nav.Link> : ""}
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/registration" exact render={(props) => <Registration isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path="/login" exact render={(props) => <Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path="/logout" exact render={(props) => <Logout isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path="/" exact render={(props) => <Home isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path="/account" exact render={(props) => <Account isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path="/doctors" exact render={(props) => <Doctors isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path="/getHelp" exact render={(props) => <GetHelp isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path="/helpSomeone" exact render={(props) => <HelpSomeone isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path="/myQuerys" exact render={(props) => <UserQuerys isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path="/editProfile" exact render={(props) => <EditProfile isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path="/test" exact render={(props) => <Test isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path='*' element={<div>Not found</div>} />
      </Switch>
    </div>
  );
}

export default App;
