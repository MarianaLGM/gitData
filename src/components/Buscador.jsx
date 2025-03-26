import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

export function Buscador() {
    const dispatch = useDispatch();
    //const login = useSelector((state) => state.user.login);
    const [getLogin, setGetLogin]= useState("");

    const handleChange = (e) => {
        setGetLogin(e.target.value);  // Actualiza el estado con el valor ingresado
    };

    return (
        <>
            <input
                type="text"
                value={getLogin}
                placeholder="Ingrese usuario GitHub"
                onChange={(e) => setGetLogin(e.target.value)} // Actualizamos el valor del input
            />
            <button onClick={handleChange}>Buscar</button>
        </>
    );
}
