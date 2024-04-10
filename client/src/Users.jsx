import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Users=()=>{
    const [users,setUsers]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(result=>setUsers(result.data))
        .then(err=>console.log(err))
    },[])

    const handleDelete=(id)=>{
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res=>{console.log(res)
            window.location.reload()
        })
        .catch((err)=>console.log(err))
    }
    return(
        <div>
            <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
               <div className="w-50 bg-white rounded p-3">
                    <Link to = '/create' className='btn btn-success' >Add User</Link>       
                 <table className="table">
                     <thread>
                             <tr>
                             <th>Name</th>
                             <th>Email</th>
                             <th>Age</th>
                             <th>Action</th>
                            </tr>
                     </thread>

                    <tbody>
                         {
                            users.map((user)=>{
                                return<tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                     <td>
                                        <Link to={'/update/$user._id'} className="btn btn-success">Update</Link>
                                        <button className="btn btn-danger" onClick={(e)=>{handleDelete(user._id)}}>Delete</button>

                                     </td>
                                </tr>
                            })
                        }
                    </tbody>

                </table>

               </div>
            </div>
        </div>
    )
}
export default Users;