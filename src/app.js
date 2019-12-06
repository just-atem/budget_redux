import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';//importing a package
import AppRouter, { history } from './Routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {firebase} from'./firebase/firebase';
import { login, logout} from './actions/auth';

const store = configureStore();

// store.dispatch(addExpense({description: 'Water bill', amount: 4500, createdAt: 2000}));
// store.dispatch(addExpense({description: 'Gas bill', amount:600, createdAt:11000}));
// store.dispatch(addExpense({description: 'Visit Tokyo', amount:7000, createdAt: 8000}));

// const state = store.getState();//expenses and filters
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true; 
    }
}
ReactDOM.render(<p>Loading...</p>, document.getElementById('app')); 

    
firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
