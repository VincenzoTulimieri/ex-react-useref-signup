import { useState } from 'react'


function App() {
  
  return (
    <>
      <h1>Inserisci i tuoi dati</h1>
      <form action="" className='form-container'>
        <input type="text" placeholder='Nome'className='input-size'/>
        <input type="text" placeholder='Cognome'className='input-size'/>
        <input type="password" placeholder='Password'className='input-size'/>
        <input type="number" placeholder='Esperienza' className='select-number-size'/>
        <select name="" id="" >
          <option value="---" className='select-number-size'>---</option>
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </select>
        <input type="textarea" placeholder='Descrizione'className='input-size'/>
        <div className='button-container'>
            <button type="submit">Invia</button>
        </div>
      </form>
    </>
  )
}

export default App
