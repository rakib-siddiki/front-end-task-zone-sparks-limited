/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.easyfrontend.com'
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co'
            }
        ]
    }
};

export default nextConfig;
