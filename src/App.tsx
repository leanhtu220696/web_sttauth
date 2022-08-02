import "antd/dist/antd.compact.css";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePages";
import FooterContact from "./component/FooterContact";
import HeaderNav from "./component/HeaderNav";

function App() {
  return (
    <>
      <HeaderNav />
      <BrowserRouter>
        <Switch>
          <Route exact path="/web_sale/" component={HomePage} />
        </Switch>
      </BrowserRouter>
      <FooterContact />
    </>
  );
}

export default App;
