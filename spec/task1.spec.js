const { getCredentialsResponse, getFinalResponse } = require('./../task1.js');

describe('get credentials request', function() {
  let response;

  beforeAll(async function() {
    response = await getCredentialsResponse();
  }, 30000);
  
  it('should return "200" status', function() {
    expect(response.status).toBe(200);
  });

  it('should have valid url', function() {
    expect(response.data.targetUrl).toMatch(/http(?:s)?:\/\/[^\s/$.?#].[^\s]*$/);
  });

  it('should have credentials', function() {
    expect(response.data.username).toBeDefined();
    expect(response.data.password).toBeDefined();
  });
});

describe('"post" request', function() {
  let response;

  beforeAll(async function() {
    response = await getFinalResponse();
  }, 30000);
  
  it('should return "200" status', function() {
    expect(response.status).toBe(200);
  });

  it('should have "data"', function() {
    expect(response.data).toBeDefined();
  });
});