import React from 'react';
import MainPage from "./container/MainPage/MainPage";
import AddQuote from "./container/AddQuote/AddQuote";
import EditQuote from "./container/EditQuote/EditQuote";
import {BrowserRouter, Switch,Route} from "react-router-dom";
const App = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={MainPage}/>
            <Route path='/add-quote' component={AddQuote}/>
            <Route path='/categories/:name' component={MainPage}/>
            <Route path='/phrases/:id/edit' component={EditQuote}/>
            <Route render={()=> <h1>Not Found</h1>}/>
          </Switch>
        </BrowserRouter>
    );
};
export default App;