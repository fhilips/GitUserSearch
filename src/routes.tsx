import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageHeader from "./core/components/PageHeader";


const Routes = () => (
    <BrowserRouter>
        <PageHeader />
        <Switch>
            <Route path="/" exact>
                
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;