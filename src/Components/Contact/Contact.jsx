import React from 'react'
import './Contact.css'
import msg from '../../assets/msg-icon.png'
import msg2 from '../../assets/message2.png'
import location from '../../assets/location.png'
import telephone from '../../assets/telephone.png'
import right_icon from '../../assets/rightButton.svg'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2173ef22-d418-4562-bce4-a9cd7834706e");


    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg} alt="message_icon" /></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, ullam ea asperiores unde quas fuga doloribus provident delectus voluptates.</p>
            <ul>
                <li> <img src={msg2} alt="icon2" />Contact@gmail.com</li>
                <li> <img src={telephone} alt="telephone" />+994 123-58-70</li>
                <li> <img src={location} alt="location" />Azerbaijan,Baku</li>


            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label>Write your messages here</label>
            <textarea name="message" rows='6' placeholder='Enter your message'></textarea>
            <button type='submit' className=' btn dark-btn'>Submit now <img src={right_icon} alt="rightIcon" /></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
