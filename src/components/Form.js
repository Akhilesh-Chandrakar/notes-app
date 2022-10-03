import React from 'react'

export default function Form({title, setTitle, desc, setDesc, notes, setNotes}) {
    const inputhandler=(e)=>{
        if(e.target.id==="title"){
        setTitle(e.target.value)
        }
        else {
            setDesc(e.target.value)
        }
    }
    const addnoteshandler=(e)=>{
        e.preventDefault();
        if(title!=="" && desc!==""){
          setNotes((note) =>{
            return(
                [...note, {title:title , desc:desc, id:new Date().getTime()}]
            )
        }
        )
        }
       
        setTitle("");
        setDesc("");
    }
  return (
    <div>
      <div className="container my-3" >
    <div className="row justify-content-center" >
      <div className="col-md-10">
        <h2 className=" row justify-content-center"> ADD NOTES</h2>
      <form style={{ border:"2px solid gray", borderRadius:"10px", padding :"30px"}}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" placeholder='Add Title' value={title} onChange={inputhandler}/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Description</label>
    <textarea name='desc' className="form-control" id="desc" placeholder='Add descriptions' rows={10} value={desc} onChange={inputhandler}/>
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={addnoteshandler}>+</button>
</form>
      </div>
    </div>
   </div>
    </div>
  )
}
