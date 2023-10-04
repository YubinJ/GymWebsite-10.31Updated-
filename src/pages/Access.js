import React from "react";
import { Center, Link, Image, Button } from "@chakra-ui/react";

export default function Access() {
  return (
    <div style={{ backgroundColor: "gray.100" }}>
      <Center m="5">
        <br />
        <Image
          src="https://www.marunouchi.com/files/access/dummy_map_01.png"
          alt="Nijubashi Square"
          width="600px"
          height="500px"
        />
      </Center>
      <Center>
        <Link
          href="https://www.google.com/maps?q=%E4%BA%8C%E9%87%8D%E6%A9%8B%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2&sca_esv=577715843&sxsrf=AM9HkKkxoIK7Bo0mtmcz4UeCmlXOdragSA:1698643555818&iflsig=AO6bgOgAAAAAZT9Mc6eF4hQs7bYndUU4c48Ex78iol5R&gs_lp=Egdnd3Mtd2l6Ignkuozph43mqYsqAggDMgkQABgEGCUYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI5zdQ7RBYtiRwAXgAkAEAmAFfoAHEB6oBAjEyuAEDyAEA-AEBqAIKwgIHECMY6gIYJ8ICBxAjGIoFGCfCAhAQLhiKBRjHARivARiOBRhDwgILEC4YgAQYxwEY0QPCAgQQIxgnwgIGEAAYAxgEwgINEAAYBBiABBixAxiDAcICBxAAGAQYgATCAgoQABgEGIAEGLEDwgIIEAAYgAQYsQPCAgcQABiABBgKwgIJEAAYBBiABBgKwgIGEAAYBBgewgIJEAAYgAQYChgqwgIKEAAYgAQYsQMYCg&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjg4NqyhJ2CAxWZQ94KHXBKDVoQ_AUoAXoECAMQAw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button bg="blue.200">グーグルマップへ</Button>
        </Link>
      </Center>
    </div>
  );
}
