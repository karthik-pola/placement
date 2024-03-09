import React from 'react'
import { ExampleNavbarOne } from '../../components/ExampleNavbarOne'
import { FooterThree } from '../../components/FooterThree'

const About = () => {
  return (
    <div>
      <ExampleNavbarOne />
      <div>this is about section</div>
      <div className="footer">
        <FooterThree />
      </div>
    </div>
  )
}

export default About
