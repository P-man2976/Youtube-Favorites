import React from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const IconListButton = (props) => {
  return (
    <ListItem button key={props.key} component={props.component} to={props.to}>
      <ListItemIcon>
        {props.icon}
      </ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItem>
  )
}

export default IconListButton;