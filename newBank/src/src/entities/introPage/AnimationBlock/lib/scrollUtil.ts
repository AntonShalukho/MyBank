type VideoType = {
  width: number;
  height: number;
  top: number;
  right: number;
  borderRadius: number;
};

export type PercentageType = {
  video: VideoType;
  videoConst: VideoType;
  browser: VideoType;
  browserConst: VideoType;
  scrollStop: number;
  scrollPercent: number;
};

export const Percent1920pxMap: PercentageType = {
  video: {
    width: 0.72,
    height: 0.55,
    top: 2.06,
    right: 0.02,
    borderRadius: 0.5,
  },
  videoConst: {
    width: 28,
    height: 45,
    top: 206,
    right: 2,
    borderRadius: 0.5,
  },
  browser: {
    width: 0.152,
    height: 0.064,
    top: 1.83,
    right: 0.05,
    borderRadius: 0.5,
  },
  browserConst: {
    width: 115.2,
    height: 106.4,
    top: 183,
    right: -5,
    borderRadius: 0.5,
  },
  scrollStop: 800,
  scrollPercent: 8,
};

export const Percent1280pxMap: PercentageType = {
  video: {
    width: 0.74,
    height: 0.582,
    top: 2.11,
    right: 0.015,
    borderRadius: 0.5,
  },
  videoConst: {
    width: 26,
    height: 41.8,
    top: 211,
    right: 1.5,
    borderRadius: 0.5,
  },
  browser: {
    width: 0.159,
    height: 0.136,
    top: 1.96,
    right: 0.08,
    borderRadius: 0.5,
  },
  browserConst: {
    width: 115.9,
    height: 86.4,
    top: 196,
    right: -8,
    borderRadius: 0.5,
  },
  scrollStop: 800,
  scrollPercent: 8,
};

export const Percent1024pxMap: PercentageType = {
  video: {
    width: 0.636,
    height: 0.422,
    top: 2.565,
    right: 0.0225,
    borderRadius: 0.5,
  },
  videoConst: {
    width: 36.4,
    height: 57.8,
    top: 256.5,
    right: 2.25,
    borderRadius: 0.5,
  },
  browser: {
    width: 0.589,
    height: 0.2,
    top: 2.35,
    right: 0.1,
    borderRadius: 0.5,
  },
  browserConst: {
    width: 158.9,
    height: 120,
    top: 235,
    right: -10,
    borderRadius: 0.5,
  },
  scrollStop: 800,
  scrollPercent: 8,
};

export const Percent768pxMap: PercentageType = {
  video: {
    width: 0.64,
    height: 0.42,
    top: 2.59,
    right: 0.01,
    borderRadius: 0.5,
  },
  videoConst: {
    width: 36,
    height: 58,
    top: 259,
    right: 1,
    borderRadius: 0.02,
  },
  browser: {
    width: 0.6,
    height: 0.2,
    top: 2.38,
    right: 0.12,
    borderRadius: 0.5,
  },
  browserConst: {
    width: 160,
    height: 120,
    top: 238,
    right: -12,
    borderRadius: 0.5,
  },
  scrollStop: 800,
  scrollPercent: 8,
};

export const getPercentMap = (): PercentageType => {
  if (window.screen.width >= 1280 && window.screen.width < 1440) {
    return Percent1280pxMap;
  }
  if (window.screen.width >= 1024 && window.screen.width < 1280) {
    return Percent1024pxMap;
  }
  if (window.screen.width >= 768 && window.screen.width < 1024) {
    return Percent768pxMap;
  }
  return Percent1920pxMap;
};
