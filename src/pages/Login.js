import React, {Fregment} from 'react';





class Login extends React.Component {

emailRef = React.createRef()
passwordRef = React.createRef()

handleSubmit = event =>{

  //1.阻止默認事件行為(自動刷新)
  event.preventDefault();

  //2.獲取表單數據
  const formData={
    email: this.emailRef.current.value,
    password: this.passwordRef.current.value
  }
  

  //3.處理登入服務

  //4.跳轉到首頁
  this.props.history.push('/');
}

    render(){
      return (
        <div className="login-wrapper">
          {/* <button id="btn">Click me</button> */}

          <form className="box login-box" onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="text" placeholder="Email" ref={this.emailRef} />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" type="text" placeholder="Password" ref={this.passwordRef}/>
              </div>
            </div>
            <div className="control">
              <button className="button is-fullwidth is-primary">Login</button>
            </div>
          </form>
        </div>
      );
    }
  }

  export default Login;