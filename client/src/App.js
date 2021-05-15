import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books";
import Wrapper from "./components/Wrapper";
import SavedBooks from "./pages/SavedBooks";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Books} />
          <Route exact path="/saved" component={SavedBooks} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
