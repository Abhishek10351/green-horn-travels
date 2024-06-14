/** @type {import('next').NextConfig} */
const nextConfig = {
    // add dir for static files
    assetPrefix: 'public/',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;
