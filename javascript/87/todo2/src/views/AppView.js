import React from 'react';
import './AppView.css';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

export default props => {
  return (
    <div>
      <Header />
      <TodoList {...props} />
      <Footer />
    </div>
  );
}

