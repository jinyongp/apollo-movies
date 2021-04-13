import { HashRouter as Router, Route } from "react-router-dom";
import { Home, Detail } from "../routes";
import GlobalStyle from "../styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Route path="/" component={Home} exact />
        <Route path="/:id" component={Detail} />
      </Router>
    </>
  );
}

export default App;
