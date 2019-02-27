import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';
import PortInput from '../form/PortInput';

const validateInputs = (validate) => {
    let errors = {};

    // if (!values.email) {
    //     errors.email = 'Required';
    // } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    // ) {
    //     errors.email = 'Invalid email address';
    // }

    return errors;
}

const INITIAL_VALUES = { title: '', 
                         type: '', 
                         programmingLanguage: '', 
                         database: '', 
                         description: '' };

const PortfolioCreateForm = () => (
    <div>
        <Formik
            initialValues={INITIAL_VALUES}
            validate={validateInputs}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                        <Field type="text" 
                               name="title"
                               label="Title" 
                               component={PortInput}/>
                        <Field type="text" 
                               name="type"
                               label="Type" 
                               component={PortInput}/>
                        <Field type="text" 
                               name="programmingLanguage" 
                               label="Programming Languages"
                               component={PortInput}/>
                        <Field type="text" 
                               name="database" 
                               label="Database"
                               component={PortInput}/>
                        <Field type="textarea" 
                               name="description" 
                               label="Description"
                               component={PortInput}/>

                        <Button type="submit" disabled={isSubmitting}>
                            Add
                        </Button>
                </Form>
            )}
        </Formik>
    </div>
);

export default PortfolioCreateForm;