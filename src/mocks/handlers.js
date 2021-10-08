import { rest, graphql } from 'msw';
import { API_BASE_URL } from '../constants';
import urljoin from 'url-join';

const buildPath = (path) => urljoin(API_BASE_URL, path);

const data = [];

let count = 0;

const restHandlers = [
  rest.get(buildPath('/data'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
  rest.post(buildPath('/data'), (req, res, ctx) => {
    // if (count) return res(ctx.delay(1000), ctx.status(500));
    data.push(req.body.data);
    // count++;
    return res(ctx.delay(1000), ctx.status(200));
  }),
];

const graphqlHandlers = [
  graphql.mutation('Login', null),
  graphql.query('GetUserInfo', null),
];

export const handlers = [...restHandlers, ...graphqlHandlers];
