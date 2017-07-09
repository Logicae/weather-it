import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { loadReports } from './actions/reportActions';
import store from './store'
import registerServiceWorker from './registerServiceWorker';

store.dispatch(loadReports());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
        document.getElementById('root')
    );

registerServiceWorker();
