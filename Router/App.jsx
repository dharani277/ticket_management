import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Agent from "./Agent";
import Contact from "./Contact";
import Ticket from "./Ticket";
function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/agent">Agent</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/tickets">Tickets</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/agent" component={Agent} />
          <Route path="/contact" component={Contact}></Route>
          <Route path="/tickets" component={Ticket}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
