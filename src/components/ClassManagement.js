import { Box, Center, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import ClassListCard from "../components/ClassListCard";
import axios from "axios";
import { useAuth } from "../AuthContext";

export default function ClassMamagenent() {
  const [classItems, setClassItems] = useState([]);
  const [currentUserID, setCurrentUserID] = useState([]);
  const { currentMember } = useAuth();

  useEffect(() => {
    if (currentMember) {
      setCurrentUserID(currentMember.id);
    }
    async function fetchData() {
      try {
        //Retrive class information
        const classResponse = await axios.get(
          "https://vkfscl-4001.csb.app/class",
        );
        setClassItems(classResponse.data);
      } catch (error) {
        console.error("Error retrieving data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <Center p="1">
      <Box
        p="1"
        m="1"
        bg="gray.200"
        display="flex"
        flexWrap="wrap"
        justifyContent={"space-between"}
      >
        <Box
          minW="200px"
          flexBasis="calc(33.33% - 10px)"
          bg="blue.200"
          p="1"
          m="1"
          flex="1"
          color="gray.600"
          fontWeight="bold"
        >
          <Text
            bg="gray.700"
            p="1"
            m="1"
            color="gray.200"
            fontWeight="bold"
            borderRadius="md"
          >
            クラス一覧
          </Text>
          {classItems.map((classItem) => (
            <ClassListCard
              className={classItem.className}
              Time={classItem.Time}
              Instructor={classItem.Instructor}
              PICURL={classItem.PICURL}
              id={classItem.id}
              pattern={"All"}
              userID={currentUserID}
            />
          ))}
        </Box>
        <Box
          minW="200px"
          flexBasis="calc(33.33% - 10px)"
          bg="blue.200"
          p="1"
          m="1"
          flex="1"
          color="gray.600"
          fontWeight="bold"
        >
          <Text
            bg="gray.700"
            p="1"
            m="1"
            color="gray.200"
            fontWeight="bold"
            borderRadius="md"
          >
            予約済み
          </Text>
          {classItems.map((classItem) => {
            if (currentMember.class.includes(classItem.id)) {
              return (
                <ClassListCard
                  className={classItem.className}
                  Time={classItem.Time}
                  Instructor={classItem.Instructor}
                  PICURL={classItem.PICURL}
                  id={classItem.id}
                  pattern={"Reserved"}
                  userID={2}
                />
              );
            } else {
              return null;
            }
          })}
        </Box>
        <Box
          minW="200px"
          flexBasis="calc(33.33% - 10px)"
          bg="blue.200"
          p="1"
          m="1"
          flex="1"
          color="gray.600"
          fontWeight="bold"
        >
          <Text
            bg="gray.700"
            p="1"
            m="1"
            color="gray.200"
            fontWeight="bold"
            borderRadius="md"
          >
            受講済み
          </Text>
          {classItems.map((classItem) => {
            if (currentMember.classHistory.includes(classItem.id)) {
              return (
                <ClassListCard
                  className={classItem.className}
                  Time={classItem.Time}
                  Instructor={classItem.Instructor}
                  PICURL={classItem.PICURL}
                  id={classItem.id}
                  pattern={"Taken"}
                  userID={currentUserID}
                />
              );
            } else {
              return null;
            }
          })}
        </Box>
      </Box>
    </Center>
  );
}
