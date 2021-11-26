import React from 'react';
import Login from "api/Owners"

class LoginForm extends React.Component {
    LoginFormSubmit (e) {
        const name = document.getElementsByName("name")[0].value
        const password = document.getElementsByName("password")[0].value
        Login(name, password)
    }

    render() {
        return (
          <div class="container" style={{marginTop: "100px"}}>
              <label>
                id:
                <input type="text" name="name" value="admin" />
                password:
                <input type="password" name="password" value="admin" />
              </label>
              <button onClick={this.LoginFormSubmit}>ログイン</button>
          </div>
        )
    }
}
export default LoginForm;
