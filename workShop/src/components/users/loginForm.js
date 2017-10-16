import React from 'react'

const LoginForm=(props)=>(
    <div className="row">
        <div className="center-block">
            <h1>Login</h1>
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
                <br/>
                <input className="btn-success"  type="submit" onClick={props.onSave}/>
            </form>
        </div>
    </div>

)

export default LoginForm