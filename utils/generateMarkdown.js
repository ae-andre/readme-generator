// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![badge](https://img.shields.io/badge/license-${license}-green)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
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
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)

## Installation
${answers.install_instructions}
    
## Usage
${answers.usage_info}
    
## Contributing
${answers.contribu_guidelines}
    
## Tests
${answers.test_instructions}

## License
${renderLicenseSection(answers.license)}

## Questions
[${answers.git_username}](${`https://github.com/${answers.git_username}/`})

If you have any additional questions, please feel free to email me at ${answers.email_address}`;
}

module.exports = generateMarkdown;
