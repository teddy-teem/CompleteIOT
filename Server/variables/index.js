const appPort = process.env.APP_PORT;
const ddbEndpoint = process.env.DYNAMO_ENDPOINT;
const awsRegion = process.env.AWS_REGION;
const appHost = process.env.APP_HOST || "localhost";
const env = process.env.APP_ENV;
const blogUserTable = process.env.BLOG_USER_TABLE;
const blogUserAuthTable = process.env.BLOG_USER_AUTH_TABLE;
const blogUserService = process.env.BLOG_USER_SERVICE;
const refreshToken = process.env.REFRESH_TOKEN_SECRET;

const refreshTokens = [];
const variables = {
  appPort,
  ddbEndpoint,
  awsRegion,
  appHost,
  env,
  blogUserTable,
  blogUserAuthTable,
  blogUserService,
  refreshToken,
  refreshTokens
};

module.exports = variables;
