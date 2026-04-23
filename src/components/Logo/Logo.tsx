import { Link } from "react-router";
import LogoIcon from "../../assets/artevelde.svg";

const Logo = () => {
  return (
    <Link to="/">
      <LogoIcon />
    </Link>
  );
};

export default Logo;
