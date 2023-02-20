import { Flex, Typography } from "../../styles";
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

import * as C from "./style";
import { randomNumbersLike } from "../../utils/randomNumbers";

export function InfoProfile({ i, name, photo, link }) {
  function like() {
    const liked = document.getElementById(i);

    liked.classList.toggle("color");
  }

  return (
    <Flex direction="row" justify="space-between">
      <C.Container>
        <C.Link href={link} target="_blank">
          <C.ProfileImage src={photo} alt="foto perfil" />
          <Typography weight="300" size="15px">
            {name}
          </Typography>
        </C.Link>
      </C.Container>

      <C.Container>
        <Flex direction="row" gap="4px">
          <AiFillHeart onClick={like} id={i} style={{ cursor: "pointer" }} />
          <Typography weight="300" size="13px">
            {randomNumbersLike() + "K"}
          </Typography>
        </Flex>
        <Flex direction="row" gap="4px">
          <FaRegComment />
          <Typography weight="300" size="13px">
            {Math.round(randomNumbersLike())}
          </Typography>
        </Flex>
      </C.Container>
    </Flex>
  );
}
