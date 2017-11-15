import React from "react";
import { Message } from "semantic-ui-react";
import PropTypes from "prop-types";

class InlineError extends React.Component {
  state = {
    text: this.props.text,
  };
  componentWillReceiveProps(props) {
    this.setState({ text: props.text });
  }

  handleDismiss = () => {
    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;
    return (
      text && (
        <Message
          onDismiss={this.handleDismiss}
          size="tiny"
          attached="bottom"
          error
          content={text}
        />
      )
    );
  }
}

InlineError.propTypes = {
  text: PropTypes.string.isRequired,
};
export default InlineError;
