// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "None") {
        return "";
    }
    return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case "Apache":
            return `[Apache](https://www.apache.org/licenses/LICENSE-2.0.txt)`;
        case "GNU AGPLv3":
            return `[GNU AGPLv3](https://www.gnu.org/licenses/agpl-3.0-standalone.html)`;
        case "GNU GPLv3":
            return `[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0-standalone.html)`;
        case "GNU LGPLv3":
            return `[GNU LGPLv3](https://www.gnu.org/licenses/lgpl-3.0-standalone.html)`;
        case "MIT":
            return `[MIT](https://spdx.org/licenses/MIT.html)`;
        case "Mozilla":
            return `[Mozilla](https://www.mozilla.org/en-US/MPL/2.0/)`;
        case "None":
            return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        return "";
    }
    return `This project is covered by the ${renderLicenseLink(license)} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    //console.log(data);
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  # Description
  ${data.description}

  # Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # License
  ${renderLicenseSection(data.license)}

  # Contributing
  ${data.contributing}

  # Tests
  ${data.tests}

  # Questions
  ${data.questions} [Email](mailto:${data.email}), [GitHub](https://github.com/${data.username})
`;
};

module.exports = generateMarkdown;