import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";

export default function App() {
  return (
        <Router>
            <div>
                <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/" className="links">Home</Link>
                    </li>
                    <li>
                        <Link to="/createpost" className="links">Create Post</Link>
                    </li>
                </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/createpost">
                        <CreatePost />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
  );
}

function homePage() {
  return <h6>Home</h6>;
}

function createPost() {
  return <h2>Create Post</h2>;
}
