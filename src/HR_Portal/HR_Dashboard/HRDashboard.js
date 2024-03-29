import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Heading,
  Button
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
// import Logo from "../Admin/";
import { FaBullhorn } from "react-icons/fa";

import { Icon } from "@chakra-ui/icon"
import { InputGroup, InputLeftElement,Input } from "@chakra-ui/react";
import { Search2Icon, BellIcon,ChevronDownIcon, SettingsIcon} from '@chakra-ui/icons';
import {
  FiCompass,
  FiStar,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { useDispatch, useSelector } from "react-redux";
//import Logo from "../Admin/Logo.png";
import { decodeToken } from 'react-jwt';
import { signout } from "../../Redux/auth/action";
//import { signout } from "../Redux/auth/action";


const LinkItems = [
  { name: "Dashboard", icon: FiCompass, url: "/Admin/Dashboard" },
  { name: "Add Product", icon: FiStar, url: "/Admin/AdminForm" },
];

export default function SidebarWithHeader({
  children,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const  data = useSelector((store) => store.auth.data);
  const  data2 = useSelector((store) => store.auth.singleData);

console.log(data,data2)

const myDecodedToken = decodeToken(data.token);
console.log('myDecodedToken123',myDecodedToken);
// console.log('date', date);

  return (
    <Box  bg={useColorModeValue("", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "none", lg: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 0, lg: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {
  const  data = useSelector((store) => store.auth.data);
console.log(data)

const myDecodedToken = decodeToken(data.token);
  return (
    <Box
      transition="3s ease"
      //bg={useColorModeValue("white", "gray.900")}
    //   borderRight="1px"
      //borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="absolute"
      bg=''
      h=""
      {...rest}
    >
      <Flex w='100' background='#F9F9F9' borderRadius='30px'>
        <justifyContent>
        <Text w='100%' ml='64%' mt='20%' color='#FFB800' fontFamily='Inter' fontSize='24px' fontStyle='normal' fontWeight='700' lineHeight='normal' >EDVERSE</Text>
        <Box border='1px solid #FFB800' h='15vh' w='15vh' mt='10%' ml='60%'  borderRadius='50%' overflow='hidden'>
        <Avatar h={'15vh'} w={'15vh'} src='https://bit.ly/sage-adebayo'></Avatar>
        </Box>
        <Text w='100%' mt='6%' ml='68%' color='#000' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='600' lineHeight='18px'>Sam Wheeler</Text>
        <Text w='100%' mt='2%' ml='50%' fontFamily='Inter' fontSize='12px' fontStyle='normal' fontWeight='400' lineHeight='normal' color='rgba(0, 0, 0, 0.50)'>samwheeler@example.com</Text>
        </justifyContent>  
   
        <justifyContent>
          <Icon mt='280%' ml='-90%' w={4} h={4} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.71429 0C0.767511 0 0 0.767511 0 1.71429V12C0 12.9468 0.767511 13.7143 1.71429 13.7143H8.57143C9.51821 13.7143 10.2857 12.9468 10.2857 12V1.71429C10.2857 0.767511 9.51821 0 8.57143 0H1.71429ZM13.7143 1.71429C13.7143 0.767511 14.4818 0 15.4286 0H22.2857C23.2325 0 24 0.767511 24 1.71429V5.16C24 6.10677 23.2325 6.87429 22.2857 6.87429H15.4286C14.4818 6.87429 13.7143 6.10677 13.7143 5.16V1.71429ZM13.7143 12C13.7143 11.0532 14.4818 10.2857 15.4286 10.2857H22.2857C23.2325 10.2857 24 11.0532 24 12V22.2857C24 23.2325 23.2325 24 22.2857 24H15.4286C14.4818 24 13.7143 23.2325 13.7143 22.2857V12ZM0 18.84C0 17.8932 0.767511 17.1257 1.71429 17.1257H8.57143C9.51821 17.1257 10.2857 17.8932 10.2857 18.84V22.2857C10.2857 23.2325 9.51821 24 8.57143 24H1.71429C0.767511 24 0 23.2325 0 22.2857V18.84Z" fill="#4D4D4D"/>
          </Icon>
          <Text mt='-20%' ml='-50%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>My Dashboard</Text>
          
          <Icon mt='14%' ml='-90%' w={4} h={4} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.8 1.33333C4.8 0.596954 5.33726 0 6 0C6.66274 0 7.2 0.596954 7.2 1.33333V2.66667H16.8V1.33333C16.8 0.596954 17.3373 0 18 0C18.6627 0 19.2 0.596954 19.2 1.33333V2.66667H20.4C22.3882 2.66667 24 4.45753 24 6.66667V20C24 22.2091 22.3882 24 20.4 24H3.6C1.61177 24 0 22.2091 0 20V6.66667C0 4.45753 1.61178 2.66667 3.6 2.66667H4.8V1.33333ZM2.4 20V10.6667H21.6V20C21.6 20.7364 21.0627 21.3333 20.4 21.3333H3.6C2.93726 21.3333 2.4 20.7364 2.4 20Z" fill="#4D4D4D"/>
          </Icon>
          <Text mt='-20%' ml='-50%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Calendar</Text>
          
          <Text mt='16%' ml='-88%' fontFamily='Inter' fontSize='16px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='#FFAE00' letterSpacing='-0.154px'>You</Text>

          <Icon mt='0%' ml='-90%' w={4} h={4} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.57143 11.5714C3.57143 6.60086 7.60087 2.57143 12.5714 2.57143C17.542 2.57143 21.5714 6.60087 21.5714 11.5714V15C21.5714 15.7101 22.1471 16.2857 22.8571 16.2857C23.5672 16.2857 24.1429 15.7101 24.1429 15V11.5714C24.1429 5.18071 18.9621 0 12.5714 0C6.18071 0 1 5.18071 1 11.5714V22.7143C1 23.4243 1.57563 24 2.28571 24C2.99579 24 3.57143 23.4243 3.57143 22.7143V11.5714ZM8.71429 20.1429C8.71429 19.4328 8.13865 18.8571 7.42857 18.8571C6.7185 18.8571 6.14286 19.4328 6.14286 20.1429V22.7143C6.14286 23.4243 6.7185 24 7.42857 24C8.13865 24 8.71429 23.4243 8.71429 22.7143V20.1429ZM12.5714 8.57143C10.4412 8.57143 8.71429 10.2983 8.71429 12.4286V15C8.71429 15.7101 8.13865 16.2857 7.42857 16.2857C6.7185 16.2857 6.14286 15.7101 6.14286 15V12.4286C6.14286 8.87817 9.02102 6 12.5714 6C16.1218 6 19 8.87817 19 12.4286V22.7143C19 23.4243 18.4243 24 17.7143 24C17.0042 24 16.4286 23.4243 16.4286 22.7143V12.4286C16.4286 10.2983 14.7017 8.57143 12.5714 8.57143ZM24.1429 20.1429C24.1429 19.4328 23.5672 18.8571 22.8571 18.8571C22.1471 18.8571 21.5714 19.4328 21.5714 20.1429V22.7143C21.5714 23.4243 22.1471 24 22.8571 24C23.5672 24 24.1429 23.4243 24.1429 22.7143V20.1429ZM12.5714 19.7143C13.2815 19.7143 13.8571 20.2899 13.8571 21V22.7143C13.8571 23.4243 13.2815 24 12.5714 24C11.8614 24 11.2857 23.4243 11.2857 22.7143V21C11.2857 20.2899 11.8614 19.7143 12.5714 19.7143ZM13.8571 13.2857C13.8571 12.5756 13.2815 12 12.5714 12C11.8614 12 11.2857 12.5756 11.2857 13.2857V15.8571C11.2857 16.5672 11.8614 17.1429 12.5714 17.1429C13.2815 17.1429 13.8571 16.5672 13.8571 15.8571V13.2857Z" fill="#4D4D4D"/>
          </Icon>
          <Text mt='-18%' ml='-50%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'><Link to='/AttendanceManagement'>Attendance</Link></Text>
          
          <Icon mt='6%' ml='-90%' w={4} h={4} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9798 0.142406C16.6219 -0.12766 15.2152 -0.0120571 13.92 0.476054C12.6247 0.964166 11.4929 1.80517 10.6534 2.90334C9.81392 4.00148 9.30045 5.31266 9.17144 6.68758C9.06957 7.77353 9.21077 8.86477 9.58043 9.88372L0.755498 18.6852C-0.266387 19.7042 -0.249442 21.3618 0.79307 22.36L1.7574 23.2832C2.76633 24.2492 4.36337 24.2374 5.35772 23.2564L14.3043 14.4303C15.2918 14.7493 16.3392 14.8591 17.3784 14.7479C18.7416 14.6022 20.0376 14.0822 21.122 13.2459C22.2066 12.4095 23.0373 11.2895 23.5219 10.0104C24.006 8.73233 24.1253 7.34553 23.8669 6.00392C23.8117 5.70716 23.6946 5.42526 23.5233 5.17636C23.3513 4.92654 23.1286 4.71557 22.8697 4.55714C22.5307 4.34974 22.0934 4.40127 21.8121 4.68173L18.3729 8.11179L18.3619 8.12304C18.2817 8.20603 18.1854 8.27204 18.0792 8.31713C17.9727 8.36223 17.8584 8.38545 17.7428 8.38545C17.6272 8.38545 17.5129 8.36223 17.4064 8.31713C17.3002 8.27204 17.2039 8.20603 17.1237 8.12304C17.109 8.10782 17.0938 8.09316 17.078 8.07908L15.7957 6.93481C15.6482 6.77643 15.566 6.56807 15.566 6.3514C15.566 6.12813 15.6533 5.91372 15.8093 5.75369L19.2451 2.32717C19.493 2.07978 19.5656 1.70688 19.428 1.38495C19.3037 1.09361 19.1168 0.833087 18.8803 0.621811C18.6437 0.410537 18.3636 0.25367 18.0597 0.162315C18.0334 0.154409 18.0066 0.147765 17.9798 0.142406Z" fill="#4D4D4D"/>
          </Icon>
          <Menu >
            <MenuButton as={Text} rightIcon={<ChevronDownIcon />} mt='-18%' ml='-50%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>
              Service Request
            </MenuButton>
            <MenuList fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>
              <MenuItem><Link to="/ticket">Tickets</Link></MenuItem>
              <MenuItem><Link to="/assets">Assets</Link></MenuItem>
            </MenuList>
          </Menu>

          <Icon mt='6%' ml='-90%' w={4} h={4} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.58389C0 3.39542 3.40243 0 7.59954 0C11.7967 0 15.1991 3.39542 15.1991 7.58389C15.1991 8.37565 15.0775 9.13906 14.852 9.85657C13.7592 9.88902 12.718 10.3364 11.9426 11.1101C11.1371 11.914 10.6846 13.0043 10.6846 14.1411V14.5169C9.7418 14.9353 8.69788 15.1678 7.59954 15.1678C3.40243 15.1678 0 11.7724 0 7.58389ZM7.59956 2.03063C8.1926 2.03063 8.67338 2.5104 8.67338 3.10224V3.58908C9.20104 3.70957 9.66699 3.99203 10.0145 4.37944C10.2351 4.62546 10.4095 4.91519 10.5228 5.23498C10.7204 5.79299 10.4273 6.40523 9.86816 6.60244C9.309 6.79967 8.69551 6.50722 8.49788 5.9492C8.4797 5.89789 8.45126 5.85015 8.41417 5.8088C8.33515 5.72069 8.22373 5.66776 8.0985 5.66776H7.60358L7.59956 5.66777L7.59554 5.66776H6.93976C6.79482 5.66776 6.67732 5.78502 6.67732 5.92966C6.67732 6.05275 6.76321 6.15922 6.88369 6.18552L8.64789 6.57064C9.82848 6.82836 10.6693 7.87209 10.6693 9.07734C10.6693 10.2966 9.81674 11.3183 8.67338 11.579V12.0657C8.67338 12.6575 8.1926 13.1373 7.59956 13.1373C7.0065 13.1373 6.52573 12.6575 6.52573 12.0657V11.5791C5.66277 11.3824 4.9665 10.7525 4.67624 9.93298C4.47861 9.37497 4.77169 8.76273 5.33083 8.5655C5.88999 8.36827 6.5035 8.66075 6.70114 9.21876C6.75974 9.38422 6.91793 9.50019 7.10049 9.50019H7.59129L7.59956 9.50017L7.60782 9.50019H8.0985C8.3317 9.50019 8.52167 9.31109 8.52167 9.07734C8.52167 8.87852 8.38283 8.70668 8.18892 8.66437L6.42474 8.27923C5.31831 8.0377 4.52967 7.05993 4.52967 5.92966C4.52967 4.74224 5.39196 3.75579 6.52573 3.55988V3.10224C6.52573 2.5104 7.0065 2.03063 7.59956 2.03063ZM12.8322 14.1411V24H24V22.2854C24 21.3758 23.638 20.5036 22.9935 19.8607C22.3491 19.2175 21.475 18.8563 20.5638 18.8563H17.1275V14.1411C17.1275 13.5727 16.9012 13.0276 16.4985 12.6256C16.0957 12.2237 15.5495 11.9979 14.9799 11.9979C14.4103 11.9979 13.864 12.2237 13.4613 12.6256C13.0585 13.0276 12.8322 13.5727 12.8322 14.1411Z" fill="#4D4D4D"/>
          </Icon>
          <Text mt='-18%' ml='-50%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'><Link to="/Finance">Finance</Link></Text>
          
          <Icon mt='6%' ml='-90%' w={4} h={4} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.9981 22.7185C16.577 22.7185 15.4249 21.5663 15.4249 20.1452C15.4249 18.724 16.577 17.572 17.9981 17.572C19.4194 17.572 20.5714 18.724 20.5714 20.1452C20.5714 21.5663 19.4194 22.7185 17.9981 22.7185Z" fill="#4D4D4D"/>
          <path d="M5.99817 22.7185C4.57701 22.7185 3.42493 21.5663 3.42493 20.1452C3.42493 18.724 4.57701 17.572 5.99817 17.572C7.41933 17.572 8.57142 18.724 8.57142 20.1452C8.57142 21.5663 7.41933 22.7185 5.99817 22.7185Z" fill="#4D4D4D"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.14282C11.2899 2.14282 10.7143 2.71846 10.7143 3.42854V6H8.19724C7.64487 5.97646 7.09939 6.13159 6.64185 6.44271C6.17751 6.75845 5.82931 7.2175 5.65039 7.74974L5.64934 7.75286L4.52422 11.1429H2.57143C1.88943 11.1429 1.23539 11.4138 0.753154 11.896C0.270917 12.3782 0 13.0323 0 13.7143V17.1428C0 17.8248 0.270917 18.4789 0.753154 18.9612C1.03543 19.2433 1.37657 19.4533 1.74771 19.5788C2.02493 17.4787 3.82226 15.8577 5.99815 15.8577C8.22063 15.8577 10.0481 17.5488 10.2643 19.7143H13.732C13.9482 17.5488 15.7757 15.8577 17.9981 15.8577C20.1744 15.8577 21.972 17.4792 22.2487 19.58C22.6212 19.4545 22.9637 19.2444 23.2469 18.9612C23.7291 18.4789 24 17.8248 24 17.1428V13.7143C24 13.0323 23.7291 12.3782 23.2469 11.896C22.7647 11.4138 22.1105 11.1429 21.4286 11.1429H18.6315L17.5843 7.7688L17.5785 7.74965C17.3997 7.2174 17.051 6.75845 16.5867 6.44271C16.1292 6.13159 15.5837 5.97646 15.0313 6H13.2857V3.42854C13.2857 2.71846 12.7101 2.14282 12 2.14282Z" fill="#4D4D4D"/>
          </Icon>
          <Text mt='-18%' ml='-50%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'><Link to="/CabFacility">Cab Facility</Link></Text>
          
          <Icon mt='6%' ml='-90%' w={4} h={4} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0003 4.97722C13.3747 4.97722 14.4889 3.86303 14.4889 2.48861C14.4889 1.11419 13.3747 0 12.0003 0C10.6259 0 9.51172 1.11419 9.51172 2.48861C9.51172 3.86303 10.6259 4.97722 12.0003 4.97722Z" fill="#4D4D4D"/>
          <path d="M7.8418 7.19345C8.56847 6.28323 9.85543 5.59863 12.0014 5.59863C14.1473 5.59863 15.4343 6.28323 16.161 7.19345C16.8633 8.07316 16.9751 9.08146 16.9774 9.63939C16.9796 10.2004 16.4561 10.5666 15.9195 10.5666H8.08329C7.54661 10.5666 7.02315 10.2004 7.0254 9.63939C7.02763 9.08145 7.13949 8.07316 7.8418 7.19345Z" fill="#4D4D4D"/>
          <path d="M4.97494 17.5529C6.34936 17.5529 7.46354 16.4387 7.46354 15.0643C7.46354 13.6899 6.34936 12.5757 4.97494 12.5757C3.60052 12.5757 2.48633 13.6899 2.48633 15.0643C2.48633 16.4387 3.60052 17.5529 4.97494 17.5529Z" fill="#4D4D4D"/>
          <path d="M0.816414 19.7691C1.54308 18.8589 2.83004 18.1743 4.97599 18.1743C7.12193 18.1743 8.40889 18.8589 9.13556 19.7691C9.83788 20.6488 9.94974 21.6571 9.95197 22.2151C9.95422 22.7761 9.43075 23.1423 8.89407 23.1423H1.0579C0.521223 23.1423 -0.00223867 22.7761 7.20093e-06 22.2151C0.00224068 21.6571 0.114101 20.6488 0.816414 19.7691Z" fill="#4D4D4D"/>
          <path d="M21.5124 15.0643C21.5124 16.4387 20.3982 17.5529 19.0238 17.5529C17.6493 17.5529 16.5352 16.4387 16.5352 15.0643C16.5352 13.6899 17.6493 12.5757 19.0238 12.5757C20.3982 12.5757 21.5124 13.6899 21.5124 15.0643Z" fill="#4D4D4D"/>
          <path d="M19.0248 18.1743C16.8789 18.1743 15.5919 18.8589 14.8652 19.7691C14.1629 20.6488 14.0511 21.6571 14.0488 22.2151C14.0466 22.7761 14.5701 23.1423 15.1067 23.1423H22.9429C23.4796 23.1423 24.003 22.7761 24.0008 22.2151C23.9986 21.6571 23.8867 20.6488 23.1844 19.7691C22.4577 18.8589 21.1708 18.1743 19.0248 18.1743Z" fill="#4D4D4D"/>
          <path d="M12.6996 12.0317C12.6996 11.6451 12.3862 11.3317 11.9996 11.3317C11.613 11.3317 11.2996 11.6451 11.2996 12.0317V14.2884H9.27344C8.88684 14.2884 8.57344 14.6018 8.57344 14.9884C8.57344 15.375 8.88684 15.6884 9.27344 15.6884H14.7336C15.1202 15.6884 15.4336 15.375 15.4336 14.9884C15.4336 14.6018 15.1202 14.2884 14.7336 14.2884H12.6996V12.0317Z" fill="#4D4D4D"/>

          </Icon>
          <Text mt='-18%' ml='-50%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'><Link to="/Referral">Referral</Link></Text>
          
          <Icon mt='6%' ml='-90%' w={4} h={4} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6397 9.44386C23.6397 14.3635 19.6516 18.3516 14.732 18.3516C9.81236 18.3516 5.82423 14.3635 5.82423 9.44386C5.82423 4.52426 9.81236 0.536133 14.732 0.536133C19.6516 0.536133 23.6397 4.52426 23.6397 9.44386ZM14.7318 2.71707C15.4419 2.71707 16.0176 3.29271 16.0176 4.00279V4.54617C16.6296 4.69178 17.17 5.02281 17.5744 5.47455C17.8346 5.76535 18.0403 6.10783 18.174 6.48586C18.4106 7.15534 18.0597 7.88991 17.3902 8.12654C16.7207 8.36318 15.9861 8.01226 15.7495 7.34278C15.7297 7.28685 15.6988 7.23471 15.6583 7.18947C15.572 7.09306 15.4507 7.03541 15.3142 7.03541H14.7404L14.7318 7.03545L14.7233 7.03541H13.962C13.8109 7.03541 13.6883 7.15793 13.6883 7.30906C13.6883 7.43767 13.7779 7.54893 13.9035 7.57641L15.9623 8.02675C17.3549 8.33139 18.3468 9.56515 18.3468 10.9899C18.3468 12.4222 17.3536 13.6237 16.0176 13.9411V14.4845C16.0176 15.1945 15.4419 15.7702 14.7318 15.7702C14.0218 15.7702 13.4461 15.1945 13.4461 14.4845V13.9412C12.4399 13.7022 11.6294 12.962 11.2898 12.0013C11.0532 11.3318 11.4041 10.5972 12.0736 10.3606C12.7431 10.124 13.4776 10.4749 13.7143 11.1443C13.7782 11.3252 13.9508 11.4517 14.1496 11.4517H15.3142C15.5683 11.4517 15.7754 11.2452 15.7754 10.9899C15.7754 10.7727 15.624 10.585 15.4127 10.5388L13.354 10.0884C12.0479 9.80271 11.1169 8.64609 11.1169 7.30906C11.1169 5.91393 12.1211 4.75332 13.4461 4.51063V4.00279C13.4461 3.29271 14.0218 2.71707 14.7318 2.71707ZM14.732 20.4945C15.2917 20.4945 15.8417 20.453 16.3791 20.3726C14.745 22.3197 12.2934 23.5574 9.55269 23.5574C4.63309 23.5574 0.644958 19.5693 0.644958 14.6497C0.644958 11.9252 1.86805 9.48646 3.79511 7.85251C3.72016 8.37216 3.68137 8.9035 3.68137 9.44391C3.68137 15.547 8.62888 20.4945 14.732 20.4945Z" fill="#4D4D4D"/>
          </Icon>
          <Text mt='-18%' ml='-50%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'><Link to="/Reimbursement">Reimbursement</Link></Text>
          
          <Icon mt='6%' ml='-90%' w={4} h={4} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.46746 0.753154C2.94969 0.270917 3.60375 0 4.28573 0H21.4286C22.1105 0 22.7647 0.270917 23.2469 0.753154C23.7291 1.23539 24 1.88943 24 2.57143V19.7143C24 20.3962 23.7291 21.0504 23.2469 21.5326C22.7647 22.0149 22.1105 22.2857 21.4286 22.2857H7.81982L1.06505 23.9745C0.761547 24.0502 0.440815 23.9547 0.228255 23.7252C0.015696 23.4957 -0.0549256 23.1686 0.0440035 22.8718L1.7143 17.861V2.57143C1.7143 1.88945 1.98523 1.23539 2.46746 0.753154ZM12.2264 6.22136C12.5418 6.09074 12.8888 6.05655 13.2236 6.12315C13.5584 6.18975 13.866 6.35414 14.1074 6.59551C14.3487 6.8369 14.5131 7.14444 14.5797 7.47926C14.6463 7.81406 14.6121 8.1611 14.4815 8.47649C14.3509 8.79187 14.1296 9.06144 13.8458 9.25109C13.562 9.44074 13.2283 9.54197 12.8869 9.54197C12.2952 9.54197 11.8155 10.0217 11.8155 10.6134V12.4783C11.8155 13.0701 12.2952 13.5498 12.8869 13.5498C13.4786 13.5498 13.9583 13.0701 13.9583 12.4783V11.5335C14.3393 11.4237 14.7031 11.2555 15.0363 11.0328C15.6725 10.6077 16.1684 10.0035 16.4613 9.29652C16.7541 8.58958 16.8307 7.81169 16.6814 7.06119C16.5321 6.31071 16.1637 5.62135 15.6226 5.08029C15.0815 4.53922 14.3921 4.17075 13.6417 4.02147C12.8912 3.87218 12.1133 3.94881 11.4064 4.24162C10.6994 4.53446 10.0952 5.03033 9.67006 5.66655C9.24495 6.30279 9.01805 7.05079 9.01805 7.81598C9.01805 8.40771 9.49774 8.88741 10.0895 8.88741C10.6812 8.88741 11.1609 8.40771 11.1609 7.81598C11.1609 7.47461 11.2621 7.14091 11.4518 6.85707C11.6414 6.57322 11.911 6.35201 12.2264 6.22136ZM12.887 18.2121C12.0393 18.2102 11.3528 17.5226 11.3528 16.6745C11.3528 15.8252 12.0412 15.1368 12.8905 15.1368L12.8939 15.1368C13.7416 15.1387 14.4281 15.8264 14.4281 16.6745C14.4281 17.5238 13.7397 18.2121 12.8904 18.2121H12.887Z" fill="#4D4D4D"/>
          </Icon>
          <Text mt='-18%' ml='-50%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'><Link to="/Complaints">Complaints</Link></Text>
          
          <Icon mt='6%' ml='-90%' w={4} h={4} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7761 4.39748C13.0249 2.97851 10.9922 2.97852 10.2409 4.39748L2.90185 18.2602C2.19667 19.5922 3.16228 21.196 4.66943 21.196H19.3476C20.8548 21.196 21.8204 19.5922 21.1152 18.2602L13.7761 4.39748ZM12.0085 9.19598C11.4562 9.19598 11.0085 9.6437 11.0085 10.196V14.196C11.0085 14.7483 11.4562 15.196 12.0085 15.196C12.5608 15.196 13.0085 14.7483 13.0085 14.196V10.196C13.0085 9.6437 12.5608 9.19598 12.0085 9.19598ZM12.0085 18.196C12.5608 18.196 13.0085 17.7483 13.0085 17.196C13.0085 16.6437 12.5608 16.196 12.0085 16.196C11.4562 16.196 11.0085 16.6437 11.0085 17.196C11.0085 17.7483 11.4562 18.196 12.0085 18.196Z" fill="#AC2734"/>
          </Icon>
          <Text mt='-18%' ml='-50%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'><Link to="/Warning">Employee Warning</Link></Text>
          
          <Text mt='20%' ml='-88%' fontFamily='Inter' fontSize='16px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='#FFAE00' letterSpacing='-0.154px'>Your Company</Text>

          <Icon mt='6%' ml='-90%' w={4} h={4} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.6816 9.04044C15.6816 11.0752 14.057 12.7248 12.0531 12.7248C10.0491 12.7248 8.42456 11.0752 8.42456 9.04044C8.42456 7.00563 10.0491 5.3561 12.0531 5.3561C14.057 5.3561 15.6816 7.00563 15.6816 9.04044Z" fill="#4D4D4D"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8784 19.0396C16.2121 20.3732 14.2062 21.1015 11.8984 21.1015C6.43168 21.1015 2 16.6016 2 11.0507C2 5.49987 6.43168 1 11.8984 1C17.3652 1 21.7969 5.49987 21.7969 11.0507C21.7969 13.277 21.1786 15.2293 19.9762 16.8903L23.6057 20.7824C24.1707 21.3882 24.1375 22.3374 23.5317 22.9024C22.9258 23.4674 21.9766 23.4343 21.4116 22.8284L17.8784 19.0396ZM17.1702 16.6617C18.5571 15.2765 19.3813 13.3068 19.3813 11.0507C19.3813 6.64474 15.8961 3.34103 11.8984 3.34103C7.90075 3.34103 4.36898 6.64474 4.36898 11.0507C4.36898 13.3954 5.27241 15.4308 6.77166 16.8222C7.18224 15.9186 7.83796 15.1338 8.67481 14.554C9.69274 13.8488 10.9223 13.4858 12.1747 13.5208C13.427 13.5559 14.6328 13.987 15.6067 14.748C16.2728 15.2685 16.8052 15.9236 17.1702 16.6617Z" fill="#4D4D4D"/>          
          </Icon>
          <Menu >
            <MenuButton as={Text} rightIcon={<ChevronDownIcon />} mt='-20%' ml='-50%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>
              Recruitement
            </MenuButton>
            <MenuList fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>
              <MenuItem><Link to="/JobPosting">Job Post</Link></MenuItem>
              <MenuItem><Link to="/Applications">Applications</Link></MenuItem>
              <MenuItem><Link to="/InterviewLineup">Interview Lineup</Link></MenuItem>
              <MenuItem><Link to="/Onboarding">Onboarding</Link></MenuItem>
            </MenuList>
          </Menu>
                  
          
          <Icon mt='10%' ml='-90%' w={4} h={4} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0006 1.94555C13.0006 1.37318 12.5532 0.90918 12.0013 0.90918C11.4494 0.90918 11.002 1.37318 11.002 1.94555V3.57144C11.002 4.14381 11.4494 4.60781 12.0013 4.60781C12.5532 4.60781 13.0006 4.14381 13.0006 3.57144V1.94555Z" fill="#4D4D4D"/>
            <path d="M15.2819 10.0097C15.2819 11.8224 13.8124 13.2918 11.9997 13.2918C10.1871 13.2918 8.7176 11.8224 8.7176 10.0097C8.7176 8.197 10.1871 6.72754 11.9997 6.72754C13.8124 6.72754 15.2819 8.197 15.2819 10.0097Z" fill="#4D4D4D"/>
            <path d="M11.9998 14.4924C9.32976 14.4924 7.72851 15.4863 6.82439 16.8077C5.95056 18.0848 5.81138 19.5485 5.8086 20.3585C5.80581 21.173 6.4571 21.7046 7.12485 21.7046H16.8747C17.5424 21.7046 18.1937 21.173 18.1909 20.3585C18.1882 19.5485 18.049 18.0848 17.1752 16.8077C16.271 15.4863 14.6698 14.4924 11.9998 14.4924Z" fill="#4D4D4D"/>
            <path d="M7.82361 11.4479C7.82361 12.9449 6.61003 14.1585 5.11302 14.1585C3.616 14.1585 2.40243 12.9449 2.40243 11.4479C2.40243 9.95088 3.616 8.7373 5.11302 8.7373C6.61003 8.7373 7.82361 9.95088 7.82361 11.4479Z" fill="#4D4D4D"/>
            <path d="M5.70123 16.2336C5.93332 15.8944 6.20314 15.5729 6.51494 15.2768C6.093 15.1946 5.627 15.15 5.11304 15.15C2.90799 15.15 1.58558 15.9708 0.838901 17.0621C0.117243 18.1168 0.0023024 19.3256 7.39928e-06 19.9946C-0.00230033 20.6672 0.535579 21.1063 1.08704 21.1063H4.55201C4.49529 20.9381 4.46417 20.7537 4.46485 20.5556C4.46824 19.5697 4.63764 17.788 5.70123 16.2336Z" fill="#4D4D4D"/>
            <path d="M19.4491 21.1063C19.5058 20.9381 19.5369 20.7537 19.5363 20.5556C19.5329 19.5697 19.3635 17.788 18.2999 16.2336C18.0677 15.8943 17.7978 15.5727 17.4859 15.2765C17.9075 15.1945 18.3731 15.15 18.8865 15.15C21.0915 15.15 22.4139 15.9708 23.1606 17.0621C23.8823 18.1168 23.9972 19.3257 23.9995 19.9946C24.0018 20.6672 23.4639 21.1063 22.9125 21.1063H19.4491Z" fill="#4D4D4D"/>
            <path d="M18.8865 14.1585C20.3835 14.1585 21.597 12.9449 21.597 11.4479C21.597 9.95088 20.3835 8.7373 18.8865 8.7373C17.3894 8.7373 16.1759 9.95088 16.1759 11.4479C16.1759 12.9449 17.3894 14.1585 18.8865 14.1585Z" fill="#4D4D4D"/>
            <path d="M17.5142 3.01253C17.9045 3.40279 17.8928 4.04725 17.488 4.45198L16.3384 5.60166C15.9336 6.00638 15.2892 6.01812 14.8989 5.62786C14.5087 5.2376 14.5204 4.59314 14.9251 4.18841L16.0748 3.03873C16.4795 2.634 17.124 2.62227 17.5142 3.01253Z" fill="#4D4D4D"/>
            <path d="M7.9283 3.03882C7.52357 2.63409 6.87911 2.62236 6.48885 3.01262C6.09859 3.40287 6.11032 4.04733 6.51505 4.45206L7.66473 5.60174C8.06946 6.00647 8.71392 6.0182 9.10417 5.62794C9.49443 5.23768 9.4827 4.59322 9.07798 4.18849L7.9283 3.03882Z" fill="#4D4D4D"/>
          </Icon>
          <Menu >
          <MenuButton as={Text} rightIcon={<ChevronDownIcon />} mt='-20%' ml='-50%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>
          Employees
          </MenuButton>
          <MenuList fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>
            <MenuItem><Link to="/EmployeeManagement">Employee Management</Link></MenuItem>
            <MenuItem><Link to="/EmployeeSeparation">Employee Separation</Link></MenuItem>
            <MenuItem><Link to="/EmployeeFinance">Employee Finance</Link></MenuItem>
            <MenuItem><Link to="/EmployeeComplaints">Employee Complaints</Link></MenuItem>
            <MenuItem><Link to="/EmployeeServiceRequestTicket"> Employee Service Request </Link></MenuItem>
          </MenuList>
          </Menu>
          
          <Icon mt='10%' ml='-90%' w={4} h={4} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <FaBullhorn color="#505050"/>
          </Icon>
          <Text mt='-20%' ml='-50%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'><Link to='/Announcement'>Announcement</Link></Text>

          <Icon mt='10%' ml='-90%' w={4} h={4} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.45463 2.06122e-06C6.94713 2.06122e-06 4.54231 0.996112 2.76922 2.76919C0.996151 4.54228 4.70486e-05 6.94708 4.70486e-05 9.4546C-0.00585754 11.3156 0.544131 13.136 1.57952 14.6824L0.316231 18.0631C0.176686 18.4365 0.496694 18.8198 0.889046 18.7493L5.31686 17.9527C5.75661 18.167 6.21105 18.3465 6.67593 18.4898C6.51408 17.7811 6.42859 17.0434 6.42859 16.2857C6.42859 10.8418 10.8418 6.42857 16.2857 6.42857C17.0465 6.42857 17.7873 6.51477 18.4985 6.67793C18.1517 5.54877 17.5956 4.49253 16.8571 3.56517C15.971 2.45229 14.8451 1.55373 13.5634 0.936444C12.2817 0.319159 10.8772 -0.00093723 9.45463 2.06122e-06ZM21.7409 10.8309C20.2941 9.38419 18.3319 8.57143 16.286 8.57143C15.1253 8.57066 13.9793 8.83185 12.9335 9.33551C11.8878 9.83916 10.9691 10.5723 10.2461 11.4804C9.52306 12.3884 9.01425 13.4479 8.75758 14.5799C8.50092 15.7119 8.50299 16.8872 8.7637 18.0183C9.02439 19.1494 9.53697 20.2071 10.2632 21.1125C10.9895 22.0179 11.9108 22.7479 12.9583 23.2478C14.0059 23.7477 15.1527 24.0048 16.3135 24C17.4742 23.995 18.6189 23.7283 19.6622 23.2195L23.1113 23.8401C23.5037 23.9107 23.8236 23.5274 23.6841 23.1538L22.7115 20.5512C23.5563 19.2895 24.0051 17.8042 24.0003 16.2857C24.0003 14.2398 23.1876 12.2776 21.7409 10.8309Z" fill="#4D4D4D"/>
          </Icon>
          <Text mt='-20%' ml='-50%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Edverse Chat</Text>

        </justifyContent>
         
        <justifyContent>
        <Text mt='386%' ml='-90%' color='#E5E5E5' >__________________________</Text>
        <Icon mt='-2%' ml='-94%' w={4} h={4} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0028 0C11.2144 0 10.4089 0.0505264 9.60334 0.176842C4.87301 0.846316 1.10245 3.66316 0.211229 7.14947C-0.611438 10.4463 1.0339 13.4779 4.01606 15.4358C4.75303 15.9158 5.14723 16.5853 5.14723 17.2926V20.2105C5.14723 21.6 6.68973 22.7368 8.575 22.7368H9.05489C9.65475 23.4947 10.7345 24 12.0028 24C13.2711 24 14.3679 23.4947 14.9507 22.7368H15.4306C17.3158 22.7368 18.8583 21.6 18.8583 20.2105V17.2926C18.8583 16.5979 19.2354 15.9158 19.9552 15.4484C22.4404 13.8316 24 11.4695 24 8.8421C24 3.95368 18.6355 0 12.0028 0ZM12.8597 13.8947H11.1458V10.6232L8.00942 8.32421L9.22628 7.42737L12.0028 9.47368L14.7793 7.42737L15.9961 8.32421L12.8597 10.6358V13.8947ZM14.5736 20.2105C14.5565 20.2105 14.5393 20.1979 14.5222 20.1979V20.2105H9.48337V20.1979C9.46623 20.1979 9.44909 20.2105 9.43195 20.2105C8.95206 20.2105 8.575 19.9326 8.575 19.5789C8.575 19.2253 8.95206 18.9474 9.43195 18.9474C9.44909 18.9474 9.46623 18.96 9.48337 18.96V18.9474H14.5222V18.96C14.5393 18.96 14.5565 18.9474 14.5736 18.9474C15.0535 18.9474 15.4306 19.2253 15.4306 19.5789C15.4306 19.9326 15.0535 20.2105 14.5736 20.2105ZM14.5736 17.6842H9.43195C8.95206 17.6842 8.575 17.4063 8.575 17.0526C8.575 16.6989 8.95206 16.4211 9.43195 16.4211H14.5736C15.0535 16.4211 15.4306 16.6989 15.4306 17.0526C15.4306 17.4063 15.0535 17.6842 14.5736 17.6842Z" fill="black" fill-opacity="0.7"/>
        </Icon>
        <Text mt='-10%' ml='-76%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Help & Support</Text>
        <Icon mt='5%' ml='-92%' w={4} h={4} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.4 0C1.07452 0 0 1.07452 0 2.4V21.6C0 22.9255 1.07452 24 2.4 24H10.8C12.1255 24 13.2 22.9255 13.2 21.6V15.6H7.2C5.87452 15.6 4.8 14.5255 4.8 13.2V10.8C4.8 9.47452 5.87452 8.4 7.2 8.4H13.2V2.4C13.2 1.07452 12.1255 0 10.8 0H2.4Z" fill="#4D4D4D"/>
        <path d="M7.2 10.8V13.2L19.9029 13.2L17.1515 15.9515C16.6828 16.4201 16.6828 17.1799 17.1515 17.6485C17.6201 18.1172 18.3799 18.1172 18.8485 17.6485L23.4788 13.0182C23.5088 12.9883 23.5372 12.9573 23.5639 12.9255C23.8303 12.7054 24 12.3725 24 12C24 11.6275 23.8303 11.2946 23.5639 11.0745C23.5372 11.0427 23.5088 11.0117 23.4788 10.9818L18.8485 6.35147C18.3799 5.88284 17.6201 5.88284 17.1515 6.35147C16.6828 6.8201 16.6828 7.5799 17.1515 8.04853L19.9029 10.8L7.2 10.8Z" fill="#4D4D4D"/>
        </Icon>
        <Text mt='-10%' ml='-76%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Log out</Text>

        
        </justifyContent>

        </Flex>



      

        

       <Box mt='5%' ml='-76%' bg={''} width={'100%'} >

      </Box>
        
    </Box>
  );
};


const NavItem = ({ icon, children, url }) => {
  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
    >
      <Link to={`${url}`}>{children}</Link>
    </Flex>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogout=()=>{
    dispatch(signout())
    navigate('/')

  }
  return (
    <Flex
      ml={{ base: 0, md: 0, lg: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      
<InputGroup w="30%" ml="5%" mt="2%">
          <Input
            paddingLeft="10%"
            placeholder="Search"
            color="black"
            background= "#D1CECE"
            fontFamily="Inter"
        
          />
          <InputLeftElement
            pointerEvents="none"
            fontFamily="Inter"
            children={<Search2Icon boxSize={4} />}
          />
        </InputGroup>

      <BellIcon color={'#4D4D4D'} mt='3%' ml='40%' w={6} h={6} />
      <SettingsIcon color={'#4D4D4D'} mt='3%' ml='1%' w={5} h={6} /> 
      <Button mt='3%' ml='1%' bg='black' onClick={handleLogout} color={'orange'} variant={'outline'}>Logout</Button>

    </Flex>
  );
};