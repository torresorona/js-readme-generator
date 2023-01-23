import { Octokit } from "octokit";
const octokit = new Octokit({ auth: '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' });

export async function getLicenses() {
  let licensesNames = [];

  try {
    const {data: licenses} = await octokit.request('GET /licenses', {});
    
    for await (const license of licenses) {
      licensesNames.push(license.name);
    }
  } catch (error) {
    if (error.response) {
      console.error(`Error: ${error.response.status}. Message: ${error.response.data.message}`) }
  }
  
  
  return licensesNames;
};
