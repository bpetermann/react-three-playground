/** @type {import('next').NextConfig} */
const nextConfig = {};

if (process.env.NODE_ENV === 'development') {
  console.log(
    `-\x1b[32m ready\x1b[0m network on`,
    `http://${require('address').ip()}:3000`
  );
}

module.exports = nextConfig;
