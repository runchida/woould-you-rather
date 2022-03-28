import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestionsFromDB } from './actions/questions';
import { getUsersFromDB } from './actions/users';
import { setAuthedUser, getAuthedUser } from './actions/authedUser'
import './App.css';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import QuestionView from './components/QuestionView';

class App extends Component {
  sarah = {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL: 'sarah.png',
      answers: {
        "8xf0y6ziyjabvozdd253nd": 'optionOne',
        "6ni6ok3ym7mf1p33lnez": 'optionTwo',
        "am8ehyc8byjqgar0jgpub9": 'optionTwo',
        "loxhs1bqm25b708cmbf3g": 'optionTwo'
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  }
  componentDidMount() {
    console.log('mounted')
    this.props.dispatch(getQuestionsFromDB())
    this.props.dispatch(getUsersFromDB())
    this.props.dispatch(setAuthedUser(this.sarah))
    this.props.dispatch(getAuthedUser())
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Would you rather
        </header>
        {<LoginForm ></LoginForm>}
        {<Home></Home>}
        <QuestionView questionID={"8xf0y6ziyjabvozdd253nd"}></QuestionView>
        <footer>
          <a href="https://www.freepik.com/vectors/dog">User avatars created by freepik - www.freepik.com</a>
        </footer>
      </div>
    );
  }
}

export default connect()(App);
