import React,{Component} from 'react'
import LoginFrom from './loginForm'
import userActions from '../../actions/UsersActions'
import userStore from '../../stores/UserStore'
import Auth from './Auth'
import toastr from 'toastr'

class LoginPage extends Component{
    constructor(props){
        super(props)

        this.state={
            user:{
                email:'deyan@abv.bg',
                password:'1234',
            },
            error:''
        }

        this.handleUserlLoggedIn=this.handleUserlLoggedIn.bind(this)

        userStore.on(
            userStore.eventTypes.USER_LOGGED_IN,
            this.handleUserlLoggedIn)

    }

    handleUserChange(event){
        const target=event.target
        const field=target.name
        const value=target.value



        const user=this.state.user

        user[field]=value

        this.setState({user})

    }

    handleUserForm(event){
        event.preventDefault()

       userActions.login(this.state.user)

    }

    handleUserlLoggedIn(data){
        console.log(data)

        if(data.success){


            toastr.success(data.message)
            Auth.AuthenticateUser(data.token)
            Auth.saveUser(data.user)
            this.props.history.push('/')
        }
        else{
            this.setState({
                error:data.message
            })
            return
        }
    }


    render(){
        return(
            <div>
                <LoginFrom
                    user={this.state.user}
                    error={this.state.error}
                    onChange={this.handleUserChange.bind(this)}
                    onSave={this.handleUserForm.bind(this)}
                />

            </div>
        )
    }
}

export default LoginPage