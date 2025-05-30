import React from "react";
import classes from "./label.module.scss";

const Label = ({ label }) => {
  return <span className={classes.label}>{label}</span>;
};

export { Label };
