import React from "react";
import { Message } from 'semantic-ui-react';
import PropTypes from "prop-types";

const InlineError = ({text, header}) => (
  <Message
  error
  header={ header }
  content={ text }
/>
);
InlineError.propTypes ={
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
export default InlineError;