import {User} from './components/User';
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {addUser} from "./redux/userSlice.js"
import './App.css';

const App = () => {
  const dispatch= useDispatch()
  useEffect (()=>{
    fetch("https://api.github.com/users/carlosdiazgirol")
    .then((res) =>res.json())
    .then((data)  => dispatch(addUser(data)));
  }, []);

  return (
  <>
    <User/>
  </>
  );
}

export default App;

