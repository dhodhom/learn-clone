import {
  Flex,
  Icon,
  Heading,
  useColorModeValue,
  ListItem,
  Box,
} from "@chakra-ui/react";

import "../dist/css/main.css";

import NavbarComponent from "../Components/NavbarComponent";
import CardComponent from "../Components/CardComponent";
import FooterComponent from "../Components/FooterComponent";

import logoNourish from "../assets/img/Logo Nourish Connection.png";
import logoVbd from "../assets/img/VbdImg.png";
import logoQuarter from "../assets/img/QuarterImg.png";
import flask from "../assets/img/FlaskImg.png";
import mongoDb from "../assets/img/MongoDbImg.png";
import jquery from "../assets/img/JqueryImg.png";
import bootsrap from "../assets/img/BootsrapImg.png";
import html from "../assets/img/HtmlIgm.png";
import css from "../assets/img/CssImg.png";
import ai from "../assets/img/AiImg.png";
import ps from "../assets/img/PsImg.png";
import figma from "../assets/img/FigmaImg.png";

import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion, AnimatePresence } from "framer-motion";

const ExperiencePage = () => {
  const toolsNourish = [flask, mongoDb, jquery, bootsrap, html, css];
  const toolsVbd = [ai, ps];
  const toolsQuarter = [ai, ps, figma];
  return (
    <div>
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
          <Box px={{ base: "5", xl: "20" }}>
            {/* Title Experience Start */}
            <Flex mx={{ md: "19", base: "1", xl: "20" }} alignItems='center'>
              <Icon
                as={FontAwesomeIcon}
                icon={faRocket}
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
                My Experience
              </Heading>
            </Flex>
            {/* Title Experience End */}

            {/* Subtitle Start*/}
            <Heading
              fontWeight='medium'
              fontSize={{ base: "md", xl: "xl" }}
              color={useColorModeValue("fontColor.black", "primary.whiteDoff")}
              mx={{ base: "0", xl: "20", md: "15" }}
              mt={{ base: "2", xl: "3" }}
            >
              Programing
            </Heading>
            {/* Subtitle End*/}

            {/* Card Start */}
            <CardComponent
              uni='Capstone Project (Nourish Connection)'
              fieldOfStudy='Leader Nourish Connection Website Project.'
              year='1 June 2023 - 23 June 2023'
              logo={logoNourish}
              desc='Description'
              activityPoint={[
                <ListItem key={1}>
                  Build project design (project architecture, project sitemap,
                  project interface design).
                </ListItem>,
                <ListItem key={2}>
                  Complete the Capstone Project to the timeline that has been
                  made before.
                </ListItem>,
                <ListItem key={3}>
                  Create a complete website from the frontend to the backend and
                  database and deploy the website that has been designed.
                </ListItem>,
              ]}
              titleTools='Technology Used:'
              logoTools={toolsNourish}
            />
            {/* Card End */}

            {/* Subtitle Start*/}
            <Heading
              fontWeight='medium'
              fontSize={{ base: "md", xl: "xl" }}
              color={useColorModeValue("fontColor.black", "primary.whiteDoff")}
              mx={{ base: "0", xl: "20", md: "15" }}
              mt={{ base: "2", xl: "5" }}
            >
              Graphic Design
            </Heading>
            {/* Subtitle End*/}

            {/* Card Start */}
            <CardComponent
              uni='Intern Virtual Blind Date'
              fieldOfStudy='Graphic Designer'
              year='May 2022 - August 20223'
              logo={logoVbd}
              desc='Description'
              activityPoint={[
                <ListItem key={1}>
                  Design Instagram social media needs (feed & instastory),
                  Google Form banners.
                </ListItem>,
                <ListItem key={2}>
                  Determining the design theme for each batch, so that the
                  appearance of the Instagram feeds is attractive.
                </ListItem>,
                <ListItem key={3}>
                  Manage scheduling in graphic designer division as Scrum
                  Master.
                </ListItem>,
              ]}
              titleTools='Tools:'
              logoTools={toolsVbd}
            />
            {/* Card End */}

            {/* Card Start */}
            <CardComponent
              uni='Intern Quarter'
              fieldOfStudy='Visual Designer'
              year='February 2022 - May 2022'
              logo={logoQuarter}
              desc='Description'
              activityPoint={[
                <ListItem key={1}>
                  Create content designs for social media to be uploaded every
                  day.
                </ListItem>,
                <ListItem key={2}>Create event poster design.</ListItem>,
                <ListItem key={3}>Create cover design for reels.</ListItem>,
              ]}
              titleTools='Tools:'
              logoTools={toolsQuarter}
            />
            {/* Card End */}
          </Box>
        </motion.div>
      </AnimatePresence>
      {/* Footer Start*/}
      <FooterComponent />
      {/* Footer End*/}
    </div>
  );
};

export default ExperiencePage;