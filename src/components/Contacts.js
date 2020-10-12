import React from 'react'
const Contacts=()=>{
    return(
        <div id="contact" className="container-fluid bg-grey">
  <h2 className="text-center">CONTACT</h2>
  <div className="row">
    <div className="col-sm-5">
      <p>Contact us and we'll get back to you within 24 hours.</p>
      <p><span className="glyphicon glyphicon-map-marker"></span> Chicago, US</p>
      <p><span className="glyphicon glyphicon-phone"></span> +00 1515151515</p>
      <p><span className="glyphicon glyphicon-envelope"></span> myemail@something.com</p>
    </div>
    <div className="col-sm-7 slideanim">
      <div className="row">
        <div className="col-sm-6 form-group">
          <input className="form-control" id="name" name="name" placeholder="Name" type="text" required/>
        </div>
        <div class="col-sm-6 form-group">
          <input class="form-control" id="email" name="email" placeholder="Email" type="email" required/>
        </div>
      </div>
      <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br/>
      <div class="row">
        <div class="col-sm-12 form-group">
          <button class="btn btn-default pull-right" type="submit">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Contacts;
