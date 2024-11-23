// Select the form elements
var form = document.getElementById('resumeForm');
var generateResumeBtn = document.getElementById('generateResume');
var resumeContainer = document.getElementById('resumeContainer');
var formContainer = document.getElementById('formContainer');
var editResumeBtn = document.getElementById('editResume');
// Add event listener to the generate resume button
generateResumeBtn.addEventListener('click', function () {
    var _a;
    // Fetch the input values
    var name = document.getElementById('name').value;
    var position = document.getElementById('position').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var linkedin = document.getElementById('linkedin').value;
    var profilePicture = ((_a = document.getElementById('profilePicture').files) === null || _a === void 0 ? void 0 : _a[0]) || null;
    var sonOf = document.getElementById('sonOf').value;
    var dob = document.getElementById('dob').value;
    var nationality = document.getElementById('nationality').value;
    var languages = document.getElementById('languages').value;
    var hobbies = document.getElementById('hobbies').value;
    var objective = document.getElementById('objective').value;
    var experience = document.getElementById('experience').value.split(',');
    var education = document.getElementById('education').value.split(',');
    var skills = document.getElementById('skills').value.split(',');
    var certifications = document.getElementById('certifications').value.split(',');
    // Display resume
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayPosition').textContent = position;
    document.getElementById('displayPhone').textContent = phone;
    var displayEmail = document.getElementById('displayEmail');
    displayEmail.textContent = email;
    displayEmail.href = "mailto:".concat(email);
    document.getElementById('displayAddress').textContent = address;
    var displayLinkedIn = document.getElementById('displayLinkedIn');
    displayLinkedIn.href = linkedin;
    displayLinkedIn.textContent = linkedin;
    var displayProfilePicture = document.getElementById('displayProfilePicture');
    if (profilePicture) {
        displayProfilePicture.style.display = 'block';
        displayProfilePicture.src = URL.createObjectURL(profilePicture);
    }
    else {
        displayProfilePicture.style.display = 'none';
    }
    document.getElementById('displayObjective').textContent = objective;
    var displayExperience = document.getElementById('displayExperience');
    displayExperience.innerHTML = experience.map(function (exp) { return "<li>".concat(exp.trim(), "</li>"); }).join('');
    var displayEducation = document.getElementById('displayEducation');
    displayEducation.innerHTML = education.map(function (edu) { return "<li>".concat(edu.trim(), "</li>"); }).join('');
    // Dynamically generate skill progress bars
    var displaySkills = document.getElementById('displaySkills');
    displaySkills.innerHTML = skills
        .map(function (skill) {
        var _a = skill.split(':'), name = _a[0], percentage = _a[1];
        var skillName = name.trim();
        var skillPercentage = parseInt((percentage === null || percentage === void 0 ? void 0 : percentage.trim()) || '0');
        return "\n                <div class=\"skill\">\n                    <p>".concat(skillName, ": ").concat(skillPercentage, "%</p>\n                    <div class=\"progress-container\">\n                        <div class=\"progress-bar\" style=\"width: ").concat(skillPercentage, "%;\">\n                            ").concat(skillPercentage, "%\n                        </div>\n                    </div>\n                </div>\n            ");
    })
        .join('');
    var displayCertifications = document.getElementById('displayCertifications');
    displayCertifications.innerHTML = certifications.map(function (cert) { return "<p>".concat(cert.trim(), "</p>"); }).join('');
    document.getElementById('displaySonOf').textContent = sonOf;
    document.getElementById('displayDOB').textContent = dob;
    document.getElementById('displayNationality').textContent = nationality;
    document.getElementById('displayLanguages').textContent = languages;
    document.getElementById('displayHobbies').textContent = hobbies;
    // Show resume and hide form
    resumeContainer.style.display = 'block';
    formContainer.style.display = 'none';
});
// Edit resume button
editResumeBtn.addEventListener('click', function () {
    resumeContainer.style.display = 'none';
    formContainer.style.display = 'block';
});
