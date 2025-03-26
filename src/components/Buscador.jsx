import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addUser } from '../redux/userSlice'

export const Buscador = () => {
    const [username, setUserName]= useState("");
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const fetchGitHubUser = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) throw new Error("Usuario no encontrado");
            const data = await response.json();
            dispatch(addUser(data)); // Guardamos los datos en Redux
        } catch (error) {
            console.error(error.message);
        }
        };
    
        useEffect(() =>{
        fetchGitHubUser()
        }, [])

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
