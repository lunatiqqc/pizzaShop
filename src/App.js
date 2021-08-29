import "./App.css";
import MakePizza from "./components/MakePizza";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ThankYou from "./pages/ThankYou";

function App() {
    return (
        <div className='App'>
            <Router>
                <Route exact path='/' component={MakePizza} />
                <Route exact path='/thank-you' component={ThankYou} />
            </Router>
        </div>
    );
}

export default App;
