// import { Paper } from '@material-ui/core'
// import React from 'react'
import BasicButton from "../input/BasicButton"
import Input from '../input/Input'
import {auth,signInWithEmailAndPassword} from "../config/Firebase"

import "./style/Login.css"
import {Grid ,Container, Paper ,Checkbox,Link, FormControlLabel} from "@material-ui/core"
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react'
function Login() {
  const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const navigation = useNavigate()


const login =()=>{
  console.log(email,password)
  signInWithEmailAndPassword(auth,email,password).then((res)=>{
    console.log("aagya",res)
    // push the link here 
    navigation.push('/')
  })
.catch((err)=>{
  console.log(err)
})
}

  const link ={margin:"0 165px" }
  return (
    <>
   
   
    <div>
    <Container>
      <Grid>
        <Paper elevation={10} className='paperStyle'>
        <Grid align='center'>
        <h2>Login</h2>
        </Grid>
      <p><sup>*</sup>Email</p>
      <Input value={email} onChange={(e)=>setEmail(e.target.value)} label="email" type="email"/>
       <p><sup>*</sup>Password</p>
       <Input value={password} onChange={(e)=>setPassword(e.target.value)} label="password" type="password"/>
       <FormControlLabel control={
         <Checkbox defaultChecked
        color="primary"
        
      />

       }
       label="Remember me"
       
    
       />
       
       <Link href="#" style={link} fullWidth>
    forgot Password
  </Link>
      
       
      
  <BasicButton onClick={login} title="Login"/>
        
  
        </Paper>
      </Grid>
      </Container>
    </div>
    <div>

    </div>
    
    </>
  )
}

export default Login