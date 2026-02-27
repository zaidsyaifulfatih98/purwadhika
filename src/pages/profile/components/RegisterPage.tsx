import { useFormik } from 'formik';
import { registerUserSchema } from '../../../pages/profile/features/register/schemas/registerUserSchema';
import Backendless from '../../../../lib/BackendlessTokopedia';
import { toast, ToastContainer } from 'react-toastify';

type RegisterFormValues = {
  email: string;
  name: string;
  password: string;
};

export default function RegisterPage() {
  const onHandleRegisterUser = async ({
    email,
    name,
    password,
  }: RegisterFormValues) => {
    try {
      await Backendless.UserService.register({ email, name, password });

      toast.success('Register user successfully');
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },
    validationSchema: registerUserSchema,
    onSubmit: ({ email, name, password }: RegisterFormValues) => {
      onHandleRegisterUser({ email, name, password });
    },
  });

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={formik?.handleSubmit}
        className='flex flex-col items-center py-10'
      >
        <fieldset className='fieldset w-90'>
          <legend className='fieldset-legend'>Email</legend>
          <input
            id='email'
            name='email'
            onChange={formik?.handleChange}
            value={formik?.values?.email}
            type='text'
            className='input'
            placeholder='Type your email'
          />
          <p className='label text-red-500'>{formik?.errors?.email}</p>
        </fieldset>
        <fieldset className='fieldset w-90'>
          <legend className='fieldset-legend'>Password</legend>
          <input
            id='password'
            name='password'
            onChange={formik?.handleChange}
            value={formik?.values?.password}
            type='password'
            className='input'
            placeholder='Type your password'
          />
          <p className='label'>{formik?.errors?.password}</p>
        </fieldset>
        <fieldset className='fieldset w-90'>
          <legend className='fieldset-legend'>Name</legend>
          <input
            id='name'
            name='name'
            onChange={formik?.handleChange}
            value={formik?.values?.name}
            type='text'
            className='input'
            placeholder='Type your name'
          />
          <p className='label'>{formik?.errors?.name}</p>
        </fieldset>
        <button className='btn bg-green-700 text-white'>Register</button>
      </form>
    </>
  );
}