import React, {useState} from 'react';
import contact from '../images/contact.png';

const Contact = () =>  {
  const [data, setData] = useState({
    name: '',
    number: '',
    email: '',
    message: '',
  });
  const InputEvent = (event) => {
    const {name, value} = event.target;
    
    setData((preValue) => {
      return {
         ... preValue,
         [name]:value,
      }
    })
  }
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data[0]}`) 
  };
  return (
    <>
    <div className="my-5">
      <h1 className="text-center mb-5 text-light">
        Contact Us
      </h1>
      <div className="container-fluid">
        <div className="col-8 mx-auto">
        <div className="row mx-0 contact rounded">
        <div className="col-sm-6 d-flex justify-content-center flex-column">
          <img src={contact} width="100%"/>
        </div>
        <div className="col-sm-6">
          <form className="form px-5 py-5 rounded" onSubmit={formSubmit}>
          <div className="mb-3">
            <label for="exampleInputName1" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" name="name"
            value={data.name} onChange={InputEvent}/>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
             name="email" value={data.email} onChange={InputEvent}/>
            
          </div>
          <div class="mb-3">
            <label for="exampleInputNumber1" className="form-label">Contact no</label>
            <input type="number" className="form-control" id="exampleInputNumber" name="number" 
            value={data.number} onChange={InputEvent}/>
          </div>
          <div className="mb-3">
          <label for="exampleInputNumber1" className="form-label">Message</label>
          <textarea className="form-control" aria-label="With message" name="message" value={data.message}
          onChange={InputEvent} ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
                </div>
        </div>
        </div>
      </div>

    </div>
    </>
  );
}

export default Contact;
