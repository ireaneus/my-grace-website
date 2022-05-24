import { Box, Divider, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Paper, Switch } from '@mui/material';
import React, { useState } from 'react'

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <Box sx={{ display:{xs: 'block', sm: 'block', md: 'none'} }}>
          <Church 
            id='basic-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className='w3-hover-khaki' 
            aria-label='menu' 
          >
          </Church>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList disablePadding>
        <MenuItem>
          <ListItemButton component='a' href='#homepage'>
           <ListItemIcon>
            <Home />
           </ListItemIcon>
           <ListItemText primary='Homepage' />
          </ListItemButton>
        </MenuItem>
        <MenuItem>
          <ListItemButton component='a' href='#groups'>
          <ListItemIcon>
          <Group />
          </ListItemIcon>
          <ListItemText primary='Groups' />
        </ListItemButton>
        </MenuItem>
        <MenuItem>
          <ListItemButton component='a' href='#sermons'>
          <ListItemIcon>
          <LibraryBooks />
          </ListItemIcon>
          <ListItemText primary='Sermons' />
        </ListItemButton>
        </MenuItem>
        <MenuItem>
          <ListItemButton component='a' href='#about'>
          <ListItemIcon>
          <InfoOutlined />
          </ListItemIcon>
          <ListItemText primary='About' />
        </ListItemButton>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
          <ModeNight />
          </ListItemIcon>
          <Switch />
        </MenuItem>
      </MenuList>
    </Paper>
    </Menu>
</Box>
      );
    }