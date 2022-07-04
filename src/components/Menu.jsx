import React, { useState } from 'react'
import List from './List';

export default function Menu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <>
              <button className='w3-button w3-display-left w3-hover-blue-grey w3-hide-large w3-row-padding'>
              <i 
              className="fas fa-church w3-hover-khaki"
              id='basic-button'
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              aria-label='menu' 
              ></i></button>
              <List 
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
              />
    </>
  )
}