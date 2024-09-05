import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

export const authOptions = {
	providers: [
		GithubProvider({
			clientId: 'Ov23lirxsvurZznoe3FL',
			clientSecret: '174f1ebe0b0f11064eb546a89d991619a4a4b7cd',
		}),

		CredentialsProvider({
			//1. 로그인 페이지 폼 자동 생성해주는 코드
			name: 'credentials',
			credentials: {
				email: { label: 'email', type: 'text' },
				password: { label: 'password', type: 'password' },
				// 인풋 추가 가능, 이메일을 아이디로
			},

			//2. 로그인 요청 시 실행되는 코드
			// 직접 DB에서 아이디, 비번 비교하고
			// 아이디, 비번 맞으면 return 결과, 틀리면 return null 해야 함
			async authorize(credentials) {
				let db = (await connectDB).db('forum');
				let user = await db.collection('user_cred').findOne({ email: credentials.email });
				if (!user) {
					console.log('해당 이메일 없음');
					return null;
				}
				const pwcheck = await bcrypt.compare(credentials.password, user.password);
				if (!pwcheck) {
					console.log('비번 틀림');
					return null;
				}
				return user;
			},
		}),
	],

	//3. jwt 써놔야 잘됨. + jwt 만료일 설정
	session: {
		strategy: 'jwt',
		maxAge: 12 * 60 * 60, //1일
	},

	callbacks: {
		//4. jwt 만들 때 실행되는 코드
		// user 변수는 DB의 유저 정보 담겨있고, token.user에 저장하면 jwt에 들어간다.
		jwt: async ({ token, user }) => {
			if (user) {
				token.user = {};
				token.user.name = user.name;
				token.user.email = user.email;
				// 유저 역할 추가 가능
			}
			return token;
		},
		//5. 유저 세션이 조회될 때 마다 실행되는 코드
		session: async ({ session, token }) => {
			session.user = token.user; //토큰에 있는 모든 정보를 보여줌
			return session;
		},
	},

	adapter: MongoDBAdapter(connectDB),
	secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions); 