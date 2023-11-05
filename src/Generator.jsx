import { useState } from "react";
import submitFormHandler from "./submitHandler";

export default function Portfolio({setHtml}) {
    const [loading, setLoading] = useState(false);
    const [professionalSummary, setProffesionalSummary] = useState("");
    const [name, setName] = useState("");
    const [experienceEntries, setExperienceEntries] = useState([{
    jobTitle: "",
    companyName: "",
    }]);
    const [educationEntries, setEducationEntries] = useState([{
    institution: "",
    graduationYear: "",
    }]);
    const [contactDetails, setContactDetails] = useState({
        github: "",
        linkedin: "",
        twitter: "",
    });
    const [skills, setSkills] = useState([""]);
    const [customization, setCustomization] = useState({
        headerPosition: "top",
        selectedTemplate: "professional",
        primaryColor: "Purple",
        imageURL: "",
        fontSize: "sm",
        fontFace: "Arial",
    });

    const handleExperienceChange = (index, key, value) => {
    const updatedEntries = [...experienceEntries];
    updatedEntries[index][key] = value;
    setExperienceEntries(updatedEntries);
    };

    const addExperienceEntry = () => {
    setExperienceEntries([
        ...experienceEntries,
        { jobTitle: "", companyName: "" },
    ]);
    };

    const handleEducationChange = (index, key, value) => {
    const updatedEntries = [...educationEntries];
    updatedEntries[index][key] = value;
    setEducationEntries(updatedEntries);
    };

    const addEducationEntry = () => {
    setEducationEntries([
        ...educationEntries,
        { institution: "", graduationYear: "" },
    ]);
    };

    const handleSkillsChange = (e) => {
    setSkills(e.target.value.split(",").map((skill) => skill.trim()));
    };

    const handleCustomizationChange = (key, value) => {
    setCustomization({ ...customization, [key]: value });
    };

    const submitHandler = async () => {
        console.log(customization);
        const response = await submitFormHandler(name, professionalSummary, experienceEntries, educationEntries,
            skills, contactDetails, customization);
        setHtml(response);
    }

    return (
    <div className="left-part bg-gray-100 p-4 max-h-[960px] w-[700px] px-16 py-8 overflow-y-scroll shrink-0">
        <div className="section mb-8">
            <h2 className="text-4xl font-bold mb-8 text-blue-600">AI Portfolio Builder</h2>
            <div className="flex space-x-4">

                <div className="flex gap-10 items-center mb-4">
                <label className="block text-lg font-semibold mb-1">
                Template Style:
                </label>
                <div className="flex space-x-4">
                <button
                    onClick={() => handleCustomizationChange("selectedTemplate", "professional")}
                    className={`btn ${
                    customization.selectedTemplate === "professional"
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    } text-white px-3 py-2 rounded hover:bg-blue-600`}
                >
                    Professional
                </button>
                <button
                    onClick={() => handleCustomizationChange("selectedTemplate", "creative")}
                    className={`btn ${
                        customization.selectedTemplate === "creative"
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    } text-white px-3 py-2 rounded hover:bg-blue-600`}
                >
                    Creative
                </button>
                <button
                    onClick={() => handleCustomizationChange("selectedTemplate", "academic")}
                    className={`btn ${
                        customization.selectedTemplate === "academic"
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    } text-white px-3 py-2 rounded hover:bg-blue-600`}
                >
                    Academic
                </button>
                </div>
                </div>

            </div>

            <div className="flex gap-10 items-center mb-4">
                <label className="block text-lg font-semibold mb-1">
                Header Position:
                </label>
                <div className="flex space-x-4">
                <button
                    onClick={() => handleCustomizationChange("headerPosition", "top")}
                    className={`btn ${
                    customization.headerPosition === "top"
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    } text-white px-3 py-2 rounded hover:bg-blue-600`}
                >
                    Top
                </button>
                <button
                    onClick={() => handleCustomizationChange("headerPosition", "side")}
                    className={`btn ${
                        customization.headerPosition === "side"
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    } text-white px-3 py-2 rounded hover:bg-blue-600`}
                >
                    Side
                </button>
                </div>
                </div>

            <div className="mb-4 flex justify-start gap-10">
                <label className="shrink-0 block text-lg font-semibold mb-1">
                Image URL (optional):
                </label>
                <input
                type="text"
                value={customization.imageURL}
                onChange={(e) =>
                    handleCustomizationChange("imageURL", e.target.value)
                }
                className="w-full border border-gray-300 rounded p-2"
                />
            </div>

        </div>



        <div className="mb-8">
            <label className="block text-left text-lg font-semibold mb-1">
                    Name:
            </label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
            />
        </div>


        <div className="mb-8">
            <label className="block text-left text-lg font-semibold mb-1">
                    Professional Summary:
            </label>
            <input
                type="text"
                value={professionalSummary}
                onChange={(e) => setProffesionalSummary(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
            />
        </div>

        <div className="section mb-16">
            <h3 className="text-2xl text-left font-semibold mb-4">Job Experience</h3>
            <div className="experience-entries mb-4">
            {experienceEntries.map((entry, index) => (
                <div key={index} className="mb-4 pb-2 border-b-2">
                <label className="block text-left text-lg font-semibold mb-1">
                    Job Title:
                </label>
                <input
                    type="text"
                    value={entry.jobTitle}
                    onChange={(e) =>
                    handleExperienceChange(index, "jobTitle", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded p-2"
                />
                <label className="block text-left text-lg font-semibold mt-2 mb-1">
                    Company Name:
                </label>
                <input
                    type="text"
                    value={entry.companyName}
                    onChange={(e) =>
                    handleExperienceChange(index, "companyName", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded p-2"
                />
                </div>
            ))}
            <button
                onClick={addExperienceEntry}
                className="btn bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
            >
                Add Experience Entry
            </button>
            </div>

            <h3 className="text-2xl text-left font-semibold mb-4">Education</h3>
            <div className="experience-entries mb-4">
            {educationEntries.map((entry, index) => (
                <div key={index} className="mb-4 pb-2 border-b-2">
                <label className="block text-left text-lg font-semibold mb-1">
                    Institution:
                </label>
                <input
                    type="text"
                    value={entry.institution}
                    onChange={(e) =>
                    handleEducationChange(index, "institution", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded p-2"
                />
                <label className="block text-left text-lg font-semibold mt-2 mb-1">
                    Graduation Year:
                </label>
                <input
                    type="text"
                    value={entry.graduationYear}
                    onChange={(e) =>
                    handleEducationChange(index, "graduationYear", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded p-2"
                />
                </div>
            ))}
            <button
                onClick={addEducationEntry}
                className="btn bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
            >
                Add Education Entry
            </button>
            </div>


            <h3 className="text-xl text-left font-semibold mb-2">Skills</h3>
            <div className="text-left mb-2">List down skills separated by comma (,)</div>
            <div className="experience-entries mb-8">
            <div className="mb-4 pb-2 border-b-2">
                <input
                    type="text"
                    value={skills}
                    onChange={(e) =>
                        handleSkillsChange(e)
                    }
                    className="w-full border border-gray-300 rounded p-2"
                />
                </div>
            </div>



            <h3 className="text-2xl text-left font-semibold mb-4">Contact</h3>
            <div className="experience-entries mb-4">
            {Object.keys(contactDetails).map((entry, index) => (
                <div key={index} className="mb-4 pb-2 border-b-2">
                <label className="block text-left text-lg font-semibold mb-1">
                    {entry}:
                </label>
                <input
                    type="text"
                    value={contactDetails.entry}
                    onChange={(e) =>
                        setContactDetails({...contactDetails, [entry]: e.target.value})
                    }
                    className="w-full border border-gray-300 rounded p-2"
                />
                </div>
            ))}
            </div>

        </div>

        <div className="section mb-16">
            <h2 className="text-2xl text-left font-semibold mb-4">Template Customization</h2>
            <div className="customization-options">
            <div className="mb-4 gap-10 flex items-center">
                <label className="block text-lg font-semibold mb-1">
                Primary Color:
                </label>
                <select className="px-5 py-3 rounded-lg" 
                    value={customization.primaryColor}
                    onChange={(e) =>
                        handleCustomizationChange("primaryColor", e.target.value)
                    }
                >
                    <option value="purple">Purple</option>
                    <option value="yellow">Yellow</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="orange">Orange</option>
                </select>
            </div>
            
            <div className="flex gap-10 mb-4">
                <label className="block text-lg font-semibold mb-1">
                Font Size:
                </label>
                <div className="flex space-x-4">
                <button
                    onClick={() => handleCustomizationChange("fontSize", "sm")}
                    className={`btn ${
                    customization.fontSize === "sm"
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    } text-white px-3 py-1 rounded hover:bg-blue-600`}
                >
                    SM
                </button>
                <button
                    onClick={() => handleCustomizationChange("fontSize", "l")}
                    className={`btn ${
                    customization.fontSize === "l"
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    } text-white px-3 py-1 rounded hover:bg-blue-600`}
                >
                    L
                </button>
                <button
                    onClick={() => handleCustomizationChange("fontSize", "xl")}
                    className={`btn ${
                    customization.fontSize === "xl"
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    } text-white px-3 py-1 rounded hover:bg-blue-600`}
                >
                    XL
                </button>
                </div>
            </div>
            </div>

            <div className="mb-4 gap-10 flex items-center">
                <label className="block text-lg font-semibold mb-1">
                Font face:
                </label>
                <select className="px-5 py-3 rounded-lg" 
                    value={customization.fontFace}
                    onChange={(e) =>
                        handleCustomizationChange("fontFace", e.target.value)
                    }
                >
                    <option value="arial">Arial</option>
                    <option value="sans-serif">Sans Serif</option>
                    <option value="roboto">Roboto</option>
                </select>
            </div>
        </div>

        <button
            onClick={submitHandler}
            className="btn text-xl bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
        >
            Generate Portfolio
        </button>

    </div>
    );
}
