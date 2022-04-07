import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestionsFromDB } from './actions/questions';
import { getUsersFromDB } from './actions/users';
import { getAuthedUser } from './actions/authedUser'
import './App.css';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import QuestionView from './components/QuestionView';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Questions from './components/Questions';
import NavBar from './components/NavBar';
import Leaderboard from './components/Leaderboard';
import NewQuestion from './components/NewQuestion';
import Nope from './components/Nope';

class App extends Component {
  componentDidMount() {
    console.log('mounted') 
    this.props.dispatch(getQuestionsFromDB())
    this.props.dispatch(getUsersFromDB())
    this.props.dispatch(getAuthedUser())
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            Would you rather
          </header>
          <NavBar></NavBar>
          <Routes>
            <Route path='/login' element={<LoginForm />} />
            <Route path='/' exact element={<Home />} />
            <Route path='/answered' element={<Questions status='answered' />} />
            <Route path='/unanswered' element={<Questions status='unanswered'/>} />
            <Route path='/questions/:questionID' element={<QuestionView />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
            <Route path='/add' element={<NewQuestion />} />
            <Route path='*' element={<Nope />} />
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
