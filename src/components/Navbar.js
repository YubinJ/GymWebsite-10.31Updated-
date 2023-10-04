import {
  Button,
  Box,
  Spacer,
  Flex,
  Link,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useAuth } from "../AuthContext";

const buttonStyle = {
  bg: "blue.300",
  color: "white",
  minW: "100px",
  ":hover": {
    color: "black",
    bg: "gray.200",
  },
};

const boxStyle = {
  minW: "75px",
  h: "50px",
  margin: "2px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  fontSize: { base: "lg" },
};

const drawerButtonStyle = {
  w: "100%",
  ":hover": {
    color: "white",
    bg: "blue.300",
  },
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentMember } = useAuth();

  // const history = useHistory();

  // const onClickHome = useCallback(() => history.push("/"), []);
  // const onClickAccess = useCallback(() => history.push("/access"), []);

  return (
    <>
      <Flex
        bg="blue.300"
        justify="space-around"
        align="center"
        wrap="wrap"
        w="100%"
        color="white"
      >
        <Link href={`/`}>
          <Button sx={buttonStyle}>XXXXGym</Button>
        </Link>
        <Spacer></Spacer>
        <Flex display={{ base: "none", md: "flex" }}>
          <Box p="1" sx={boxStyle}>
            <Link href={`/news`}>ニュース</Link>
          </Box>
          <Box p="1" sx={boxStyle}>
            <Link href={`/enroll`}>入会案内・料金</Link>
          </Box>
          {/* <Box p="1"sx={boxStyle}>
            <Link href={`/price`}>料金</Link>
          </Box> */}
          <Box p="1" sx={boxStyle}>
            <Link href={`/schedule`}>スゲジュール</Link>
          </Box>
          {/* <Box p="1" sx={boxStyle}>
            <Link href={`/staff`}>スタッフ</Link>
          </Box> */}
          <Box p="1" sx={boxStyle}>
            <Link href={`/access`}>アクセス</Link>
          </Box>
          <Box p="1" sx={boxStyle}>
            <Link href={`/login`}>
              {currentMember ? "マイページ" : "ログイン"}
            </Link>
          </Box>
        </Flex>
        <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstyled"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
      </Flex>
      <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.200">
              <Link href={`/login`}>
                <Button sx={drawerButtonStyle}>
                  {currentMember ? "マイページ" : "ログイン"}
                </Button>
              </Link>
              <Link href={`/news`}>
                <Button sx={drawerButtonStyle}>ニュース</Button>
              </Link>
              <Link href={`/enroll`}>
                <Button sx={drawerButtonStyle}>入会案内・料金</Button>
              </Link>
              {/* <Link href={`/price`}>
                <Button sx={drawerButtonStyle}>料金</Button>
              </Link> */}
              <Link href={`/schedule`}>
                <Button sx={drawerButtonStyle}>スゲジュール</Button>
              </Link>
              {/* <Link href={`/staff`}>
                <Button sx={drawerButtonStyle}>スタッフ</Button>
              </Link> */}
              <Link href={`/access`}>
                <Button sx={drawerButtonStyle}>アクセス</Button>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
