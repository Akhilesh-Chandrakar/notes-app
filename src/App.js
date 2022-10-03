import React , {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Notes from './components/Notes';
import EditModal from './components/EditModal';
function App() {
  const [title, setTitle]=useState("");
  const [desc, setDesc]=useState("");
  const [notes, setNotes] = useState(getfromls);
  const [editid, setid]=useState('');
  localStorage.setItem("notes", JSON.stringify(notes))
  return (
    <>
    <EditModal editid={editid} notes={notes} setNotes={setNotes}/>
    <Form title={title} setTitle={setTitle}
    desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes}/>
    <div className="container">
      <div className="row justify-content-center" >
        <div className="col-md-10">
          <h1 className="mb-3">Your Notes</h1>
       {
        notes.length===0? 
        <div>
        <div className="card-body ">
        <h5 className="card-title">Message</h5>
        <p className="card-text">No Notes are available. Please add Notes to read and record</p>
        </div>

        </div>:notes.map((element)=>{
          return (
            <Notes element={element} key={element.id} notes={notes} setNotes={setNotes} setid={setid}/>
          )
        })
       }
        </div>
      </div>
    </div>
    

    </>
   
  );
  function getfromls(){
    const note=JSON.parse(localStorage.getItem("notes"))
    if(note){
      return note;
    }
      else {
        return [];
      }
    }
   }


export default App;
