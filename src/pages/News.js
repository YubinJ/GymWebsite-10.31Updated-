import { Box, Button, Flex, Spacer, Link } from "@chakra-ui/react";
import NewsCard from "../components/NewsCard";
import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import axios from "axios";

export default function News() {
  const [newsItems, setNewsItems] = useState([]);
  const { currentMember } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://vkfscl-4001.csb.app/news");
        console.log("News data retrieved:", response.data);
        setNewsItems(response.data);
      } catch (error) {
        console.error("Error retrieving data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Flex>
        <Box>
          {newsItems.map((newsItem) => {
            console.log(newsItem);

            if (newsItem.Show) {
              return (
                <NewsCard
                  Title={newsItem.Title}
                  Time={newsItem.Time}
                  PICURL={newsItem.PICURL}
                  Content={newsItem.Content}
                  id={newsItem.id}
                  Show={newsItem.Show}
                />
              );
            }

            return null; // Return null when Show is false
          })}
        </Box>
        <Spacer></Spacer>

        {currentMember && currentMember.authority === "admin" && (
          <Link href={`/AddNews`}>
            <Button m="10px" bg="red.400">
              新しい投稿
            </Button>
          </Link>
        )}
      </Flex>
    </>
  );
}
