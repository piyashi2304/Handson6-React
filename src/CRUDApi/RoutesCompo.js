import React, { useState } from "react"
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Home from "./Home"
import Student from "./Student"
import Contact from "./Contact"
import Store from "./StoreCompo"
import EditCompo from "./EditCompo"
import NewStudent from "./NewStudent"
function RoutesCompo(){
    const [stuData,setstuData] =useState([
        {Name:'Raktim',Age:'27',Course:'MBBS',Batch:'2024'},
        {Name:'Riktim',Age:'25',Course:'Engineering',Batch:'2022'},
        {Name:'Gini',Age:'23',Course:'Adocate',Batch:'2020'},
        {Name:'Tithi',Age:'21',Course:'Teacher',Batch:'2018'},
        {Name:'Sourav',Age:'20',Course:'Journalism',Batch:'2017'},
        {Name:'Payel',Age:'18',Course:'B-Pharma',Batch:'2024'}
    ])
    return(
        <>
          <BrowserRouter>
          <div className="navbar">
          <Link className="link" to='/'>Home </Link>
          <Link className="link" to='/student'>Student </Link>
          <Link className="link" to='/contact'>Contact </Link>
          </div>
          
          <Routes>
            <Route path="/" element ={<Home />}/>
            <Route path="/student" element ={
            <Store.Provider value={{data:stuData,setData:setstuData}}>
            <Student />
            </Store.Provider>
            }/>
            <Route path="/editstudent/:id" element ={
              <Store.Provider value={{data:stuData,setData:setstuData}}>
                <EditCompo />
              </Store.Provider>
            } />
            <Route path="/newstudent" element= {
            <Store.Provider value={{data:stuData,setData:setstuData}}>
              <NewStudent />
            </Store.Provider>
            } />
            <Route path="/contact" element ={<Contact />}/>
          </Routes>
          </BrowserRouter>
        </>
    )
}
export default RoutesCompo