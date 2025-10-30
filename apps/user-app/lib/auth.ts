import { prisma } from '@repo/db';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from "bcrypt";
import { JWT } from 'next-auth/jwt';
import { AuthOptions, Session } from 'next-auth';

export const authOptions : AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials : {
                phone: {
                    label: "Phone number",
                    type: "text",
                    placeholder: "0000000000"
                },
                password : {
                    label : "Password",
                    type: "password"
                }
            },
            async authorize(credentials: { phone: string, password: string} | undefined ) {

                if (!credentials) {
                    return null;
                }

                const hashedPassword = await bcrypt.hash(credentials.password, 10)
                const existingUser = await prisma.user.findFirst({
                    where: {
                        number: credentials.phone
                    }
                });

                if (existingUser) {
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                    if (passwordValidation) {
                        return {
                            id: existingUser.id,
                            name: existingUser.name,
                            email: existingUser.number
                        }
                    }
                    return null;
                }

                try {
                    const user = await prisma.user.create({
                        data: {
                            number : credentials.phone,
                            password: hashedPassword
                        }
                    });

                    return {
                        id: user.id,
                        name: user.name,
                        email: user.number
                    }
                } catch (e) {
                    console.error(e)
                }

                return null;
            },
        })
    ],
    secret : process.env.JWT_SECRET || "secret",

    callbacks: {
        // fix the type
        async session({ token, session } : { token : JWT, session : Session}) {
            
            if (token.sub) {
                return {
                    ...session,
                    user: {
                        ...session.user,
                        id: token.sub,
                    },
                };
            }

            return session

            // if (token.sub) {
            //     session.user.id = token.sub
            // }
        }
    }
}