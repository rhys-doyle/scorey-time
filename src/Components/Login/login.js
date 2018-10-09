import React from "react";

import { Form, Icon, Input, Button } from "antd";
import styles from "./login.css";

const FormItem = Form.Item;

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    response: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form", values);
      }
    });
    fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .catch(error => console.log("Error: ", error))
      .then(response => {
        this.setState({ response });
        this.state.response.token
          ? localStorage.setItem(
              "token",
              JSON.stringify({
                token: this.state.response.token,
                expires: new Date().getTime() + this.state.response.expiresIn
              })
            )
          : localStorage.setItem("error", this.state.response.error);
        this.props.history.push("/");
      });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className={styles.form}>
        <FormItem>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input username." }]
          })(
            <Input
              className={styles.input}
              prefix={
                <Icon type="user" style={{ color: "rgba(0,0,0,0.25)" }} />
              }
              placeholder="Username"
              onChange={event =>
                this.setState({ username: event.target.value })
              }
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input password." }]
          })(
            <Input
              className={styles.input}
              prefix={
                <Icon type="lock" style={{ color: "rgba(0,0,0,0.25)" }} />
              }
              type="password"
              placeholder="Password"
              onChange={event =>
                this.setState({ password: event.target.value })
              }
            />
          )}
        </FormItem>
        <Button type="primary" className={styles.button} htmlType="submit">
          login
        </Button>
      </Form>
    );
  }
}

const WrappedLogin = Form.create({})(Login);

export default WrappedLogin;
