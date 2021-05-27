import React from 'react';
import axios from 'axios';

import emailjs from 'emailjs-com';
  
  import { Field, Label, Control, Input, Button, Icon, Textarea, Notification } from 'rbx';

  export default function RequestQuote() {
  
    function sendQuote(e) {
      e.preventDefault();
  
           emailjs.sendForm('service_kblgw7t', 'template_s9irabt', e.target,  'user_EV8YRxj3O3kD0Gw8jcB1t',  this)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
      
    

  }
  
    return (
     <div>

      <form onSubmit={sendQuote}>
       

        <div className="col-8 form-group pt-2 mx auto">
              <input type="text" className="form-control" placeholder="Name" name="name" />
        </div> 
        <div className="col-8 form-group pt-2 mx auto">
            <input type="text" className="form-control" placeholder="Company Name" name="company_name" />
        </div>
        <div className="col-8 form-group pt-2 mx auto">
            <input type="text" className="form-control" placeholder="Phone Number" name="phone" />
        </div>
        <div className="col-8 form-group pt-2 mx auto">
            <input type="text" className="form-control" placeholder="Email Address" name="email" />
        </div>
        <div className="col-8 form-group pt-2 mx auto">
            <input type="text" className="form-control" placeholder="Estimated Annual Usage" name="estimated_annual_usage" />
        </div>
        <div className="col-8 form-group pt-2 mx auto">
            <input type="text" className="form-control" placeholder="Release Quantities" name="release_quantities" />
        </div>
        <div className="col-8 form-group pt-2 mx auto">
            <textarea className="form-control" id="" cols="40" row="0"placeholder="Additional Comment" name="additional_comments" />  
        </div>

  <div class="field">
    <label className="attachment"for="my_file">Attachment: (No files over 2mb)</label>
    <input type="file" name="my_file" id="my_file" />
  </div>

  <input type="submit" id="button" value="Send Email" onsubmit="sendQuote()" />

</form>

  <script type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js">
  </script>
          
  <script type="text/javascript">
      emailjs.init('user_EV8YRxj3O3kD0Gw8jcB1t')
  </script>
      
</div>
     
         );
        }