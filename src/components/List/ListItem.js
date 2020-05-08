import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Title from "../Title/Title";
import styles from "./ListItem.module.scss";

const ListItem = ({ image, title, description, link }) => {
  const ImageTag = image ? "img" : "div";

  return (
    <li className={styles.wrapper}>
      {image && (
        <ImageTag
          src={image}
          alt={title}
          className={ImageTag === "img" ? styles.image : styles.imageNone}
        />
      )}

      <div>
        <Title>{title}</Title>
        <p className={styles.description}>{description}</p>
        {link && (
          <Button href={link}>{(image && "visit twitter page") || "visit article page"}</Button>
        )}
      </div>
    </li>
  );
};

ListItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ListItem.defaultProps = {
  image: null,
  link: null,
};

export default ListItem;
