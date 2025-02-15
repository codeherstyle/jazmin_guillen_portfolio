


function Contact() {

    return (
      <>
    <h2>Lets Connect + Create !</h2>
<div className="form">
      <div className="row">
      <div className="col">
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
      </div>
      <div className="col">
        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
      </div>
      </div>
       <textarea>Message</textarea>
       <br></br>
       <button>Submit</button>
      </div>
      </>
    )
  }
  export default Contact;