import { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AuthContext from './context/AuthContext';

// import Header from './components/Header/Header';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/profile" />
        </Route>

        <Route path="/profile">
          {authCtx.loggedIn ? <ProfilePage /> : <Redirect to="/auth" />}
        </Route>

        <Route path="/auth">
          {authCtx.loggedIn ? <Redirect to="/profile" /> : <AuthPage />}
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}
