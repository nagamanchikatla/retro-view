import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {LocalizationProvider} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Nav from './Components/Nav';
import AddRetro from './pages/AddRetro';
import AddFeedback  from './pages/AddFeedback';
import ViewAll from './pages/ViewAll';
import ViewByDate from './pages/ViewByDate';
import Home from './pages/Home';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">
    <BrowserRouter>
      <Nav></Nav>
      <main className='main-display'>
        <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/addretro" exact element={<AddRetro />} />
      <Route path="/addfeedback" exact element={<AddFeedback />} />
      <Route path="/viewall" exact element={<ViewAll />} />
      <Route path="/viewbydate" exact element={<ViewByDate />} />
      </Routes>
      </main>
      {/* <AddRetro></AddRetro>
      <AddFeedback></AddFeedback>
      <ViewAll></ViewAll>
      <ViewByDate></ViewByDate> */}
      </BrowserRouter>
    </div>
    </LocalizationProvider>
  );
}

export default App;
