import { Box, Text, Button, VStack } from "@chakra-ui/react"; // Removed Input and Textarea

const Contact = () => {
  return (
    <Box p={8}>
      <Text fontSize="3xl" fontWeight="bold">Contact Me</Text>
      <VStack spacing={4} mt={5} align="start">
        {/* Email */}
        <Text>
          Email:{" "}
          <a href="mailto:talveen.rakhra@gmail.com" style={{ color: "teal" }}>
            talveen.rakhra@gmail.com
          </a>
        </Text>

        {/* Phone */}
        <Text>Phone: +91 900 038 1793</Text>

        {/* LinkedIn */}
        <Button
          as="a"
          href="https://www.linkedin.com/in/talveenrakhra/"
          target="_blank"
          colorScheme="linkedin"
        >
          LinkedIn Profile
        </Button>
      </VStack>
    </Box>
  );
};

export default Contact;
