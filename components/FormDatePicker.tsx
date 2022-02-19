import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import {Box, FormControl, FormErrorMessage, FormLabel} from '@chakra-ui/react';

interface FormDatePicker {
  name: string,
  label?: string,
  errors?: any,
  touched?: any,
}

const FormDatePicker = ({ name, label, errors }: FormDatePicker) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField({...{name}});

  const isError = errors && errors[name];

  return (
    <FormControl
      display="flex"
      alignItems="baseline"
      isInvalid={isError}
    >
      {
        label && <FormLabel>{label}</FormLabel>
      }
      <Box flex={1}>
        <DatePicker
          {...field}
          {...{name}}
          selected={(field.value && new Date(field.value)) || null}
          onChange={val => {
            setFieldValue(field.name, val);
          }}
        />
        <FormErrorMessage>{errors[name]}</FormErrorMessage>
      </Box>

    </FormControl>
  );
}

export default FormDatePicker;
