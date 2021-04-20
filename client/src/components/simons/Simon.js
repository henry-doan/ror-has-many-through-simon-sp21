import { useState, useEffect } from 'react';
import Dpls from '../dpls/Dpls';
import axios from 'axios';

const Simon = ({ grabSimonUsers, id, glasses, four_out_of_five, country_origin }) => {
  const [users, setSimonUsers] = useState([])

  useEffect( () => {
    // let sUsers = grabSimonUsers(id)
    // setSimonUsers(sUsers)
    axios.get(`/api/simonUsers/${id}`)
      .then( res => {
        setSimonUsers(res.data)
      })
      .catch( err => console.log(err))
  }, [])
  return (
    <>
      <p>Glasses: { glasses ? "Has Glasses" : "No Glasses"}</p>
      <p>4/5: { four_out_of_five }</p>
      <p>{ country_origin } Country</p>
      <>
      { 
        users !== undefined && users.length > 0 ? 
          <>
            {
              users.map( u => 
                <p>{u.name}</p>
              )
            }
          </>
        : <p>No Users</p>
      }
        <Dpls simonId={id} />
      </>
      <br />
      <br />
      <br />
    </>
  )
}

export default Simon