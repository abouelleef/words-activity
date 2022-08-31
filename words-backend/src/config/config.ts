const ACCESS_TOKEN_EXPIRES_IN = process.env.ACCESS_TOKEN_EXPIRES_IN!;
const REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN!;

const ACCESS_TOKEN_SECRET_KEY = process.env.ACCESS_TOKEN_SECRET_KEY!;
const REFRESH_TOKEN_SECRET_KEY = process.env.WEB_PUSH_EMAIL!;

export {
    ACCESS_TOKEN_SECRET_KEY,
    ACCESS_TOKEN_EXPIRES_IN,
    REFRESH_TOKEN_SECRET_KEY,
    REFRESH_TOKEN_EXPIRES_IN,
}