import {User} from './components/User';
import {Buscador} from './components/Buscador';
import {useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import './App.css';

const App = () => {
  const dispatch= useDispatch()
  const [userName, setUserName]= useState("")
  const [error, setError]= useState("")


  useEffect (()=>{

  if (userName.trim()) {
  fetch(`https://api.github.com/users/${userName.toLowerCase()}`)
      .then((response) => {
      if (!response.ok) {
          throw new Error("Usuario no encontrado");// ERROR para cuando metemos nombre que no está en API
      }
      return response.json();
      })
      .then((data) => {
        dispatch(setUserName(data));
      })
      .catch((error) => {
      setError(error.message); 
      });
    } else { // ERROR para cuando le damos a buscar sin haber metido nombre en el input
    setError("Por favor, ingresa un nombre de usuario.");
    }
  })

  return (
  <>
    <User/>
    <Buscador/>
  </>
  );
}

export default App;

