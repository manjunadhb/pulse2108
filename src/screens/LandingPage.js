
import classes from './LandingPage.module.css'
import React from 'react'
import {useNavigate} from 'react-router-dom'


export default function LandingPage() {

  


     let navigate = useNavigate()


    return (

        <div className={classes.mainContainer}>

        <div className={classes.buttonContainer}>

            <div>
            <button className={classes.btn} onClick={()=>{navigate("./student/StudentDashboard") }}>User Dashboard</button>
            </div>

            <div>
            <button className={classes.btn} onClick={()=>{navigate("./admin/AdminDashBoard") }}>Admin Dashboard</button>
            </div>

            <div>
            <button className={classes.btn} onClick={()=>{navigate("./common/ForgotPassword") }}>Forgot Password</button>
            </div>

            <div>
            <button className={classes.btn} onClick={()=>{navigate("./common/SignUp") }} >Signup</button>
            </div>
            
        </div>

        </div>
    )
}
