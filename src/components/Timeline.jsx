import React, { useState, useEffect, useRef } from "react";
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
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) => (props.isVisible ? "none" : "translateY(50px)")};
  transition: opacity 1s ease-out, transform 0.6s ease-out;
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
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is in view
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <TimelineWrapper>
      <TimelineItem ref={elementRef} isVisible={isVisible}>
        <Dot />
        <Time>July 2022</Time>
        <Title>Highschool Graduation</Title>
        <Description>
          Got my high school diploma in Computer Science and started my journey
          to become a software developer.
        </Description>
      </TimelineItem>

      <TimelineItem isVisible={isVisible}>
        <Dot />
        <Time>September 2022</Time>
        <Title>University as a Computer Science Major</Title>
        <Description>
          Started my Journey as a Computer Science Major at The University of
          Science, Monastir, Tunisia {"(FSM)"}.
        </Description>
      </TimelineItem>
    </TimelineWrapper>
  );
}

export default Timeline;
