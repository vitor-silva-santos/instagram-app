import { Flex, Spacer, Typography } from "../../styles";
import * as C from "./style";

import { AiOutlineHome } from "react-icons/ai";
import { RiGlobalLine } from "react-icons/ri";
import { BiExit } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { MdExitToApp, MdMonitor } from "react-icons/md";
import { BsGear, BsMoon, BsSun } from "react-icons/bs";
import LogoInstagram from "../../assets/logo-instagram.svg";

const menuNav = [
  {
    icon: <AiOutlineHome />,
    menuName: "Inicio",
  },
  {
    icon: <RiGlobalLine />,
    menuName: "Explorar",
  },
  {
    icon: <FiSend />,
    menuName: "Direct",
  },
  {
    icon: <MdMonitor />,
    menuName: "IGTV",
  },
  {
    icon: <BsGear />,
    menuName: "Ajustes",
  },
];

export function NavBar({ themeToggler, theme }) {
  function GroupText({ title, subTitle }) {
    return (
      <Flex gap="4px">
        <Typography>{title}</Typography>
        <Typography size="13px" weight="300px">
          {subTitle}
        </Typography>
      </Flex>
    );
  }

  return (
    <C.Container>
      <Flex>
        <C.BtnTheme onClick={themeToggler}>
          {theme === "light" ? <BsMoon /> : <BsSun />}
        </C.BtnTheme>
      </Flex>

      <img src={LogoInstagram} alt="logo do instagram" />

      <Flex>
        <C.Profile>
          <img
            src="https://avatars.githubusercontent.com/u/116509760?v=4"
            alt="foto perfil"
          />
        </C.Profile>
        <GroupText title="Vitor Silva Santos" subTitle="@_virtu_ss" />
      </Flex>

      <Spacer margin="12px" />

      <Flex direction="row" justify="space-between">
        <GroupText title="18" subTitle="Publicações" />
        <GroupText title="2.5M" subTitle="Seguidores" />
        <GroupText title="1.2K" subTitle="Seguindo" />
      </Flex>

      <Spacer />

      <Flex align="start" gap="22px">
        {menuNav.map((menu) => (
          <C.ListIcon key={menu.menuName}>
            {menu.icon}
            <Typography>{menu.menuName}</Typography>
          </C.ListIcon>
        ))}
      </Flex>
      <Spacer />

      <C.Divider />

      <Spacer margin="12px" />
      <Flex align="start">
        <C.ListIcon>
          <BiExit />
          <Typography>Sair</Typography>
        </C.ListIcon>
      </Flex>
    </C.Container>
  );
}
