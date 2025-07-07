/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'admin.deshura.com',
                port: '', // Leave this empty unless you're using a specific port
                pathname: '/**', // Adjust the pathname based on the structure of your image URLs
            },
            {
                protocol: 'https',
                hostname: 'leatheradmin.mindskills.app',
                port: '', // Leave this empty unless you're using a specific port
                pathname: '/**', // Adjust the pathname based on the structure of your image URLs
            },
        ],
    },
};

export default nextConfig;