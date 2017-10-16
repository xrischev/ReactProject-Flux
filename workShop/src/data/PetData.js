import Auth from '../components/users/Auth'



class PetData{
    static listComment(id){



        let token=Auth.getToken()

        return window.fetch(`http://localhost:5000/pets/details/${id}/comments`,{
            method:'GET',
            mode:'cors',
            body:JSON.stringify(),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization':`bearer ${token}`
            }
        })
            .then(res=>res.json())






    }

    static petComment(message){



        let token=Auth.getToken()


        return window.fetch(`http://localhost:5000/pets/details/${message.id}/comments/create`,{
            method:'POST',
            mode:'cors',
            body:JSON.stringify({message:message.comment}),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization':`bearer ${token}`
            }
        })
            .then(res=>res.json())
    }


    static detailPage(id){



        let token=Auth.getToken()



        return window.fetch(`http://localhost:5000/pets/details/${id}`,{
            method:'GET',
            mode:'cors',
            body:JSON.stringify(),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization':`bearer ${token}`
            }
        })
            .then(res=>res.json())
    }

    static all(page){

        page=page||1





        return window.fetch(`http://localhost:5000/pets/all?page=${page}`,{
            method:'GET',
            mode:'cors',
            body:JSON.stringify(),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',

            }
        })
            .then(res=>res.json())
    }

    static create(pet){

        let token=Auth.getToken()



        return window.fetch('http://localhost:5000/pets/create',{
            method:'POST',
            mode:'cors',
            body:JSON.stringify(pet),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization':`bearer ${token}`
            }
        })
            .then(res=>res.json())
    }

}

export default PetData