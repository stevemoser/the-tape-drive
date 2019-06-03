// @flow
import React from "react";
import { useSiteMetadata } from "../../hooks";
import Author from "./Author";
import Contacts from "./Contacts";
import Copyright from "./Copyright";
import Menu from "./Menu";
import styles from "./Sidebar.module.scss";

type Props = {
  isIndex?: boolean
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu, title, subtitle } = useSiteMetadata();
  const fakeAuthor = {
    name: title,
    bio: subtitle,
    photo: "/photo.jpg"
  };
  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar__inner"]}>
        <Author author={fakeAuthor} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
