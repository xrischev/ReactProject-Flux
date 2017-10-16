import React,{Component} from 'react'
import CreatePetForm from './CreatePetsForm'
import petsActions from '../../actions/PetsActions'
import PetStore from '../../stores/PetStore'
import toastr from 'toastr'

class CreatePagePets extends Component{
    constructor(props){
        super(props)

        this.state={
            pets:{
                name:'roki',
                image:'dsadsadasddas',
                age:'4',
                type:'Cat',
                breed:'kon'
            },
            error:''
        }

        this.handlePetCreation=this.handlePetCreation.bind(this)

        PetStore.on(
            PetStore.eventTypes.PET_CREATED,
            this.handlePetCreation
        )
    }


    handlePetsChange(event){
        const target=event.target
        const field=target.name
        const value=target.value



        const pets=this.state.pets

        pets[field]=value

        this.setState({pets})
    }

    handlePetCreation(data){
        if(data.success){
            toastr.success(data.message)
            this.props.history.push(`/`)
        }
        else{
            this.setState({
                error:data.message
            })
        }
    }

    handlePetsForm(event){
        event.preventDefault()

        petsActions.addPets(this.state.pets)


    }

    render(){
        return(
            <CreatePetForm
                pets={this.state.pets}
                error={this.state.error}
                onChange={this.handlePetsChange.bind(this)}
                onSave={this.handlePetsForm.bind(this)}
            />
        )
    }
}

export default CreatePagePets