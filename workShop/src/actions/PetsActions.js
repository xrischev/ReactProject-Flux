import dispatcher from '../dispatcher'

const petsActions={
    types:{
        CREATE_PET:'CREATE_PET',
        ALL_PETS:'ALL-PETS',
        PETS_DETAILS_PAGE:'PETS_DETAILS_PAGE',
        PETS_COMMENT:'PETS_COMMENT',
        PETS_LIST_COMMENT:'PETS_LIST_COMMENT'
    },

    addPets(pet){
        dispatcher.dispatch({
            type:this.types.CREATE_PET,
            pet
        })
    },
    all(page){
        page=page||1
        dispatcher.dispatch({
            type:this.types.ALL_PETS,
            page
        })
    },
    detailsPage(id){
        dispatcher.dispatch({
            type:this.types.PETS_DETAILS_PAGE,
            id
        })
    },
    addComment(comment){
        dispatcher.dispatch({
            type:this.types.PETS_COMMENT,
            comment
        })
    },
    listCommentPet(id){
        dispatcher.dispatch({
            type:this.types.PETS_LIST_COMMENT,
            id
        })
    }



}

export default petsActions