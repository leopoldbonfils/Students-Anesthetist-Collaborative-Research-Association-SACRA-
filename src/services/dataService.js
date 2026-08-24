import researchData from '../data/researchData.json';
import eventsData from '../data/eventsData.json';
import blogData from '../data/blogData.json';

const API_BASE_URL = 'http://localhost:5000/api';

const fetchWithFallback = async (endpoint, mockData) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`API returned status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn(`API request to ${endpoint} failed (${error.message}). Falling back to local mock data.`);
    return mockData;
  }
};

export const dataService = {
  async getStudies() {
    return fetchWithFallback('/research?type=study', researchData.activeStudies);
  },

  async getPublications() {
    return fetchWithFallback('/research?type=publication', researchData.publications);
  },

  async getEvents() {
    try {
      const response = await fetch(`${API_BASE_URL}/events`);
      if (!response.ok) throw new Error(`API returned status ${response.status}`);
      const rawEvents = await response.json();

      // API returns a flat array — split into upcoming vs past by status
      if (Array.isArray(rawEvents)) {
        const now = new Date();
        const upcomingEvents = rawEvents
          .filter(ev => ev.status !== 'Past' && ev.status !== 'Cancelled' && new Date(ev.date) >= now)
          .map((ev, i) => ({
            id: ev.id,
            title: ev.title,
            description: ev.description || '',
            date: new Date(ev.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            time: '',
            location: ev.location || '',
            category: ev.category || '',
            featured: i === 0, // first upcoming event is featured
            status: ev.status,
            videoUrl: ev.videoUrl || null
          }));

        const pastEvents = rawEvents
          .filter(ev => ev.status === 'Past' || new Date(ev.date) < now)
          .map(ev => ({
            id: ev.id,
            title: ev.title,
            date: new Date(ev.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            category: ev.category || 'Event',
            summary: ev.description || '',
            videoUrl: ev.videoUrl || null
          }));

        return { upcomingEvents, pastEvents };
      }

      // If API returns already-shaped object, use as-is
      return rawEvents;
    } catch (error) {
      console.warn(`API request to /events failed (${error.message}). Falling back to local mock data.`);
      return eventsData;
    }
  },

  async getBlogPosts() {
    // Only fetch published news for user portal
    return fetchWithFallback('/news?status=Published', blogData.posts);
  },

  async getBlogPostById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/news/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.warn(`API request for news ${id} failed. Falling back to local mock search.`);
      // Try to find in local mock data
      const idStr = String(id);
      return blogData.posts.find(post => String(post.id || post._id) === idStr) || null;
    }
  }
};
