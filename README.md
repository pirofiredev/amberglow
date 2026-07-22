### Modern HN reader.

- amberglow **v1**
	- ~~**cronjob / basic tag fetching**~~
	    
	- **UI filters**
		- User selected predefined tag -> DB SELECT query -> all ID's are shown
			
		- **optimizations**
			- mobile devices
			- SEO
			
		- **overall targeted posts**
			- Used to not browse all HN posts, only posts that were published not longer than 3 months. If post is older then his tags and ID is being eliminated from DB. HN are massive and I don't 'have that much jina tokens.

---

- amberglow **v2**

	- **replies to comments**
		- In **extended** it should fetch via subkids of kids.
		
		- **AI detection**
			- Planned to apply GPTZero
		
	 - login system
		 - Used to comment, rate, react to posts and save it as "read soon".
		 - Implemented not on amberglow infrastructure, but on top of HN login system via hijacking GET queries for commenting and rating.
		 
	- add-ons
		- Header
			- Filters menu
				- Tag search possibility
				- Server-side tag auto adding and refreshing
			
		- Expanded
			- post save button
			- auth
			- commenting
			- working reactions under expanded & comments
