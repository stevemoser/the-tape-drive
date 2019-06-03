// @flow
import React from "react";
import { getContactHref } from "../../../utils";
import styles from "./Author.module.scss";
import { useSiteMetadata } from "../../../hooks";

const Author = () => {
  const { author, title } = useSiteMetadata();

  return (
    <div className={styles["author"]}>
      <p className={styles["author__bio"]}>
        {title}
        <a
          className={styles["author__bio-twitter"]}
          href={getContactHref("twitter", author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{title}</strong> on Twitter
        </a>
      </p>
    </div>
  );
};

export default Author;
