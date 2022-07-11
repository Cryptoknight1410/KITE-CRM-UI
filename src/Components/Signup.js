import React from 'react'
export default function Signup() {
  return (
<>
<div style={{border:'2px solid black',width:'500px',margin:'150px auto',padding:'0px 0px'}}>

                <div class="btn-group" style={{margin:'2px'}}>
                    <a href="/" class="btn btn-primary " aria-current="page" style={{padding:'10px 30px'}}>Login</a>
                    <a href="/Signup" class="btn btn-primary active" style={{padding:'10px 30px'}}>Signup</a>


                </div>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    
                   
                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
                </div>
</>
 );   
}
