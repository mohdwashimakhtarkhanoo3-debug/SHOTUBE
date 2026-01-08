const apiKey = 'YAHAN_API_KEY_DALO'; // YouTube Data API key

const allowedChannels = {
    "Shoaib Gaming 0.2": "UCxxxxxxx",   // Replace with actual channel ID
    "Techno Gamerz": "UCxxxxxxx",       // Replace with actual channel ID
    "Anshu Bisht": "UCxxxxxxx"          // Replace with actual channel ID
};

async function searchChannel() {
    const name = document.getElementById('channelName').value.trim();
    const channelId = allowedChannels[name];

    if(!channelId) {
        document.getElementById('channelInfo').innerHTML = `<p style="color:red;">Channel not available!</p>`;
        return;
    }

    const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`);
    const data = await response.json();
    const channel = data.items[0];

    document.getElementById('channelInfo').innerHTML = `
        <h2>${channel.snippet.title}</h2>
        <img src="${channel.snippet.thumbnails.medium.url}" alt="${channel.snippet.title}">
        <p>${channel.snippet.description}</p>
        <p>Total Subscribers: ${channel.statistics.subscriberCount}</p>
        <p>Total Videos: ${channel.statistics.videoCount}</p>
        <p>Total Views: ${channel.statistics.viewCount}</p>
    `;
}