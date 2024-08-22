import React from 'react'
import styled, { keyframes } from 'styled-components';

/* styled components */

const scroll = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-20%);
  }
`

const Container = styled.div`
    height: 30px;
    background-color: #040404;
    color: #FFE8E8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    position: relative;
`;

const Marquee = styled.div`
    display: inline-block;
    white-space: nowrap;
    /* padding-left: 100%; */
    animation: ${scroll} 10s linear infinite;
`;

const Item = styled.span`
    display: inline-block;
    padding: 0 50px; /* Adjust spacing between items here */
    font-size: 16px;
    color: #FFE8E8;
`;

/* styled components */

const textArray = [
  "Same-Day Delivery with Easy Returns",
  "Free Delivery for all Online Orders (within Kampala)",
  "Live Customer Care: 8am-5pm",
  "For Inquiries, please WhatsApp us on +256 757 518458"
];

const Announcement = () => {
  return (
    <Container>
        <Marquee>
          {textArray.concat(textArray).map((text, index) => (
            <Item key={index}>{text}</Item>
          ))}
        </Marquee>
    </Container>
  )
}

export default Announcement;