import { getSingleUser } from '@/services/userServices'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/context/AuthContext'

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await getSingleUser(user.id)
        if (result.status === 200) {
          setUserData(result.data)
        }
      } catch (error) {
        console.log('Ocurrio un error en Login: ' + error.message)
      }
    }
    fetchUserData()
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      {
        user?.role === 'ADMIN'
          ? <h2>Admin</h2>
          : <h2>Hola User:</h2>
      }
      {
        user?.role === 'CUSTOMER' && <h4>Bienvenido Customer</h4>
      }
      {
        user?.role === 'ADMIN' && <h4>Bienvenido Admin</h4>
      }

      {
        userData?.first_name && <p className='first_name'>First name: {userData.first_name}</p>
      }
      {
        userData?.last_name && <p className='last_name'>last name: {userData.last_name}</p>
      }
      {
        userData?.gender && <p className='gender'>Gender: {userData.gender}</p>
      }
      {
        userData?.email && <p className='email'>E-mail: {userData.email}</p>
      }
    </div>
  )
}

export default Dashboard
