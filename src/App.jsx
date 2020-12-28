import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, RoomList } from './pages';

const App = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Switch>
        <Route exact path="/room" component={RoomList} />
        {/* <Route exact path="/room/:id" component={RoomView} /> */}
      </Switch>
    </>
  );
};

export default App;
