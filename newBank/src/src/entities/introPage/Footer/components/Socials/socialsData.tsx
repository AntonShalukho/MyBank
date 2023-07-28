import variables from "src/shared/assets/scss/variables.module.scss";

import {
  Facebook,
  Instagram,
  Linkedin,
  Skype,
  Twitter,
} from "src/shared/assets/icons";

import { SocialType } from "../../types";

export const socials: SocialType[] = [
  {
    name: <Facebook fill={variables.socials} />,
    link: "https://www.facebook.com/",
  },
  {
    name: <Instagram fill={variables.socials} />,
    link: "https://www.instagram.com/",
  },
  { name: <Twitter fill={variables.socials} />, link: "https://twitter.com/" },
  { name: <Skype fill={variables.socials} />, link: "https://www.skype.com/" },
  {
    name: <Linkedin fill={variables.socials} />,
    link: "https://www.linkedin.com/",
  },
];
