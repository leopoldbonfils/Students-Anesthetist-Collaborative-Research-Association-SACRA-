import researchData from '../data/researchData.json';
import eventsData from '../data/eventsData.json';
import blogData from '../data/blogData.json';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const dataService = {
  async getStudies() {
    await delay(600);
    return researchData.activeStudies;
  },

  async getPublications() {
    await delay(700);
    return researchData.publications;
  },

  async getEvents() {
    await delay(500);
    return eventsData;
  },

  async getBlogPosts() {
    await delay(600);
    return blogData.posts;
  },

  async getBlogPostById(id) {
    await delay(400);
    return blogData.posts.find(post => post.id === id) || null;
  }
};
