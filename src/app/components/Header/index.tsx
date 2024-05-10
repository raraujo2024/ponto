import { Flex } from "@chakra-ui/react";
import { Profile } from './Profile';
import { Logo } from "./Logo";

export function Header() {
  const userData = {
    id: 'ahsduahsa',
    email: 'm@m.com',
    name: 'Mateus',
  }

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      <Flex align="center" ml="auto">
        <Profile showProfileData={true} user={userData} />
      </Flex>
    </Flex>
  )
}