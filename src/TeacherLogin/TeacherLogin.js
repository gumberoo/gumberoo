import React, { useState } from 'react'
import './TeacherLogin.scss'

const TeacherLogin = () => {
  const [ teacherInput, setTeacherName ] = useState('')
  
  const buttonsEnabled = teacherInput.trim() == "";
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('CLICKED')
  }
  
  return (
    <form className='teacher-login' onSubmit={handleSubmit}>
      <h1>Gumberoo</h1>
      <input 
        className='teacher-input'
        type='text'
        value= { teacherInput }
        aria-label='enter teachers first and last name'
        placeholder='Teacher Name...'
        onChange={(e) => setTeacherName(e.target.value)}
      />
      <input
        data-testid='submit-btn'
        className='submit-btn'
        aria-label='submit button'
        type='submit'
        value='Submit'
        disabled={buttonsEnabled}
      />
    </form>
  )
}

export default TeacherLogin