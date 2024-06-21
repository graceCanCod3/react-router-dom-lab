import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import mailboxsArray from './data/mailboxs'
import MailboxList from './components/MailboxList'
import MailboxDetails from './components/MailboxDetails'
import MailboxForm from './components/MailboxForm'



const App = () => {

  const [mailboxs, setMailboxs] = useState(mailboxsArray)
  const [newMailbox, setNewMailbox] =useState({
    id: '',
    boxHolder: '',
    boxSize: ''
  })
  
  const addMailbox = () => {
    const currentMailboxs = mailboxs
    const createdMailbox = {
      ...newMailbox,
      id: parseInt(mailboxs.length + 1),
      boxSize: newMailbox.boxSize
    }
    currentMailboxs.push(createdMailbox)
    setMailboxs(currentMailboxs)
    setNewMailbox({ id: '', boxHolder: '', boxSize: ''})
  }
  const handleChange = (e) => {
    console.log(e.target)
    setNewMailbox({ ...newMailbox, [e.target.name]: e.target.value})
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path='/mailboxList' element={ <MailboxList mailboxs={mailboxs}/> }/>
          <Route path='/mailboxList/:id' element={ <MailboxDetails mailboxs={mailboxs}/> }/>
          <Route path='/new' element={ <MailboxForm newMailbox={newMailbox}
                                                    handleChange={handleChange}
                                                    addMailbox={addMailbox}
                                                    mailboxs={mailboxs}/> }/>
        </Routes>
      </main>
    </div>
  )
};

export default App;
