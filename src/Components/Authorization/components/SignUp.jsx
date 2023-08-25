import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from './Form';
import { setUser } from '../store/slices/usersSlice';
import './SignUp.css'

const SignUp = () => {
    const dispatch = useDispatch();
    const navigat = useNavigate(); 

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigat.push('/login');  
            })
            .catch(console.error)
    }

    return (
        <div className="sign-up-container">
            <div className="registration-info">
                <p className='row1'>Step 1 of 3</p>
                <p className='row2'>Create a password to start your membership</p>
                <p className='row3'>Just a few more steps and you’re done!</p>
                <p className='row4'>We hate paperwork, too.</p>
            </div>
            <Form
                title="Next"
                handleClick={handleRegister}
            />
        </div>
    )
}

export { SignUp }
