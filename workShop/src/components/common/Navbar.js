import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Aut from '../users/Auth'
import UserStore from '../../stores/UserStore'

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            username:Aut.getUser().name
        }

        this.handleUserLoggedIn=this.handleUserLoggedIn.bind(this)

        UserStore.on(
            UserStore.eventTypes.USER_LOGGED_IN,
            this.handleUserLoggedIn
        )
    }

    handleUserLoggedIn(data){
        if(data.success){
            this.setState({
                username:data.user.name
            })
        }
    }


    render(){
        return(
            <div className="menu">
                {Aut.isUserAuthenticated()?(
                <div>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" >animals site</a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"> <Link to="/">Home</Link></li>
                                <li className="active"> <Link to="/pets/add">Create Pets</Link></li>
                                <li className="active"> <Link to="/users/logout">Logout</Link></li>
                                <li><a >Welcome {this.state.username}</a></li>

                            </ul>
                        </div>
                    </nav>
                </div>



                )
                    :(
                <div>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" >animals site</a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"> <Link to="/">Home</Link></li>
                                <li className="active"><Link to="/users/register">Register</Link></li>
                                <li className="active"><Link to="/users/login">Login</Link></li>

                            </ul>
                        </div>
                    </nav>
                </div>


                )
                }
            </div>
        )
    }
}

export default Navbar