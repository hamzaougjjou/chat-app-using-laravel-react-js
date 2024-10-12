import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './components/redux/Store';
import "./style.css";
import "./index.css";


function Index() {
    return (

        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);