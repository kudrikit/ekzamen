import { expect } from 'chai';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

describe('Weather API', () => {
  before(() => {
    console.log('Starting Weather API tests...');
  });

  after(() => {
    console.log('Finishing Weather API tests...');
  });

  it('should return weather data for a given city', async () => {
    console.log('Testing weather data retrieval for a given city...');
    const city = 'London';
    const response = await axios.get(`http://localhost:3000/weather/${city}`);
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property('weather');
    console.log('Weather data retrieved successfully.');
  });

  it('should handle errors gracefully', async () => {
    console.log('Testing error handling for non-existent city...');
    const city = 'NonExistentCity';
    try {
      const response = await axios.get(`http://localhost:3000/weather/${city}`);
    } catch (error) {
      expect(error.response.status).to.equal(404);
      expect(error.response.data).to.have.property('message');
      console.log('Error handled gracefully:', error.message);
    }
  });
});
