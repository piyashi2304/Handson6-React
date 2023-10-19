import { useContext } from "react"
import Store from "./StoreCompo"
import { Link, useNavigate } from "react-router-dom"


function Student(){
    
    const contextData = useContext(Store)
    const Navi = useNavigate()
    console.log(contextData)
    
    return(
        <>
        <h1 className="tittle">Student Details</h1>
        <button className="Addnew" onClick={() => Navi('/newstudent')}>Add New Student</button>
        <table className="chart"  align="center" >
            <thead>
                <tr className="heading">
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
            </thead>
            
              <tbody>
                {contextData.data.map((item,index) => {
                    return(
                        <tr key={index}>
                            <td>{item.Name}</td>
                            <td>{item.Age}</td>
                            <td>{item.Course}</td>
                            <td>{item.Batch}</td>
                            <td>
                                <Link to={`/editstudent/${index}`}>Edit</Link>
                            </td>

                        </tr>
                    )
                })}
            </tbody> 
            
        </table>
        </>
    )
}
export default Student