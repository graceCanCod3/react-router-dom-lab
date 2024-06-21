import { useNavigate } from "react-router-dom"
import { useState } from "react"

const MailboxForm = (props) => {

  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newId = props.mailboxs.length + 1
    const mailboxWithId = { ...props.newMailbox, id: newId }
    props.addMailbox(mailboxWithId)
    navigate('/mailboxList')
  }

  

  return (
    <div>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          // value={newMailbox.boxHolder} 
          onChange={props.handleChange} 
          name="boxHolder" 
          placeholder="Box-Holder" 
          required 
        />
        <select 
          // value={newMailbox.boxSize} 
          onChange={props.handleChange} 
          name="boxSize"
          required
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  )

   
  }
  
  export default MailboxForm