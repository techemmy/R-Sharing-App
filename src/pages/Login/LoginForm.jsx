import { Field, Form, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import Button from '../../components/ui/Button'

const loginValidationSchema = Yup.object({
  emailOrUsername: Yup.string().min(5, "Must be 5 characters or more")
    .required('Required')
    .test('is-valid-email',
      () => "Enter a valid email",
      value => {
        if (value.includes('@')) {
          return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
        }
        return value
      }),
  password: Yup.string().required('Required')
})

export default function LoginForm({ handleSubmit }) {
  return (
    <Formik
      initialValues={{ emailOrUsername: '', password: '' }}
      validationSchema={loginValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values).then(() => {
          setSubmitting(false)
        })
      }}
    >
      {(formik) => (
        <Form className="space-y-4">

          <div className="relative">
            <label htmlFor="emailOrUsername" className="block text-sm font-medium text-gray-700">
              Email or Username
            </label>
            <ErrorMessage
              className="absolute top-0 right-0 text-red-500 text-sm"
              name="emailOrUsername"
              component="div"
            />
            <Field
              id="emailOrUsername"
              name="emailOrUsername"
              type="text"
              placeholder="Enter your email or username"
              className="py-2 px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <ErrorMessage
              className="absolute top-0 right-0 text-red-500 text-sm"
              name="password"
              component="div"
            />
            <Field
              name="password"
              id="password"
              type="password"
              placeholder="Enter your password"
              className="mt-1 py-2 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <Button
            type="submit"
            disabled={!formik.isValid}
            isLoading={formik.isSubmitting}
            loaderColor="text-white"
            className={`w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer ${!formik.isValid && 'cursor-not-allowed'}`}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}
