import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ActionReorder from 'material-ui/svg-icons/action/reorder';
import HardwareComputer from 'material-ui/svg-icons/hardware/computer';
import Link from 'next/link'


const linkStyle = {
  marginRight: 15
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><ActionReorder /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText= "The Bay Area Lifestyle" href="/"/>
    <MenuItem primaryText= "The Code2040 Project" href="/mentor"/>
    <MenuItem primaryText= "The Zillow Group Family" href="/zgroup"/>
    <MenuItem primaryText= "About" href="/about"/>
    <MenuItem primaryText= "Demo Page" href="/demo"/>
  </IconMenu>
);

const LinkIn = (props) => (
  <a href="https://www.linkedin.com/in/efrancisii/" target="_blank" rel="nofollow noreferrer noopener">
    <HardwareComputer/>
  </a>
);


class AppBarExampleComposition extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Select Your Page"
          iconElementLeft={<Logged />}
          iconElementRight={<IconButton><LinkIn /></IconButton>}
        />
      </div>
    );
  }
}

export default AppBarExampleComposition;
