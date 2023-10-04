import { Button, Heading } from "@chakra-ui/react";
import { useAuth } from "../AuthContext";
import ClassMamagenent from "../components/ClassManagement";

export const Mypage = (props) => {
  const { setLoggedin } = useAuth();
  const { currentMember } = useAuth();

  const handleClick = (e) => {
    setLoggedin(false);
    localStorage.setItem("loggedin", "false");
    localStorage.setItem("currentMember", null);
    console.log("Logged out");
    console.log("Login status: " + localStorage.getItem("loggedin"));
    window.location.reload();
  };

  return (
    <div>
      <Heading my="30px" p="2px">
        {currentMember
          ? "マイページへようこそ " + currentMember.user + "さん"
          : "My Page"}
      </Heading>
      <ClassMamagenent />

      <Button className="register-login-btn" onClick={handleClick}>
        ログアウト
      </Button>
    </div>
  );
};
