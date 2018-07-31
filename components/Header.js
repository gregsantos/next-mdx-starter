import Link from "next/link";
import { withRouter } from "next/router";
import { Toolbar, Fixed, NavLink } from "rebass";
import theme from "../theme";

const Header = ({ router: { pathname } }) => (
  <header>
    <Toolbar width={1} bg="#818099" color={theme.main} px={3} py={2}>
      <Link href="/">
        <NavLink className={pathname === "/" ? "is-active" : ""}>Home</NavLink>
      </Link>
      <Link prefetch href="/about">
        <NavLink ml="auto" className={pathname === "/about" ? "is-active" : ""}>
          About
        </NavLink>
      </Link>
      <Link prefetch href="/hello">
        <NavLink className={pathname === "/hello" ? "is-active" : ""}>
          Hello
        </NavLink>
      </Link>
      <Link prefetch href="/hello2">
        <NavLink className={pathname === "/hello2" ? "is-active" : ""}>
          Hello2
        </NavLink>
      </Link>
    </Toolbar>
  </header>
);

export default withRouter(Header);
