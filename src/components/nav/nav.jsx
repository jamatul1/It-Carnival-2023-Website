import { Link } from "gatsby";
import React, { useState } from "react";
import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { fCenter } from "../../utils/queryHelpers";

const Element = styled.nav``;
const List = styled.ul`
  display: flex;
  gap: 4rem;
  list-style: none;
`;
const Item = styled.li``;
const ItemLink = styled(Link)`
  text-decoration: none;
  color: ${(p) => p.theme.wc};
  font-weight: 600;
`;

function NavLg() {
  return (
    <Element>
      <List>
        <Item>
          <ItemLink to="#">IUPC</ItemLink>
        </Item>
        <Item>
          <ItemLink to="#">Hackathons</ItemLink>
        </Item>
        <Item>
          <ItemLink to="#">Volarent</ItemLink>
        </Item>
        <Item>
          <ItemLink to="#">Fifa</ItemLink>
        </Item>
        <Item>
          <ItemLink to="#">PSTU Gaming</ItemLink>
        </Item>
      </List>
    </Element>
  );
}

const NavSmBackground = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background: gray;
`;
const NavSmMenuBtn = styled.button`
  ${fCenter()}
  cursor:pointer;
  background: none;
  border: none;
  svg {
    color: white;
  }
`;
const NavSmCrossBtn = styled.button`
  ${fCenter()}
  cursor:pointer;
  background: none;
  border: none;
  svg {
    color: white;
  }
  position: absolute;
  top: 2.3rem;
  right: 2rem;
`;

const NavSmList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 1rem;
  list-style: none;
  position: absolute;
  left: 50%;
  bottom: 20%;
  transform: translateX(-50%);
`;

function NavSm() {
  const [open, setOpen] = useState(false);
  function handleToggle() {
    setOpen((open) => !open);
  }
  return (
    <Element>
      {!open && (
        <NavSmMenuBtn onClick={handleToggle}>
          <FeatherIcon fill={"#fff"} icon={"menu"} />
        </NavSmMenuBtn>
      )}
      {open && (
        <NavSmBackground>
          <NavSmCrossBtn onClick={handleToggle}>
            <FeatherIcon icon={"x"} />
          </NavSmCrossBtn>
          <NavSmList>
            <Item>
              <ItemLink to="#">IUPC</ItemLink>
            </Item>
            <Item>
              <ItemLink to="#">Hackathons</ItemLink>
            </Item>
            <Item>
              <ItemLink to="#">Volarent</ItemLink>
            </Item>
            <Item>
              <ItemLink to="#">Fifa</ItemLink>
            </Item>
            <Item>
              <ItemLink to="#">PSTU Gaming</ItemLink>
            </Item>
          </NavSmList>
        </NavSmBackground>
      )}
    </Element>
  );
}

export default function Nav() {
  const shouldHaveSm = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return shouldHaveSm ? <NavSm /> : <NavLg />;
}
