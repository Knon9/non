import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required')
    });

    const handleSubmit = (values) => {
        // นี่คือตำแหน่งที่คุณจะเรียก API หรือดำเนินการเข้าสู่ระบบ
        alert(`Email: ${values.email}\nPassword: ${values.password}`);
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Login</h2>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="email">Email:</label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            style={{ width: '100%', padding: '8px' }}
                        />
                        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="password">Password:</label>
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            style={{ width: '100%', padding: '8px' }}
                        />
                        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                    </div>
                    <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>
                        Login
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default Login;