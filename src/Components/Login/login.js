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

    fetch(process.env.REACT_APP_ENDPOINT_URL, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(response => {
        response.token
          ? localStorage.setItem(
              "token",
              JSON.stringify({
                token: response.token,
                expires: new Date().getTime() + response.expiresIn
              })
            )
          : localStorage.setItem("error", response.error);
        this.props.history.push("/userpage");
      })
      .catch(error => console.log("Error: ", error));
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className={styles.div}>
        <Form
          onSubmit={event => {
            this.props.loginState(this.state.username);
            this.handleSubmit(event);
          }}
          className={styles.formBox}
        >
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
                onChange={event => {
                  this.setState({ username: event.target.value });
                }}
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
      </div>
    );
  }
}

const WrappedLogin = Form.create({})(Login);

export default WrappedLogin;
