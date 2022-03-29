import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
//import { createLogger } from 'redux-logger'
//import thunk from 'redux-thunk'
//import reducer from './reducers'
//import { getAllProducts } from './actions'
import App from './App'

// const middleware = [ thunk ];
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }

const reducer = (state = {}, action) => 
{
    switch (action.type)
    {
        case "NAME":
            state.name = action.name;
        case "DATE":
            state.date = action.date;
        case "NUMBER":
            state.number = action.number;
    }

    return state;
}


const store = createStore(
  reducer
);

store.dispatch({type: "NAME", name : "Ilya"});
store.dispatch({type: "DATE", date : 10});
store.dispatch({type: "NUMBER", number : 2912039});

//store.dispatch(getAllContacts(id));



render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);