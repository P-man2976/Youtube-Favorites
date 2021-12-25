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
      <ListItemText>
        {props.text}
      </ListItemText>
    </ListItemButton>
  )
}

export default IconListButton;