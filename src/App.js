import { BrowserRouter as Router ,Route , Switch} from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "./Home";
import Aboutuscomp from "./Aboutuscomp";
import Roomscomp from "./Roomscomp";
import Newscomp from "./Newscomp";
import Contactcomp from "./Contactcomp";

function App() {
  return (
    <Router >
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route path="/Roomscomp" > <Roomscomp /> </Route>
            <Route path="/Aboutuscomp" > <Aboutuscomp /> </Route>
            <Route path="/Newscomp"> <Newscomp/> </Route>
            <Route path="/Contactcomp"> <Contactcomp /> </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
