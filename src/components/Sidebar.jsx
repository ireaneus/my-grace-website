import React from 'react'
import List from './List'

const Sidebar = () => {

  return (
    <div className="w3-sidebar w3-hide-medium w3-hide-small">
    <button className="w3-button w3-display-topright"><i className="fa fa-remove"></i></button>
    <List />
    </div>
  )
}

export default Sidebar