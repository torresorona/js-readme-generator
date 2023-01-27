import { getLicenses } from "./getLicenses.js";

const apikey = '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';
const licenses = await getLicenses(apikey);

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (licenses.includes(license)) {
    let badge = '';
    switch (license) {
      case licenses[0]:
        badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
        return badge;
      case license === licenses[1]:
        badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        return badge;
      case license === licenses[2]:
        badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
        return badge;
      case license === licenses[3]:
        badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
        return badge;
      case license === licenses[4]:
        badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
        return badge;
      case license === licenses[5]:
        badge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
        return badge;
      case license === licenses[6]:
        badge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
        return badge;
      case license === licenses[7]:
        badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
        return badge;
      case license === licenses[8]:
        badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        return badge;
      case license === licenses[9]:
        badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
        return badge;
      case license === licenses[10]:
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        return badge;
      case license === licenses[11]:
        badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        return badge;
      case license === licenses[12]:
        badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
        return badge;
      default:
        break;
    }
  } else {
    return ""
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}


// TODO: Create a function to generate markdown for README
export function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license)
  return `
  # ${data.project_name}

  ---

  ## Description
  ${data.description}


  ## License
  ${licenseBadge}
`;
}

const sampleData = {
  project_name : 'README Generator',
  description : `readme generator to generate quality readme files for your project`,
  license : 'GNU Affero General Public License v3.0'
}

generateMarkdown(sampleData);