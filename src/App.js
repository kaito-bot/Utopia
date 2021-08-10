import "./App.css";
import HomePage from "./pages/homepage.component";
import { Route } from "react-router-dom";

function Hats() {
  return <h1>this is hat page</h1>;
}

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={Hats} />
    </div>
  );
}

export default App;
