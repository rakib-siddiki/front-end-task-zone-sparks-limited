/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.easyfrontend.com'
            }
        ]
    }
};

export default nextConfig;
