import React,{Component} from 'react'
import queryString from 'query-string'
import petsActions from '../../actions/PetsActions'
import PetStore from '../../stores/PetStore'
import Auth from '../../components/users/Auth'

class ListPetsPage extends Component{
    constructor(props){
        super(props)

        const query=queryString.parse(this.props.location.search)
        const page=parseInt(query.page,10)||1

        this.state={
            pets:[],
            page:page
        }

        this.handlePetsFetching=this.handlePetsFetching.bind(this)

        PetStore.on(
            PetStore.eventTypes.PET_FETCHED,
            this.handlePetsFetching
        )

    }

    handlePetsFetching(data){
       this.setState({
           pets:data
       })
    }

    componentDidMount(){
        petsActions.all(this.state.page)
    }

    goToPrevPage(){
        let page=this.state.page
        page--

        if(page===0){
            return
        }

        this.setState({
            page
        })

        this.props.history.push(`/?page=${page}`)

        petsActions.all(page)

    }

    goToNextPage(){
        if(this.state.pets.length===0){
            return
        }

        let page=this.state.page
        page++

        this.setState({
            page
        })

        this.props.history.push(`/?page=${page}`)

        petsActions.all(page)
    }

    showDetailsPge(id){
       petsActions.detailsPage(id)

        this.props.history.push(`/pets/details/${id}`)
    }

    render(){



        let pets;

        if(this.state.pets.length===0){
            pets='no have animal'
        }
        else{
            pets=this.state.pets.map(pet=>{
                return <div> <div key={pet.id}>{pet.id} - {pet.name}</div>
                    <img src={pet.image} width="200px" height="200px"/>
                    <button onClick={() => this.showDetailsPge(pet.id)}>Details Page</button></div>

            })
        }



       if( Auth.isUserAuthenticated()){
           return(
               <div>
                   <h1>All Pets</h1>
                   {pets}

                   <div>
                       <button onClick={this.goToPrevPage.bind(this)}>Prev</button>
                       <button onClick={this.goToNextPage.bind(this)}>Next</button>
                   </div>
               </div>
           )
       }
       else{
           return(
               <div>trqbva da si napravite reg</div>
           )
       }




    }
}

export default ListPetsPage