import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../home/Home';
import Work from '../work/Work';
// import NotFound from '../elements/NotFound/NotFound'


const App = () => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/work' component={Work} exact />
                    {/* <Route component={NotFound} /> */}
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    )
}

export default App;