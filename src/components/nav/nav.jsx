import { Link } from "gatsby";
import React, { useState } from "react";
import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { fCenter } from "../../utils/queryHelpers";
import { animate, motion } from "framer-motion";

const Element = styled.nav``;
const List = styled(motion.ul)`
  display: flex;
  gap: 4rem;
  list-style: none;
`;
const Item = styled(motion.li)``;
const ItemLink = styled(Link)`
  text-decoration: none;
  color: ${(p) => p.theme.wc};
  font-weight: 400;
`;
const ListVariant = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const ItemVariant = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

function NavLg() {
  return (
    <Element>
      <List variants={ListVariant} initial={"initial"} animate={"animate"}>
        {navItems.map((n, i) => (
          <Item key={i} variants={ItemVariant}>
            <ItemLink to={n.link}>{n.label}</ItemLink>
          </Item>
        ))}
      </List>
    </Element>
  );
}
const SmItemLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 600;
`;

const NavSmBackground = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 100;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
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
const NavSmCrossBtn = styled(motion.button)`
  ${fCenter()}
  z-index:2000;
  cursor: pointer;
  background: none;
  border: none;
  svg {
    color: black;
  }
  position: absolute;
  top: 2.3rem;
  right: 2rem;
`;

const NavSmList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 1rem;
  font-size: 2rem;
  list-style: none;
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);
  color: #000;
`;

const SmListVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 0.5,
      delay: 0.3,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
let navItems = [
  { label: "IUPC", link: "/events/iupc" },
  { label: "Hackathon", link: "/events/hackathon" },
  { label: "PSTU Intra  1", link: "/events/pstu-1" },
  { label: "PSTU Intra  2", link: "/events/pstu-2" },
];
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
        <NavSmBackground
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeIn",
          }}
        >
          <NavSmCrossBtn onClick={handleToggle}>
            <FeatherIcon icon={"x"} />
          </NavSmCrossBtn>
          <NavSmList
            variants={SmListVariant}
            initial={"initial"}
            animate={"animate"}
          >
            {navItems.map((n, i) => (
              <Item key={i} variants={ItemVariant}>
                <SmItemLink to={n.link}>{n.label}</SmItemLink>
              </Item>
            ))}
          </NavSmList>
        </NavSmBackground>
      )}
    </Element>
  );
}

export default function Nav() {
  const shouldHaveSm = useMediaQuery({
    query: "(max-width: 800px)",
  });

  return shouldHaveSm ? <NavSm /> : <NavLg />;
}
