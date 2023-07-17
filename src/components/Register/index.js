import {Component} from 'react'
import './index.css'
import Context from '../../Context/Context'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  //   state = {showError: false}

  render() {
    // const {showError} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {
            makeRegisteredTrue,
            Name,
            onNameChange,
            onSelectOption,
            showError,
            makeShowErrorTrue,
          } = value
          console.log('jhjb')
          const onClickRegisterNow = () => {
            if (Name === '') {
              makeShowErrorTrue()
            } else {
              makeRegisteredTrue()
              const {history} = this.props
              history.replace('/')
            }
          }

          const nameChange = event => {
            onNameChange(event.target.value)
          }

          const onOptionSelect = event => {
            onSelectOption(event.target.textContent)
          }

          return (
            <div>
              <header>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                />
              </header>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />

              <form type="submit">
                <h1>Let us join</h1>
                <div>
                  <label htmlFor="username">NAME</label>
                  <input
                    id="username"
                    type="text"
                    value={Name}
                    placeholder="Your name"
                    onChange={nameChange}
                  />
                </div>
                <div>
                  <label htmlFor="topics">TOPICS</label>
                  <select onChange={onOptionSelect} id="topics">
                    {topicsList.map(i => (
                      <option value={i.id} key={i.id}>
                        {i.displayText}
                      </option>
                    ))}
                  </select>
                </div>
                <button onClick={onClickRegisterNow} type="submit">
                  Register Now
                </button>
                {showError ? <p>Please enter your name</p> : null}
              </form>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}
export default Register
