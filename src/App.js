import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestionsFromDB } from './actions/questions';
import { getUsersFromDB } from './actions/users';
import { setAuthedUser, getAuthedUser } from './actions/authedUser'
import './App.css';
import Home from './components/Home';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    console.log('mounted')
    this.props.dispatch(getQuestionsFromDB())
    this.props.dispatch(getUsersFromDB())
    this.props.dispatch(setAuthedUser())
    this.props.dispatch(getAuthedUser())
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Would you rather
        </header>
        {<LoginForm ></LoginForm>}
        {/* {<Home></Home>} */}
        <footer>
          <a href="https://www.freepik.com/vectors/dog">Dog vector created by freepik - www.freepik.com</a>
        </footer>
      </div>
    );
  }
}

export default connect()(App);
