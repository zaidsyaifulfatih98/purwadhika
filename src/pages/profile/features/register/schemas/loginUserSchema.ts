import * as yup from 'yup';

export const loginUserSchema = yup.object().shape({
  email: yup
    ?.string()
    .email('Email format is invalid')
    .required('email is required'),
  password: yup
    ?.string()
    .required('Password is required')
    .min(8, 'Password must have minimum 8 characters')
    .max(25, 'Password must have maximum 25 characters'),
});