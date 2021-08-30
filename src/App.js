import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ThankYou from "./pages/ThankYou";
import Home from "./pages/Home";

function App() {
    return (
        <div className='App'>
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/thank-you' component={ThankYou} />
            </Router>
        </div>
    );
}

export default App;
