import React, { useState, useContext } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { UserContext } from '../../context/UserContext';
import uploadImage from '../../utils/uploadImage';

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = '';

    if (!fullName) {
      setError('Please enter your name');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!password) {
      setError('Please enter the password');
      return;
    }

    setError('');

    try {
      // Upload image if present
      if (profilePic) {
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.imageUrl || '';
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
      });

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem('token', token);
        updateUser(user);
        navigate('/dashboard');
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Something went wrong, please try again');
      }
    }
  };

  return (
    <AuthLayout>
      <div className='lg:w-full h-auto md:h-full mt-20 md:mt-0 flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-purple-700'>Create an Account</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Join us today by entering the details below.
        </p>

        <form onSubmit={handleSignUp} className='space-y-6'>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='w-full'>
              <Input
                type='text'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                label='Full Name'
                placeholder='John'
              />
            </div>
            <div className='w-full'>
              <Input
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label='E-mail Address'
                placeholder='john@example.com'
              />
            </div>
            <div className='col-span-1 md:col-span-2 w-full'>
              <Input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label='Password'
                placeholder='********'
              />
            </div>
          </div>

          {error && <p className='text-red-500 text-xs'>{error}</p>}

          <button type='submit' className='btn-primary w-full'>
            Sign Up
          </button>

          <p className='text-[13px] text-slate-800 mt-3'>
            Already have an account?{' '}
            <Link className='font-medium text-primary underline' to='/login'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;