import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <SideBar />
        <div className="page-content">
          <Route path="/messages" component={Dialogs}/>
          <Route path="/profile" component={Profile}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
