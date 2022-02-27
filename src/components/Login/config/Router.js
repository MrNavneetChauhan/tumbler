import { BrowserRouter as Route,Routes } from "react-router-dom";
import SiginLogin from "../container/SiginLogin";

function AppRouter(){
    return (
        
      <Routes>
        <Route exact path="/" element={< SiginLogin/>}>
          <SiginLogin/>
        </Route>
      </Routes>
    

    )
}
export default AppRouter