# 02/13:
* Documentation: MVP List
* Documentation: Database Schema
* Documentation: Frontend Routes

# 02/14:
* Documentation: User Stories
* Documentation: API Routes
* Models: Users
* Models: Yarn Weights
* Models: Swap Targets
* Models: Follows
* Models: Scraps
* Models: Comments
* Models: Likes

# 02/15:
* Seed: Users
* Seed: Yarn Weights
* Seed: Swap Targets
* Seed: Scraps
* Navbar: Top and bottom styling, placeholder links
* Homepage: Carousel
* Scraps: READ API, route, store
* Scraps: ScrapCard render on homepage
* Scraps: POST API, route, store
* AWS config
* Scraps: Post Form complete with error handling, redirect to new Scrap page
* Scraps: View Page with dynamic data, rendering, Link to user pages

# 02/16:
* UserView: Render of core user data
* ScrapsView: Conditional rendering of edit/delete buttons for owned scraps
* Scraps: EDIT API, route, store
* Scraps: EDIT form complete with error handling, redirect to edited Scrap page
* Favicon
### Post-Stand Up:
* Scraps: DELETE API, route, store
* Scraps: DELETE form complete with "are you sure" and "confirmation" pages, redirect
* Scraps: EDIT and CREATE forms have cancel buttons with redirects
* Scraps: Fixed issue where logged out users ScrapView render was bugging out
* Log In: Styling
* Log In: Demo User
* Log In: Error Handling
* Sign Up: Styling
* Sign Up: Error Handling
* Reconfigured image URLs with AWS S3 links for Heroku deploy
* Initial Heroku deploy
* User: Render user's scraps as clickable cards
* UserEdit: Form render
* UserEdit: Form routes and functionality
* UserEdit: API, route, store
* DB Model for User updated to include default profile pictures, default bios
* Fix Heroku deploy (matching routes)

# 02/17:
* Seed: Comments
* Seed: DB model upgrade
* Comments: API routes
* Comments: Store and reducer
* Comments: CREATE function and styling
* Comments: READ function and styling
* Comments: EDIT function and styling
* Comments: DELETE function and styling (but with an error message)
* Seed: Likes
* Likes: API routes
* Likes: Store and reducer
* Likes: Buttons work (but need dynamic rendering)
* Likes: Dynamic rendering complete, store refactor

# 02/18:
* Heroku: Daily Deploy
* Update seed data with friends' submissions
* User Page: If no Scraps, will display so
* Likes: Fix like icon animation
* Likes: Render user's likes in their profile page
* Search: Search Form and results page
* 404 pages for Users and Scraps
* Search form
* Modified allergen box in ScrapsPost and ScrapsEdit to be more explicit about search function
* Heroku: Daily Deploy

# 02/19:
* Scrap: Update DB model and seed to include color field
* Scrap: ScrapsPostForm includes color fields
* 404 Page: reconfigured display for non-existent ScrapView
* ScrapView: Updated render to include colors selected
* Scrap: ScrapsEditForm includes color fields (also pre-filled)
* Scrap: SearchForm includes color fields
* CSS: ScrapsCreate background img tiling fix
* BugFix: Second+ edit on comment now populates automatically

# 02/21:
* User Edit: BugFix where editing profile in one page render didn't auto-populate fields correctly
* BackgroundImage: reconfigured for all screen sizes
* Search: Changed icons for allergen buttons
* User View: BugFix for page height
* User View: Added another class for longer list of Scraps (grid view)
* User Seed: Added Kate's data
* User Seed: Added Melanie's data
* Username no longer than 24 characters
* Default profile pics
* CSS for no-likes in user page
* Added keys to ScrapView colors
* Comments: Error validation and display for empty comments
* Like button: Signed out users can no longer click the like button and trigger animation
* Search: First render displays all Scraps in reverse chronological order
* Search: Search params return Scraps in reverse chronological order
* Search: Clarified that looking for ANY of these colors
* Search: Submit now works with enter key
* Colors: Changed Natural to Undyed/Cream, changed Multicolored to Brown
* Seed: Updated seed for Scraps with new color schema
* Follows: API routes and store
* Follows: Seed
* Follows: Users can follow and unfollow other users, complete with CSS
* ScrapsEdit: Form now just says "Upload an image for your Scrap"

# 02/22:
* ScrapsPost: Form now just says "Upload an image for your Scrap"
* Follows: Following/unfollowing a user now dynamically renders their follow counts
* Follows: User can now see follows and followers in other user pages
* Follows: Home page now displays recent scraps from users sessionUser follows


* Scrap Cards: Image width needs adjustment
* Like Icon: For Scraps with longer titles, styling is a bit wonky
