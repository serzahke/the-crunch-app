import CredentialsProvider from "next-auth/providers/credentials";
var bcrypt = require('bcryptjs');
import User from "@app/models/user";
import connectMongoDB from "@app/libs/mongodb";

export const authOptions: any = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { email, password }: any = credentials;

                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email });

                    if (!user) {
                        return null;
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if (!passwordsMatch) {
                        return null;
                    }

                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                }
            },
        }),
    ],
    callbacks: {
        session: ({ session, token } : any) => ({
            ...session,
            user: {
              ...session.user,
              id: token.sub,
            },
          }),

        jwt: async ({ user, token, trigger, session }: any) => {
            if( trigger === "update") {
                return {...token, ...session.user}
            }
            return {...token, ...user}
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },
};