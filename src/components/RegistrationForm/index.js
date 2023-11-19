import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showErrorForF: false,
    showErrorForL: false,
    errorMsg: 'Required',
    submitted: false,
  }

  handleChange = (field, value) => {
    this.setState({[field]: value})
  }

  handleBlur = field => {
    const {firstName, lastName} = this.state

    if (field === 'firstName') {
      this.setState({showErrorForF: firstName.trim() === ''})
    } else if (field === 'lastName') {
      this.setState({showErrorForL: lastName.trim() === ''})
    }
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName.trim() !== '' && lastName.trim() !== '') {
      this.setState({submitted: true})
    } else {
      this.setState({
        showErrorForF: firstName.trim() === '',
        showErrorForL: lastName.trim() === '',
      })
    }
  }

  renderLoginForm = () => {
    const {
      showErrorForF,
      showErrorForL,
      errorMsg,
      firstName,
      lastName,
    } = this.state

    return (
      <div className="scon">
        <h1>Registration</h1>
        <div className="short-c0ntainer">
          <form onSubmit={this.submitForm}>
            <div className="label-text">
              <label htmlFor="firstname">FIRST NAME</label>
              <br />
              <input
                id="firstname"
                type="text"
                placeholder="First name"
                onChange={e => this.handleChange('firstName', e.target.value)}
                onBlur={() => this.handleBlur('firstName')}
                value={firstName}
              />
              {showErrorForF && <p>*{errorMsg}</p>}
            </div>
            <div className="label-text">
              <label htmlFor="lastname">LAST NAME</label>
              <br />
              <input
                id="lastname"
                type="text"
                placeholder="Last name"
                onChange={e => this.handleChange('lastName', e.target.value)}
                onBlur={() => this.handleBlur('lastName')}
                value={lastName}
              />
              {showErrorForL && <p>*{errorMsg}</p>}
            </div>
            <div className="button-container">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  renderSubmittedSuccessfully = () => (
    <div className="short-c0ntainer2">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="right"
      />
      <div>
        <p>Submitted Successfully</p>
        <button
          type="button"
          onClick={() => this.setState({submitted: false})}
          className="anotherresponse"
        >
          Submit Another Response
        </button>
      </div>
    </div>
  )

  render() {
    const {submitted} = this.state
    return (
      <div className="bg-con">
        {submitted
          ? this.renderSubmittedSuccessfully()
          : this.renderLoginForm()}
      </div>
    )
  }
}

export default RegistrationForm
