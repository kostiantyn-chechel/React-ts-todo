import React from 'react';
import Navbar from "./components/Navbar";
import TdPages from "./pages/TDPages";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AboutPages from "./pages/AboutPage";



const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <div className='container'>
                <Switch>
                    <Route component={AboutPages} path={'/about'}/>
                    <Route component={TdPages} path={'/'} exact/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
