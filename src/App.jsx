import {User} from './components/User';
import {Buscador} from './components/Buscador';
import {useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import {addUser} from "./redux/userSlice.js"
import './App.css';

const App = () => {
  const dispatch= useDispatch()
  const [userName, setUserName] = useState(''); // Estado para el nombre de usuario

  const getUserName = (user) => {
    setUserName(user); // Actualiza el nombre de usuario en el estado
  };

  useEffect(() => {
    if (userName.trim()) {  // Solo hace la búsqueda si el nombre de usuario no está vacío
      fetch(`https://api.github.com/users/${userName.toLowerCase()}`)
        .then((res) => res.json())
        .then((data) => dispatch(addUser(data)))
        .catch((error) => console.error("Error fetching data:", error)); 
    }
  }, [userName, dispatch]); 

  return (
    <>
      <Buscador setUserName={setUserName} />  
      <User /> 
    </>
  );
};

export default App;

