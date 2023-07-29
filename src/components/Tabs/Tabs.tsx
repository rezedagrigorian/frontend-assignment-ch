import React, { ReactElement, useState } from 'react';

import styles from './Tabs.module.css';
import TabTitle from './TabTitle/TabTitle';
import { TabPaneProps } from './TabPane/TabPane';

type TabsProps = {
  children: ReactElement<TabPaneProps>[];
  preSelectedTabIndex?: number;
};

const Tabs: React.FC<TabsProps> = ({ children, preSelectedTabIndex }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(preSelectedTabIndex || 0);

  return (
    <div className={styles.tabs_container}>
      <ul className={styles.tabs}>
        {children.map((tab, i) => (
          <TabTitle
            key={tab.props.title}
            title={tab.props.title}
            isActive={i === selectedTabIndex}
            select={() => setSelectedTabIndex(i)}
          />
        ))}
      </ul>
      {/* show selcted tab by index */}
      {children[selectedTabIndex]}
    </div>
  );
};

export default Tabs;
