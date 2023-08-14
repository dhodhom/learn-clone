import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      onClick={() => toggleColorMode()}
      variant='ghost'
      mr='-4'
      ml={{ base: "-3", xl: "0" }}
    >
      {colorMode === "dark" ? (
        <SunIcon />
      ) : (
        <MoonIcon color='fontColor.black' />
      )}
    </Button>
  );
};

export default ToggleColorMode;
