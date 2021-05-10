



import { useContext,useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserContext from './usercontext';


export default function UserCreate() {
    let UserData = useContext(UserContext)
    let [firstName, setfirstName] = useState("")
    let [lastName, setlastName] = useState("")
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")

    let UserSubmit =async (e) => {
        e.preventDefault()
        UserData.setuserList([...UserData.userList,

        {
            firstName,
            lastName,
            email,
            password
        }])

        await fetch("https://5ff9537617386d0017b51c4a.mockapi.io/test/users",{

        method :"POST",
        body : JSON.stringify({
            firstName,
            lastName,
            email,
            password
        
        }),
        headers : {
            "Content-type" : "application/json"
        }
        })
    
    }

// Components lif cycle

//creating 
useEffect(()=>{
    console.log("During creation")
},[])


useEffect(()=>{
    console.log("Just before destroy")
    return () => {
        console.log("During the destroy")
    }
},[])


useEffect(()=>{
    console.log('During the props change')

},[firstName])


    return <>
        <div className="container">

            <form onSubmit={UserSubmit}>
                <div className="row">
                    <div className="col-lg-12">
                        <h1>User Form</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <label>First Name</label>
                        <input className="form-control" value={firstName} onChange={(e) => setfirstName(e.target.value)}></input>
                    </div>

                    <div className="col-lg-6">
                        <label>Last Name</label>
                        <input className="form-control" value={lastName} onChange={(e) => setlastName(e.target.value)}></input>

                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <label>Email</label>
                        <input className="form-control" value={email} onChange={(e) => setemail(e.target.value)} ></input>
                    </div>

                    <div className="col-lg-6">
                        <label>Password</label>
                        <input className="form-control" value={password} onChange={(e) => setpassword(e.target.value)}></input>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-6">
                        <input className="btn btn-primary" type="submit" value="Submit"></input>
                    </div>
                </div>
            </form>
        </div>

    </>
}