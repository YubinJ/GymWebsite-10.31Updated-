import {
  Box,
  Container,
  Flex,
  Spacer,
  Text,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
import { useAuth } from "../AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewsCard(props) {
  const { currentMember } = useAuth();
  const navigate = useNavigate();

  const handleDelete = async (props) => {
    console.log("Trying to delete item logically: " + props.id);
    const updatedData = {
      Title: props.Title,
      Time: props.Time,
      PICURL: props.PICURL,
      Content: props.Content,
      id: props.id,
      Show: false,
    };

    try {
      // Send a PUT or PATCH request to update the data
      const response = await axios.put(
        `https://vkfscl-4001.csb.app/news/${props.id}`,
        updatedData,
      );
      // Handle the response here, e.g., show a success message or update your UI
      console.log(
        `Data with ID ${props.id} updated successfully:`,
        response.data,
      );
      window.location.reload();
    } catch (error) {
      // Handle any errors, e.g., display an error message
      console.error(`Error updating data with ID ${props.id}:`, error);
    }
  };
  const handleEdit = async (props) => {
    console.log("Trying to edit ID: " + props.id);
    navigate(`/editNews`, { state: { newsData: props } });
  };
  return (
    <>
      <Container m="5" p="2" border="2px solid #2596be" bg="gray.200">
        <Flex>
          <Box bg="teal.400" borderRadius="5px" p="1">
            {props.Time}
          </Box>
          <Spacer></Spacer>
          <Text fontSize="xl" as="b">
            {props.Title}
          </Text>

          {currentMember && currentMember.authority === "admin" && (
            <>
              <Button
                onClick={() => handleEdit(props)}
                mx="1"
                size="sm"
                bg="blue.400"
              >
                編集
              </Button>
              <Button
                onClick={() => handleDelete(props)}
                mx="1"
                size="sm"
                bg="red.400"
              >
                ✖
              </Button>
            </>
          )}
        </Flex>
        <Image m="1" src={props.PICURL}></Image>
        <Text>{props.Content}</Text>
      </Container>
    </>
  );
}
