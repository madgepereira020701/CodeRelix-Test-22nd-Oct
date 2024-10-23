import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="App">
      <form className="login">
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" /><br />
        <input type="password" name="password" placeholder="Password" />
        <p>Forgot password?</p>
        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
}

export default Login;
