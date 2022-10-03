import React from 'react';

export default function Notes({element, notes, setNotes, setid}) {
  const removehandler=(id)=>{
     const newnotes=notes.filter((ele)=>{
        if(ele.id!==id){
          return ele;
        }
     })
     setNotes(newnotes);
  }
  const edithandler=(id)=>{
    setid(id);
    notes.filter((ele)=>{
      if(ele.id===id){
        document.getElementById("edittitle").value=ele.title;
        document.getElementById("editdesc").value=ele.desc;
      }
    })
  }
  return (
    <div>
    
    <div className="card-body "style={{textTransform:"capitalize"}}>
      <h5 className="card-title">{element.title} </h5>
      <p className="card-text">{element.desc}</p>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>edithandler(element.id)}>
Edit
</button>
      <button className="btn btn-danger mx-2" onClick={()=>{removehandler(element.id)}}>Remove</button>
    </div>
  </div>
  )
}
