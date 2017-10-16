import React from 'react'

const MessageForm=(props)=>(
    <div className="row">
        <div className="center-block">
            <h1>Message Form</h1>
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="email">Message</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               type="text"
                               name="message"
                               placeholder="message"
                               value={props.message}
                               onChange={props.onChange}
                        />
                    </div>
                </div>


                <input className="btn-success"  type="submit" onClick={props.onSave}/>
            </form>
        </div>
    </div>

)

export default MessageForm