/** @type {import('next').NextConfig} */
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "images.pexels.com" }],
        domains: ['images.pexels.com']
    },
};

export default nextConfig;