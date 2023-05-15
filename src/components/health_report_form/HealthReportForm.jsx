import React, { Component } from 'react'
import PDFHealthReport from './PDFHealthReport'
import './healthReportForm.css'

class HealthReportForm extends Component {

    state = {
        image: '',
        firstName: '',
        lastName: '',
        dob: '',
        age: '',
        gender: '',
        phone: '',
        email: '',
        weight: '',
        height: '',
        isPwd: '',
        isDiabetic: '',
        isAllergic: '',
        isMedication: '',
        moreInfo: '',
        reportSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    submitReport = (e) => {
        if(!this.state.image ||
            !this.state.firstName ||
            !this.state.lastName ||
            !this.state.dob ||
            !this.state.age ||
            !this.state.gender || 
            !this.state.phone ||
            !this.state.email ||    
            !this.state.weight ||    
            !this.state.height ||    
            !this.state.isPwd ||    
            !this.state.isDiabetic ||    
            !this.state.isAllergic ||    
            !this.state.isMedication  
        ) {
            alert('All fields are required!!');
            e.preventDefault();
        } else {
            this.setState({
                reportSubmitted: true
            })
        }
    }

    render () {

        return (
            <>
                <center><h2>Health Report</h2></center>
            { !this.state.reportSubmitted ? 
                (<form className='container report__container' method='post'>
                    <div className="report__content">
                        <div className="profile__photo">
                            <label>
                                Profile Photo:
                                <input type="text" alt='Profile Photo' name='image' onChange={this.onChange('image')} placeholder='https://' required />
                            </label>
                        </div>
                        <div className="left">
                            <label>
                            First Name:
                            <input type="text" name='firstName' onChange={this.onChange('firstName')} placeholder='Enter Your First Name' required />
                            </label>
                            
                            <label>
                            Last Name:
                            <input type="text" name='lastName' onChange={this.onChange('lastName')} placeholder='Enter Your Last Name' required />
                            </label>
                            
                            <label>
                            DOB:
                            <input type="number" name='dob' onChange={this.onChange('dob')} placeholder='Enter Your Age' required />
                            </label>
                            
                            <label>
                            Age:
                            <input type="number" name='age' onChange={this.onChange('age')} placeholder='Enter Your Age' required />
                            </label>
                            
                            <label>
                            Gender:
                            <input type="text" name='gender' onChange={this.onChange('gender')} placeholder='(Male/Female/Others)' required />
                            </label>

                            <label>
                            Phone:
                            <input type="text" name='phone' onChange={this.onChange('phone')} placeholder='Enter Your Phone' required />
                            </label>

                            <label>
                            Email:
                            <input type="email" name='email' onChange={this.onChange('email')} placeholder='Enter Your Email' required />
                            </label>
                        </div>

                        <div className="right">
                            <label>
                            Weight(in kg):
                            <input type="text" name='weight' onChange={this.onChange('weight')} placeholder='Enter Your Weight' required />
                            </label>

                            <label>
                            Height(in ft):
                            <input type="text" name='height' onChange={this.onChange('height')} placeholder='Enter Your Height' required />
                            </label>
                            <label>

                            Are you are PWD?:
                            <input type="text" name='isPwd' onChange={this.onChange('isPwd')} placeholder='(Yes/No)' required />
                            </label>
                            
                            <label>
                            Are you a Diabetic patient? :
                            <input type="text" name='isDiabetic' onChange={this.onChange('isDiabetic')} placeholder='(Yes/No)' required />
                            </label>
                            
                            <label>
                            Any type of Allergies?
                            <input type="text" name='isAllergic' onChange={this.onChange('isAllergic')} placeholder='Enter Your Answer' required />
                            </label>
                            
                            <label>
                            Are you currently on any Medication?
                            <input type="text" name='isMedication' onChange={this.onChange('isMedication')} placeholder='Enter Your Answer' required />
                            </label>

                            <label>
                            Any Additional Information? (optional)
                            <input type="text" name='moreInfo' onChange={this.onChange('moreInfo')} placeholder='Enter Your Answer' required />
                            </label>
                        </div>
                    </div>

                        <button onClick={this.submitReport} type='submit' className='btn btn-primary'>Save Report</button>
                </form>) : (
                    <PDFHealthReport
                        image={this.state.image}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        dob={this.state.dob}
                        age={this.state.age}
                        gender={this.state.gender}
                        phone={this.state.phone}
                        email={this.state.email}
                        weight={this.state.weight}
                        height={this.state.height}
                        isPwd={this.state.isPwd}
                        isDiabetic={this.state.isDiabetic}
                        isAllergic={this.state.isAllergic}
                        isMedication={this.state.isMedication}
                        moreInfo={this.state.moreInfo}
                        reportSubmitted={this.state.reportSubmitted}
                    />
                )

            }
            </>    
        )

    }
}

export default HealthReportForm