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
    return fetchWithFallback('/events', eventsData);
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
