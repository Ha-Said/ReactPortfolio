import React, { useState, useEffect, useRef } from "react";

const skills = ["React", "Flask", "JavaScript", "MySQL", "Python", "Java"];

const SkillTags = () => {
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
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 1s ease-in-out",
      }}
    >
      <h1 style={styles.headerr}>Skills</h1>

      <div style={styles.tagContainer}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.tag}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  headerr: {
    color: "white",
  },
  tagContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  tag: {
    backgroundColor: "#333",
    color: "white",
    padding: "6px 12px",
    borderRadius: "12px",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    fontWeight: "bold",
    display: "inline-block",
    margin: "5px",
  },
};

export default SkillTags;
