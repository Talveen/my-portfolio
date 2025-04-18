import { Box, Text, Heading, VStack, Button, HStack } from "@chakra-ui/react";
import { useState } from "react";

const experiences = [
  {
    company: "Wells Fargo",
    role: "Vice President",
    duration: "Jan 2024 - Present",
    description:
      "Guiding a team of 15 developers to build a product from scratch within Global Loan Servicing team to create a tailored workflow solution catering to the bank’s need to process various service requests.",
    technologies: "Java 17, ReactJs, Spring Boot 3.X, Cloud Foundry, Kafka, Camunda, MongoDB, Drools",
    details: [
      "Collaborated with four distinct Scrum teams across regions to address dependencies, resolve blockers, and mitigate issues.",
      "Created a sophisticated Camunda workflow catering to 200 different types of service requests.",
      "Engaged proactively in team ramp-up initiatives.",
    ],
  },
  {
    company: "JP Morgan and Chase Co.",
    role: "Vice President",
    duration: "2017 - 2023",
    description:
      "Worked as a backend Java developer in a Market Risk application and led a team of 4 developers.",
    technologies: "Java 8/11/17, Spring MVC, Spring Boot, AWS, Apache Kafka, Hibernate, Gemfire, Elastic Search, Drools, Camunda, Oracle, REST, Git",
    details: [
      "Hired, trained, and led multiple developers in the past.",
      "Actively involved in project planning, code design, and execution strategy.",
      "Created and maintained comprehensive project plans and walkthroughs with stakeholders.",
      "Subject matter expert for production support validation and root cause analysis of production issues.",
    ],
  },
  {
    company: "Wells Fargo",
    role: "Analyst to Senior Technology Specialist",
    duration: "2010 - 2017",
    description:
      "Worked on multiple tools and systems, including Risk Assessment Tool, Contractor Accrual Tool, Employee Reimbursement Tool, and WF Inventory Management Tool.",
    technologies: "AngularJs, Spring MVC, Hibernate, Struts, SQL Server, JQuery, JSP, Activiti workflow",
    details: [
      "Developed an operations tool for capturing and documenting inventory and conducting risk assessments.",
      "Designed and developed an accrual tool for recognizing earned revenues and consumed expenses.",
      "Crafted and developed a Finance tool that enables users to effortlessly claim financial reimbursements.",
      "Developed a tool using MongoDB as backend to hold large volumes of records for data entry done by team members.",
    ],
  },
];

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  const currentExperience = experiences[currentIndex];

  return (
    <Box p={8}>
      <Heading as="h2" size="lg" mb={6}>
        Work Experience
      </Heading>
      <Box
        bg="gray.100"
        p={6}
        borderRadius="md"
        boxShadow="md"
        position="relative"
      >
        <Heading as="h3" size="md" color="teal.500">
          {currentExperience.company}
        </Heading>
        <Text fontSize="lg" fontWeight="bold" mt={2}>
          {currentExperience.role}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {currentExperience.duration}
        </Text>
        <Text mt={4} color="gray.700" fontSize="sm">
          {currentExperience.description}
        </Text>
        <Text mt={2} color="gray.700" fontSize="sm">
          <strong>Technologies:</strong> {currentExperience.technologies}
        </Text>
        <VStack align="start" spacing={2} mt={4}>
          {currentExperience.details.map((detail, index) => (
            <Text key={index} color="gray.700" fontSize="sm">
              - {detail}
            </Text>
          ))}
        </VStack>
      </Box>
      <HStack justify="space-between" mt={6}>
        <Button onClick={handlePrev} colorScheme="teal" variant="outline">
          Previous
        </Button>
        <Button onClick={handleNext} colorScheme="teal">
          Next
        </Button>
      </HStack>
    </Box>
  );
};

export default Experience;