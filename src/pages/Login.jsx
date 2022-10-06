import { useContext } from 'react'
import useForm from '@/hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { loginUserService } from '@/services/userServices'
import { AuthContext } from '@/context/AuthContext'
import '@/assets/css/form.css'

const Login = () => {
  const { loginUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const sendData = async (data) => {
    try {
      const result = await loginUserService(data)
      if (result.status === 200) {
        loginUser(result.data.token)
        // console.log(result.data.token)
        navigate('/')
      }
    } catch (error) {
      console.log('Ocurrio un error en Login: ' + error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <div>
      <main className='form-signin w-100 m-auto box'>
        <form onSubmit={handleSubmit} className='form'>
          <h1 className='h3 mb-3 fw-normal'>Sign in</h1>
          <div className='form-floating inputBox'>
            <input
              type='email'
              required='required'
              className='form-control'
              id='floatingEmail'
              name='email'
              value={input.email}
              onChange={handleInputChange}
              placeholder='name@example.com'
            />
            <label htmlFor='floatingInput'>Email address</label>
            <i />
          </div>
          <div className='form-floating inputBox'>
            <input
              type='password'
              required='required'
              className='form-control'
              id='floatingPassword'
              name='password'
              value={input.password}
              onChange={handleInputChange}
              placeholder='Password'
            />
            <label htmlFor='floatingPassword'>Password</label>
            <i />
          </div>
          <div className='links'>
            <a href='/'>Forgot password?</a>
            <a href='/signup'>Signup</a>
          </div>
          <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
        </form>
      </main>
    </div>
  )
}
export default Login
