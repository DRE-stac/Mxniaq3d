import React, { useReducer, useState } from "react";
import * as s from "./styles/globalStyles";
import { send } from 'emailjs-com';



const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
 }

export default function ContactForm() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
   setSubmitting(true);
   send(
    'service_tryzm7k',
    'template_9a45uws',
    toSend,
    'user_h4sSMPlYQq0xBcqzBugaz'
  )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
  }

  setTimeout(() => {
    setSubmitting(false);
  }, 3000000)

    return (
      <div className="wrapper"  style={{ textAlign: "center", fontSize: 12, fontWeight: "bold", color: "white" }}>
      {submitting &&
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>: {value.toString()}</li>
              
            ))}
          </ul>
          <s.SpacerXSmall />
        </div>
      }
      <form onSubmit={handleSubmit}  style={{ textAlign: "left", fontSize: 14, fontWeight: "bold", color: "white" }}>
        <input type="hidden" name="form-name" value="contact-form" />  
        <div>
          <label htmlFor="AcctProvider">Account Provider</label> <br />
          <select
          
            type="text"
            disabled={submitting}
            id="AcctProvider"
            name="Account Provider"
           
            value={toSend.AcctProvider}  
            onChange={handleChange}
            required
            >
                <option value="">--Please choose an option--</option>
                <option value="Royal Bank of Canada">Royal Bank of Canada</option>
                <option value="Manitoba Hydro">Manitoba Hydro</option>
                <option value="TELUS">TELUS</option>
                <option value="Enercare">Enercare</option>
            </select>
         
        </div>
        <div>
          <label htmlFor="AcctNumber">Account Number</label> <br />
          <input
            type="text"
            disabled={submitting}
            id="AcctNumber"
            name="Account Number"
            placeholder="Account Number"
            value={toSend.AcctNumber} 
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="PayAmount">Payable Amount</label> <br />
          <input
            type="number"
            disabled="true"
            id="PayAmount"
            name="PayAmount"
            placeholder="Payable Amount (in MATIC)"
            value={25} 
            onChange={handleChange}
            required
          />
        </div>
        <div>
        <input type="submit" disabled={submitting} className="submit" value="Submit" />
      </div>
      </form>
      </div>
    );
  }
  