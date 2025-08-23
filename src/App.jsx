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

  const numbers = "0123456789"
  const symbols = `!@#$%^&*()-_=+[]{}|;:'\\",.<>?/~`

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

    if (formData.name === '' || formData.surname === '' || formData.password === '' || formData.selectedValue === '---' || formData.description === '' || formData.experience < 0) {
      console.log('Inserire i dati')
      return
    } else {
      console.log(formData)
    }

  }

  function isValid(userName) {

    if (!userName) {
      return false
    }

    if (userName.length < 6) {
      return false
    }

    const letters = "abcdefghijklmnopqrstuvwxyz"
    const userNameLetter = userName.toLowerCase().split('')

    return userNameLetter.every(l=> letters.includes(l))
    
  }



  return (
    <>
      <h1>Inserisci i tuoi dati</h1>
      <form onSubmit={sendData} className='form-container'>
        <input type="text" placeholder='Nome' className='input-size' value={name} onChange={e => { setName(e.target.value) }} />
        <strong className={isValid(name) ? 'green' : 'red'}>{isValid(name) ? 'Nome valido' : 'Nome non valido'}</strong>
        <input type="text" placeholder='Cognome' className='input-size' value={surname} onChange={e => { setSurname(e.target.value) }} />
        <input type="password" placeholder='Password' className='input-size' value={password} onChange={e => { setPassword(e.target.value) }} />
        <input type="number" placeholder='Esperienza' className='select-number-size' value={experience} onChange={e => { setExperience(e.target.value) }} />
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
