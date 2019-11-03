import React from 'react';
import {Formik} from 'formik';
import BracketFormBody from './BracketFormBody';
import {string, object, array} from 'yup';

export default function BracketForm() {
  const bracketSchema = object().shape({
    name: string().required('Please enter a name'),
    description: string().required('Please enter a description'),
    competitors: array().of(
      string().required('Please enter a name for each competitor'),
    ),
  });

  return (
    <Formik
      validationSchema={bracketSchema}
      initialValues={{
        name: '',
        description: '',
        competitors: ['Competitor 1', 'Competitor 2'],
      }}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert(JSON.stringify(values));
      }}>
      <BracketFormBody />
    </Formik>
  );
}
