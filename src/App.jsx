import { useState } from 'react'


function App() {

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('')
  const [selectedValue, setSelectedValue] = useState('')
  const [description, setDescription] = useState('')

  const options = [
    { id: 1, value: "Full Stack" },
    { id: 2, value: "Frontend" },
    { id: 3, value: "Backend" }
  ]

  function sendData(event) {
    event.preventDefault()
    const formData = {
      name: name,
      surname: surname,
      password: password,
      experience: experience,
      selectedValue: selectedValue,
      description: description,
    };
    console.log(formData)

  }

  return (
    <>
      <h1>Inserisci i tuoi dati</h1>
      <form onSubmit={sendData} className='form-container'>
        <input type="text" placeholder='Nome' className='input-size' value={name} onChange={e => { setName(e.target.value) }} />
        <input type="text" placeholder='Cognome' className='input-size' value={surname} onChange={e => { setSurname(e.target.value) }} />
        <input type="password" placeholder='Password' className='input-size' value={password} onChange={e => { setPassword(e.target.value) }} />
        <input type="number" placeholder='Esperienza' min={1} className='select-number-size' value={experience} onChange={e => { setExperience(e.target.value) }} />
        <select name="" id="" value={selectedValue} onChange={e => { setSelectedValue(e.target.value) }}>
          <option value="---" className='select-number-size'>---</option>
          {options.map(option => (
            <option key={option.id} value={option.value}>{option.value}</option>
          ))}
        </select>
        <textarea className="input-size" rows="3" placeholder='Descrizione' value={description} onChange={e => { setDescription(e.target.value) }}></textarea>
        <div className='button-container'>
          <button type="submit">Invia</button>
        </div>
      </form>
    </>
  )
}

export default App
