import {
  Flex,
  Heading,
  Box,
  Spacer,
  Show,
  Hide,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { faBars, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToggleColorMode from "./ToggleColorMode";

const NavbarComponent = () => {
  return (
    <Flex
      position='sticky'
      top='0'
      zIndex='1000'
      bgColor={useColorModeValue("primary.white", "fontColor.black")}
      mb='2'
    >
      <Hide breakpoint='(max-width: 989px)'>
        <Flex w='100%' mx='20' py='6' display={"flex"} alignItems='center'>
          <Box display={"flex"}>
            <Link to='/'>
              <Heading
                fontWeight={"bold"}
                size={"md"}
                color={useColorModeValue(
                  "fontColor.black",
                  "primary.whiteDoff"
                )}
              >
                About Me
              </Heading>
            </Link>

            <Link to='/experience'>
              <Heading
                ml={8}
                fontWeight={"bold"}
                size={"md"}
                color={useColorModeValue(
                  "fontColor.black",
                  "primary.whiteDoff"
                )}
              >
                Experience
              </Heading>
            </Link>
            
            {
            /** 
            <Link to='/portofolio'>
              <Heading
                ml={8}
                fontWeight={"bold"}
                size={"md"}
                color={useColorModeValue(
                  "fontColor.black",
                  "primary.whiteDoff"
                )}
              >
                Portofolio
              </Heading>
            </Link>
            */
          }
          </Box>
          <Spacer />
          <Flex alignItems='center'>
            <a
              href='https://drive.google.com/file/d/1IGc_6VUFq3DG0vV8qKHCm09ArQI3jkEC/view?usp=drive_link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Heading fontWeight={"bold"} size={"md"} mr='4'>
                Download Resume
              </Heading>
            </a>
            <ToggleColorMode />
          </Flex>
        </Flex>
      </Hide>

      <Show breakpoint='(max-width: 989px)'>
        <Flex
          w='100%'
          px={5}
          display={"flex"}
          bgColor={"fontColor.white"}
          alignItems='center'
        >
          <Box>
            <ToggleColorMode />
          </Box>
          <Spacer />
          <Box py='3'>
            <Menu>
              <MenuButton
                as={FontAwesomeIcon}
                icon={faBars}
                aria-label='Options'
                variant='outline'
              />
              <MenuList>
                <Link to='/'>
                  <MenuItem _focus={{ outline: "none" }} command='⌘A'>
                    About Me
                  </MenuItem>
                </Link>
                <Link to='/experience'>
                  <MenuItem _focus={{ outline: "none" }} command='⌘E'>
                    Experience
                  </MenuItem>
                </Link>
                <Link to='/portofolio'>
                  <MenuItem _focus={{ outline: "none" }} command='⌘P'>
                    Portofolio
                  </MenuItem>
                </Link>
                <a
                  href='https://drive.google.com/file/d/1P6NFdaVxn7UrLb05EoJq-qpCze0M_i8Y/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Flex alignItems='center' justifyContent='flex-end' px='4'>
                    <MenuItem _focus={{ outline: "none" }}>
                      Download Resume
                    </MenuItem>
                    <Icon as={FontAwesomeIcon} icon={faDownload} />
                  </Flex>
                </a>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Show>
    </Flex>
  );
};

export default NavbarComponent;
