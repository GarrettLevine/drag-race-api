import React from 'react';

import AppRouter from './AppRouter';

export default class App extends React.Component {
  render() {
    return (
      <section className='app__container'>
        <AppRouter />
      </section>
    );
  }
}
