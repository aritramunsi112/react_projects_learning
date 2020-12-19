import React from "react";
import ReactDOM from "react-dom";

class Searchbar extends React.Component {
  state = { term: "" };

  On_InputChange(event) {
    console.log(event.target.value);
  }

  On_InputClick() {
    console.log("Input was clicked");
  }

  on_FormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.on_FormSubmit} className="ui form">
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              value={this.state.term}
              // onClick={this.On_InputClick}
              //  onChange={this.On_InputChange}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
