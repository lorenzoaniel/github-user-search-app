import { StoreApi, UseBoundStore, create } from "zustand";

type User = {
	name: string;
	email: string;
	// etc.
};

type UserStore = {
	user: User | null;
	loading: boolean;
	error: string | null;
	fetchGithubUser: (username: string) => Promise<void>;
};

export const useUserStore = create<UserStore>((set, get) => ({
	user: null,
	loading: false,
	error: null,
	fetchGithubUser: async (username: string) => {
		//reset errors and set loading to true
		set({ loading: true, error: null });

		try {
			const res = await fetch(`https://api.github.com/users/${username}`);

			if (res.status !== 200) {
				throw new Error(`No results`);
			}

			const userData = await res.json();
			set({ user: userData, loading: false });
		} catch (error: any) {
			set({ error: error.message, loading: false });
		}
	},
}));
