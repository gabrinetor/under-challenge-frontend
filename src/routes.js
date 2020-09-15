import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Success from './pages/Success';
import Page404 from './pages/Pagina404';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Cart} />
                <Route path="/carrinho" component={Cart} />
                <Route path="/pagamento" component={Payment} />
                <Route path="/sucesso" component={Success} />
                <Route component={Page404} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;