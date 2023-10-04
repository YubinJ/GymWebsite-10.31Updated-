import React, { useState, useRef } from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Flex } from "@chakra-ui/react";
import axios from "axios";

//import { jsonServer } from "json-server";

export const Register = (props) => {
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);

  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  //登録ボタンを押したら
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const dataObject = Object.fromEntries(data.entries());
    console.log(dataObject);

    //Check if password and password confirmed matchs
    if (dataObject.pass === dataObject.passwordConfirm) {
      console.log("Password Confirmed!");

      //Create the data to be saved into database
      const dataToSave = {
        user: dataObject.user,
        pass: dataObject.pass,
        authority: "member",
        class: [],
        classHistory: [],
      };

      //If the username was used, check return false
      let check = true;
      try {
        //Connect to the database
        const response = await axios.get(
          "https://vkfscl-4001.csb.app/memberRegister",
        );
        console.log("Data retrieved:", response.data);
        //Check if the username is used
        for (const member of response.data) {
          if (member.user === dataToSave.user) {
            check = false;
            console.log("User Duplicated");
          }
        }
      } catch (error) {
        console.error("Error retrieving data:", error);
      }

      //If username isn't used, create data
      if (check) {
        try {
          const response = await axios.post(
            //"http://localhost:4000/memberRegister",
            "https://vkfscl-4001.csb.app/memberRegister",
            dataToSave,
          );
          console.log("Data saved:", response.data);
        } catch (error) {
          console.error("Error saving data:", error);
        }
      }
    }
  };

  return (
    <div className="auth-form-container">
      <h1>登録</h1>

      {
        //エラーメッセージ機能、実装待ち
        /* <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
        style={{ color: "red" }}
      >
        {errMsg}
      </p> */
      }

      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username">ユーザ名: </label>
        <input
          type="text"
          id="user"
          name="user"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          placeholder="ユーザ名を入力してください"
          style={{ color: "black" }}
        />
        <p id="uidnote" style={{ textAlign: "left" }}>
          <Flex margin="2">
            <Box padding="1">
              <FontAwesomeIcon icon={faInfoCircle} />
            </Box>
            <Box padding="1">
              4 から 24 文字まで。
              <br />
              文字で始まる必要があります.
              <br />
              文字、数字、アンダースコア、ハイフンが許可されています。
            </Box>
          </Flex>
        </p>
        <label htmlFor="pass">パスワードの作成</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="**********"
          id="pass"
          name="pass"
          style={{ color: "black" }}
        />
        <Flex margin="2">
          <Box padding="1">
            <FontAwesomeIcon icon={faInfoCircle} />
          </Box>
          <Box padding="1" style={{ textAlign: "left" }}>
            8 から 24 文字まで。
            <br />
            子文字、大文字、数字は少なくとも一つずつ必要があります.
            <br />
            特殊文字[!@#$%]は少なくとも一つ必要があります。
          </Box>
        </Flex>

        <label htmlFor="password">パスワードの確認</label>
        <input
          value={passConfirm}
          onChange={(e) => setPassConfirm(e.target.value)}
          type="password"
          placeholder="**********"
          id="passwordConfirm"
          name="passwordConfirm"
          style={{ color: "black" }}
        />

        <button className="register-login-btn" type="submit">
          登録
        </button>
      </form>

      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        既にアカウントお待ちの方はここでログイン
      </button>
    </div>
  );
};
