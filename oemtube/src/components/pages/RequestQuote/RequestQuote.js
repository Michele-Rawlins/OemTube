import React from 'react';
import axios from 'axios';

import emailjs from 'emailjs-com';
  
  import { Field, Label, Control, Input, Button, Icon, Textarea, Notification } from 'rbx';

  export default function RequestQuote() {

    function sendQuote(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_kblgw7t', 'template_s9irabt', e.target, 'user_EV8YRxj3O3kD0Gw8jcB1t', 'file')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        // emailjs.sendForm('service_kblgw7t', 'template_s9irabt', 'file')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
        // e.target.reset()
      
    }
  //   function formSubmit(e) {
  //     e.preventDefault();
  //     emailjs.sendForm('service_kblgw7t', 'template_s9irabt', 'file', this)
  //     .then((result) => {
  //       console.log(result.text);
  //   }, (error) => {
  //       console.log(error.text);
  //   });
  //     e.target.reset()
  // }
  
    return (
      <div>
        <div className="container">
      <form onSubmit={sendQuote}>
        {/* <form onSubmit={formSubmit}> */}
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx auto">
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
              <input type="text" className="form-control" placeholder="Part Number" name="part_number" />
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

            <div className="col-8 form-group pt-3 mx auto">
            <form enctype="multipart/form-data"  method ="post" onsubmit="sendQuote()">
              <label>Attach file:</label>
              <input type="file" name="my_file"/> 
              {/* <input type="submit" name="upload" value="Submit" /> */}
            </form>
            {/* <form enctype="multipart/form-data" method="post" onsubmit="formSubmit()">
    <label>Attach file:</label>
    <input type="file" name="my_file"> 
    <input type="submit" value="Submit">
</form>     */}
        <input type="submit" className="btn btn-info" value="Send Message"></input>
        </div>
        </div>
      </form>
      {/* </form> */}
      </div>
      </div>
         );
        }