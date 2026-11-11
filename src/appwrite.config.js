import { Client} from 'appwrite';
const client = new Client();
client.setEndpoint('https://nyc.cloud.appwrite.io/v1').setProject(process.env.REACT_APP_PROJECT_ID);
export default client;
