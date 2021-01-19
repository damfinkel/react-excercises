import React, { useEffect, useState } from 'react';
import { editUser, getUser } from '../../services/UserService';
import { User, VALIDATIONS } from './constants';

import './styles.scss';

// Implementar una pantalla de Perfil de usuario. La pantalla va a obtener el usuario de un endpoint GET /user/${id}.
// Se deberá agregar un botón que permita cambiar de modo "visualización" (campos no editables) a modo "edición"
// (campos editables). Si se cambia de modo en medio de una edición, la edición se cancela y los campos vuelven
// a sus valores anteriores a empezar a editar. Si se edita y se presiona un botón "Guardar", se envían los datos
// al endpoint PUT /user/${id} y se vuelve al modo visualización con los nuevos datos una vez que el endpoint retorne.
// Si el endpoint falla, no se debe volver al modo visualización, se debe mostrar el error que vuelve de back pero
// mantener los cambios que hizo el usuario para que pueda volver a intentar.
// - Sin librería de manejo de forms
// - Los campos a usar son:
//   - Nombre: Maximo 30 caracteres, sólo letras
//   - Apellido: Idem nombre
//   - Teléfono: diez números positivos enteros
//   - Profesión: dropdown con 4 opciones cualquiera
//   - email: debe tener un formato de email valido
//   - Nueva Contraseña: al menos 1 numero, al menos 6 caracteres,  es obligatorio. No visible para el usuario (se deben ver los puntitos escondiendo el valor). Solo se debe ver este campo en modo edicion
// - Todos los campos deben tener un titulo indicando qué información contienen

function ProfileForm(){
  const [datos, setDatos] = useState<User>();
  const [isDisabled, setIsDisabled] = useState(true);

  const handleData = async (id: number) => {
    const response = await getUser(id);
    setDatos(response.data as User);
    console.log(response);
  };

  useEffect(() => {
    handleData(1);
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await editUser(1, datos as User)
  }

  const handleChange = (event: any) => {
    if (datos) {
      setDatos({
        ...datos,
        [event.target.name]: event.target.value
      })
      console.log(event.target.value)
    }
  }

  const handleEdit = () => {
    setIsDisabled(!isDisabled)
  }

  console.log(datos);

  return (
    <div className="container">
      <h1>Mi Perfil</h1>
      <form className="profile-form" onSubmit={handleSubmit}>
        <label className="label">Nombre</label>
        {<input type="text" name="name" value={datos?.name} onChange={handleChange} className="input" maxLength={VALIDATIONS.maxLenght} disabled={isDisabled} />}
        <label className="label">Apellido</label>
        <input type="text" name="surname" value={datos?.surname} onChange={handleChange} className="input" maxLength={VALIDATIONS.maxLenght} disabled={isDisabled}/>
        <label className="label">Teléfono</label>
        <input type="number" name="phone" value={datos?.phone} onChange={handleChange} className="input" maxLength={VALIDATIONS.phone.maxLenght} disabled={isDisabled}/>
        <label className="label">Email</label>
        <input type="email" name="email" value={datos?.email} onChange={handleChange} className="input" pattern={VALIDATIONS.pattern} disabled={isDisabled}/>
        <select name="occupation" value={datos?.occupation} onChange={handleChange} className="select" disabled={isDisabled}>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="architect">Architect</option>
        </select>
        {!isDisabled &&
          <>
            <label className="label">Nueva contraseña</label>
            <input type="password" name="password" value={datos?.password} onChange={handleChange} className="input" pattern={VALIDATIONS.password.pattern}/>
          </>
        }
        <div className="button-container">
          <button type="button" className="button" onClick={handleEdit}>{isDisabled ? 'Editar' : 'Cancelar'}</button>
          <button type="submit" className="button">Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default ProfileForm;