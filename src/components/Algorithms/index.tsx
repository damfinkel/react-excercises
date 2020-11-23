import React, { useState } from 'react';
import './styles.css';

// Implement a form that given a word (string) returns whether thar word is "unique"
// "unique" means no character in the word is repeated.
// e.g. unique("hello") --> false
// e.g. unique("algorithm") --> true
function Algorithms(){
  const [name, setName] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
  }

  const unique = ({value}: any) => {
    let result = 'Es única';
    const wordArray = value.split('');
    for (let j=0; j < wordArray.length; j ++) {
      const letter = wordArray[j];
      for (let i=j+1; i < wordArray.length; i ++) {
        if(letter === wordArray[i]) {
          result = 'No es única'
        }
      }
    }
    console.log(result)
  }
  // doble for
  // casos bordes  - condiciones a cumplir para que no se rompe
  // booleano
  // mostrar
  // funcion que me devuelva si un string un anagrama
  // otro componente con dos inputs

  const handleChange = ({value}: any) => {
    setName(value);
    console.log(value)
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Palabras únicas</h1>
        <input type="text" name={name} onChange={e => handleChange(e.target)} className="input"/>
        <button type="submit" className="button">Verificar</button>
      </form>
      <p>Es única:</p>
    </div>
  )
}

export default Algorithms;