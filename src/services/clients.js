import { GraphQLClient } from 'graphql-request';
import axios from 'axios';
import { API_BASE_URL } from '../constants';

export const graphqlClient = new GraphQLClient();

export const restClient = axios.create({
  baseURL: API_BASE_URL,
});
