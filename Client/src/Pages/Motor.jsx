import React from 'react'
import Navbarcomponent from './Navbar'
import { MotorBgDiv, MotorBgh1, MotorBgh2, MotorBgh3 } from '../Styles/Motor'
import FooterComponent from '../Footer'
import SectionComponent from './Section'

const MotorComponent = () => {
  return (
    <>
    <Navbarcomponent/>
    <MotorBgDiv>
      <MotorBgh3>Home / Motors</MotorBgh3>
      <MotorBgh2>Our ranges</MotorBgh2>
      <MotorBgh1>Motors</MotorBgh1>
    </MotorBgDiv>
    <SectionComponent/>
    <FooterComponent/>
    </>
  )
}

export default MotorComponent