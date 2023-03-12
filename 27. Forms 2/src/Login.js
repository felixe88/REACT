import React from "react";

class Login extends React.Component {
    state = {
      username: "",
      password: "",
      remember: false,
    };
handleChange = (event) => {
    const name = event.target.name;
    const type = event.target.type;
    const value = event.target.value;
    const checked = event.target.checked;

    this.setState({
        [name]: type === 'checkbox' ? checked : value
    })
}
componentDidUpdate(){
    console.log(this.state)
}
  render() {
    return (
      <div>
        <input name="username"  onChange={this.handleChange}></input>
        <input name="password" type='password'  onChange={this.handleChange}></input>
        <input name="remember" type="checkbox"  onChange={this.handleChange}/>

        <h3>Username:{this.state.username}</h3>
        <h3>Password:{this.state.password}</h3>
      </div>
    );
  }
}
export default Login;
