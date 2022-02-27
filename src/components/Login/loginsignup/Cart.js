import React from 'react'
import "./style/Login.css"
import {Grid , TextField ,Checkbox,Paper, FormControlLabel} from "@material-ui/core"
import BasicButton from "../input/BasicButton"
function Cart() {
  
  return (
    <div>
    <Grid>
    
        <Paper elevation={10} className='papercart'>
        <h3>Check Order</h3>
        <Grid align='center'>
        <p>See your order even if you are not a registered user.Enter the order number and the billing address ZIP code.</p>
        </Grid>
      <p><sup>*</sup>Order Number</p>
       <TextField className='text' id="outlined-basic" label="username" type="text" variant="outlined"  fullWidth required></TextField>
       <p><sup>*</sup>Order Email</p>
       <TextField id="outlined-basic" label="password" type="password" variant="outlined"  fullWidth required/>

       <p><sup>*</sup>Billing Zip code</p>
       <TextField id="outlined-basic" label="password" type="password" variant="outlined"  fullWidth required/>
       
       <FormControlLabel control={
         <Checkbox defaultChecked
        color="primary"
        
      />

       }
      
    
       />
       
     
      
       
      
           
       <BasicButton title="Cart"/>
        
  
        </Paper>
      </Grid>

    </div>
  )
}

export default Cart