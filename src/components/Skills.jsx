import React from "react";

const skills = ["React", "Flask", "JavaScript", "MySQL", "Python", "Java"];

const SkillTags = () => {
  return (
    <>
      <h1 style={styles.headerr}> Skills</h1>

      <div style={styles.tagContainer}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.tag}>
            {skill}
          </div>
        ))}
      </div>
    </>
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
  },
  h1: {
    color: "white",
  },
};

export default SkillTags;
