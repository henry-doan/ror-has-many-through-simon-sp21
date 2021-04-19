import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/shared/Home';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UserSimons from './components/auth/UserSimons';
import Simons from './components/simons/Simons';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/user/simons" component={UserSimons} />
          <ProtectedRoute exact path='/simons' component={Simons} />
          {/* <ProtectedRoute exact path='/onedpl/:dpl_id' component={singleDpl} /> */}
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;
