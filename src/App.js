import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'

import { Header } from './components';
import { Home, Cart } from './pages';
import {setPizzas as setPizzasAction} from './redux/actions/pizzas'

function App() {

  // useEffect(() => {
  //   axios.get('http://localhost:3000/db.json').then(({ data }) => {
  //     setPizzas(data.pizzas)
  //   });
  // }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={[]} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items))
//   }
// }

// connect(mapStateToProps, mapDispatchToProps)(App)

export default App;

// fetch('http://localhost:3000/db.json')
// .then((resp) => resp.json())
// .then((json) => {
//   setPizzas(json.pizzas);
// });
