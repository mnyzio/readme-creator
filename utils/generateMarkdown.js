// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return (license !== 'None') ? `[![License](https://img.shields.io/badge/License-${license.split(' ').join('_').split('-').join('--')}-green)]` : '';
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return (license !== 'None') ? `(#license)` : '';
}

// Function that checks whether or not user provided any tests
function renderTestContent(test) {
  return (test) ? 
  `## Tests 
${test}`
  : "";
}

// Function that creates linkt to test section
function renderTestLink(test) {
  return (test) ? `- [Tests](#tests)` : "";
}

// Function that checks whether or not user provided any tests
function renderFeaturesContent(feature) {
  return (feature) ? 
  `## Features
${feature}` 
  : "";
}

// Function that creates linkt to test section
function renderFeaturesLink(feature) {
  return (feature) ? `- [Features](#features)` : "";
}

// Function to generate markdown for README
function generateMarkdown(data) {

  const licenseBadge = renderLicenseBadge(data.licenseType);
  const licenseLink = renderLicenseLink(data.licenseType);
  const testsContent = renderTestContent(data.test);
  const testsLink = renderTestLink(data.test);
  const featuresContent = renderFeaturesContent(data.features);
  const featuresLink = renderFeaturesLink(data.features);

  
  return `# ${data.title}
${licenseBadge}${licenseLink}
## Description
${data.motivation}
${data.purpose}
${data.solve}
${data.learn}
${data.standOut}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)
- [Questions](#questions)
${testsLink}
${featuresLink}
## Installation
${data.instal}
## Usage
${data.usage}
## Contributors
${data.contributions}
## License:
#### ${data.licenseType}
## Questions
#### GitHub
[www.github.com/${data.gitHub}](www.github.com/${data.gitHub})
#### e-mail
[${data.email}](${data.email})
${testsContent}
${featuresContent}
`
}

module.exports = generateMarkdown;

