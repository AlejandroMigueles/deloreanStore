import useForm from '@/hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { registerUserService } from '@/services/userServices'
import '@/assets/css/form.css'

const Signup = () => {
  const navigate = useNavigate()
  const sendData = async (data) => {
    try {
      const result = await registerUserService(data)
      if (result.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      console.log('Ocurrio un error en Signup: ' + error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  })

  return (
    <div>
      <main className='form-signin w-100 m-auto boxSignUp'>
        <form onSubmit={handleSubmit} className='form'>
          <h1 className='h3 mb-3 fw-normal'>Sign Up</h1>

          <div className='form-floating inputBox'>
            <input
              type='text'
              required='required'
              className='form-control'
              id='first_name'
              name='first_name'
              value={input.first_name}
              onChange={handleInputChange}
              placeholder='John'
            />
            <label htmlFor='first_name'>First Name</label>
            <i />
          </div>

          <div className='form-floating inputBox'>
            <input
              type='text'
              required='required'
              className='form-control'
              id='last_name'
              name='last_name'
              value={input.last_name}
              onChange={handleInputChange}
              placeholder='Doe'
            />
            <label htmlFor='last_name'>Last Name</label>
            <i />
          </div>

          {/* <div className='form-floating'>
            <select
              className='form-select'
              id='gender'
              name='gender'
              value={input.gender}
              onChange={handleInputChange}
            >
              <option value=''>Choose...</option>
              <option value='M'>Male</option>
              <option value='F'>Female</option>
            </select>
            <label htmlFor='gender'>Gender</label>
          </div> */}

          <div className='form-floating inputBox'>
            <input
              type='email'
              className='form-control'
              required='required'
              id='email'
              name='email'
              value={input.email}
              onChange={handleInputChange}
              placeholder='name@example.com'
            />
            <label htmlFor='email'>Email address</label>
            <i />
          </div>

          <div className='form-floating inputBox'>
            <input
              type='password'
              className='form-control'
              required='required'
              id='password'
              name='password'
              value={input.password}
              onChange={handleInputChange}
              placeholder='Password'
            />
            <label htmlFor='password'>Password</label>
            <i />
          </div>

          <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
        </form>
      </main>
    </div>
  )
}

export default Signup
