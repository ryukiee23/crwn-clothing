import React from 'react';
import './App.css';
import {Route ,Switch} from 'react-router-dom';
import { auth , createUserProfileDocument} from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/signinandsignuppage.component';


class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser:''
    };
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (

      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignInAndSignUpPage}></Route>
        </Switch>
  
      </div>
    );
  }
  
}

export default App;
