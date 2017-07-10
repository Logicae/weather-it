import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { loadReports } from './actions/reportActions';
import registerServiceWorker from './registerServiceWorker';
import { compose, createStore, applyMiddleware } from 'redux'
import {autoRehydrate, persistStore} from 'redux-persist'
import reducers from './reducers/index'
import thunk from 'redux-thunk'


const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
        applyMiddleware(thunk),
        autoRehydrate()
    )
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
        document.getElementById('root')
    );

store.dispatch(loadReports());
persistStore(store)
registerServiceWorker();

