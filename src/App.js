import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestionsFromDB } from './actions/questions';
import { getUsersFromDB } from './actions/users';
import { getAuthedUser } from './actions/authedUser'
import './App.css';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    console.log('mounted')
    this.props.dispatch(getQuestionsFromDB())
    this.props.dispatch(getUsersFromDB())
    this.props.dispatch(getAuthedUser())
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Would you rather
        </header>
        {<LoginForm></LoginForm>}
      </div>
    );
  }


}

export default connect()(App);
