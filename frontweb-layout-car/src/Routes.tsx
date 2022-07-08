import NavBar from "components/NavBar";
import Home from "pages/Home";
import Catalog from "pages/Home/catalog";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const Roustes = () => 
    (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/products">
                    <Catalog/>
                </Route>
            </Switch>
        </BrowserRouter>
    );

export default Roustes;