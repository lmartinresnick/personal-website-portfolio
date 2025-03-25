// You can use a service like LinkPreview.net, OpenGraph.io, or implement your own
const API_KEY = '6e21df8981c3a1c0004ff7a5b1d34372'; // If using a service

export async function getLinkPreview(url) {
    try {
        // Option 1: Using LinkPreview.net
        const response = await fetch(`https://api.linkpreview.net/?key=${API_KEY}&q=${encodeURIComponent(url)}`);

        // Option 2: Using a custom backend endpoint
        // const response = await fetch(`/api/link-preview?url=${encodeURIComponent(url)}`);

        const data = await response.json();
        return {
            title: data.title,
            description: data.description,
            image: data.image,
            url: data.url
        };
    } catch (error) {
        console.error('Error fetching link preview:', error);
        return null;
    }
} 