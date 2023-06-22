import { Formik, Field, Form, FormikHelpers } from 'formik';
import 'bootstrap/dist/css/bootstrap.css';

interface Values {
    username: string;
    password: string;
}

export default function LoginForm() {
    return (
        <><Formik
            initialValues={{
                username: '',
                password: '',
            }}

            onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
            ) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            } }

        >

            <Form>
            <div>
                <h2>Login</h2>
            </div>
            <div className="mb-3">
              <Field className="form-control" id="username" name="username" placeholder="Username" aria-describedby="usernameHelp" />
            </div>
  
            <div className="mb-3">
              <Field className="form-control" id="password" name="password" placeholder="Password" type="password" />
            </div>

                <button type="submit">Login</button>
            </Form>
        </Formik></>
    )
}


