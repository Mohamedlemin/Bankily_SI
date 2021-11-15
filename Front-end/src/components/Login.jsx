import React, { Component } from 'react';
class Login extends Component {
    render() {
        return (<React.Fragment>
            <div className="authentication">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="card">
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <form className="card auth_form">

                                <div className="header">
                                    <img className="logo" src="assets/images/RCB.PNG" alt />
                                    <h5>S'identifier</h5>
                                </div>
                                <div className="body">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Username" />
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="zmdi zmdi-account-circle" /></span>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Password" />
                                        <div className="input-group-append">
                                            <span className="input-group-text"><a href="forgot-password.html" className="forgot" title="Forgot Password"><i className="zmdi zmdi-lock" /></a></span>
                                        </div>
                                    </div>
                                    <a href="/Statistiques" className="btn btn-primary btn-block waves-effect waves-light">SIGN IN</a>
                                </div>
                            </form>
                            <div className="copyright text-center">
                                2021 ©,<span><a href="#">RC-Bankily</a></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </React.Fragment>);
    }
}

export default Login;