import React, { BrowserRouter, Route, Switch } from 'react-router-dom'
import Wrapper from './Wrapper';
import App from '../App';
import Detail from './Detail';


export default function Router() {
    return (
        <BrowserRouter>
            <Wrapper>
                <Switch>
                    <Route path="/" component={App} exact={true}/>
                    <Route path="/detail/:id" component={Detail}/>
                </Switch>
            </Wrapper>
        </BrowserRouter>
    )
}
