import {ChangeEvent} from 'react';
import {Box, FormLabel} from '@chakra-ui/react';

interface FormInputFile {
  name: string,
  label?: string,
  setFieldValue: (name: string, file: File) => void,
}

const FormInputFile = ({ name, label, setFieldValue }: FormInputFile) => {
  const handleFileChange = (event: ChangeEvent) => {
    const target= event.target as HTMLInputElement;
    const file = target.files && target.files[0];
    if (!setFieldValue || !file) {
      return;
    }
    setFieldValue(name, file);
  }

  return (
    <Box mt={5}>
      {label && <FormLabel>{label}</FormLabel>}
      <input
        name={name}
        type="file"
        accept="image/png, image/jpeg"
        onChange={(event) => handleFileChange(event)}
      />
    </Box>
  )
}

export default FormInputFile;
