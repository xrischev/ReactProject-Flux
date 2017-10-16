import React from 'react'

const RegisterForm=(props)=>(
<div className="row">
        <div className="center-block">
                <h1>Register</h1>
                <form className="form-horizontal">
                        <div>{props.error}</div>
                        <div className="form-group">
                                <label className="col-sm-2 control-label" htmlFor="email">E-mail</label>
                                <div className="col-sm-10">
                                        <input className="form-control"
                                               type="email"
                                               name="email"
                                               placeholder="E-mail"
                                               value={props.user.email}
                                               onChange={props.onChange}
                                        />
                                </div>
                        </div>
                        <div className="form-group">
                                <label className="col-sm-2 control-label" htmlFor="name">Name</label>
                                <div className="col-sm-10">
                                        <input className="form-control"
                                               type="text"
                                               name="name"
                                               placeholder="name"
                                               value={props.user.name}
                                               onChange={props.onChange}
                                        />
                                </div>
                        </div>

                        <div className="form-group">
                                <label className="col-sm-2 control-label" htmlFor="password">Password</label>
                                <div className="col-sm-10">
                                        <input className="form-control"
                                               type="password"
                                               name="password"
                                               placeholder="password"
                                               value={props.user.password}
                                               onChange={props.onChange}
                                        />
                                </div>
                        </div>
                        <div className="form-group">
                                <label className="col-sm-2 control-label" htmlFor="confirmPassword">Confirm Password</label>
                                <div className="col-sm-10">
                                        <input className="form-control"
                                               type="password"
                                               name="ConfirmPassword"
                                               placeholder="Confirm password"
                                               value={props.user.confrimPassword}
                                               onChange={props.onChange}
                                        />
                                </div>
                        </div>
                        <br/>
                        <input className="btn-success"  type="submit" onClick={props.onSave}/>
                </form>
        </div>
</div>

    )

export default RegisterForm