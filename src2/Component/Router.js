import React, { BrowserRouter, Route, Switch } from 'react-router-dom'
import Wrapper from './Wrapper';
import App from '../App';
import Detail from './Detail';
import Booking from './Booking';


export default function Router() {
    return (
        <BrowserRouter>
            <Wrapper>
                <Switch>
                    <Route path="/" component={App} exact={true}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="/booking" component={Booking}/>
                </Switch>
            </Wrapper>
        </BrowserRouter>
    )
}
