import React from 'react'
import {Switch,Route} from 'react-router-dom'
import RegisterPage from '../users/RegisterPage'
import LoginPage from '../users/LoginPage'
import ListPetsPage from '../pets/ListPetsPage'
import PrivateRoute from './PrivateRoute'
import LogoutPage from '../users/LogoutPage'
import CreatePagePets from '../pets/CreatePagePets'
import petDetails from '../pets/petDetailsPage'


const Routes=()=>(



    <Switch>
        <Route path="/" exact component={ListPetsPage}/>
        <Route path="/users/register"  component={RegisterPage}/>
        <Route path="/users/login" exact component={LoginPage}/>
        <PrivateRoute path="/users/logout" component={LogoutPage}/>
        <PrivateRoute path="/pets/add" component={CreatePagePets}/>
        <PrivateRoute path="/pets/details/:id"component={petDetails}/>
    </Switch>
)

export default Routes