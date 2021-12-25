import React from 'react';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const IconListButton = (props) => {
  return (
    <ListItemButton>
      <ListItemIcon>
        {props.icon}
      </ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItemButton>
  )
}

export default IconListButton;