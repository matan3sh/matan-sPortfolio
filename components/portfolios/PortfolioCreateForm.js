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

const INITIAL_VALUES = { title: '', 
                         type: '', 
                         programmingLanguage: '', 
                         database: '', 
                         description: '',
                         videoURL: '',
                         dateAdded: '' };

const PortfolioCreateForm = (props) => (
    <div>
        <Formik
            initialValues={INITIAL_VALUES}
            validate={validateInputs}
            onSubmit={props.onSubmit}
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
                               name="videoURL" 
                               label="Video URL"
                               component={PortInput}/>
                        <Field name="dateAdded" 
                               label="Date Added"
                               component={PortDate}/>

                        {   props.error &&
                            <Alert color="danger">
                                {props.error}
                            </Alert>
                        }

                        <Button color="danger" size="lg" type="submit" disabled={isSubmitting}>
                            Add
                        </Button>
                </Form>
            )}
        </Formik>
    </div>
);

export default PortfolioCreateForm;