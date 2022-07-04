import React from 'react'
import List from './List'

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
};

export default function Sidebar() {

  return (
    <div id='mySidebar' className="w3-sidebar w3-hide-medium w3-hide-small">
    <button className="w3-button w3-display-topright w3-hide-large" onClick={w3_close}><i className="fa fa-remove"></i></button>
    <List />
    </div>
  )
}