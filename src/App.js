import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ThankYou from "./pages/ThankYou";
import Home from "./pages/Home";

function App() {
    console.log(process.env.PUBLIC_URL);
    return (
        <div className='App'>
            <Router>
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}`}
                    component={Home}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/thank-you`}
                    component={ThankYou}
                />
            </Router>
        </div>
    );
}

export default App;
