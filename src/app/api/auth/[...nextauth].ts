import Spotify from "next-auth/providers/spotify";
// import Apple from "next-auth/providers/apple";
import NextAuth from "next-auth/next";

const AuhtOptions = {
    providers: [
        Spotify({
            clientId: process.env.SPOTIFY_CLIENT_ID as string,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
            // scope: "user-read-private user-read-email",
            // endpoints: {
            //     authorization: "/api/auth/spotify/callback",
            //     profile: "/api/auth/spotify/me",
            // },
        }),
    ]
}

export default NextAuth(AuhtOptions) 