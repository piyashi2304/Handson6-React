import { useContext } from "react"
import Store from "./StoreCompo";
import { useNavigate, useParams } from "react-router-dom";

function EditCompo(){
    const contextData = useContext(Store);
    const index = useParams().id
    const Navi = useNavigate();

    const updateobj ={
        Name: contextData.data[index].Name,
        Age: contextData.data[index].Age,
        Course: contextData.data[index].Course,
        Batch: contextData.data[index].Batch
    }

    const handlechange = (e) =>{
      updateobj[e.target.name] = e.target.value;
    }
    const handleSubmit = () =>{
        contextData.data[index] = updateobj;
       Navi('/student') 
    }
    
    return(
        <>
       <h1>This is Edit Compo</h1>
       <div className="displaybox">
       <div className="input-group">
       <label>Name </label>
       <input  type="text" placeholder={contextData.data[index].Name} name="Name" onChange={handlechange}/> <br />
       </div>
       <div className="input-group">
       <label>Age </label>
       <input type="number" placeholder={contextData.data[index].Age} name="Age" onChange={handlechange} /> <br />
       </div>
       <div className="input-group">
       <label>Course </label>
       <input  type="text" placeholder={contextData.data[index].Course} name="Course" onChange={handlechange} /><br />
       </div>
       <div className="input-group">
       <label>Batch </label>
       <input  type="number" placeholder={contextData.data[index].Batch} name="Batch" onChange={handlechange} /><br />
       </div>
       </div>
       <button onClick={handleSubmit}>Update</button>
       <button className="button2" onClick={() => Navi('/student')}>Back</button>
        </>
        
    )
}
export default EditCompo
