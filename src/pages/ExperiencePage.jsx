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

import logoJbi from "../assets/img/jbi.png";
import logoMede from "../assets/img/mede.png";
import flask from "../assets/img/FlaskImg.png";
import mongoDb from "../assets/img/MongoDbImg.png";
import jquery from "../assets/img/JqueryImg.png";
import bootsrap from "../assets/img/BootsrapImg.png";
import html from "../assets/img/HtmlIgm.png";
import css from "../assets/img/CssImg.png";
import ai from "../assets/img/AiImg.png";
import ps from "../assets/img/PsImg.png";
import figma from "../assets/img/FigmaImg.png";
import ReactNativeLogo from "../assets/img/ReactNativeLogo.png";
import JsLogo from "../assets/img/JavaScriptLogo.png";
import php from "../assets/img/php.png";
import sqlserver from "../assets/img/sqlserver.png";

import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion, AnimatePresence } from "framer-motion";

const ExperiencePage = () => {
  const toolsNourish = [flask, mongoDb, jquery, bootsrap, html, css];
  const toolsVbd = [ai, ps];
  const toolsQuarter = [ai, ps, figma];
  const toolsACA = [ReactNativeLogo, JsLogo];
  const toolsPHP = [php, sqlserver];
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
            <motion.a
                          href='https://jayabeton.com/'
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }} target="_blank"
                        >
            <CardComponent
              uni='PT. Jaya Beton Indonesia'
              fieldOfStudy='Full Stack Web Developer (PHP)'
              year='Maret 2016 - Present'
              logo={logoJbi}
              desc='Description'
              activityPoint={[
                <ListItem key={1}>
                  Membuat / merancang ERP berbasis website aplikasi, menggunakan bahasa pemrograman PHP dan database SQL Server.
                </ListItem>,
              ]}
              titleTools='Technology Used:'
              logoTools={toolsPHP}
            /></motion.a>
            {/* Card End */}

            {/* Card Start */}
            <motion.a
                          href='https://www.mede.co.id/'
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }} target="_blank"
                        >
            <CardComponent
              uni='PT. Mede Media Softika'
              fieldOfStudy='Full Stack Web Developer (PHP)'
              year='Mei 2010 - Maret 2016'
              logo={logoMede}
              desc='Description'
              activityPoint={[
                <ListItem key={1}>
                  Membuat / merancang ERP berbasis website aplikasi, menggunakan bahasa pemrograman PHP dan database SQL Server.
                </ListItem>,
              ]}
              titleTools='Technology Used:'
              logoTools={toolsPHP}
            /></motion.a>
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
