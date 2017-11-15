import React from "react";
import Validator from "validator";
import { Link } from "react-router-dom";
import {
  Grid,
  Button,
  Form,
  Icon,
  Radio,
  Modal,
  Loader,
  Dimmer,
} from "semantic-ui-react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import moment from "moment";
import "react-day-picker/lib/style.css";
import InlineError from "../messages/InlineError";
import TermsAndConditions from "../messages/TermsAndConditions";
import "../../assets/css/SignUpForm.css";

const DAY_FORMAT = "DD/MM/YYYY";

class SignUpForm extends React.Component {
  state = {
    data: {
      email: "",
      password: "",
      dob: "",
      firstname: "",
      lastname: "",
      gender: "",
    },
    errors: {}
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

  handleDayChange = (selectedDay, modifiers) => {
    this.setState({
      data: { ...this.state.data, dob: selectedDay },
      isDisabled: modifiers.disabled,
    });
  };
  handleChange = (e, { value }) =>
    this.setState({ ...this.state.data, gender: value });

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) {
      errors.email = "Invalid email";
    } else if (!data.email) {
      errors.email = "Email can't be blank";
    }
    if (!data.firstname) errors.firstname = "First name can't be blank";
    if (!Validator.isISO8601(data.dob.toISOString()))
      errors.date = "Invalid date";
    if (!data.password) errors.password = "can't be blank";
    return errors;
  };
  connectTo = () => this.setState({active: true})

  render() {
    const { data, errors, loading, gender } = this.state;
    const formattedDay = data.dob ? moment(data.dob).format(DAY_FORMAT) : "";

    const dayPickerProps = {
      todayButton: "Go to Today",
      enableOutsideDays: true,
      modifiers: {
        monday: { daysOfWeek: [1] },
      },
    };

    return (
      <div className="page-center-signup">
        <Dimmer active={this.state.active} inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer>
        <div className="boxify">
          <Grid columns={3} centered stackable>
            <Grid.Row columns={1}>
              <Grid.Column textAlign="center">
                <h1>Create a New Account</h1>
              </Grid.Column>
              <Grid.Column textAlign="center" className="general-text">
                Come join the community. Lets us setup your account. Already
                have an account? <Link to="/login_form">Login</Link>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={4}>
              <Grid.Column width={4} className="left-align-social-btn">
                <Grid.Row columns={1}>
                  <Grid.Column>
                    <p className="general-text">
                      Why be old fashioned.<br />Just sign up with:
                    </p>
                  </Grid.Column>
                  <div className="social-btn">
                    <Grid.Column>
                      <Button
                        size="medium"
                        color="facebook"
                        className="signup-with"
                        onClick={this.connectTo}
                      >
                        <Icon name="facebook" /> Facebook
                      </Button>
                    </Grid.Column>
                    <Grid.Column>
                      <Button 
                        color="google plus" 
                        onClick={this.connectTo}
                        className="signup-with"
                      >
                        <Icon name="google plus" /> Google Plus
                      </Button>
                    </Grid.Column>
                  </div>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column width={5} tablet={6}>
                <Form error onSubmit={this.onSubmit} loading={loading}>
                  <Form.Group widths="equal">
                    <Form.Input
                      label="First name"
                      placeholder="First name"
                      name="firstname"
                      id="firstname"
                      onChange={this.onChange}
                      value={data.firstname}
                    />
                    <Form.Input
                      label="Last name"
                      placeholder="Last name"
                      name="lastname"
                      id="lastname"
                      onChange={this.onChange}
                      value={data.lastname}
                    />
                  </Form.Group>
                  {errors.firstname && <InlineError text={errors.firstname} />}
                  <Form.Field>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={data.email}
                      onChange={this.onChange}
                      placeholder="email"
                    />
                    {errors.email && <InlineError text={errors.email} />}
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={data.password}
                      onChange={this.onChange}
                      placeholder="Enter a password"
                    />
                    {errors.password && <InlineError text={errors.password} />}
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor="dob">Date of birth</label>
                    <DayPickerInput
                      value={formattedDay}
                      onDayChange={this.handleDayChange}
                      format={DAY_FORMAT}
                      placeholder={`E.g. ${moment()
                        .locale("en")
                        .format(DAY_FORMAT)}`}
                      dayPickerProps={dayPickerProps}
                    />
                    {errors.date && <InlineError text={errors.date} />}
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="male"
                      name="radioGroup"
                      value="male"
                      checked={gender === "male"}
                      onChange={this.handleChange}
                    />
                    <Radio
                      label="female"
                      name="radioGroup"
                      value="female"
                      checked={gender === "female"}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Button fluid positive>
                      Sign Up
                    </Button>
                    <label htmlFor="termsOfCondition">
                      By signing up you agree with &nbsp;
                      <TermsAndConditions />
                    </label>
                  </Form.Field>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
