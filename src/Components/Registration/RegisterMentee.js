import React, { useState } from "react";
import "./RegisterMentee.css"; // Import your CSS file

function RegisterMentee({ onRegistration }) {
    const skills = [
        { skillId: 1, skillLabel: 'Java' },
        { skillId: 2, skillLabel: 'Python' }
    ];
    const [selectedSkillId, setSelectedSkillId] = useState('');
    const [userId, setUserId] = useState("");

    const handleSubmit = () => {
        if (userId && selectedSkillId) {
            onRegistration && onRegistration({ userId: userId, skill: selectedSkillId });
        } else {
            alert("Please enter a valid User ID and select a Preferred Skill.");
        }
    };

    return (
        <div className="register-mentee-container"> {/* Apply a CSS class for styling */}
            <h2 className="maintext">Register as a Mentee</h2>
            <div className="input-container"> {/* Apply CSS class for input styling */}
                <label>User ID:</label>
                <br/>
                <input
                    type="text" placeholder="User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
            </div>
            <div className="input-container"> {/* Apply CSS class for input styling */}
                <label className="skill">Preferred Skill:</label>
                <select
                    value={selectedSkillId}
                    onChange={(e) => setSelectedSkillId(e.target.value)}
                >
                    <option value="" ><p>Select a skill</p></option>
                    {skills.map((skill) => (
                        <option key={skill.skillId} value={skill.skillId}>
                            {skill.skillLabel}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default RegisterMentee;
