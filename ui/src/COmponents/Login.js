import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, FormControl } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import { PostData } from "../PostData";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
      if (this.state.username && this.state.password) {
        PostData("login", this.state).then((result) => {
          let responseJson = result;
          if (responseJson.userData) {
            sessionStorage.setItem("userData", JSON.stringify(responseJson));
            this.setState({ redirectToReferrer: true });
          }
        });
      }
  }

  onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" onChange={ this.onChange } />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={ this.login }>
            Login
          </Button>
          <Nav.Item>
            <Nav.Link href="">Register</Nav.Link>
          </Nav.Item>
        </Form>
      </div>
    );
  }
}
