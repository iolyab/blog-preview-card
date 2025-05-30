import React from "react";
import classes from "./card.module.scss";
import { Label } from "../label/Label";
import { Profile } from "../profile/Profile";

const Card = () => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.imgContainer}>
        <img
          src="images/illustration-article.svg"
          alt="illustration"
          className={classes.illustration}
        />
      </div>
      <div className={classes.labelContainer}>
        <Label label="Learning" />
      </div>
      <div className={classes.descriptionContainer}>
        <p className={classes.date}>Published 21 Dec 2023</p>
        <p className={classes.title}>HTML & CSS foundations</p>
        <p className={classes.description}>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className={classes.profileContainer}>
        <Profile icon="/images/image-avatar.webp" name="Greg Hooper" />
      </div>
    </div>
  );
};

export { Card };
