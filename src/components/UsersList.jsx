import {
  Box,
  VStack,
  Text,
  Badge,
  Flex,
  Icon,
  Tooltip,
  Avatar,
} from "@chakra-ui/react";
import { FiUsers, FiCircle } from "react-icons/fi";


const UsersList = ({ users }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Mobile Drawer for Sidebar */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Members</DrawerHeader>
            <DrawerBody>
              <VStack align="stretch" spacing={3}>
                {users.map((user) => (
                  <Box key={user._id}>
                    <Tooltip label={`${user.username} is online`} placement="left">
                      <Flex
                        p={3}
                        bg="white"
                        borderRadius="lg"
                        shadow="sm"
                        align="center"
                        borderWidth="1px"
                        borderColor="gray.100"
                      >
                        <Avatar
                          size="sm"
                          name={user.username}
                          bg="blue.500"
                          color="white"
                          mr={3}
                        />
                        <Box flex="1">
                          <Text
                            fontSize="sm"
                            fontWeight="medium"
                            color="gray.700"
                            noOfLines={1}
                          >
                            {user.username}
                          </Text>
                        </Box>
                        <Flex
                          align="center"
                          bg="green.50"
                          px={2}
                          py={1}
                          borderRadius="full"
                        >
                          <Icon
                            as={FiCircle}
                            color="green.400"
                            fontSize="8px"
                            mr={1}
                          />
                          <Text fontSize="xs" color="green.600" fontWeight="medium">
                            online
                          </Text>
                        </Flex>
                      </Flex>
                    </Tooltip>
                  </Box>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      {/* Desktop Sidebar */}
      <Box
        h="100%"
        w={{ base: "100%", md: "300px" }}
        borderLeft="1px solid"
        borderColor="gray.200"
        bg="white"
        position="relative"
        overflow="hidden"
        display={{ base: "none", md: "block" }} // Hide on mobile, show on desktop
      >
        {/* Header */}
        <Flex
          p={5}
          borderBottom="1px solid"
          borderColor="gray.200"
          bg="white"
          align="center"
          position="sticky"
          top={0}
          zIndex={1}
          boxShadow="sm"
        >
          <Icon as={FiUsers} fontSize="20px" color="blue.500" mr={2} />
          <Text fontSize="lg" fontWeight="bold" color="gray.700">
            Members
          </Text>
          <Badge
            ml={2}
            colorScheme="blue"
            borderRadius="full"
            px={2}
            py={0.5}
            fontSize="xs"
          >
            {users.length}
          </Badge>
        </Flex>

        {/* Users List */}
        <Box flex="1" overflowY="auto" p={4}>
          <VStack align="stretch" spacing={3}>
            {users.map((user) => (
              <Box key={user._id}>
                <Tooltip label={`${user.username} is online`} placement="left">
                  <Flex
                    p={3}
                    bg="white"
                    borderRadius="lg"
                    shadow="sm"
                    align="center"
                    borderWidth="1px"
                    borderColor="gray.100"
                  >
                    <Avatar
                      size="sm"
                      name={user.username}
                      bg="blue.500"
                      color="white"
                      mr={3}
                    />
                    <Box flex="1">
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.700"
                        noOfLines={1}
                      >
                        {user.username}
                      </Text>
                    </Box>
                    <Flex
                      align="center"
                      bg="green.50"
                      px={2}
                      py={1}
                      borderRadius="full"
                    >
                      <Icon
                        as={FiCircle}
                        color="green.400"
                        fontSize="8px"
                        mr={1}
                      />
                      <Text fontSize="xs" color="green.600" fontWeight="medium">
                        online
                      </Text>
                    </Flex>
                  </Flex>
                </Tooltip>
              </Box>
            ))}
          </VStack>
        </Box>
      </Box>

      {/* Button to open Drawer on Mobile */}
      <Box display={{ base: "block", md: "none" }}>
        <button onClick={onOpen}>Open Members</button>
      </Box>
    </>
  );
};

export default UsersList;
