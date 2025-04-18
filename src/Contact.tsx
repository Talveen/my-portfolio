import { Box, Text, Button, VStack, Input, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handleSendEmail = () => {
    toast({
      title: "Email Sent",
      description: "Your email has been sent successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setEmail("");
    setMessage("");
  };

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