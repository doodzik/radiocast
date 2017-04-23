import React from 'react'
import styled from 'styled-components'

var FontAwesome = require('react-fontawesome')

const Progress = styled.progress`
  width: 100%;
  margin: 30px 0;
`

const Flex = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
`

const Description = styled.div`
  margin: 30px 0;
`

const Radiocast = () => (
  <div>
    <img src="https://www.smashingmagazine.com/images/music-cd-covers/3.jpg" />
    <Flex justifyContent="center">
      <h3>Titel</h3>
    </Flex>
    <Flex justifyContent="center">
      <h4>Artist</h4>
    </Flex>
    <Progress value="70" max="100">70 %</Progress>
    <Flex justifyContent="space-around">
      <FontAwesome name='undo' size='2x'/>
      <FontAwesome name='play' size='2x'/>
      <FontAwesome name='pause' size='2x'/>
      <FontAwesome name='fast-forward' size='2x'/>
    </Flex>
    <Description>Description</Description>
  </div>
)

export default Radiocast
