import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./SearchPanel.module.css";

const initialState = { producent: "All", text: "" };

const SearchPanel = ({ producentsOptions, onOptionChange }) => {
  const [producent, setProducent] = useState(initialState.producent);
  const [text, setText] = useState(initialState.text);
  const updateText = e => {
    setText(e.target.value);
    onOptionChange(producent, e.target.value);
  };
  const updateProducent = e => {
    setProducent(e.target.value);
    onOptionChange(e.target.value, text);
  };
  const clearState = () => {
    setText(initialState.text);
    setProducent(initialState.producent);
    onOptionChange(initialState.producent, initialState.text);
  };
  return (
    <div className={styles.Filter}>
      <div className={styles.Header}>
        <h4>Search</h4>
        <button className={styles.Clear} onClick={clearState}>
          Clear
        </button>
      </div>
      <div>
        <input
          onChange={updateText}
          type="text"
          placeholder="search..."
          value={text}
        />
      </div>
      <h4>Manufacturer</h4>
      <div>
        {producentsOptions.map((option, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                name="manufacturere"
                id={option}
                value={option}
                onChange={updateProducent}
                checked={producent === option}
              />
              <label>{option}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

SearchPanel.propTypes = {
  onOptionChange: PropTypes.func
};

export default SearchPanel;
