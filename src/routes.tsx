import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageHeader from "./core/components/PageHeader";
import Home from "./core/pages/home";


const Routes = () => (
    <BrowserRouter>
        <PageHeader />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;