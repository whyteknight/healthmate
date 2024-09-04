/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoredBuildErrors: true,
         },
        eslint: {
        ignoredDuringBuilds: true,
        }
};

export default nextConfig;
