import React,{useState}   from 'react';
import Signup from '../loginsignup/Signup';  //comp/loginsup/singup
import Login from '../loginsignup/Login';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "./SiginLogin.css"
import Cart from "../loginsignup/Cart"

// import {Grid , TextField ,Checkbox,Link, Button, FormControlLabel} from "@material-ui/core"



function SiginLogin() {
  const [value,setValue] = useState(0)
  
  const handleChange = (event, newValue) => {
    setValue(newValue);

}


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    
    
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  
  );
}
  return (
    <> <div className='heading'>
    <h1>My Account</h1>
  </div>
   <div className='logcheck'>
<Paper className='paper' >
  <Tabs
    value={value}
    indicatorColor="primary"
    textColor="primary"
    onChange={handleChange}
    aria-label="disabled tabs example"
  >
    <Tab label={<span className="tabLabel">Login</span>} />
    
    <Tab label={<span className="tabLabel">Create Account</span>} />
   <hr />
  </Tabs>
  <TabPanel value={value} index={0}>
  <Login handleChange={handleChange}/>
  
</TabPanel>
<TabPanel value={value} index={1}>
<Signup/>
</TabPanel>
</Paper>
<div>
<Cart/>
</div>
</div>
</>
   )
}



export default SiginLogin;