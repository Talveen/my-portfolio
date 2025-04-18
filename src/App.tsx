import { BrowserRouter as Router } from "react-router-dom";
import {
  Box,
  Container,
  Flex,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";

function App() {
  const [activeTab, setActiveTab] = useState(0); // Manage active tab state

  return (
    <Router>
      <Box bg="gray.50" minH="100vh" py={10}>
        <Container maxW="container.xl">
          {/* Header */}
          <Flex justify="center" mb={8}>
            <Heading as="h1" size="xl" color="teal.500">
              Talveen Singh Rakhra
            </Heading>
          </Flex>

          {/* Horizontal Tabs Layout */}
          <Tabs
            index={activeTab} // Bind active tab to state
            onChange={(index) => setActiveTab(index)} // Update state on tab change
            variant="enclosed"
            colorScheme="teal"
            borderRadius="md"
            boxShadow="lg"
            bg="white"
            p={4}
          >
            {/* Tab Navigation */}
            <TabList>
              <Tab fontWeight="bold">Home</Tab>
              <Tab fontWeight="bold">About</Tab>
              <Tab fontWeight="bold">Experience</Tab>
              <Tab fontWeight="bold">Contact</Tab>
            </TabList>

            {/* Tab Content */}
            <TabPanels>
              <TabPanel>
                <Home switchToTab={setActiveTab} /> {/* Pass setActiveTab directly */}
              </TabPanel>
              <TabPanel>
                <About />
              </TabPanel>
              <TabPanel>
                <Experience />
              </TabPanel>
              <TabPanel>
                <Contact />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
    </Router>
  );
}

export default App;