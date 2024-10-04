import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { accountService } from "@/_service/accountService";

const Login = () => {
    const [msg, setMsg] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const initialValues = {
        email: localStorage.getItem('email') || "", 
        password: "",
    };

    useEffect(() => {}, []);

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Veuillez entrer une adresse email valide").required("Veuillez entrer votre adresse email"),
        password: Yup.string().required("Veuillez entrer un mot de passe")
    });

    const onSubmit = async (data) => {
        try {
            const response = await accountService.loginUser(data);
            const token = response.data.body.token;
            accountService.saveToken(token);

            if (rememberMe) {
                localStorage.setItem('email', data.email);
            } else {
                localStorage.removeItem('email');
            }

            navigate("/profil", { replace: true });
        } catch (error) {
                setMsg("Une erreur inconnue est survenue.");
         
        }
    };

    const handleRememberMe = (e) => {
        setRememberMe(e.target.checked);
    };

    return (
        <div className="main">
            <div className='padding'>
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        <Form>
                            <div className="input-wrapper">
                                <label htmlFor="email">Username</label>
                                <Field name="email" type="text" placeholder="Username" autoComplete="off"></Field>
                                <ErrorMessage name="email" component="p" className='errorMessage' />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password" placeholder="******" autoComplete="off"></Field>
                                <ErrorMessage name="password" component="p" className='errorMessage' />
                            </div>
                            <div className="input-remember">
                                <input 
                                    type="checkbox" 
                                    id="remember-me" 
                                    checked={rememberMe} 
                                    onChange={handleRememberMe} 
                                />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>

                            <button className="sign-in-button" type='submit'>Sign In</button>
                        </Form>
                    </Formik>
                    {/* Affiche le message d'erreur */}
                    {msg && <p className="error">{msg}</p>}
                </section>
            </div>
        </div>
    );
};

export default Login;
