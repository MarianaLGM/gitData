import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addUser } from '../redux/userSlice'

export const Buscador = () => {
    const [username, setUserName]= useState("");
    const dispatch = useDispatch();
    const login = useSelector((state) => state.user.login);
    const [getLogin, setGetLogin]= useState("");

    const handleChange = (e) => {
        setGetLogin(e.target.value);  // Actualiza el estado con el valor ingresado
    };

    return (
        <>
            <input
                type="text"
                placeholder="Ingrese usuario GitHub"
                value={username}
                onChange={(e) => setUserName(e.target.value)} // Actualizamos el valor del input
            />
            <button onClick={fetchGitHubUser}>Buscar</button>
            
        </>
    );
}
