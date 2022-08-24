## Assignment overview

For this assignment we'd like you to build a JavaScript single page application that supports searching for movie titles and saving favorites.

## API requirements

We've provided an API endpoint for you to test your implementation. It implements the following two API endpoints:

| Method   | Path        | Parameters                           | Example                                      |
|----------|-------------|--------------------------------------|----------------------------------------------|
| GET      | /search     | title (string)                       | /search?title=star%20wars                    |
| POST     | /favorites  | omdb_id (string), favorite (boolean) | /favorites?omdb_id=tt0038650&favorite=false  |

* The `/search` endpoint accepts a movie title parameter and returns results in JSON format. Please see http://www.omdbapi.com for a description of the result format. In addition to the format described on omdbapi.com, results will include an additional boolean `favorite` parameter. (Note that this API endpoint has a limitation of 1000 requests per day)

* The `/favorites` endpoint accepts an omdb id for a movie title and a boolean to set or unset the given title as a favorite. Make a POST request to this api to set/unset a favorite for a specific title.  

* You may implement your UI using any front-end JavaScript technology: E.g. React, Vue or even vanilla JavaScript.

* Your solution should be self-contained as a client-only implementation that does not require any additional server component.

* Note that in a real-world scenario we would probably have a concept of a list of favorites per unique user, but for the purposes of this exercise assume there is only a single list of favorites shared among all users.


## Design requirements

Please match the visual design of your solution as closely as possible to this mockup using HTML/CSS only. 

![Movie search UI mockup!](./assets/uimockup.png "Movie search UI mockup")

* Clicking on the heart icon should toggle the favorite status. Red indicates it is a favorite. White is not a favorite.
* The font should be `Montserrat` from Google Fonts
* You may use this SVG path as the 'mark favorite' icon:

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
      </svg>



## Evaluation criteria

When evaluating solutions, we'll be considering the following criteria:

* Is your code: correct, clear, concise and readable?  
* Have you implemented the API and single-page design according to the requirements outlined above?
* Have you handled error scenarios appropriately?

## Testing

In order to test your API solution we have provided a sample server api available at http://th-recruiting-moviesapi.herokuapp.com. Note that this server may already contain some stored favorites.

## Time limit

We believe your time is valuable! We designed this exercise to be an interesting challenge, yet not require an overwhelming amount of time. You should be able to complete this in under 4 hours. If you're still not 100% done after 4 hours, don't worry! Please send us your progress so far. We'd rather see a partial attempt than no attempt at all.

