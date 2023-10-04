import {
  Box,
  Image,
  HStack,
  Tag,
  Center,
  Flex,
  Heading,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { useAuth } from "../AuthContext";
import axios from "axios";
import React, { useState } from "react";

export default function ClassInfo(props) {
  const { currentMember, setCurrentMember } = useAuth();

  const handleReserve = async (classId) => {
    console.log("Trying to Reserve class id: " + classId);
    console.log(currentMember);
    const editedData = {
      user: currentMember.user,
      pass: currentMember.pass,
      authority: currentMember.authority,
      class: currentMember.class.concat(classId),
      classHistory: currentMember.classHistory,
      id: currentMember.id,
    };
    console.log(editedData);
    try {
      const response = await axios.put(
        `https://vkfscl-4001.csb.app/memberRegister/${editedData.id}`,
        editedData,
      );
      console.log(
        `Data with User ID ${editedData.id} updated successfully:`,
        response.data,
      );
      setCurrentMember(editedData);
    } catch (error) {
      console.error(`Error updating data with ID ${editedData.id}:`, error);
    }
  };

  const handleTake = async (classId) => {
    console.log("Trying to Take class id: " + classId);
    console.log(currentMember);
    const editedData = {
      user: currentMember.user,
      pass: currentMember.pass,
      authority: currentMember.authority,
      class: currentMember.class.filter((id) => id !== classId),
      classHistory: currentMember.classHistory.concat(classId),
      id: currentMember.id,
    };
    console.log(editedData);
    try {
      const response = await axios.put(
        `https://vkfscl-4001.csb.app/memberRegister/${editedData.id}`,
        editedData,
      );
      console.log(
        `Data with User ID ${editedData.id} updated successfully:`,
        response.data,
      );
      setCurrentMember(editedData);
    } catch (error) {
      console.error(`Error updating data with ID ${editedData.id}:`, error);
    }
  };

  const handleDelete = async (classId) => {
    console.log("Trying to Delete class id: " + classId);
    console.log(currentMember);
    const editedData = {
      user: currentMember.user,
      pass: currentMember.pass,
      authority: currentMember.authority,
      class: currentMember.class,
      classHistory: currentMember.classHistory.filter((id) => id !== classId),
      id: currentMember.id,
    };
    console.log(editedData);
    try {
      const response = await axios.put(
        `https://vkfscl-4001.csb.app/memberRegister/${editedData.id}`,
        editedData,
      );
      console.log(
        `Data with User ID ${editedData.id} updated successfully:`,
        response.data,
      );
      setCurrentMember(editedData);
    } catch (error) {
      console.error(`Error updating data with ID ${editedData.id}:`, error);
    }
  };

  return (
    <Center p="1">
      <Box p="1" bg="gray.200" borderRadius="xl" m="0.5">
        <Image
          src={props.PICURL}
          alt="pic"
          className="classImage"
          borderRadius="xl"
        />
        <HStack
          bg="gray.300"
          borderRadius="xl"
          fontSize="xs"
          m="1"
          color="black"
        >
          {[[props.Time, props.Instructor]].map((item) => (
            <Tag key={item} variant="outline">
              {item}
            </Tag>
          ))}
        </HStack>
        <Flex p="1">
          <Heading fontSize="sm" color="black">
            {props.className}
          </Heading>
          <Spacer />
          {props.pattern === "All" && (
            <Button
              colorScheme="blue"
              h="5"
              m="0.5"
              onClick={() => handleReserve(props.id)}
            >
              予約
            </Button>
          )}
          {props.pattern === "Reserved" && (
            <Button
              colorScheme="green"
              h="5"
              m="0.5"
              onClick={() => handleTake(props.id)}
            >
              受講
            </Button>
          )}
          {props.pattern === "Taken" && (
            <Button
              colorScheme="red"
              h="5"
              m="0.5"
              onClick={() => handleDelete(props.id)}
            >
              ×
            </Button>
          )}
        </Flex>
      </Box>
    </Center>
  );
}
