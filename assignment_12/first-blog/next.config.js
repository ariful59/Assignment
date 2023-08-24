/** @type {import('next').NextConfig} */
const nextConfig = {
//     reactStrictMode: false,  //by default it is reactStrictMode is true,
//                             // If you want to disable it then you have to make it false.
//     basePath: '/newProject',
//     env:{
//         API_SECRET_KEY : 'key@123'
//     },
//     distDir: 'newBuild'
    env:{
        API_BASE_URL : "https://basic-blog.teamrabbil.com/api/"
    }
}


module.exports = nextConfig
