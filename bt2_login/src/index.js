import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./Home";
 
class Login extends Component{
  constructor (props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
        isRemember: false
      },
      isValid: false,
      isLoggedIn: false
    };
  }
 
  handleChange = (event) => {
    this.setState((state) => {
      const { form } = state
      form[event.target.name] = event.target.value
      return { form }
    }, () => this.checkValidForm())
  }
  
  handleChangeCheckbox = () => {
    this.setState((state) => {
      const { form } = state
      form.isRemember = !form.isRemember
      return { form }
    }, () => this.checkValidForm())
  }
 
  checkValidForm = () => {
    const { email, password } = this.state.form
    const value = email && password
    this.setState({ isValid: value })
  }
 
  handleSubmit = () => {
    if (this.state.isValid){
      this.setState({ isLoggedIn: true })
    }
  }
 
  handleLogOut = () => {
    this.setState({ isLoggedIn: false })
  }
  
  render () {
    const { isLoggedIn, form } = this.state
    if (isLoggedIn) return (<Home onLogOut={this.handleLogOut} />)
    return (
      <div className="container">
        <div className="form-signin">
          <form>
            <h1 className="">Please sign in</h1>
            <div className="form-floating">
              <label>Email address:</label><br/>
              <input className="form-control email" type="email" name="email" value={form.email} onChange={this.handleChange} />
            </div>
            <div className="form-floating">
              <label>Password:</label><br/>
              <input className="form-control password" type="password" name="password"  value={form.password} onChange={this.handleChange} />
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value={form.isRemember} onChange={this.handleChangeCheckbox} /> Remember me
              </label>
            </div>
            <div className="button">
            <button  type="button" onClick={this.handleSubmit} >Sign in</button>
            </div>
            <p className="text-muted">© 2017–2021</p>
          </form>
        </div>
      </div>
    )
  }
}
 
ReactDOM.render(
  <Login />,
  document.getElementById('root')
);
