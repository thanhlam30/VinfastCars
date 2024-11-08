import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Homepage';
import "./App.css";
//pages


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="" element={<DefaultLayout/>}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
