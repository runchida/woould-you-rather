import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestionsFromDB } from './actions/questions';
import { getUsersFromDB } from './actions/users';
import { setAuthedUser, getAuthedUser } from './actions/authedUser'
import './App.css';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import QuestionView from './components/QuestionView';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Questions from './components/Questions';

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
      <Router>
        <div className="App">
          <header className="App-header">
            Would you rather
          </header>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/answered' element={<Questions status='answered' />} />
            <Route path='/unanswered' element={<Questions status='unanswered'/>} />
            {/* Route with question ID for question view*/}
            {/* <Route path={'/'} exact component={Home} /> */}


            {/* {<LoginForm ></LoginForm>}
            {<Home></Home>}
            <QuestionView questionID={"8xf0y6ziyjabvozdd253nd"}></QuestionView> */}
          </Routes>
          <footer>
            <a href="https://www.freepik.com/vectors/dog">User avatars created by freepik - www.freepik.com</a>
          </footer>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
