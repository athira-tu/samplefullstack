import React, { useRef } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
// import { response } from 'express';


function Login() {
    const emailref = useRef()
    const passwordref = useRef()
    async function handlelogin() {
        let userobj = {
            email: emailref.current.value,
            password: passwordref.current.value

        }
        const res = await axios.post("http://localhost:7000/login", userobj)
        console.log(userobj);
        if (res.data.success == true) {
            alert("success")

        } else {
            alert("invalid")
        }

    }
    return (
        <div>
            <h1>login</h1>
            <TextField id="outlined-basic" label="email" variant="outlined" type="email" inputRef={emailref} /><br />
            <TextField id="outlined-basic" label=" password" variant="outlined" type="password" inputRef={passwordref} /><br />
            <Button variant="contained" onClick={handlelogin}>Submit</Button>
        </div>
    )
}

export default Login