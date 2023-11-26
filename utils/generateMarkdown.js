// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![badge](https://img.shields.io/badge/license-${license}-green)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "apache") {
  return `https://opensource.org/license/apache-2-0/`
} else if (license === "MIT") {
  return `https://opensource.org/license/mit/`
} else if (license === "MPL") {
  return `https://opensource.org/license/mpl-2-0/`
} else if (license === "") {
  return ""
}}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
${renderLicenseBadge(answers.license)}
${renderLicenseLink(answers.license)}

## Description
${answers.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage Information](#usage-information)
3. [Contribution Guidelines](#contribution-guidelines)
4. [Test Instructions](#test-instructions)
5. [License](#license)
6. [Git Username](#git-username)
7. [Email Address](#email-address)

## Installation
${answers.install_instructions}
    
## Usage Information
${answers.usage_info}
    
## Contribution Guidelines
${answers.contribu_guidelines}
    
## Test Instructions
${answers.test_instructions}

## License
${renderLicenseSection(answers.license)}

## Git Username
${answers.git_username}

## Email Address
${answers.email_address}`;
}

module.exports = generateMarkdown;
