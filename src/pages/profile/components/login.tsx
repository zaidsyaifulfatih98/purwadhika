import { useFormik } from 'formik';
import { loginUserSchema } from '../../profile/features/register/schemas/loginUserSchema';
import Backendless, {
  ensureTokopediaBackendless,
} from '../../../../lib/BackendlessTokopedia';
import { toast } from 'react-toastify';
import { useAuthStore } from '../../../stores/useAuthStoreTokped';


type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { setAuth } = useAuthStore();

  const onHandleLoginUser = async ({ email, password }: LoginFormValues) => {
    try {
      ensureTokopediaBackendless();
      const response: any = await Backendless.UserService.login(
        email,
        password,
      );

      setAuth({
        email: response?.email,
        name: response?.name,
        role: response?.role,
      });

      toast.success('Login user successfully');
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginUserSchema,
    onSubmit: ({ email, password }: LoginFormValues) => {
      onHandleLoginUser({ email, password });
    },
  });

  return (
    <>
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
        <button className='btn bg-green-700 text-white'>Login</button>
      </form>
    </>
  );
}