import { convertTimestamp } from './timeConvert.js'
import { throttle } from './throttle.js';
import { getTopStoriesWithDetails } from './getStories.js'

// Main func to generate the divs of the news
export async function stories() {
  // Fetching top stories details
  const topStories = await getTopStoriesWithDetails();
  // console.log('Top Stories:', topStories);

  // Ranging over the object containing our slice of stories
  for (let i = 0; i < topStories.length; i++) {
      let newDiv = document.createElement('div');
      newDiv.setAttribute('data-story', topStories[i].id);

      let title = document.createElement('a');
      title.textContent = topStories[i].title;
      title.href = topStories[i].url;
      newDiv.appendChild(title);

      const date = new Date((topStories[i].time + 3600) * 1000)
      let details = [
          { label: 'by', value: topStories[i].by },
          // { label: 'Score', value: topStories[i].score },
          { label: '', value: topStories[i].text },
          { label: '', value: date.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'UTC',
            timeZoneName: 'short'
        }) },
          { label: 'Comments', value: topStories[i].descendants },
      ];

      // Creating an <a> HTML element for each details
      details.forEach(detail => {
          let detailEl = document.createElement('a');
          detailEl.textContent = `${detail.label} ${detail.value}`;
          newDiv.appendChild(detailEl);
      });

      // Appending the created div to the HTML body
      document.body.appendChild(newDiv);
  }
  // console.log(document.)
}

throttle(stories(), 300);

