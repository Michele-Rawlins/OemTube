import React from 'react';

import emailjs from 'emailjs-com';
  
  import { Field, Label, Control, Input, Button, Icon, Textarea, Notification } from 'rbx';
  
  // class ContactUs extends React.PureComponent {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     name: '',
    //     email: '',
    //     subject: '',
    //     message: ''
    //   };
      export default function ContactUs() {

        function sendEmail(e) {
          e.preventDefault();
      
          emailjs.sendForm('gmail', 'template_a4hfqdc', e.target, 'user_EV8YRxj3O3kD0Gw8jcB1t')
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
    //   this.handleSubmit = this.handleSubmit.bind(this);
    //   this.resetForm = this.resetForm.bind(this);
    //   this.handleChange = this.handleChange.bind(this);
    // }
  
    // handleSubmit(event) {
    //   event.preventDefault();
    //   const { name, email, subject, message } = this.state;
    //   const templateParams = {
    //     from_name: name,
    //     from_email: email,
    //     to_name: '',
    //     subject,
    //     message_html: message,
    //   };
    //   emailjs.send(
    //    'Oemtube191@gmail.com',
    //     'template_a4hfqdc',
    //      templateParams,
    //     'user_id'
    //   )
    //   this.resetForm();
    // };
  
    // resetForm() {
    //   this.setState({
    //     name: '',
    //     email: '',
    //     subject: '',
    //     message: '',
    //   });
    // }
  
    // handleChange(event) {
    //   this.setState({ [event.target.name]: event.target.value });
    // }
  
    // render() {
    //   const { name, email, subject, message, sentMessage } = this.state;
  
    //   return (
    //     <form onSubmit={this.handleSubmit}>
    //       <Field>
    //         <Label>Name</Label>
    //         <Control>
    //           <Input
    //             name="name"
    //             type="text"
    //             placeholder="Your first and last name"
    //             value={name}
    //             onChange={this.handleChange}
    //           />
    //         </Control>
    //       </Field>
    //       <Field>
    //         <Label>Email for contact</Label>
    //         <Control>
    //           <Input
    //             name="email"
    //             type="email"
    //             placeholder="email@gmail.com"
    //             value={email}
    //             onChange={this.handleChange}
    //           />
    //         </Control>
    //       </Field>
    //       <Field>
    //         <Label>Subject</Label>
    //         <Control>
    //           <Input
    //             name="subject"
    //             type="text"
    //             placeholder="What is the subject?"
    //             value={subject}
    //             onChange={this.handleChange}
    //           />
    //         </Control>
    //       </Field>
    //       <Field>
    //         <Label>Message</Label>
    //         <Control>
    //           <Textarea
    //             name="message"
    //             placeholder="Tell me more about..."
    //             value={message}
    //             onChange={this.handleChange}
    //           />
    //         </Control>
    //       </Field>
  
    //       <Field kind="group">
    //         <Control>
    //         <Button color="dark">Send</Button>
    //         </Control>
    //         {/* <Control>
    //           <Button text>Cancel</Button>
    //         </Control> */}
    //       </Field>
    //     </form>
      );
    }
  
  
 


      

// export default ContactUs;