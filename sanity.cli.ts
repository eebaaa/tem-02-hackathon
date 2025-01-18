/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({ api: { projectId, dataset } })
const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: '4fluvw84', // Replace with your actual project ID
  dataset: 'production',       // Replace with your dataset
  apiVersion: '2023-01-01',    // Use a suitable API version
  token: 'skTpcY197AOXvVmuf6vpkLk6sPRtr5Hbhwzu8SWy4rAB52xthaMpBofGPAWXFSJju6JDg2B57sid5cdhxb2zLNU2yToiJJuFXlu5MG69dFsqy2RcTUGfeQuy4aaj5ZqJal6CXbNEmgQ6FVRxbA4v9YwuhdMmVbhQws1nv0x6ZGNSjCcOel4M',  // Replace with your Sanity token if needed
  useCdn: false,               // Set to `true` for faster, cached responses
});

module.exports = client;
