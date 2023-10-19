/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: process.env.NODE_ENV === "development" ? undefined : "/rest-countries-api",
}

module.exports = nextConfig