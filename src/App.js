import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shared from './pages/Shared';
import Landing from './pages/Landing';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Shared/>}>
        <Route index element={<Landing/>}/>

      </Route>
    </Routes>
   
   
   </BrowserRouter>
  );
}

export default App;
