import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box>
      <Flex
        as="nav"
        bg="teal.500"
        color="white"
        p={4}
        align="center"
        justify="space-between"
      >
        <Text fontSize="xl" fontWeight="bold">
          Talveen's Portfolio
        </Text>
        <Spacer />
        <Flex gap={4}>
          <Link as={NavLink} to="/" _hover={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link as={NavLink} to="/about" _hover={{ textDecoration: "none" }}>
            About
          </Link>
          <Link as={NavLink} to="/experience" _hover={{ textDecoration: "none" }}>
            Experience
          </Link>
          <Link as={NavLink} to="/contact" _hover={{ textDecoration: "none" }}>
            Contact
          </Link>
        </Flex>
      </Flex>
      <Box p={8}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;