import { ReactComponent as GitIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/fb.svg";
import { ReactComponent as LinkedInIcon } from "./icons/LinkedIN.svg";
import { ReactComponent as InstagramIcon } from "./icons/insta.svg";
import { styleIcon } from "./styled";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/mileni67",
    Icon: styleIcon(GitIcon),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100002220085370",
    Icon: styleIcon(FacebookIcon),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/oleksandr-vykhor-864956220/",
    Icon: styleIcon(LinkedInIcon),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mr.destro/",
    Icon: styleIcon(InstagramIcon),
  },
];
