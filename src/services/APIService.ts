import axios, { AxiosResponse } from 'axios';
// @ts-ignore
import { API_TOKEN, API_URL } from 'react-native-dotenv';
import * as Types from './types';

const baseURL = API_URL;
const headers = {
  Authorization: `Bearer ${API_TOKEN}`,
};

const APIInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers,
});

class API {
  static getAPIConfiguration(): Promise<
    AxiosResponse<Types.configurationResponse>
  > {
    return APIInstance.get('configuration', {});
  }
}

export default API;
