import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  render() {
    const {
      onChange,
      onKeyDown,
      state: { activeOption, filteredOptions, showOptions, userInput }
    } = this;
    let optionList;
    return (
      <React.Fragment>
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          <input type="submit" value="" className="search-btn" />
          {optionList}
        </div>
      </React.Fragment>
    );
  }
}
export default Autocomplete;