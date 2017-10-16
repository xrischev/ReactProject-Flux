import React,{Component} from 'react'
import PetStore from '../../stores/PetStore'
import MessageForm from './messageForm'
import petsActions from '../../actions/PetsActions'
import toastr from 'toastr'
import $ from 'jquery'


class petDetails extends Component{

    componentDidMount() {


        $('#proba').css('color','red')
    }
    constructor(props){
        super(props)

        this.state={
            pet:{},
            message:'',
            comments:[]

        }

        this.handlePetsFetching=this.handlePetsFetching.bind(this)
        this.listCommentDetailsPage=this.listCommentDetailsPage.bind(this)

        this.listCommentPet()

        PetStore.on(
            PetStore.eventTypes.PETS_DETAILS_PAGE,
            this.handlePetsFetching
        )



        PetStore.on(
            PetStore.eventTypes.PETS_COMMENT,
            this.handleComment
        )

        PetStore.on(
            PetStore.eventTypes.PETS_LIST_COMMENT,
            this.listCommentDetailsPage
        )



    }

    listCommentDetailsPage(data){
        this.setState({
            comments:data
        })
    }

    listCommentPet(){
        let id= this.props.match.params.id




        petsActions.listCommentPet(id)


    }

    componentWillUnmount(){
        PetStore.removeListener(
            PetStore.eventTypes.PETS_DETAILS_PAGE,
            this.handlePetsFetching
        )
    }

    handleComment(data){

        if(data.success){
            toastr.success(data.message)
        }
        else{
            toastr.error(data.message)
        }
    }

    handlePetsFetching(data){
        this.setState({
            pet:data
        })
    }


    handleMessageChange(event){
        const target=event.target

        const value=target.value.toString()




        let message=this.state.message

        message=value





        this.setState({message:message})
    }


    handleMessageForm(event){
        event.preventDefault()

       let id= this.props.match.params.id
       let commentState=this.state.message

        let comment={
            id:id,
            comment:commentState
        }


        petsActions.addComment(comment)

        this.listCommentPet()


    }


    render(){

        let petDetails=this.state.pet

        console.log(this.state.comments)


        let comments=this.state.comments.map((comment)=>
                <div>
                    <div key={comment.createdOn}>{comment.message}</div>
                </div>
        )







        return(
            <div>
                <h1 id="proba">Pet details</h1>
                <div>  <img src={petDetails.image} width="200px" height="200px"/></div>
                <h1>{petDetails.name}</h1>
                <h2>{petDetails.age}</h2>
                <h3 >{petDetails.type}</h3>

                <MessageForm
                    message={this.state.message}
                    onChange={this.handleMessageChange.bind(this)}
                    onSave={this.handleMessageForm.bind(this)}
                />



                <div>Comments</div>
                <div>{comments}</div>


            </div>
        )
    }
}

export default petDetails