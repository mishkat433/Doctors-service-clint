import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Modal from 'react-modal';
import { UserContext } from '../../../App';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

const AppointmentForm = (props) => {
    
    const [loginUser, setLoginUser]= useContext(UserContext)
    const [information,setInformation]= useState({
        name: "",
        email: loginUser.email,
        phone:"",
        gender:"",
        age:"",
        weight:"",
        appointment: props.appointmentOn,
        date: new Date(),
    })
    const { modalIsOpen, closeModal, appointmentOn } = props

   const handleSubmit=(e)=>{
       fetch("https://afternoon-brook-91177.herokuapp.com/appointment",{
           method: "POST",
           headers: {"Content-Type": "application/json"} ,
           body: JSON.stringify(information)
       })
       .then(res=>res.json())
       .then(result=>{
           console.log(result)
           if(result){
               closeModal()
               alert("data send successfull")
           }
       })
       e.preventDefault()
   }

    // let valid = false
    // if (e.target.name === "gender") {
    //     const gengertValid = e.target.value != "Not set";
    //     valid = gengertValid
    //     if (gengertValid == false) {
    //         console.log("please input you Gender")
    //     }

    // }
  
   const changeHandle=(even)=>{
       const newInfo = { ...information }
       newInfo[even.target.name] = even.target.value
       setInformation(newInfo)
   }
   
    return (
        <div >
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                 onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">

                <h2 className="text-center text-brand titl">{appointmentOn}</h2>
               

                <form className="p-5" >
                    <div className="form-group">
                        <input onBlur={changeHandle} value={appointmentOn} type="text" name="Appointment" placeholder="Appointment Name" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <input onBlur={changeHandle} type="text" name="name" placeholder="Patient Name" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <input onBlur={changeHandle} type="text"  name="phone" placeholder="Phone Number" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <input onBlur={changeHandle} type="text" value={loginUser.email}   name="email" placeholder="Email" className="form-control" required />
                        
                    </div>
                    <div className="form-group row">
                        <div className="col-4">
                            <select className="form-control" onBlur={changeHandle} name="gender" required >
                                <option value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            
                        </div>
                        <div className="col-4">
                            <input onBlur={changeHandle} className="form-control" name="age" placeholder="Your Age" type="number" required/>
                            
                        </div>
                        <div className="col-4">
                            <input onBlur={changeHandle} className="form-control" name="weight" placeholder="Weight" type="number" required/>
                        </div>
                    </div>

                    <div className="form-group text-center">
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary w-25">Send</button>
                    </div>
                </form>
            </Modal>

            
        </div>
    );
};

export default AppointmentForm;