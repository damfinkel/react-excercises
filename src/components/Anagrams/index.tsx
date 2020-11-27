import React, { useState } from 'react';
// import './styles.css';

  // funcion que me devuelva si un string un anagrama
  // otro componente con dos inputs
function Anagrams(){
  const [datos, setDatos] = useState({word1: '', word2: ''});
  const [anagrams, setAnagrams] = useState<boolean>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setAnagrams(areAnagrams(datos));
  }
  
  const areAnagrams = ({word1, word2}: {word1: string, word2: string}) => {
    let result = true;
    const wordArray1 = word1.split('').sort();
    const wordArray2 = word2.split('').sort();

    if (wordArray1.length === wordArray2.length) {
      for (let i=0; i < word1.length; i++) {
        if(wordArray1[i] !== wordArray2[i]) {
          result = false;
        }
      }
      return result;
    }
    return false;
  }


  const handleChange = (event: any) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
    console.log(event.target.value)
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Palabras anagramas</h1>
        <input type="text" name="word1" onChange={handleChange} className="input"/>
        <input type="text" name="word2" onChange={handleChange} className="input"/>
        <button type="submit" className="button">Verificar</button>
      </form>
      <p>{anagrams ? 'Si son anagramas' : 'No son anagramas'}</p>
    </div>
  )
}

export default Anagrams;