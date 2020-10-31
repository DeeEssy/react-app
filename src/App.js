import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/sideBar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className="page">
      <Header />
      <SideBar />
      <Profile />
    </div>
  );
};

export default App;
