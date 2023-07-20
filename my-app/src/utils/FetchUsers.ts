export default class FetchUsers {

	static pages: any = {};
	static API_URL: string = "https://api.github.com/users";
	static PER_PAGE_DEFAULT: number = 2;
	static SINCE_DEFAULT: number = 0;

	static async getUsersOfPage(page: number): Promise<User[]> {
		const hasPageCached = Object.hasOwn(this.pages, page);
		const hasPreviousPage: Array<User> = this.pages[page -1]

		if(!hasPageCached && !hasPreviousPage) {
			this.pages[page] = await this.fetchMoreUsers();
		} else if(!hasPageCached && hasPreviousPage) {
			this.pages[page] = await this.fetchMoreUsers(hasPreviousPage.at(-1)?.id)
		}
		
		return this.pages[page];
	}

	static async fetchMoreUsers(
		since: number = this.SINCE_DEFAULT,
		per_page: number = this.PER_PAGE_DEFAULT
	): Promise<User[]> {
		return await fetch(`${this.API_URL}?per_page=${per_page}&since=${since}`).then(res => res.json());
	}
}