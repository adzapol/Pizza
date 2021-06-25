import React from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  // Тестовая функция для отладки рендеров компонентов
  // window.test = () => {
  //   axios.get('http://localhost:3000/db.json').then(({ data }) => {
  //     dispatch(setPizzas(data.pizzas));
  //   });
  // };

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
