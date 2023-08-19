import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

const GdCardComponent = ({ rowReverse, img, title, desc, link }) => {
  return (
    <Card
      overflow='hidden'
      variant='filled'
      bgColor={useColorModeValue("primary.white", "fontColor.black")}
      borderRadius='0'
      flexDirection={{
        base: "column",
        xl: rowReverse ? "row-reverse" : "row",
      }}
      shadow={{ base: "md", xl: "none" }}
    >
      <Image
        objectFit='cover'
        maxW={{ base: "100%", xl: "370px" }}
        borderRadius='5'
        src={img}
      />

      <Stack
        mx={{ base: "0", xl: rowReverse ? "-4" : "0" }}
        mr={{ base: "0", xl: rowReverse ? "0" : "-1" }}
      >
        <CardBody>
          <Heading size='md' fontWeight='bold'>
            {title}
          </Heading>

          <Heading size='sm' fontWeight='bold' pt='3'>
            Description
          </Heading>

          <Text>{desc}</Text>
        </CardBody>

        <CardFooter justifyContent={{ base: "flex-end", xl: "flex-start" }}>
          <motion.a
            href={link}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              colorScheme='teal'
              variant='outline'
              size={"sm"}
              color={useColorModeValue("fontColor.black", "primary.whiteDoff")}
            >
              Check on instagram
            </Button>
          </motion.a>
        </CardFooter>
      </Stack>
    </Card>
  );
};
export default GdCardComponent;
