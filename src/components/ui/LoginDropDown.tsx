import { useState } from "react";
import { toast } from 'react-hot-toast';
import { Oval } from "react-loader-spinner";
import '../../app/styles/loginDropDown.css'

const LoginDropDown = () => {

      const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    setLoading(true);

    setTimeout(() => {
      toast.error(`Password or email is incorrect.`);
      setEmail("");
      setPassword("");
      setLoading(false);
    }, 500);
    };
    
  return (
     <div className="login-modal">
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Email Address
                  <input
                      type="email"
                      required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
                      value={email}
                      required
            type="password"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit" className="buy">
          {loading ? <Oval height={25} width={25} color="#ffffff" /> : "Login"}
        </button>
        <h6 className="login-details-text">You will receive your login details after making a purchase.</h6>
      </form>
    </div>
  )
}

export default LoginDropDown
