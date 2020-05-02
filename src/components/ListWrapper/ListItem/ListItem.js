import React from "react";
import PropTypes from "prop-types";
import "./ListItem.css";

const ListItem = ({ image, name, description, twitterLink }) => (
  <li className="listItem__wrapper">
    <img src={image} alt={name} className="listItem__image" />
    <div>
      <h2 className="listItem__name">{name}</h2>
      <p className="listItem__description">{description}</p>
      <a className="listItem__button" href={twitterLink}>
        visit twitter page
      </a>
    </div>
  </li>
);

ListItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  description: "One of the React creators",
};

export default ListItem;
