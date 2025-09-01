import { useState, useRef } from 'react'


function App() {
  
  const nameRef = useRef()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const experienceRef= useRef()
  const selectedValueRef = useRef()
  const [description, setDescription] = useState('')

  const options = [
    { id: 1, value: "Full Stack" },
    { id: 2, value: "Frontend" },
    { id: 3, value: "Backend" }
  ]

  function sendData(event) {
    event.preventDefault()
    const formData = {
      name: nameRef.current.value,
      userName: userName,
      password: password,
      experience: experienceRef.current.value,
      selectedValue: selectedValueRef.current.value,
      description: description,
    };

    if (formData.name === '' || formData.userName === '' || formData.password === '' || formData.selectedValue === '---' || formData.description === '' || formData.experience === '') {
      console.log('Inserire i dati')
      return
    } else if (formData.experience < 0 ){
      console.log('Inserire dati corretti, esperienza negativa')
    }else {
      console.log(formData)
    }

  }

  function isValidUser(userName) {
    if (!userName || userName.length < 6) {
      return false
    }
    const lettersAndNumbers = "abcdefghijklmnopqrstuvwxyz0123456789"
    const userNameLetter = userName.toLowerCase().split('')

    return userNameLetter.every(element => lettersAndNumbers.includes(element))
  }

  function isValidPass(password) {
    if (!password || password.length < 8) {
      return false
    }
    const letters = /[abcdefghijklmnopqrstuvwxyz]/.test(password);
    const numbers = /[0123456789]/.test(password)
    const symbols = /[^a-zA-Z0-9]/.test(password)

    return letters && numbers && symbols
  }

  function isValidDescrption(description){
    const descriptionValid = description.trim()
    if(descriptionValid.length >= 100 && descriptionValid.length <= 1000){
      return true
    }else{
      return false
    }
  }


  return (
    <>
      <h1>Inserisci i tuoi dati</h1>
      <form onSubmit={sendData} className='form-container'>
        <input type="text" placeholder='Nome e cognome' className='input-size' ref={nameRef} />

        <input type="text" placeholder='Username' className='input-size' value={userName} onChange={e => { setUserName(e.target.value) }} />
        <strong className={isValidUser(userName) ? 'green' : 'red'}>{isValidUser(userName) ? 'Username valido' : 'Username non valido'}</strong>

        <input type="password" placeholder='Password' className='input-size' value={password} onChange={e => { setPassword(e.target.value) }} />
        <strong className={isValidPass(password) ? 'green' : 'red'}>{isValidPass(password) ? 'Password valida' : 'Password non valida'}</strong>

        <div className='select-number-container'>
          <input type="number" placeholder='Esperienza' ref={experienceRef} />

          <select name="" id="" ref={selectedValueRef}>
            <option value="---" >---</option>
            {options.map(option => (
              <option key={option.id} value={option.value}>{option.value}</option>
            ))}
          </select>
        </div>

        <textarea className="input-size" rows="3" placeholder='Descrizione' value={description} onChange={e => { setDescription(e.target.value) }}></textarea>
        <strong className={isValidDescrption(description) ? 'green' : 'red'}>{isValidDescrption(description) ? 'Testo valido' : 'Testo non valido'}</strong>

        <div className='button-container'>
          <button type="submit">Invia</button>
        </div>
      </form>
    </>
  )
}

export default App
