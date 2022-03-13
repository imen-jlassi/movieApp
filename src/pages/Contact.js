import React from 'react'

function Contact() {
  return (
    <div className='contact-box'>
      <h1>contact us</h1>
      
      <div class="contact mb-3">
      
  <label for="exampleFormControlInput1" class="form-label">Nom</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="nom"/>
</div>
      <div class="contact mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="contact mb-3">
  <label for="exampleFormControlInput1" class="form-label">Site web</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="site web"/>
</div>
<div class="contact mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example text</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <br></br>
  <button type="submit" class="btn btn-primary">Send Message</button>
</div>
     
    </div>
    
  )
}

export default Contact