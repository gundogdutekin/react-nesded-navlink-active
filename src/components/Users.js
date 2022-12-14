import React, { useState, useEffect } from 'react'
import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom'
import axios from 'axios'
import User from './User'
import Post from'./Post'

function Users() {
  const [users, setUsers] = useState([])
  const {url, path } = useRouteMatch()
  
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="users">
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} 
            <span className="userLink">
              <NavLink  className={isActive=>isActive ? "isActive ml10" : "colorLink isPassive ml10"} to={`${url}/posts/${user.id}`}><span >Posts</span></NavLink> 
              <NavLink  className={isActive=>isActive ? "isActive ml10" : "colorLink isPassive ml10"} to={`${url}/${user.id}`}><span >Detail</span></NavLink>
            </span>
            
          </li>
        ))}
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a user.</h3>
        </Route>
        <Route exact path={`/users/:id`} component={User} />
        <Route exact path={`${path}/posts/:id`} component={Post} />
        
      </Switch>
    </div>
  )
}

export default  Users
