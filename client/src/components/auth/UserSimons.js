import { useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const UserSimons = ({ userSimons, grabUserSimons }) => {
  
  useEffect( () => {
    grabUserSimons()
  }, [])

  return(
    <>
      { userSimons.length > 0 ?
        <>
          { userSimons.map( s =>
            <>
              <p>Glasses: { s.glasses ? "Has Glasses" : "No Glasses"}</p>
              <p>4/5: { s.four_out_of_five}</p>
              <p>{ s.country_origin } Country</p>
              <Link to={{
                pathname: `/user/simons/${s.id}`,
                // state: { simon_id: s.id, msg: 'hello', simon_glasses: s.glasses, }
              }}>
                <button>Show Page</button>
              </Link>
              <br />
              <br />
              <br />
            </>
          )}
        </>
      : <p>No users for Simons</p>}
    </>
  )
}

const ConnectedUserSimons = (props) => (
  <AuthConsumer>
    { value => (
      <UserSimons {...props} {...value} />
    )}
  </AuthConsumer>
)

export default ConnectedUserSimons;