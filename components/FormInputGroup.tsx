import {FormControl, FormErrorMessage, FormLabel, Input} from '@chakra-ui/react';
import {Field} from 'formik';

interface FormInputGroup {
  errors?: any,
  touched?: any,
  name: string,
  label: string,
  placeholder: string,
}

// name=tripName

const FormInputGroup = ({ errors, touched, name, label, placeholder }: FormInputGroup) => {
  return (
    <FormControl
      mb={5}
      isInvalid={(errors[name] && touched[name]) || false}
    >
      <FormLabel
        htmlFor={name}
      >
        {label}
      </FormLabel>
      <Field
        as={Input}
        id={name}
        name={name}
        placeholder={placeholder}
        required
      />
      {
        errors
        && touched
        && errors[name]
        && touched[name]
        && <FormErrorMessage>
          {errors[name]}
        </FormErrorMessage>
      }
    </FormControl>
  )
}

export default FormInputGroup;
