import React, { ReactElement, useState } from 'react';

import styles from './Tabs.module.css';
import TabTitle from './TabTitle/TabTitle';
import { TabPaneProps } from './TabPane/TabPane';
import Modal from '../Modal/Modal';
import RegisterForm from '../RegisterForm /RegisterForm';

type TabsProps = {
  children: ReactElement<TabPaneProps>[];
  preSelectedTabIndex?: number;
};

const Tabs: React.FC<TabsProps> = ({ children, preSelectedTabIndex }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(preSelectedTabIndex || 0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClose = (): void => {
    setShowModal(false);
  };

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
        <div className={styles.tab_registrations}>
          <button type="button" onClick={() => setShowModal(true)}> Open modal </button>
        </div>
        <Modal show={showModal} onClose={handleClose}>
          <RegisterForm />
        </Modal>
      </ul>
      {/* show selected tab by index */}
      {children[selectedTabIndex]}
    </div>
  );
};

export default Tabs;
