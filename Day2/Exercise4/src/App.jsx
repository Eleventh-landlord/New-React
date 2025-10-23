import React from "react";
import ProfileCard from "./ProfileCard.jsx";
import ProfileHeader from "./ProfileHeader.jsx";
import ProfileStats from "./ProfileStats.jsx";
import SkillBadge from "./SkillBadge.jsx";

function App() {
  return (
    <div className="dashboard">
      <h1> User Profile Dashboard</h1>
      <ProfileCard>
        <ProfileHeader
          name="Adeleke kehinde"
          title="Senior Developer at SwagOut"
          avatar="/Image/Bolu.JPG"
        />
        <ProfileStats projects={45} followers="8.2K" following={300} />
        <h3>Skills:</h3>
        <div className="skills-container">
          <SkillBadge skill="React" level="Expert" />
          <SkillBadge skill="JavaScript" level="Expert" />
          <SkillBadge skill="CSS" level="Intermediate" />
          <SkillBadge skill="Python" level="Beginner" />
        </div>
      </ProfileCard>
    </div>
  );
}

export default App;
