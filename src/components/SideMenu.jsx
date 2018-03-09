import React from "react";
import {Menu, Label} from "semantic-ui-react";

export class SideMenu extends React.Component {
  state = {
    activeItem: "inbox"
  };

  handleItemClick = (evt, {name}) => this.setState({activeItem: name});

  render() {
    return (<Menu vertical>
      <Menu.Item name='inbox' active={ this.state.activeItem === 'inbox' } onClick={ this.handleItemClick }>
        <Label color='teal'>1</Label>
        Inbox
      </Menu.Item>

      <Menu.Item name='spam' active={ this.state.activeItem === 'spam' } onClick={ this.handleItemClick }>
        <Label>51</Label>
        Spam
      </Menu.Item>

      <Menu.Item name='updates' active={ this.state.activeItem === 'updates' } onClick={ this.handleItemClick }>
        <Label>1</Label>
        Updates
      </Menu.Item>
    </Menu>);
  }
}
