import React from "react";
import ReactDOM from "react-dom";
import Searchbar from "./Searchbar";
/*
const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <h1>
        <Searchbar></Searchbar>
      </h1>
    </div>
  );
};
*/

class App extends React.Component {
  on_SearchSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <h1>
          <Searchbar onSubmit={this.on_SearchSubmit}></Searchbar>
        </h1>
      </div>
    );
  }
}

export default App;
