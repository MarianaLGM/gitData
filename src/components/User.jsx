//6 creamos los componentes

import { useSelector } from 'react-redux';

export function User() {
  const dataApi = useSelector((state) => state.user);
  return (
    <>
      <h1>Datos de usuario</h1>
      <ul>
        <li>Nombre: {dataApi.name}</li>
        <li>Usuario GitHub: {dataApi.login}</li>
        <li>Seguidores: {dataApi.followers}</li>
        <li>Repositorios públicos: {dataApi.public_repos}</li>
        <img src={dataApi.avatar_url}/>
      </ul>
    </>
  );
}

