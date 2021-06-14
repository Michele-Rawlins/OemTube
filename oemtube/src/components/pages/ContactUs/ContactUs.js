import React from 'react';

import emailjs from 'emailjs-com';
 
export default function ContactUs() {

  

        function sendEmail(e) {
          e.preventDefault();
      
          emailjs.sendForm('service_kblgw7t', 'template_a4hfqdc', e.target, 'user_EV8YRxj3O3kD0Gw8jcB1t')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
        }
      
        return (
          <div>
            <div className="container">
          <form onSubmit={sendEmail}>
              <div className="row pt-5 mx-auto">
                <div className="col-8 form-group mx auto">
                  <input type="text" className="form-control" placeholder="Name" name="name" />
                </div>
                <div className="col-8 form-group pt-2 mx auto">
                  <input type="text" className="form-control" placeholder="Email Address" name="email" />
                </div>
                <div className="col-8 form-group pt-2 mx auto">
                  <input type="text" className="form-control" placeholder="Subject" name="subject" />  
                </div>
                <div className="col-8 form-group pt-2 mx auto">
                  <textarea className="form-control" id="" cols="40" row="0"placeholder="Your message" name="message" />  
                </div>
                <div className="col-8 form-group pt-3 mx auto">
            <input type="submit" className="btn btn-info" value="Send Message"></input>
            </div>
            </div>
          </form>
          </div>
          </div>
  
      );
    }
  
  
 


      

