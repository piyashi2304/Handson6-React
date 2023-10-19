import React, { useContext } from 'react'
import Store from './StoreCompo'
import { useNavigate } from 'react-router-dom'
function NewStudent(){
    const DataContext = useContext(Store)
    const Navigate = useNavigate()
    const newobj = {
        Name:'',
        Age:'',
        Course:'',
        Batch:''
    }
    const handlechange =(e) =>{
        newobj[e.target.name] = e.target.value

    }
    const handleSubmit = () =>{
        DataContext.data.push(newobj)
        Navigate('/student')
    }
    return(
        <>
        <div className="displaybox">
       <div className="input-group">
         <label>Name</label>
       <input type="text" placeholder='Enter Name' name="Name" onChange={handlechange}/> <br />
       </div>
       <div className="input-group">
       <label>Age</label>
       <input type="number" placeholder='Enter Age' name="Age" onChange={handlechange} /> <br />
       </div>
       <div className="input-group">
       <label>Course</label>
       <input type="text" placeholder='Enter Course' name="Course" onChange={handlechange} /><br />
       </div>
       <div className="input-group">
       <label>Batch</label>
       <input type="number" placeholder='Enter Batch' name="Batch" onChange={handlechange} /><br />
       </div>
       </div>

       <button onClick={handleSubmit}>Update</button>
       <button className='button2' onClick={() => Navigate('/student')}>Back</button>
        </>
    )
}
export default NewStudent