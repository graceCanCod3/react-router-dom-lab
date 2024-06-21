import { useNavigate } from "react-router-dom"

const MailboxList = (props) => {
  console.log(props)
  let navigate = useNavigate()

  const listMailbox = (mailbox) => {
    navigate(`${mailbox.id}`)

  }

  return(
    <div className="box-grid">
      {
        props.mailboxs.map((mailbox) => (
          <div className="box-card" onClick={() => listMailbox(mailbox)} key={mailbox.id}>
            <h3>{mailbox.id}</h3>
            <h3>{mailbox.boxSize}</h3>
            <h3>{mailbox.boxHolder}</h3>
    
          </div>
        ))
      }
    </div>


  )

  };
  
  export default MailboxList