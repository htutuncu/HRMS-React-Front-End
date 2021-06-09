import React from "react";
import { Icon, Menu } from "semantic-ui-react";

export default function Sidebar() {
  return (
    <div>
      <Menu icon="labeled" vertical>
        <Menu.Item name="bell">
          <Icon name="bell" />
          Job Position
        </Menu.Item>

        <Menu.Item name="user">
          <Icon name="user" />
          Job Seeker
        </Menu.Item>

        <Menu.Item name="user">
          <Icon name="user" />
          Employer
        </Menu.Item>
      </Menu>
    </div>
  );
}
