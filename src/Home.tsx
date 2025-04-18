import { Box, Button, Text, Image, VStack, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Define the prop type for the Home component
interface HomeProps {
  switchToTab: (index: number) => void;
}

const Home: React.FC<HomeProps> = ({ switchToTab }) => {
  return (
    <Box py={10} px={6}>
      <Flex
        direction={["column", "column", "row"]}
        align="center"
        justify="center"
        gap={10}
      >
        {/* Photo Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Box
            boxSize={["200px", "250px"]}
            borderRadius="full"
            overflow="hidden"
            boxShadow="lg"
          >
            <Image
              src="/assets/potrait.jpg" // Correct path for the image
              alt="Talveen Singh Rakhra"
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Box>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <VStack align="start" spacing={6}>
            <Heading as="h1" size="xl" color="teal.500">
              Talveen Singh Rakhra
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Engineering Lead | 14+ Years of Experience
            </Text>
            <Text fontSize="md" color="gray.700">
              I am an experienced Engineering Lead with over 14 years of
              expertise in software development, team management, and delivering
              scalable solutions. Passionate about technology and innovation, I
              thrive in solving complex problems and mentoring teams to achieve
              their best.
            </Text>
            <Flex gap={4}>
              <Button
                as="a"
                href="/assets/TalveenRakhra2025.pdf" // Correct path for the PDF
                download="TalveenRakhra2025.pdf"
                colorScheme="blue"
              >
                Download Resume
              </Button>
              <Button
                colorScheme="green"
                onClick={() => switchToTab(3)} // Switch to the "Contact" tab
              >
                Contact Me
              </Button>
            </Flex>
          </VStack>
        </motion.div>
      </Flex>
    </Box>
  );
};

export default Home;