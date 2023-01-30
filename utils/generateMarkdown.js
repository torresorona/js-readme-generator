import { getLicensesNames } from "./getLicenses.js";
import { getLicenseLink } from "./getLicenses.js";

async function renderLicenseBadge(license, apikey) {
  const licensesNames = await getLicensesNames(apikey);
  if (licensesNames.includes(license)) {
    let badge = '';
    switch (license) {
      case licensesNames[0]:
        badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
        return badge;
      case licensesNames[1]:
        badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        return badge;
      case licensesNames[2]:
        badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
        return badge;
      case licensesNames[3]:
        badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
        return badge;
      case licensesNames[4]:
        badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
        return badge;
      case licensesNames[5]:
        badge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
        return badge;
      case licensesNames[6]:
        badge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
        return badge;
      case licensesNames[7]:
        badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
        return badge;
      case licensesNames[8]:
        badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        return badge;
      case licensesNames[9]:
        badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
        return badge;
      case licensesNames[10]:
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        return badge;
      case licensesNames[11]:
        badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        return badge;
      case licensesNames[12]:
        badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
        return badge;
      default:
        break;
    }
  } else {
    return "No license badge selected or found"
  }

}

export async function generateMarkdown(data, apikey) {
  const licenseBadge = await renderLicenseBadge(data.license, apikey);
  const licenseLink = await getLicenseLink(apikey, data.license);
  const githubURL = `https://github.com/${data.github}`;
  return `
  # ${data.project_name}

  ## Description
  ${data.description}

  ---

  ## Tables of Contents
  [Description](#description)

  [Table of Contents](#tablesofcontents)

  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contributing](#contributing)

  [Tests](#tests)

  [Questions](#questions)

  ---

  ## Installation
  ${data.install}

  ---

  ## Usage
  ${data.usage}

  ---

  ## License
  ${licenseBadge}

  [License Page](${licenseLink})

  ---

  ## Contributing
  ${data.contributions}

  ---

  ## Tests
  ${data.tests}

  ---

  ## Questions
  For any questions, please email us at: ${data.email} \n
  or find me in [Github](${githubURL})
`;
}