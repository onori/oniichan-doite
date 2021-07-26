import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function MonsterTabs() {
  return (
    <Tabs variant="soft-rounded" colorScheme="green" size="sm">
      <TabList>
        <Tab>レクイエム（67）</Tab>
        <Tab>ジャック（75）</Tab>
        <Tab>ドリラー（75）</Tab>
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
      </TabPanels>
    </Tabs>
  );
}
