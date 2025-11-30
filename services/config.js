// config.js
// Central place for configuration values. Reads API base URL from environment
// if provided (useful for development/CI) and falls back to a sensible default.

const API_BASE_URL = process.env.API_BASE_URL || 'http://127.0.0.1:8000';

export default {
  API_BASE_URL,
};
