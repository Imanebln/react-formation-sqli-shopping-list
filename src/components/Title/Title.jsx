import React from "react";
import { string } from "prop-types";
const Title = ({ title }) => <h3>{title}</h3>;

Title.propTypes = {
  title: string.isRequired,
};

export default Title;
