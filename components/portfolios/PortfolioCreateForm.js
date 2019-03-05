import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Alert } from 'reactstrap';
import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';

const validateInputs = (values) => {
    let errors = {};

    Object.entries(values).forEach(([key, value]) => {
        if (!values[key]){
            errors[key] = `Field Is Required`
        }
    });

    return errors;
}

const PortfolioCreateForm = ({initialValues, onSubmit, error}) => (
    <div>
        <Formik
            initialValues={initialValues}
            validate={validateInputs}
            onSubmit={onSubmit}
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
                        <Field type="text" 
                               name="picture1" 
                               label="Picture No.1"
                               component={PortInput}/>
                        <Field type="text" 
                               name="picture2" 
                               label="Picture No.2"
                               component={PortInput}/>
                        <Field type="text" 
                               name="picture3" 
                               label="Picture No.3"
                               component={PortInput}/>
                        <Field type="text" 
                               name="picture4" 
                               label="Picture No.4"
                               component={PortInput}/>
                        <Field type="text" 
                               name="videoURL" 
                               label="Video URL"
                               component={PortInput}/>
                        <Field name="dateAdded" 
                               label="Date Added"
                               initialDate={initialValues.dateAdded}
                               component={PortDate}/>

                        {   error &&
                            <Alert color="danger">
                                {error}
                            </Alert>
                        }

                        <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
                            Add
                        </Button>
                </Form>
            )}
        </Formik>
    </div>
);

export default PortfolioCreateForm;