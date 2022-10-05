import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import axios from 'axios'

function User() {
  let { id } = useParams()
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <>
      <h3>User Details</h3>
      {loading && <div>loading...</div>}
      {!loading && (
        <div className="detailInfo">
        <pre>
          Name:{user.name}
          <br />
          Username:{user.username}
          <br />
          Email:{user.email}
          <br />
           <span className="adressInfoTitle">Address İnfo : </span> <br />
          <span className="adresInfoItem">Street :</span>{user.address.street}
          <br />
          <span className="adresInfoItem">Apt :</span>{user.address.suite}
          <br />
          <span className="adresInfoItem">City :</span>{user.address.city}
          <br />
          <span className="adresInfoItem">Zip :</span>{user.address.zipcode}
          <br />
        </pre>
        </div>
      )}
      
      {!loading && (
        <div>
          <NavLink
            className={(isActive) => (isActive ? ' isActive' : '')}
            to={`/users/${parseInt(id) + 1}`}
          >
            Next User({parseInt(id) + 1})
          </NavLink>
        </div>
      )}
    </>
  )
}

export default User
