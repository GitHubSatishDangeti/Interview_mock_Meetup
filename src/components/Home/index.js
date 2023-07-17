import {Component} from 'react'
import {Link} from 'react-router-dom'
import Context from '../../Context/Context'
import './index.css'

class Home extends Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isRegistered, name, option} = value

          return (
            <div>
              {isRegistered ? (
                <div>
                  <header>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                      alt="website logo"
                    />
                  </header>
                  <div>
                    <h1>{`Hello ${name}`}</h1>
                    <h4>Welcome to {option}</h4>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                      alt="meetup"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <header>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                      alt="website logo"
                    />
                  </header>
                  <div>
                    <h1>Welcome to Meetup</h1>
                    <p>Please register for the topic</p>
                    <Link to="/register">
                      <button type="button">Register</button>
                    </Link>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                      alt="meetup"
                    />
                  </div>
                </div>
              )}
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}
export default Home
