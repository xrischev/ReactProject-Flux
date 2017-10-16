import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'
import petsActions from '../actions/PetsActions'
import PetData from '../data/PetData'


class PetStore extends EventEmitter{
    create(pet){
        PetData.create(pet)
            .then(data=>this.emit(this.eventTypes.PET_CREATED,data))
    }

    all(page){
        page=page||1
        PetData
            .all(page)
                .then(data=>this.emit(this.eventTypes.PET_FETCHED,data))
    }

    detailsPage(id){
       PetData
           .detailPage(id)
           .then(data=>this.emit(this.eventTypes.PETS_DETAILS_PAGE,data))
    }
    petComment(comment){
        PetData
            .petComment(comment)
            .then(data=>this.emit(this.eventTypes.PETS_COMMENT,data))
    }
    listComment(id){
        PetData
            .listComment(id)
            .then(data=>this.emit(this.eventTypes.PETS_LIST_COMMENT,data))

    }


    handleAction(action){
        switch (action.type){
            case petsActions.types.CREATE_PET:{

                this.create(action.pet)
                break
            }
            case petsActions.types.ALL_PETS:{
                this.all(action.page)
                break
            }
            case petsActions.types.PETS_DETAILS_PAGE:{
                this.detailsPage(action.id)
                break
            }
            case petsActions.types.PETS_COMMENT:{
                this.petComment(action.comment)
                break
            }
            case petsActions.types.PETS_LIST_COMMENT:{
                this.listComment(action.id)
                break
            }

            default:break
        }
    }
}
let petStore=new PetStore()
petStore.eventTypes={
    PET_CREATED:'pet_created',
    PET_FETCHED:'pets_fetched',
    PETS_DETAILS_PAGE:'pets_details_page',
    PETS_COMMENT:'pets_comment',
    PETS_LIST_COMMENT:'pets_list_comment'
}
dispatcher.register(petStore.handleAction.bind(petStore))

export default petStore