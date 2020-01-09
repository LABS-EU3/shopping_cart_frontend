import React from 'react'
import '../../less/index.less'
import Inventory from './inventory'
import Nav from '../DashboardHome/Footer';

function Main () {
  return (
    <div>
      <Inventory />
      <Nav />
    </div>
  )
}

export default Main
