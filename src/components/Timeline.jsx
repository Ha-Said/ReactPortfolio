import React from "react";
import styled from "styled-components";

const TimelineWrapper = styled.ol`
  position: relative;
  border-left: 2px solid #e5e7eb; /* Light gray */
  padding-left: 1rem;
`;

const TimelineItem = styled.li`
  margin-bottom: 2.5rem;
  margin-left: 1rem;
  position: relative;
`;

const Dot = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #e5e7eb;
  border-radius: 50%;
  top: 6px;
  left: -25px;
  border: 2px solid #fff;
`;

const Time = styled.time`
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  color: White;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #bad3d5; /* Dark color */
`;

const Description = styled.p`
  font-size: 1rem;
  color: white; /* Gray color */
  margin-bottom: 1rem;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #111827;
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f3f4f6;
    color: #1d4ed8; /* Blue color */
  }

  svg {
    width: 12px;
    height: 12px;
    margin-left: 0.5rem;
  }
`;

function Timeline() {
  return (
    <TimelineWrapper>
      <TimelineItem>
        <Dot />
        <Time>July 2022</Time>
        <Title>Highschool Graduation</Title>
        <Description>
          Got my high school diploma in Computer Science and started my journey
          to become a software developer.
        </Description>
      </TimelineItem>

      <TimelineItem>
        <Dot />
        <Time>September 2022 </Time>
        <Title>University as a Computer Science Major </Title>
        <Description>
          Started my Journey as a Computer Science Major at The University of
          Scince ,Monastir ,Tunisia {"(FSM)"}.
        </Description>
      </TimelineItem>
    </TimelineWrapper>
  );
}

export default Timeline;
