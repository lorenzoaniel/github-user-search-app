import { UserType } from "@/interfaces/UserType";
import { create } from "zustand";

type UserStore = {
	user: UserType | null;
	loading: boolean;
	error: string | null;
	fetchGithubUser: (username: string) => Promise<void>;
	setUser: (user: UserType) => void;
};
/* 
location?: string;
  blog?: string;
  twitter_username?: string;
  company?: string | null; */

const testbio =
	"TEST TESTTESTTEST TEST TESTTESTTEST TEST TESTTESTTEST TEST TESTTESTTEST TEST TESTTESTTEST TEST TESTTESTTEST TEST TESTTESTTEST TEST TESTTESTTEST TEST TESTTESTTEST TEST TESTTESTTEST ";

export const useUserStore = create<UserStore>((set, get) => ({
	user: {
		login: "ocotocat",
		name: "The Octocat",
		created_at: "2011-01-25T18:44:36Z",
		avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
		bio: testbio,
		public_repos: 8,
		followers: 3938,
		following: 9,
		location: "San Francisco",
		blog: "https://github.blog",
		twitter_username: null,
		company: "@github",
	},
	loading: false,
	error: null,
	setUser: (user: UserType) => {
		set({ user });
	},
	fetchGithubUser: async (username: string) => {
		//reset errors and set loading to true
		set({ loading: true, error: null });

		try {
			const res = await fetch(`https://api.github.com/users/${username}`);

			// if (res.status !== 200) {
			// 	throw new Error("null");
			// }

			const userData = await res.json();
			set({ user: userData, loading: false });
		} catch (error: any) {
			set({ error: error.message, loading: false });
		}
	},
}));
