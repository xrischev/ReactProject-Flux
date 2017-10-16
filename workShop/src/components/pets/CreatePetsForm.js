import React from 'react'

const CreatePetForm=(props)=>(
    <div className="row">
        <div className="center-block">
            <h1>Add pets</h1>
            <form className="form-horizontal">
                <div>{props.error}</div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="email">Name</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               type="text"
                               name="name"
                               placeholder="name"
                               value={props.pets.name}
                               onChange={props.onChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="name">Image</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               type="url"
                               name="image"
                               placeholder="img"
                               value={props.pets.img}
                               onChange={props.onChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="password">age</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               type="number"
                               name="age"
                               placeholder="age"
                               value={props.pets.age}
                               onChange={props.onChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="password">age</label>
                    <div className="col-sm-10">
                        <select name="type" value={props.pets.type}  onChange={props.onChange}>
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="password">Breed</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               type="text"
                               name="breed"
                               placeholder="breed"
                               value={props.pets.breed}
                               onChange={props.onChange}
                        />
                    </div>
                </div>


                <br/>
                <input className="btn-success"  type="submit" onClick={props.onSave}/>
            </form>
        </div>
    </div>

)

export default CreatePetForm