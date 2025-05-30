import React from "react";
import classes from "./profile.module.scss";

const Profile = ({ icon, name }) => {
  return (
    <div className={classes.profile}>
      <img src={icon} alt={name} className={classes.profilePhoto} />
      <p className={classes.profileName}>{name}</p>
    </div>
  );
};

export { Profile };
