import { Box, Text, Heading, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Box p={8}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Heading as="h2" size="lg" mb={4}>
          About Me
        </Heading>
        <Text color="gray.500" fontSize="lg">
          IIIT Bangalore | Majored in Data Science <br />
          SMIT Sikkim | B.Tech in Computer Science
        </Text>
        <Text color="gray.700" mt={4} fontSize="md">
          As a seasoned Engineering Lead with over 14 years of dedicated experience in application development, I bring a strategic and forward-thinking approach to every project. Fueled by a fervent passion for technology, I am committed to staying on the cutting edge by constantly learning new technologies to enhance product efficiency. Currently immersed in an Agile-based development model, I excel as an individual contributor, actively advancing my skills within the dynamic landscape of the industry. My proven ability to navigate complex challenges and lead teams underscores my commitment to delivering high-quality results in the ever-evolving field of engineering.
        </Text>
      </motion.div>

      <Box mt={8}>
        <Heading as="h3" size="md" mb={4} color="teal.500">
          Skills
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing={4}>
          <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm">
            <Text fontSize="lg" fontWeight="bold" color="blue.600">
              Java 17
            </Text>
            <Text fontSize="sm" color="gray.600">
              Expertise in modern Java development, including Spring Boot.
            </Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm">
            <Text fontSize="lg" fontWeight="bold" color="blue.600">
              AWS
            </Text>
            <Text fontSize="sm" color="gray.600">
              Proficient in cloud services and deployment.
            </Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm">
            <Text fontSize="lg" fontWeight="bold" color="blue.600">
              ReactJS
            </Text>
            <Text fontSize="sm" color="gray.600">
              Skilled in building dynamic and responsive UIs.
            </Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm">
            <Text fontSize="lg" fontWeight="bold" color="blue.600">
              Kafka
            </Text>
            <Text fontSize="sm" color="gray.600">
              Experience in distributed messaging systems.
            </Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm">
            <Text fontSize="lg" fontWeight="bold" color="blue.600">
              Camunda
            </Text>
            <Text fontSize="sm" color="gray.600">
              Expertise in workflow and decision automation.
            </Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm">
            <Text fontSize="lg" fontWeight="bold" color="blue.600">
              MongoDB
            </Text>
            <Text fontSize="sm" color="gray.600">
              Proficient in NoSQL database management.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default About;
