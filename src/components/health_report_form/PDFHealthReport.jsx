// import React from 'react'
// import Pdf from 'react-to-pdf'
// import './PDF.css'

// const ref = React.createRef();

// const PDFHealthReport = (props) => {
//     return (
//         <>
//             <div className="container pdf__post" ref={ref}>
//                 <div className="personal__info" >
//                     <div className="personal-image">
//                         <img src={props.image} alt={props.firstName} />
//                     </div>

//                     <div className="personal-about">
//                         <h3>First Name : {props.firstName}</h3>
//                         <h3>Last Name : {props.lastName}</h3>
//                         <h3>Date of Birth : {props.dob}</h3>
//                         <h3>{props.gender}</h3>
//                         <h3>Age : {props.age}</h3>

//                         <div className="personal-contact">
//                             <h3>Medical Phone : {props.phone}</h3>
//                             <h3>Email {props.email}</h3>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="medical__info">
//                     <h3>{props.weight}</h3>
//                     <h3>{props.height}</h3>
//                     <h3>{props.isPwd}</h3>
//                     <h3>{props.isDiabetic}</h3>
//                     <h3>{props.isAllergic}</h3>
//                     <h3>{props.isMedication}</h3>
//                     <h3>{props.moreInfo}</h3>
//                     <h3>{props.reportSubmitted}</h3>
//                 </div>
//             </div>
//             <Pdf targetRef={ref} filename="YourHealthReport.pdf">
//                 {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
//             </Pdf>
//         </>
//     )
// }

// export default PDFHealthReport



// Demo

import React from 'react'
import Pdf from 'react-to-pdf'
import './PDF.css'

const ref = React.createRef();

const PDFHealthReport = (props) => {
    return (
        <>
            <div className="container pdf__post" ref={ref}>
                <div className="hospital">
                    <div className="hospital-image">
                    <img src="https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/306353827_453257073500334_1974465565560523104_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Y4rTg1A49W0AX-YLdAI&_nc_ht=scontent-bom1-1.xx&oh=00_AfCkTsOwjqee7dMmnbANqLT1C4gQ_CdFNU8US_kS4P_fjQ&oe=6465D82E" alt={props.firstName} />
                    </div>

                    <div className="hospital-info">
                        <h4>BALCO Medical Centre</h4>
                        <h4>Sector 36, Uparwara,</h4> 
                        <h4>Chhattisgarh 493661</h4>
                    </div>
                </div>

                <div className="personal__info" >
                    <div className="personal-image">
                        <img src={props.image} alt={props.firstName} />
                    </div>

                    <div className="personal-about">
                        <h2>Personal Info</h2>
                        <h3>First Name : {props.firstName}</h3>
                        <h3>Last Name : {props.lastName}</h3>
                        <h3>Date of Birth : {props.dob}</h3>
                        <h3>Gender : {props.gender}</h3>
                        <h3>Age : {props.age}</h3>

                        <div className="personal-contact">
                        <h2>Contact Info</h2>
                            <h3>Medical Phone : {props.phone}</h3>
                            <h3>Email : {props.email}</h3>
                        </div>
                    </div>
                </div>

                <div className='seperate'></div>

                <div className="medical__info">
                    <h2>Medical Info</h2>
                    <h3>🟠 Weight : {props.weight} kg</h3>
                    <h3>🟠 Height : {props.height} ft</h3>
                    <h3>🟠 Are you a PWD : {props.isPwd}</h3>
                    <h3>🟠 Are you a Diabetic patient? : {props.isDiabetic}</h3>
                    <h3>🟠 Any Allergies : {props.isAllergic}</h3>
                    <h3>🟠 Currently on any Medication? : {props.isMedication}</h3>
                    <h3>🟠 Additional Information? : {props.moreInfo}</h3>
                    <h3>{props.reportSubmitted}</h3>
                </div>
            </div>
            <Pdf targetRef={ref} filename="YourHealthReport.pdf">
                {({ toPdf }) => <button onClick={toPdf} className='btn-save btn-save-primary'>Get Your Report</button>}
            </Pdf>
        </>
    )
}

export default PDFHealthReport