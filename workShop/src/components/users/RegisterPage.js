import React,{Component} from 'react'
import RegisterForm from './RegisterForm'
import userActions from '../../actions/UsersActions'
import userStore from '../../stores/UserStore'
import toastr from 'toastr'

class RegisterPage extends Component{
    constructor(props){
        super(props)

        this.state={
            user:{
                email:'deyan@abv.bg',
                password:'1234',
                confirmPassword:'1234',
                name:'deyan'
            },
            error:''
        }

        this.handleUserRegistration=this.handleUserRegistration.bind(this)

        userStore.on(
            userStore.eventTypes.USER_REGISTERED,
            this.handleUserRegistration)
    }

    componentWillUnmount(){
        userStore.removeListener(
            userStore.eventTypes.USER_REGISTERED,
            this.handleUserRegistration
        )
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
        if(!this.validateUser()){
            return
        }

        userActions.register(this.state.user)

    }

    handleUserRegistration(data){

        if(!data.success){
            this.setState({
                error:data.message
            })
        }
       else{
            toastr.success(data.message)
            this.props.history.push('/users/login')
        }
    }

    validateUser(){
        const user=this.state.user

        let formIsValid=true
        let error=''

        if(user.password!==user.confirmPassword){
            error='Password and confrim are not match'
            formIsValid=false
        }

        if(error) {
            this.setState({
                error:error
            })
        }


        return formIsValid

    }

    render(){
        return(
            <div>
                <RegisterForm
                    user={this.state.user}
                    error={this.state.error}
                    onChange={this.handleUserChange.bind(this)}
                    onSave={this.handleUserForm.bind(this)}
                />
            </div>


        )
    }
}

export default RegisterPage