import React from "react";
import Validator from "validator";
import { Link } from "react-router-dom";
import { Grid, Button, Checkbox, Form } from "semantic-ui-react";
import InlineError from "../messages/InlineError";
import "../../assets/css/SignUpForm.css";

class SignUpForm extends React.Component {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      // pass submit value to parents submit function
      // which will handle api call
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "can't be blank";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <div className="page-center">
        <Grid columns={2} centered>
          <Grid.Column className="box-shadow-effect" width="4" textAlign="left">
            <Form onSubmit={this.onSubmit} loading={loading}>
              <Form.Field>
                <div className="ui horizontal divider">Login with</div>
                <Button.Group fluid>
                  <Button className="fb-btn"><i className="facebook icon"/>facebook</Button>
                  <Button.Or text="or" className="or-divider" />
                  <Button className="gmail-btn">Gmail<i className="google icon g-icon"/></Button>
                </Button.Group>
                <div className="ui divider" />
              </Form.Field>
              <Form.Field>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={this.onChange}
                  placeholder="Email"
                />
                {errors.email && (
                  <InlineError header="Email Error" text={errors.email} />
                )}
              </Form.Field>

              <Form.Field>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={data.password}
                  onChange={this.onChange}
                  placeholder="password"
                />
                {errors.password && (
                  <InlineError header="Password Error" text={errors.password} />
                )}
              </Form.Field>
              <Form.Field>
                <Checkbox label="Remember me" defaultChecked />
              </Form.Field>
              <Form.Field>
                <Button fluid positive>
                  Login
                </Button>
              </Form.Field>
              <Form.Field>
                <label htmlFor="signup">
                  Don&apos;t have an account?{" "}
                  <Link to="/signup" className="hover-underline">
                    Sign Up
                  </Link>
                </label>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SignUpForm;
