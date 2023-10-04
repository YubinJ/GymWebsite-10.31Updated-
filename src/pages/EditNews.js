import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Link,
} from "@chakra-ui/react";
import axios from "axios";

const EditClass = () => {
  const location = useLocation();
  const props = location.state.newsData; // Access the props object passed from NewsCard
  const [formData, setFormData] = useState({
    Title: "",
    Time: "",
    Content: "",
    PICURL: "",
    Show: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editedData = {
      Title: formData.Title || props.Title,
      Time: formData.Time || props.Time,
      Content: formData.Content || props.Content,
      PICURL: formData.PICURL || props.PICURL,
      id: props.id,
      Show: true,
    };

    try {
      // Send a PUT or PATCH request to update the data
      const response = await axios.put(
        `https://vkfscl-4001.csb.app/news/${props.id}`,
        editedData,
      );
      // Handle the response here, e.g., show a success message or update your UI
      console.log(
        `Data with ID ${props.id} updated successfully:`,
        response.data,
      );
      window.location.href = "https://vkfscl-3001.csb.app/news";
    } catch (error) {
      // Handle any errors, e.g., display an error message
      console.error(`Error updating data with ID ${props.id}:`, error);
    }

    console.log("Props data: ", props);
    console.log("Form Data: ", editedData);
  };

  return (
    <Box m="auto" my="10px" p="5" maxW="400px" bg="gray.100" borderRadius="md">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>タイトル</FormLabel>
          <Input
            bg="white"
            type="text"
            name="Title"
            placeholder={props.Title}
            value={formData.Title}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>時間</FormLabel>
          <Input
            bg="white"
            type="text"
            name="Time"
            placeholder={props.Time}
            value={formData.Time}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>詳細</FormLabel>
          <Textarea
            bg="white"
            type="text"
            name="Content"
            placeholder={props.Content}
            value={formData.Content}
            onChange={handleInputChange}
            size="lg"
          />
        </FormControl>

        <FormControl>
          <FormLabel>PICURL</FormLabel>
          <Input
            bg="white"
            type="text"
            name="PICURL"
            value={formData.PICURL}
            placeholder={props.PICURL}
            onChange={handleInputChange}
          />
        </FormControl>

        <Link href={`/news`}>
          <Button type="submit" mt="4" colorScheme="blue">
            ニュースを編集
          </Button>
        </Link>

        <Link href={`/news`}>
          <Button type="button" mt="4" ml="5" colorScheme="gray">
            戻す
          </Button>
        </Link>
      </form>
    </Box>
  );
};

export default EditClass;
