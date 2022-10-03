import React from 'react'

export default function EditModal({editid, notes, setNotes}) {
  const updatehandler=()=>{
    const updatenotes=notes.map((ele)=>{
      if(ele.id===editid){
        return ( {
          ...ele, title: document.getElementById("edittitle").value,
        desc : document.getElementById("editdesc").value
      })}
      else {
        return ele;
      }
    })
    setNotes(updatenotes);
  }
  return (
    <div>
 



<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Notes</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form >
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="edittitle" placeholder='Enter Title'/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Description</label>
    <textarea name='desc' className="form-control" id="editdesc" placeholder='Enter descriptions' rows={10}/>
  </div>
 
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primaryary" data-bs-dismiss="modal" onClick={updatehandler}>Edit Notes</button>
       
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
