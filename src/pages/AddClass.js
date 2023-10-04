import React, { useState } from "react";
import {
  Box,
  Link,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

const AddClass = () => {
  const [formData, setFormData] = useState({
    className: "",
    Time: "",
    Instructor: "",
    PICURL: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    axios
      .post("https://vkfscl-4001.csb.app/class", formData)
      .then((response) => {
        // Handle the response here, e.g., show a success message or navigate to a new page
        console.log("Data saved successfully:", response.data);
        window.location.href = "https://vkfscl-3001.csb.app/";
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
          <FormLabel>クラス名</FormLabel>
          <Input
            bg="white"
            type="text"
            name="className"
            value={formData.className}
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
          <FormLabel>インストラクター</FormLabel>
          <Input
            bg="white"
            type="text"
            name="Instructor"
            value={formData.Instructor}
            onChange={handleInputChange}
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

        <Button type="submit" mt="4" colorScheme="blue">
          クラス追加
        </Button>

        <Link href={`/`}>
          <Button type="button" mt="4" ml="5" colorScheme="gray">
            戻す
          </Button>
        </Link>
      </form>
    </Box>
  );
};

export default AddClass;
