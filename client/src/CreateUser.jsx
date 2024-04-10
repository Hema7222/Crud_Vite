import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CreateUser=()=>{
   const [name,setName]=useState()
   const [email,setEmail]=useState()
   const [age,setAge]=useState()

   const navigate=useNavigate();

   const handlesubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/createUser',{name,email,age})
    .then(result=>{console.log(result)
      navigate('/')
   })
    .catch(err=>console.log(err))

   }




    return(
        <div>
          <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
               <div className="w-50 bg-white rounded p-3">
                   <form onSubmit={handlesubmit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                      Name:
                      <input type="text" placeholder="Enter Name" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} />
                    </div>
                    <div className="mb-2">
                      Email:
                      <input type="text" placeholder="Enter Email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div className="mb-2">
                      Age:
                      <input type="text" placeholder="Enter Age" className="form-control" value={age} onChange={(e)=>{setAge(e.target.value)}} />
                    </div>
                    <button type="submit" className="btn btn-success" >Submit</button>
                   </form>
               </div>
          </div>     
        </div>
    )
}
export default CreateUser