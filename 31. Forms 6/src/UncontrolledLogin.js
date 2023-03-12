import React from "react";

class UncontrolledLogin extends React.Component {
  constructor(props) {
    super(props);
    this.usernameInput = React.createRef();
  }

  componentDidMount() {
    this.usernameInput.current.focus();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;
    this.props.onLogin({
      username: username,
      password: password,
      remember: remember,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="username" ref={this.usernameInput} />
          <input name="password" type="password" />
          <input name="remember" type="checkbox" />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default UncontrolledLogin;