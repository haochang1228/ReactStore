import React, {Fregment} from 'react';





class Login extends React.Component {

//受控組件

//非受控組件
state = {
  email: '',
  password:''
};

emailRef = React.createRef()
passwordRef = React.createRef()

handleSubmit = event =>{

  //1.阻止默認事件行為(自動刷新)
  event.preventDefault();

  //2.獲取表單數據
  console.log(this.state);

  //3.處理登入服務

  //4.跳轉到首頁
  //this.props.history.push('/');
}

handleChange = e =>{
  console.log(e.target.value);
  console.log(e.target.name);
  this.setState({
    [e.target.name]: e.target.value
  })
}

    render(){
      return (
        <div className="login-wrapper">
          {/* <button id="btn">Click me</button> */}

          <form className="box login-box" onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" 
                       type="text" 
                       placeholder="Email"
                       name="email"
                       value={this.state.email}
                       onChange={this.handleChange}          
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" 
                       type="text" 
                       placeholder="Password" 
                       name="password"
                       value={this.state.password}
                       onChange={this.handleChange}  
                />
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