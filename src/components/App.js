import { HashRouter as Router, Route } from "react-router-dom";
import { Home, Detail } from "../routes";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/:id" component={Detail} />
    </Router>
  );
}

export default App;
