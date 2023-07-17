import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import './App.css'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Register from './components/Register'
import Context from './Context/Context'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    isRegistered: false,
    Name: '',
    option: 'Arts and Culture',
    showError: '',
  }

  makeRegisteredTrue = () => {
    this.setState({isRegistered: true})
  }

  onNameChange = Name => {
    this.setState({Name})
  }

  onSelectOption = option => {
    this.setState({option})
  }

  makeShowErrorTrue = () => {
    this.setState(prev => ({showError: !prev.showError}))
  }

  render() {
    const {isRegistered, Name, option, showError} = this.state
    console.log(showError)
    return (
      <Context.Provider
        value={{
          isRegistered,
          Name,
          option,
          showError,
          makeRegisteredTrue: this.makeRegisteredTrue,
          onNameChange: this.onNameChange,
          onSelectOption: this.onSelectOption,
          makeShowErrorTrue: this.makeShowErrorTrue,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
