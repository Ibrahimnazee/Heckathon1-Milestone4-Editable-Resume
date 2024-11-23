// Select the form elements
const form = document.getElementById('resumeForm') as HTMLFormElement;
const generateResumeBtn = document.getElementById('generateResume') as HTMLButtonElement;
const resumeContainer = document.getElementById('resumeContainer') as HTMLDivElement;
const formContainer = document.getElementById('formContainer') as HTMLDivElement;
const editResumeBtn = document.getElementById('editResume') as HTMLButtonElement;

// Add event listener to the generate resume button
generateResumeBtn.addEventListener('click', () => {
    // Fetch the input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const position = (document.getElementById('position') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const profilePicture = (document.getElementById('profilePicture') as HTMLInputElement).files?.[0] || null;
    const sonOf = (document.getElementById('sonOf') as HTMLInputElement).value;
    const dob = (document.getElementById('dob') as HTMLInputElement).value;
    const nationality = (document.getElementById('nationality') as HTMLInputElement).value;
    const languages = (document.getElementById('languages') as HTMLTextAreaElement).value;
    const hobbies = (document.getElementById('hobbies') as HTMLTextAreaElement).value;
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value.split(',');
    const education = (document.getElementById('education') as HTMLTextAreaElement).value.split(',');
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.split(',');
    const certifications = (document.getElementById('certifications') as HTMLTextAreaElement).value.split(',');

    // Display resume
    (document.getElementById('displayName') as HTMLHeadingElement).textContent = name;
    (document.getElementById('displayPosition') as HTMLParagraphElement).textContent = position;
    (document.getElementById('displayPhone') as HTMLParagraphElement).textContent = phone;
    const displayEmail = document.getElementById('displayEmail') as HTMLAnchorElement;
    displayEmail.textContent = email;
    displayEmail.href = `mailto:${email}`;
    (document.getElementById('displayAddress') as HTMLParagraphElement).textContent = address;
    const displayLinkedIn = document.getElementById('displayLinkedIn') as HTMLAnchorElement;
    displayLinkedIn.href = linkedin;
    displayLinkedIn.textContent = linkedin;

    const displayProfilePicture = document.getElementById('displayProfilePicture') as HTMLImageElement;
    if (profilePicture) {
        displayProfilePicture.style.display = 'block';
        displayProfilePicture.src = URL.createObjectURL(profilePicture);
    } else {
        displayProfilePicture.style.display = 'none';
    }

    (document.getElementById('displayObjective') as HTMLParagraphElement).textContent = objective;
    const displayExperience = document.getElementById('displayExperience') as HTMLUListElement;
    displayExperience.innerHTML = experience.map(exp => `<li>${exp.trim()}</li>`).join('');
    const displayEducation = document.getElementById('displayEducation') as HTMLUListElement;
    displayEducation.innerHTML = education.map(edu => `<li>${edu.trim()}</li>`).join('');

    // Dynamically generate skill progress bars
    const displaySkills = document.getElementById('displaySkills') as HTMLDivElement;
    displaySkills.innerHTML = skills
        .map(skill => {
            const [name, percentage] = skill.split(':');
            const skillName = name.trim();
            const skillPercentage = parseInt(percentage?.trim() || '0');
            return `
                <div class="skill">
                    <p>${skillName}: ${skillPercentage}%</p>
                    <div class="progress-container">
                        <div class="progress-bar" style="width: ${skillPercentage}%;">
                            ${skillPercentage}%
                        </div>
                    </div>
                </div>
            `;
        })
        .join('');

    const displayCertifications = document.getElementById('displayCertifications') as HTMLDivElement;
    displayCertifications.innerHTML = certifications.map(cert => `<p>${cert.trim()}</p>`).join('');

    (document.getElementById('displaySonOf') as HTMLParagraphElement).textContent = sonOf;
    (document.getElementById('displayDOB') as HTMLParagraphElement).textContent = dob;
    (document.getElementById('displayNationality') as HTMLParagraphElement).textContent = nationality;
    (document.getElementById('displayLanguages') as HTMLParagraphElement).textContent = languages;
    (document.getElementById('displayHobbies') as HTMLParagraphElement).textContent = hobbies;

    // Show resume and hide form
    resumeContainer.style.display = 'block';
    formContainer.style.display = 'none';
});

// Edit resume button
editResumeBtn.addEventListener('click', () => {
    resumeContainer.style.display = 'none';
    formContainer.style.display = 'block';
});
