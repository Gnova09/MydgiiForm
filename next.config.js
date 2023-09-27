/** @type {import('next').NextConfig} */
const nextConfig = {
    //ENVIROMENTS TO PRODUCTION
    env: {
        apiKey: `${process.env.apiKey}`,
        databaseURL: `${process.env.databaseURL}`,
        authDomain: `${process.env.authDomain}`,
        projectId: `${process.env.projectId}`,
        storageBucket: `${process.env.storageBucket}`,
        messagingSenderId: `${process.env.messagingSenderId}`,
        appId: `${process.env.appId}`,
        measurementId: `${process.env.measurementId}`
    }
}

module.exports = nextConfig
