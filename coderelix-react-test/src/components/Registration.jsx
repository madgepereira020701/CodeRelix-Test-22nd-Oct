import { Link } from 'react-router-dom';
function Registration() {
  return (
    <div className="App">
      <form class="register">
        <h2>Register</h2>
        <input type="text" name="name" placeholder="Name"></input><br></br>
        <input type="email" name="email"placeholder="Email"></input><br></br>
        <input type="password" name="password" placeholder="Password"></input><br></br>
         <p>For what are you using this app:</p>
        <select>
          <option name="Work">Work</option>
          <option name="School">School</option>
          <option name="Personal">Personal</option>
          </select><br></br><br></br> 
        <button>Register</button>
        <p>Already have an account <Link to='/'>Login</Link></p>
      </form>
    </div>
  );
}

export default Registration;
