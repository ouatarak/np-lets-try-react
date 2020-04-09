import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ModalExampleCloseIcon = () => (
  <Modal trigger={<Button>Show Modal</Button>} closeIcon>
    <Header icon='archive' content='Learn React' />
    <Modal.Content>
      <p>
        React is awesome!!! Do you want to learn react?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red'>
        <Icon name='remove' /> No
      </Button>
      <Button color='green'>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)

export default ModalExampleCloseIcon