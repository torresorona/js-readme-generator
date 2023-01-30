// Import GitHub Octokit pacakage to enable retrival of licenses from GitHub API
import { Octokit } from "octokit";

// Returns an array of licenses including their name and URL link
export async function getLicenses(apiKey) {
  const octokit = new Octokit({ auth: apiKey});
  let licensesData = [];

  try {
    const { data: licenses } = await octokit.request('GET /licenses', {});

    for await (const license of licenses) {

      licensesData.push(
        {
          name: license.name,
          url: license.url
        }
      )
    }
  } catch (error) {
    if (error.response) {
      console.error(`Error: ${error.response.status}. Message: ${error.response.data.message}`)
    }
  }


  return licensesData;
};

// Called by index.js Inquirer prompt to display Licenses names for choice selection
export async function getLicensesNames(apiKey) {
    const licenses = await getLicenses(apiKey);
    let licensesNames = [];
    licenses.forEach(license => {
      licensesNames.push(license.name);
    });
    return licensesNames;
  }
  
export async function getLicenseLink(apiKey, licenseName) {
  const licenses = await getLicenses(apiKey);
  let licenseLink = licenses.find(license => license.name === licenseName).url;
  return licenseLink;
}
