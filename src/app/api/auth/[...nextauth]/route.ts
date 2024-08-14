import Spotify from "next-auth/providers/spotify";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
// import Apple from "next-auth/providers/apple";
import NextAuth from "next-auth/next";
import Apple from "next-auth/providers/apple";

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
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID as string,
      clientSecret: process.env.APPLE_SECRET as string,
    }),
  ],
};

export default NextAuth(AuhtOptions) 