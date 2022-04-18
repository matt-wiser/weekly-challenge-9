function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`; 
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return   '* [License](#license)';
  } else {
    return '';
  }
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return   `## License 
  This project is licensed under the ${license} license. All terms apply.
    `;
  } else {
    return '';
  }
}

function renderContributionLink(contribution) {
  if (contribution !== '') {
    return   '* [Contributing](#contributing)';
  } else {
    return '';
  }
}

function renderContributionSection(contribution) {
  if (contribution !== '') {
    return `## Contributing
  ${contribution}
    `;
  } else {
    return '';
  }
}

function renderTestingLink(testing) {
  if (testing !== '') {
    return   '* [Tests](#tests)';
  } else {
    return '';
  }
}

function renderTestingSection(testing) {
  if (testing !== '') {
    return `## Tests
  ${testing}
    `;
  } else {
    return '';
  }
}

function generateMarkdown(data) {
  const {title, description, install, usage, contribution, testing, license, email, github} = data;
  return   `
  # ${title}
  ${renderLicenseBadge(license)}

  ## Table of Contents

  * [Description](#description)

  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicenseLink(license)}

  ${renderContributionLink(contribution)}

  ${renderTestingLink(testing)}

  * [Questions](#questions)

  ## Description
  ${description}
  ## Installation
  ${install}
  ## Usage
  ${usage}

  ${renderLicenseSection(license)}

  ${renderContributionSection(contribution)}

  ${renderTestingSection(testing)}

  ## Questions
  If you have any further questions, please email me via email at [${email}](mailto:${email}).

  My GitHub profile can be found [here](https://github.com/${github})
  `;

}

module.exports = {renderLicenseBadge, renderLicenseLink, renderLicenseLink, generateMarkdown};
