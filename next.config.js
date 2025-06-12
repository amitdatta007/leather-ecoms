module.exports = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'leather.softnestbd.com',
                port: '', // Leave this empty unless you're using a specific port
                pathname: '/**', // Adjust the pathname based on the structure of your image URLs
            },
            {
                protocol: 'https',
                hostname: 'leather.softnestbd.com',
                port: '', // Leave this empty unless you're using a specific port
                pathname: '/**', // Adjust the pathname based on the structure of your image URLs
            },
        ],
    },
}