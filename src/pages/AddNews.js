import React, { useState } from "react";
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

const AddClass = () => {
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

  const handleButtonClick = () => {
    window.location.href = "https://vkfscl-3001.csb.app/news";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    axios
      .post("https://vkfscl-4001.csb.app/news", formData)
      .then((response) => {
        // Handle the response here, e.g., show a success message or navigate to a new page
        console.log("Data saved successfully:", response.data);
      })
      .catch((error) => {
        // Handle any errors, e.g., display an error message
        console.error("Error saving data:", error);
      });
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
            onChange={handleInputChange}
          />
        </FormControl>

        <Button
          type="submit"
          mt="4"
          colorScheme="blue"
          onClick={handleButtonClick}
        >
          ニュースを投稿
        </Button>

        <Link href={`/news`}>
          <Button type="button" mt="4" ml="5" colorScheme="gray">
            戻す
          </Button>
        </Link>
      </form>
    </Box>
  );
};

export default AddClass;
