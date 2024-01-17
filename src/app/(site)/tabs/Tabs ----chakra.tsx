"use client";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import Providers from "@/providers";

const TabsComponent = () => {
  return (
    <Providers>
      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
          <Tab>Four</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>Three!</p>
          </TabPanel>
          <TabPanel>
            <p>Four!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Providers>
  );
};

export default TabsComponent;
