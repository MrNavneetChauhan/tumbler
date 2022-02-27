import React, {useState} from 'react'
import "./style/Login.css"
// import {Link } from "react-router-dom"
import Input from '../input/Input'
import BasicButton from '../input/BasicButton'
import {Grid , Paper,Checkbox, FormControlLabel} from "@material-ui/core"
import {createUserWithEmailAndPassword,auth} from "../config/Firebase"
import { useNavigate } from 'react-router-dom';
function Signup() {
 
const [firstname,setFirstname] = useState("")
const [lastname,setLastname] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const navigation = useNavigate()


const register =()=>{
  console.log(firstname,lastname,email,password)
  createUserWithEmailAndPassword(auth,email,password).then((res)=>{
    console.log("aagya",res)
    navigation.push('/')
  })
.catch((err)=>{
  console.log(err)
})
}

  return (
    <>
    {/* <div className='heading'>
      <h1>My Account</h1>
    </div> */}
    {/* <div className='logcheck'> */}
    <div>
      <Grid>
        <Paper elevation={10} className='paperStyle'>
        <Grid align='center'>
        <h2>Create Account</h2>
        </Grid>
      <p><sup>*</sup>First Name</p>
      <Input value={firstname} onChange={(e)=>setFirstname(e.target.value)} label="firstname" type="text"/>
       <p><sup>*</sup>Last name</p>
       <Input  value={lastname} onChange={(e)=>setLastname(e.target.value)} label="Lastname" type="text"/>
       <p><sup>*</sup>Phone</p>
       <Input label="phone no" type="number"/>
       <p><sup>*</sup>Email</p>
       <Input value={email} onChange={(e)=>setEmail(e.target.value)} label="email" type="email"/>
       <p><sup>*</sup>Confirm Email</p>
       <Input  label="email" type="email"/>
       <p><sup>*</sup>Password</p>
       <Input value={password} onChange={(e)=>setPassword(e.target.value)} label="password" type="password"/>
       <p><sup>*</sup>Confirm Password</p>
       <Input label="password" type="password"/>
       
       <FormControlLabel control={
         <Checkbox defaultChecked
        color="primary"
        
      />

       }
       label="Sign up for Emails"
       
    
       />
       
      
       
      
           
      <BasicButton onClick={register}  title="Create Account"/>
        
  
        </Paper>
      </Grid>
    </div>
    <div>

    </div>
    {/* </div> */}
    </>
  )
}

export default Signup