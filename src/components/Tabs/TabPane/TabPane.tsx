import React, { ReactElement } from 'react';

export type TabPaneProps = {
  // eslint-disable-next-line
  title: string;
  children: ReactElement | ReactElement[];
};

const TabPane: React.FC<TabPaneProps> = ({ children }) => (
  <div>
    {children}
  </div>
);

export default TabPane;
