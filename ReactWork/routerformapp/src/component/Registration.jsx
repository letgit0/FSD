import React, {useState} from 'react'

function Registration() {
  const[name, setName] = useState();
  const[email, setEmail] = useState();
  const[password, setPassword] = useState();

  function getData(){
    alert('Hi '+ name+'. Your password is '+ password );
  }

  return (
    <div>
      <h2>Registration Form</h2>
       <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="text" onChange={(e)=>setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div class="form-check">
          <input type="checkbox"  class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" onClick={getData} class="btn btn-primary">Register</button>
      </form>
    </div>
  )
}

export default Registration