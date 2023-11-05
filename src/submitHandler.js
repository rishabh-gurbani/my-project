const submitFormHandler = async (name, 
    professionalSummary, 
    experience, 
    education, 
    skills, 
    contact, 
    customization) => {

        console.log(customization);

        const headers = {
            'Content-type': 'application/json',
        };

        const params = {
            name,
            templateSelection: customization.selectedTemplate,
            headerPosition: customization.headerPosition,
            includePhoto: customization.imageURL,
            professionalSummary,
            experienceDetails: experience,
            educationDetails: education,
            skillsList: skills,
            contactDetails: contact,
            primaryColor: customization.primaryColor,
            fontSelection: customization.fontFace,
            fontSize: customization.fontSize,
            responsive: 'yes',
        }

        console.log(JSON.stringify(params));


        try{
            const response = await fetch(`https://aigenerator-8kh4.onrender.com/generate-portfolio`,
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(params),
                })
            const data = await response.json()
            return data.completion;
        } catch (e){
            console.log(e)
        }

}

export default submitFormHandler
