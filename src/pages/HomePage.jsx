import {
  Image,
  Stack,
  CardBody,
  Card,
  Heading,
  Text,
  CardFooter,
  Box,
  Icon,
  Flex,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";

import NavbarComponent from "../Components/NavbarComponent";
import CardEducation from "../Components/CardComponent";

import FooterComponent from "../Components/FooterComponent";
import profileImage from "../assets/img/profile.png";
import logoUnpam from "../assets/img/Logo Unpam 1.png";
import logoLearningX from "../assets/img/Logo LearningX.png";

import {
  faSquareInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUserGraduate,
  faLink,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion, AnimatePresence } from "framer-motion";

import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";

const HomePage = () => {
  return (
    <Box>
      {/* Navabar Start */}
      <NavbarComponent />
      {/* Navabar End */}
      <AnimatePresence>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Biodata Card Start */}

          <Box px={{ base: "5", xl: "20" }}>
            <AnimatedWrapper>
              <Flex justifyContent='center' alignItems='center'>
                <Card
                  direction={{ base: "column", xl: "row" }}
                  overflow='hidden'
                  bgColor={useColorModeValue(
                    "primary.whiteDoff",
                    "fontColor.black"
                  )}
                  borderRadius='20'
                  boxShadow={`0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06), -4px 0px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1)`}
                  width={{ md: "96%", xl: "88%" }}
                >
                  <Box
                    w={{ md: "290px", base: "200px", xl: "60%" }}
                    h={{ md: "290px", base: "200px", xl: "100%" }}
                    ml={{ base: "30px", xl: "17px" }}
                    mr={{ base: "30px", xl: "0px" }}
                    mb={{ base: "2px", xl: "17px" }}
                    mt={{ base: "17px", xl: "17px" }}
                    borderRadius='20'
                    bgGradient={useColorModeValue(
                      "linear(secondary.gray, secondary.gray)",
                      "linear(to-t, fontColor.dark, fontColor.black)"
                    )}
                    boxShadow={`0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06), -4px 0px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1)`}
                    alignSelf='center'
                  >
                    <Image
                      w={{ md: "100%", base: "99.5%", xl: "100%" }}
                      h={{ md: "100%", base: "99.5%", xl: "250px" }}
                      src={profileImage}
                      alt='Profile'
                      objectFit='contain'
                    />
                  </Box>

                  <Stack>
                    <CardBody textAlign={{ base: "center", xl: "left" }}>
                      <Heading
                        size='md'
                        ml='1'
                        color={useColorModeValue(
                          "fontColor.black",
                          "primary.whiteDoff"
                        )}
                      >
                        Halo! Saya,
                      </Heading>
                      <Heading
                        size={{ base: "lg", lg: "xl" }}
                        mb='10px'
                        color={useColorModeValue(
                          "fontColor.black",
                          "primary.whiteDoff"
                        )}
                      >
                        Lukman Nurhakim
                      </Heading>

                      <Text
                        fontSize={{ base: "xs", lg: "15px" }}
                        color={useColorModeValue(
                          "fontColor.black",
                          "primary.whiteDoff"
                        )}
                      >
                        {/* Student majoring in Informatics Engineering. I have
                        interest in programming and graphic design. <br />{" "}
                        Already has some experience in the field of Programing
                        (Website development) and Graphic Design. <br />
                        I&apos;m also enthusiastic to keep learning new things,
                        because of me really believe that learning never ends,
                        and I always eager to explore technology and trends the
                        latest in the world of design and information
                        technology. */}
                        Saya adalah seorang lulusan S1 Jurusan Teknik Informatika STMIK Dharma Negara Bandung, sudah bekerja sejak tahun 2010 di IT Consultant sebagai Full Stack Developer, terbiasa membuat Website Application menggunakan bahasa pemrograman PHP dan basis data SQL Server/MySQL/PostgreSQL, saat ini saya sedang mendalami teknologi pemrograman terbaru seperti Tech Stack MERN (MongoDb, Express, ReactJs, NodeJs)
                      </Text>
                    </CardBody>

                    <CardFooter
                      justifyContent={{ base: "center", xl: "left" }}
                      mt='-30'
                    >
                      <Box display='flex' alignItems='center'>
                        <Icon
                          as={FontAwesomeIcon}
                          icon={faLink}
                          mr='3px'
                          size='lg'
                        />
                        <Text
                          color={useColorModeValue(
                            "fontColor.black",
                            "primary.whiteDoff"
                          )}
                          fontSize={{ base: "sm", xl: "md" }}
                        >
                          Contact Me:
                        </Text>
                      </Box>

                      <Flex ml='15px' gap='2'>
                        <motion.a
                          href='https://www.linkedin.com/in/dhodhom/'
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon
                            as={FontAwesomeIcon}
                            icon={faLinkedinIn}
                            size='xl'
                          />
                        </motion.a>
                        {/**
                        <motion.a
                          href='https://www.instagram.com/artkhabp/'
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon
                            as={FontAwesomeIcon}
                            icon={faSquareInstagram}
                            size='xl'
                          />
                        </motion.a>
                           */}
                        <motion.a
                          href='https://github.com/dhodhom'
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon
                            as={FontAwesomeIcon}
                            icon={faGithub}
                            size='xl'
                          />
                        </motion.a>

                        <motion.a
                          href='dhodhom@gmail.com'
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon
                            as={FontAwesomeIcon}
                            icon={faEnvelope}
                            size='xl'
                          />
                        </motion.a>
                      </Flex>
                    </CardFooter>
                  </Stack>
                </Card>
              </Flex>
            </AnimatedWrapper>
            {/* Biodata Card End */}

            {/* Title Education Start */}
            <Flex
              mt='10'
              mx={{ md: "19", base: "1", xl: "20" }}
              alignItems='center'
            >
              <Icon
                as={FontAwesomeIcon}
                icon={faUserGraduate}
                boxSize={{ md: "27", base: "5", xl: "27" }}
                mr='2'
                color={useColorModeValue(
                  "fontColor.black",
                  "primary.whiteDoff"
                )}
              />
              <Heading
                color={useColorModeValue(
                  "fontColor.black",
                  "primary.whiteDoff"
                )}
                fontSize={{ md: "2xl", base: "lg", xl: "3xl" }}
              >
                Education
              </Heading>
            </Flex>
            {/* Title Education End */}

            {/* Card Education Start */}
            <CardEducation
              uni='STMIK Dharma Negara, Bandung'
              fieldOfStudy="S1, Teknik Informatika"
              year='2017'
              logo={logoUnpam}
              desc='Detail Info'
              activityPoint={[
                <ListItem key={1}>
                  Grade 3.1
                </ListItem>,
                <ListItem key={2}>
                  {" "}
                  No. Ijazah : 0215.03.0158
                </ListItem>,
              ]}
            />
            
            {/* Card Education End */}
            
          </Box>

          
        </motion.div>
      </AnimatePresence>
      {/* Footer Start*/}
      <FooterComponent />
      {/* Footer End*/}
    </Box>
  );
};

export default HomePage;
