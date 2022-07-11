import React from 'react'
// import img from "./Facebook.svg.png"
import img2 from "../Images/google.png"
import img from "../Images/Facebook.svg.png"
export default function Login() {
    return (
        <>
            <div style={{border:'2px solid black',width:'500px',margin:'150px auto',padding:'0px 0px'}}>

                <div className="btn-group" style={{margin:'2px'}}>
                    <a href="/" className="btn btn-primary active" aria-current="page" style={{padding:'10px 30px'}}>Login</a>
                    <a href="/Signup" className="btn btn-primary" style={{padding:'10px 30px'}}>Signup</a>


                </div>
                <div>Already Have an Account?</div>

                <div>Use Social Media Credentials</div>
                <a href='#'  ><img src={img} alt="Error" style={{heigth:'20px',width:'40px',marginLeft:'20px'}}/></a>
                <a href='#'  ><img src={img2} alt="Error" style={{heigth:'40px',width:'40px',marginLeft:'20px'}}/></a>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="current-password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    
                    <div><a href=''>Forgot Password</a></div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </>
    )
}
