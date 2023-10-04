import { Box, Button, Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ClassInfo from "../components/ClassInfo";
import Intro from "../components/Intro";
import "../style/style.css";
import axios from "axios";
import { useAuth } from "../AuthContext";

export default function Home() {
  const [classItems, setClassItems] = useState([]);
  const { currentMember } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://vkfscl-4001.csb.app/class");
        console.log("Classes data retrieved:", response.data);
        setClassItems(response.data);
      } catch (error) {
        console.error("Error retrieving data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="class-gener">
      <Intro />
      <Box my="5px" p="10px" bg="blue.200">
        クラス紹介
      </Box>

      {classItems.map((classItem) => (
        <ClassInfo
          className={classItem.className}
          Time={classItem.Time}
          Instructor={classItem.Instructor}
          PICURL={classItem.PICURL}
          id={classItem.id}
        />
      ))}

      {currentMember && currentMember.authority === "admin" && (
        <Box display="flex" justifyContent="flex-end">
          <Link href="/AddClass">
            <Button m="10px" bg="red.400">
              クラス追加
            </Button>
          </Link>
        </Box>
      )}
    </div>
  );
}
