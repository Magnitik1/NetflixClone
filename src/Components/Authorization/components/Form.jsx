import { useState } from 'react';
import './Form.css';

const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    
    return (
        <div className="form-container">
            <div className="input-container">
                <input
                    className="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    className="password"
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Password"
                />
            </div>
            <button className="sign-in-button1" onClick={() => handleClick(email, pass)}>
                {title}
            </button>
        </div>
    );
};

export { Form };
