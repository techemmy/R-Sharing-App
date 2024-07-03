import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { Button } from "../../components/ui/Button";

const registerValidationSchema = Yup.object({
  username: Yup.string().trim()
    .required('Required').min(5, "Must be 5 characters or more"),
  email: Yup.string().trim()
    .required('Required').email('Enter a valid email'),
  password: Yup.string().required('Required')
})

export default function RegistrationForm({ handleSubmit }) {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={registerValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values).then(() => {
          setSubmitting(false)
        })
      }}
    >
      {(formik) => (
        <Form className="space-y-4">
          <div className="relative">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <ErrorMessage
              className="absolute top-0 right-0 text-red-500 text-sm"
              name="username"
              component="div"
            />
            <Field
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              className="py-2 px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <ErrorMessage
              className="absolute top-0 right-0 text-red-500 text-sm"
              name="email"
              component="div"
            />
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="py-2 px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <ErrorMessage
              className="absolute top-0 right-0 text-red-500 text-sm"
              name="password"
              component="div"
            />
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="py-2 px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <Button
            type="submit"
            disabled={!formik.isValid}
            isloading={formik.isSubmitting}
            className={`w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer ${!formik.isValid && 'cursor-not-allowed'}`}
          >
            Register
          </Button>
        </Form>
      )}

    </Formik>
  )
}
