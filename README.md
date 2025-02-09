# HackerNews API Reader - README

## Project Description
This project is a simple web application that uses the HackerNews API to fetch and display top stories with additional details on a website. The app dynamically generates HTML elements, displaying titles, author information, publication time, and comment counts for each story retrieved from the API. The content is updated at a throttled interval to avoid overwhelming the server with requests.

## Key Features:
- **Top Stories**: Fetches the top stories from HackerNews using their API.
- **Story Details**: Displays detailed information about each story, including:
  - Title with a clickable link to the story.
  - Author of the story.
  - Time of publication (converted to a human-readable format).
  - Number of comments.
- **Throttling**: The app limits the frequency of requests to the API using a throttle function to avoid overloading the server.
- **Dynamic Content Generation**: The app dynamically creates HTML elements for each story using JavaScript.
  
## Technologies Used:
- **JavaScript (ES6+)**: The main programming language used to implement the application.
- **HTML/CSS**: Basic web technologies used for the structure and style of the page.
- **HackerNews API**: The source of all the stories displayed in the app.
- **Date/Time Handling**: The `Date` object in JavaScript is used to convert timestamps from the HackerNews API into readable date formats.
- **Throttle Function**: A utility function used to limit the frequency of API calls.

## File Structure:
```
/project-root
|-- /js
|   |-- timeConvert.js        # Helper functions for time conversion.
|   |-- throttle.js           # Throttle utility function to limit API calls.
|   |-- getStories.js         # Functions to fetch the top stories from the HackerNews API.
|   |-- main.js               # Main script to generate story divs and update the page.
|
|-- /index.html               # The main HTML file to display the top stories.
|-- /styles.css               # The styling file for the app (optional).
```

## How It Works:
1. **Fetching Data**: The `getTopStoriesWithDetails` function is used to fetch the top stories from HackerNews. It returns an array of stories, each containing relevant information such as the story's ID, title, URL, author, score, time of publication, and number of comments.
   
2. **Formatting Data**: The `convertTimestamp` function is used to format the timestamp from the API into a human-readable date format (e.g., "Sunday, January 1, 2025, 10:30:00 AM UTC").

3. **Displaying Stories**: Once the data is fetched, a loop iterates over the list of stories. For each story, a new `div` element is created, which contains:
   - An anchor (`<a>`) tag linking to the story's URL.
   - Author information.
   - Date of publication (formatted).
   - Comment count.
   
   The `div` elements are then appended to the body of the HTML document.

4. **Throttling**: The throttle function limits the frequency at which the `stories` function is called to avoid multiple rapid requests to the HackerNews API.

## Setting Up the Project:
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/hackernews-reader.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd hackernews-reader
   ```

3. Open the `index.html` file in your browser to view the application.

## Dependencies:
This project does not rely on any external libraries or frameworks. It uses plain JavaScript for functionality and basic HTML/CSS for layout and styling.

## Usage:
1. **Load the Website**: Open the `index.html` file in your browser. The page will automatically load the top stories from HackerNews.
   
2. **View Story Details**: Each story will be displayed with its title, author, publication date, and the number of comments. Clicking on the title will open the story's link in a new tab.

3. **Throttling**: Requests to the HackerNews API will be made at a controlled interval to avoid making too many requests in a short time.

## Example Output:

For each top story, the following details will be displayed:
- **Title**: "How I learned JavaScript"
- **Author**: "by JohnDoe"
- **Time**: "Monday, March 25, 2025, 12:30:00 PM UTC"
- **Comments**: "5 Comments"

## Future Improvements:
- **Styling**: Implement more complex and visually appealing styles using CSS or CSS frameworks.
- **Search Functionality**: Allow users to search for specific stories by title or author.
- **Error Handling**: Add error handling for failed API requests or when there is no network connection.

## License:
This project is open-source and available under the MIT License.

## Acknowledgements:
- **HackerNews API**: The API provides the data for the top stories and associated details.

---

Enjoy using the HackerNews Reader!
