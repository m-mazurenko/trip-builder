import Head from 'next/head';
import Layout from '../../components/Layout';
import {Box, Button, Flex} from '@chakra-ui/react';
import Link from 'next/link';
import { Formik, Form, FormikHelpers } from 'formik';
import FormInputGroup from '../../components/FormInputGroup';
import FormDatePicker from '../../components/FormDatePicker';
import FormInputFile from '../../components/FormInputFile';
import {tripsApiUrl} from '../../constants/api-urls';
import {useRouter} from 'next/router';

interface TripFormValues {
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
}

const CreateTrip = () => {
  const initialValues = {
    name: '',
    destination: '',
    startDate: '',
    endDate: '',
  }

  const router = useRouter();

  const validateForm = (values: TripFormValues) => {
    const errors: any = {};
    const ignoreKeys = ['image'];
    Object.keys(values).forEach((valuesKey: string) => {
      if (!(values[valuesKey as keyof TripFormValues]) && ignoreKeys.indexOf(valuesKey) === -1) {
        errors[valuesKey] = 'This field is required'
      } else {
        delete errors[valuesKey];
      }
    });
    return errors;
  }

  const submit = (
    values: TripFormValues,
    { setSubmitting }: FormikHelpers<TripFormValues>
  ) => {
    setSubmitting(true);
    fetch(tripsApiUrl, {
      method: 'POST',
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then(() => {
        setSubmitting(false);
        router.push('/');
      });
  }

  return (
    <Layout>
      <Head>
        <title>Create Trip</title>
      </Head>
      <section>
        <Formik
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={submit}
        >
          {({
              errors,
              touched,
              submitForm,
              isSubmitting,
              setFieldValue,
          }) => (
            <Form>
              <Box
                mt={3}
                mb={10}
              >
                <Button
                  isLoading={isSubmitting}
                  type="button"
                  colorScheme='blue'
                  mr={2}
                  onClick={submitForm}
                >
                  Save Trip
                </Button>
                <Link href="/">
                  <Button
                    type="button"
                    colorScheme='gray'
                  >
                    Cancel
                  </Button>
                </Link>
              </Box>

              <FormInputGroup
                errors={errors}
                touched={touched}
                name="name"
                label="Trip name"
                placeholder="My awesome Trip"
              />

              <FormInputGroup
                errors={errors}
                touched={touched}
                name="destination"
                label="Trip destination"
                placeholder="My trip destination"
              />

              <Flex>
                <FormDatePicker
                  errors={errors}
                  name="startDate"
                  label="Trip Start"
                />
                <FormDatePicker
                  errors={errors}
                  name="endDate"
                  label="Trip End"
                />
              </Flex>
              <FormInputFile
                label="Trip Image"
                name="image"
                setFieldValue={setFieldValue}
              />
            </Form>
          )}
        </Formik>
      </section>
    </Layout>
  )
}

export default CreateTrip;
