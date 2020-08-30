import React, { Component } from "react";
import styled from "styled-components";

const StyledSearch = styled.input`
  color: #efeeff;
  background-color: #292d35;
`;
class Search extends Component {
  state = {
    formInput: "",
    isValidURL: false,
  };

  // Checks if input is a valid url. If so, links to page. If not, searches for it.
  onSubmitHandler = (event) => {
    let curState = this.state.formInput;
    let isValid = this.state.isValidURL;
    let searchEngine = "duckduckgo.com/?q=";
    let secure = "https://";

    if (isValid) {
      window.location.assign(secure + curState);
    } else {
      window.location.assign(secure + searchEngine + curState);
    }

    // prevent page from reloading on submit
    event.preventDefault();
  };

  // Checks if input is a valid URL, and sets state for formInput and isValidURL respectively.
  updateInput = (newState) => {
    // due to async setState, we're just using the input value at the time.
    let curState = newState.target.value;

    // RegEx to check that our input is a valid URL.
    let isURL = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name and extension
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?" + // port
      "(\\/[-a-z\\d%@_.~+&:]*)*" + // path
      "(\\?[;&a-z\\d%@_.,~+&:=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator

    // If it's a URL, set state appropriately. Else, also set state appropriately.
    if (isURL.test(curState)) {
      this.setState({
        isValidURL: true,
        formInput: newState.target.value,
      });
    } else {
      this.setState({
        isValidURL: false,
        formInput: newState.target.value,
      });
    }
  };

  render() {
    return (
      <div className="submit_wrapper">
        <form onSubmit={this.onSubmitHandler}>
          <StyledSearch
            className="searchBar"
            placeholder="duckduckgo"
            onChange={(newState) => this.updateInput(newState)}
            autoFocus
          />

          <button className="btn" type="submit">
            search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
