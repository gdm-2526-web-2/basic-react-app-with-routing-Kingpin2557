import Button from "../Button/Button";
import CustomLink from "../CustomLink/CustomLink";
import Logo from "../Logo/Logo";

const Nav = () => {
  return (
    <header>
      <nav className="container">
        <ul>
          <li>
            <Logo />
          </li>
        </ul>
        <ul>
          <li>
            <CustomLink link="#" label="Home" />
          </li>
          <li>
            <CustomLink link="#" label="Articles" />
          </li>
          <li>
            <CustomLink link="#" label="About" />
          </li>
          <li>
            <Button type="secondary" link="tel:+1234567890">
              Call us
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
