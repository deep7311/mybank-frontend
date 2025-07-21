import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import GuestPage from './GuestPage'
import ProfilePage from './ProfilePage'

const Home = () => {

    const { user } = useContext(AppContext)

  return (
    <div>
        {
            user ? (
                <ProfilePage />
            ) : (
                <GuestPage />
            )
        }
    </div>
  )
}

export default Home