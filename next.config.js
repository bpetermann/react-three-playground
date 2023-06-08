/** @type {import('next').NextConfig} */
const nextConfig = {};

if (process.env.NODE_ENV === 'development') {
  console.log('- started local on', `http://${require('address').ip()}:3000`);
}

module.exports = nextConfig;
