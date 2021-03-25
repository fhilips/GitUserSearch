import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageHeader from "./core/components/PageHeader";

import Home from "./core/pages/home";
import Search from "./core/pages/search";


const Routes = () => (
    <BrowserRouter>
        <PageHeader />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            
        </Switch>
    </BrowserRouter>
)

export default Routes;