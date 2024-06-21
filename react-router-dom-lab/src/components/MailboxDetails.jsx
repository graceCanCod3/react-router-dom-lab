import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MailboxDetails = (props) => {
  console.log(props)
  const [mailbox, setMailbox] = useState('')

  let { id } = useParams()

  useEffect(() =>{

    let selectedMailbox = props.mailboxs.find((mailbox) => mailbox.id === parseInt(id))
    setMailbox(selectedMailbox)
  }, [props.mailboxs, id])


  return mailbox ? (
    <div className='detail'>
      <div className='detail-header'>
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <hi>{mailbox.id}</hi>
        </div>
      </div>
      <div className='info-wrapper'>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h2>Details</h2>
          <h3>Boxholder: {mailbox.boxHolder}</h3>
          <h3>Box Size: {mailbox.boxSize}</h3>
        </div>
      </div>

    </div>
  ) : null;
    
  }
  
  export default MailboxDetails;