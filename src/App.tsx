import React from 'react';
import './styles/App.css';
import CompanyList from './components/CompanyList/CompanyList';
import Posts from './components/Posts/Posts';
import Tabs from './components/Tabs/Tabs';
import TabPane from './components/Tabs/TabPane/TabPane';

const App = () => (
  <div className="app">
    <Tabs>
      <TabPane title="Company List">
        <CompanyList />
      </TabPane>
      <TabPane title="Posts">
        <Posts />
      </TabPane>
    </Tabs>
  </div>
);

export default App;
