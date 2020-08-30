import React, { Component } from "react";
import styled from "styled-components";

const StyledSearch = styled.input`
  color: #efeeff;
  background-color: #292d35;
  &:hover {
    border-color: #00caff;
    color: #00caff;
  }
`;

const SearchWrap = styled.div`
  border-radius: 25px;
  border: 0.25rem solid #efeeff;
  background: #292d35;
  padding: 2rem;
  color: #efeeff;
  text-align: center;
  justify-content: center;
  align-content: center;
  margin-top: 2rem;
  &:hover {
    border-color: #00caff;
  }
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
  componentDidMount() {
    this.searchInput.focus();
  }
  render() {
    return (
      <SearchWrap className="submit_wrapper">
        <form onSubmit={this.onSubmitHandler}>
          <StyledSearch
            ref={(inputEl) => (this.searchInput = inputEl)}
            className="searchBar"
            placeholder="URL or Search Query"
            onChange={(newState) => this.updateInput(newState)}
            autoFocus
          />

          <button hidden className="btn" type="submit" />
        </form>
      </SearchWrap>
    );
  }
}

export default Search;
