import { useEffect, useState } from 'react';
import axios from 'axios';

const SingleUsersSimon = ({ location, match }) => {
  const [simon, setSimon] = useState({})

  useEffect( () => {
    const { id } = match.params
    axios.get(`/api/simons/${id}`)
      .then( res => setSimon(res.data))
      .catch( err => console.log(err))
  }, [])

  return (
    <>
      <h1>Single simon</h1>
      {/* <p>{location.state.msg}</p>
      <p>Glasses: {location.state.simon_glasses ? "Has Glasses" : "No Glasses"}</p>
      <p>This is from Location: {location.state.simon_id}</p> */}
      <p>Glasses: {simon.glasses ? "Has Glasses" : "No Glasses"}</p>
      <p>four_out_of_five: {simon.four_out_of_five}</p>
      <p>Country: {simon.country_origin}</p>
      <p>This is from Match: {match.params.id}</p>
    </>
  )
}

// class SingleUsersSimon extends Component {
  // state = { simon: {}}
  // componentDidMount() => {
  //   const { id } = this.props.match.params
  //   axios.get(`/api/simons/${id}`)
  //     .then( res => this.setState(simon: res.data))
  //     .catch( err => console.log(err))
  // }
//   render () {
//     const { msg, simon_glasses, simon_id } = this.props.location.state 
        // const { glasses} =  this.state.simon
//     const { id } = this.props.match.params
//     return (
//       <>

//       </>
//     )
//   }
// }

export default SingleUsersSimon;