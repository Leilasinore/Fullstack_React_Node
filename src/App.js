import {Landing,Dashboard, Register,Error} from "./pages/index";
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {

  return (
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/landing" element={<Landing/>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
      
    
  );
  
 
}

export default App;
