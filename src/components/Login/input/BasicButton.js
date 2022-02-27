import * as React from "react"
import Button from '@material-ui/core/Button'



function BasicButton({title,onClick}) {
  const btn ={margin:"15px 0"}
  return (
    <Button onClick={onClick} style={btn} fullWidth={true} type='submit' color='primary' variant="contained"  >{title}</Button>
  )
}

export default BasicButton