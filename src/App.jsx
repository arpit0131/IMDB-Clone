import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import WatchList from './components/WatchList';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import User from './components/User';
import UserRedux from './components/UserRedux';

const App = () => {
  return (
    <>
      <Provider store={store}>
        {/* <UserRedux/> */}
        {/* <User/> */}
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/watch-list' element={<WatchList />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
