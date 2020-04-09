import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleContainer = () => (
  <Grid container columns={3}>
    <Grid.Column>
      <Image src='./public/logo512.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='./public/logo512.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='./public/logo512.png' />
    </Grid.Column>
  </Grid>
)

export default GridExampleContainer