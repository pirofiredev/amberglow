a modern HN reader.

	- amberglow **v1**
		- **cronjob / basic tag fetching** 
			- first time on - fetches latest ...

		- **filters**
			- User selected predefined tag -> DB SELECT query -> all ID's are shown
			
		- **optimizations**
			- mobile devices
			- SEO
			
		- **overall** **mindset**
			- Used to not browse all HN posts, only posts that were published not longer than 3 months. If post is older then his tags and ID is being eliminated from DB. HN are massive and I don't 'have that much jina tokens.

---

- amberglow **v2**

	- **comments**
			- In **extended** it should fetch via kids and subkids with some middle main component and output as a components I've also already made.
			
	- **tag & AI auto placing**
		- On server side on my app some cron works, it checks every 3 minutes was post added on API and when added it pulls via `fetchSinglePost` title and URL domain which are being passed to https://www.fusejs.io/. Applies tag from predefined ones + synonyms to open fusejs eyes.
		- In tag filter AI generated button clicks by adding to existing tags `AND bool` SQL query.
		
	 - login system
		 - Used to comment, rate and soon react to posts and save it as "read soon".
		 - Implemented not on my infra, but on top of HN login system via hijacking GET queries for commenting and rating.
		 
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
