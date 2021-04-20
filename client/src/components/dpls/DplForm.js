import { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { AuthConsumer } from '../../providers/AuthProvider';

const DplForm = ({ simonId, addDpl, user }) => {
  const [dpl, setDpl] = useState({ location: "", built: 0, capacity: 0, user_id: user.id })

  const handleSubmit = (e) => {
    e.preventDefault()
    setDpl({...dpl, built: parseInt(dpl.built), capacity: parseInt(dpl.capacity), user_id: user.id })
    addDpl(simonId, dpl)
    setDpl({ location: "", built: 0, capacity: 0, user_id: user.id })
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input 
        name="location"
        value={dpl.location}
        onChange={(e) => setDpl({ ...dpl, location: e.target.value })}
        label="Location"
      />
      <Form.Input 
        name="built"
        value={dpl.built}
        onChange={(e) => setDpl({ ...dpl, built: e.target.value })}
        label="Built"
      />
      <Form.Input 
        name="capacity"
        value={dpl.capacity}
        onChange={(e) => setDpl({ ...dpl, capacity: e.target.value })}
        label="Capacity"
      />
      <Form.Button>Save</Form.Button>
    </Form>
  )
}

const ConnectedDplForm = (props) => (
  <AuthConsumer>
    { value => (
      <DplForm {...props} user={value.user} />
    )}
  </AuthConsumer>
)

export default ConnectedDplForm;