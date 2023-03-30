import React, { useRef } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../signup.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





function Signup() {
    // const navigation=useNavigation()
    const nameref = useRef()
    const emailref = useRef()
    const passwordref = useRef()
    const password2ref = useRef()
    const navigate = useNavigate()


    async function handlesignup() {
        if (passwordref.current.value == password2ref.current.value) {
            let userobj = {
                name: nameref.current.value,
                email: emailref.current.value,
                password: passwordref.current.value

            }
            let res = await axios.post("http://localhost:7000/signup", userobj)
            // console.log(userobj);
            navigate("/login")
        } else {
            alert("passwors not same")
        }
    }

    return (
        <>
            <div className='wrapper'>
                <h1>SignUp</h1>
                <TextField id="standard-basic" label="name" variant="standard" inputRef={nameref} />
                <TextField id="standard-basic" label="email" variant="standard" inputRef={emailref} />
                <TextField id="standard-basic" label="password" variant="standard" inputRef={passwordref} />
                <TextField id="standard-basic" label="confirm password" variant="standard" inputRef={password2ref} />

                <Button variant="contained" className='btn' onClick={handlesignup}>Submit</Button>



            </div>
        </>
    )
}


export default Signup