
import React from 'react'
import {useNavigate} from 'react-router-dom'


export default function LandingPage() {

  


     let navigate = useNavigate()


    return (

        <div className="landingPageMainContainer">

        <div className="landingPageButtonContainer">

            <div>
            <button className='btnn' onClick={()=>{navigate("./student/StudentDashboard") }}>User Dashboard</button>
            </div>

            <div>
            <button className='btnn' onClick={()=>{navigate("./admin/AdminDashBoard") }}>Admin Dashboard</button>
            </div>

            <div>
            <button className='btnn' onClick={()=>{navigate("./common/ForgotPassword") }}>Forgot Password</button>
            </div>

            <div>
            <button className='btnn' onClick={()=>{navigate("./common/SignUp") }} >Signup</button>
            </div>

            <div>
            <button className='btnn' onClick={()=>{navigate("./Login") }} >Login</button>
            </div>
            
        </div>

        </div>
    )
}
