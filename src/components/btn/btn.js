import { styled } from "styled-components";
import { at, fCenter } from "../../utils/queryHelpers";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
font-weight:600;
background-color: #3f5efb;
color: #fff;
text-transform: uppercase;
text-decoration: none;
padding: 1.5rem 4rem;
display: inline-block;
border-radius: 10rem;
transition: all .2s;
position: relative;
font-size: $default-font-size;
${fCenter()}
gap:.5rem;
${at(980, `padding: 1.2rem 3rem;`)}
//Change for the <button> element
border: none;
cursor: pointer;
&::after {
    background-color: #3f5efb;
}
    &:link,
    &:visited {
        text-transform: uppercase;
        text-decoration: none;
        padding: 1.5rem 4rem;
        display: inline-block;
        border-radius: 10rem;
        transition: all .2s;
        position: relative;
        font-size: $default-font-size;

        //Change for the <button> element
        border: none;
        cursor: pointer;
    }
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba($color-black,.2);

        &::after {
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }
    
    &:active,
    &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 .5rem 1rem rgba($color-black,.2);
    }
    
    &--white {
        background-color: $color-white;
        color: $color-grey-dark;

        &::after {
            background-color: $color-white;
        }
    }
    &__cyan {
        background-color: #3f5efb;
        color: #fff;

        &::after {
            background-color: #3f5efb;
        }
    }
   
    
    &::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 10rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;
    }
    
}`;

export const WhiteButton = styled(Button)`
  background-color: white;
  color: black;

  &::after {
    background-color: white;
  }
`;
