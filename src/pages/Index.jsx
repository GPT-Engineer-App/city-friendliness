import { Box, Container, Flex, Heading, Input, SimpleGrid, Text, VStack, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Index = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/o88mcqdvgzk1f")
      .then(response => response.json())
      .then(data => setCities(data))
      .catch(error => console.error("Error fetching city data:", error));
  }, []);

  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="blue.800" color="white" py={4}>
        <Flex justify="center" align="center">
          <Heading as="h1" size="lg">NomadRank</Heading>
        </Flex>
      </Box>
      <Image src="/images/tropical-beach.jpg" alt="Tropical Beach" objectFit="cover" width="full" height="300px" />
      <VStack spacing={4} p={4}>
        <Heading as="h2" size="md">Discover the Best Cities for Digital Nomads</Heading>
        <Text fontSize="lg">Find your perfect destination with real-time data on the best cities around the world.</Text>
        <Input placeholder="Search cities..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </VStack>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} p={4}>
        {cities.filter(city => city.city.toLowerCase().includes(searchTerm.toLowerCase())).map((city, index) => (
          <Box key={index} p={4} boxShadow="md" rounded="md">
            <Text fontWeight="bold">{city.city}</Text>
            <Text>{city.country}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;