describe("detect", () => {
  const originalUserAgent = navigator.userAgent;

  afterEach(() => {
    Object.defineProperty(navigator, "userAgent", { value: originalUserAgent, configurable: true });
  });

  it("should identify mobile device", () => {
    jest.mock("bowser", () => ({
      getParser: jest.fn().mockReturnValue({
        getPlatformType: jest.fn().mockReturnValue("mobile"),
        getBrowserName: jest.fn().mockReturnValue("Chrome"),
        getBrowserVersion: jest.fn().mockReturnValue("92.0"),
      })
    }));

    Object.defineProperty(navigator, "userAgent", { value: 'Mobile User Agent', configurable: true });
    const bowserCastle = require('../dist/bowserCastle').default;

    expect(bowserCastle).toEqual({
      mobile: true,
      tablet: false,
      name: "chrome",
      version: "92.0",
    });

    jest.resetModules();
  });

  // Add more tests...
});
