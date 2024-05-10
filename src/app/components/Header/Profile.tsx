import {  Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
  user?: {
    id: string;
    email: string;
    name: string;
  }
};


export function Profile({ showProfileData = true, user }: ProfileProps) {
  return(
    <Flex align="center">
      { showProfileData && (
        <Box mr="4"textAlign="right">
          <Text> {user?.name} </Text>
          <Text color="gray.300" fontSize="small">{ user?.email }</Text>
        </Box>
      )}

      <Avatar size="md" name={user?.name}/>
  </Flex>
  );
}