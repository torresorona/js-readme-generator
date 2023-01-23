import { Octokit } from "octokit";

export async function getLicenses(apikey) {
  const octokit = new Octokit({ auth: apikey });
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
