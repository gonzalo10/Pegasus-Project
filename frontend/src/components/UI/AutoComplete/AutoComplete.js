import React, { Component } from 'react';

import PropTypes from 'prop-types';

import './AutoComplete.css'

export class Autocomplete extends Component {

  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired
  };

  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: ''
  };

  onChange = (e) => {
    const { options } = this.props;
    const userInput = e.currentTarget.value;
    const filteredOptions = options.filter(
          (option) => option.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
    this.setState({
          activeOption: 0,
          filteredOptions,
          showOptions: true,
          userInput
        });
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOption: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
  };

  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;
    if (e.keyCode === 13) {
          this.setState({
            activeOption: 0,
            showSuggestions: false,
            userInput: filteredOptions[activeOption]
          });
        } else if (e.keyCode === 38) {
          if (activeOption === 0) {
            return;
          }
    this.setState({ activeOption: activeOption - 1 });
        } else if (e.keyCode === 40) {
          if (activeOption - 1 === filteredOptions.length) {
            return;
          }
    this.setState({ activeOption: activeOption + 1 });
        }
  };
  
  render() {
    const {
      onClick,
      onChange,
      onKeyDown,
      state: { activeOption, filteredOptions, showOptions, userInput }
    } = this;
    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options">
            {filteredOptions.map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = 'option-active';
              }
              return (
                <li className={className} key={optionName} onClick={onClick}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }
    return (
      <React.Fragment>
        <div className="search">
          <input
            type="text"
            placeholder="Your Homecity"
            className="search-box"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
             />
          {optionList}
        </div>
      </React.Fragment>
    );
  }
}
export default Autocomplete;