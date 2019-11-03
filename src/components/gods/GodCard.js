import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardContainer = styled.div`
  display: inline-block;
  border: 1px solid black;
  width: 100%;
  height: auto;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 25px;
  box-sizing: border-box;
  box-shadow: -8px 9px 16px -3px gray;
  background: #171314;
`;

const CardBackground = styled.div`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  display: flex;
  background-color: #bbb;
  z-index: 0;
`;

const CardFrame = styled.div`
  z-index: 1;
  position: relative;
  height: 100%;
  width: 96%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const FrameHeader = styled.div`
  display: flex;
  margin: 10px auto;
  width: 98%;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  border-radius: 18px/40px;
  box-shadow: 0 0 0 2px #e3e3e3, 0 0 0 6px #65799b, 0px 0px 0px 5px #5d6874;
`;

const FrameArt = styled.img`
  height: auto;
  width: 94%;
  margin: -2px auto 0;
  box-shadow: 0 0 0 2px #e3e3e3, 0 0 0 6px #65799b, 0px 0px 0px 5px #5d6874;
`;

const FrameTypeLine = styled.div`
  display: flex;
  margin: 10px auto;
  width: 98%;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  border-radius: 18px/40px;
  box-shadow: 0 0 0 2px #e3e3e3, 0 0 0 6px #65799b, 0px 0px 0px 5px #5d6874;
`;

const Title = styled.h1`
  font-size: 1.1rem;
  align-self: baseline;
  font-weight: 600;
  margin: 0;
`;

const SubTitle = styled.h2`
  font-size: 1.1rem;
  align-self: baseline;
  font-weight: 600;
  margin: 0;
`;

const FrameTextBox = styled.div`
  margin: -2px 10px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.5rem;
  font-size: 1.2em;
  box-shadow: 0 0 0 2px #e3e3e3, 0 0 0 6px #65799b, 0px 0px 0px 5px #5d6874;
`;

const GodCard = ({ god }) => {
  return (
    <CardContainer>
      <CardBackground>
        <CardFrame>
          <FrameHeader>
            <Title>{god.name}</Title>
          </FrameHeader>
          <FrameArt src={god.avatar} alt={god.name} />

          <FrameTypeLine>
            <SubTitle>First generation</SubTitle>
          </FrameTypeLine>

          <FrameTextBox>{god.description}</FrameTextBox>
        </CardFrame>
      </CardBackground>
    </CardContainer>
  );
};

GodCard.propTypes = {
  god: PropTypes.object.isRequired
};

export default GodCard;
