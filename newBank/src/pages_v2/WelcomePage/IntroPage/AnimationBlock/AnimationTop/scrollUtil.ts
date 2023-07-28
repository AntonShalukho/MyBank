type VideoMap = {
  Width: number;
  Height: number;
  Top: number;
  Right: number;
  BorderRadius: number;
};

type BrowserMap = {
  Width: number;
  Height: number;
  Top: number;
  Right: number;
  BorderRadius: number;
};

export type PercentageType = {
  video: VideoMap;
  videoConst: VideoMap;
  browser: BrowserMap;
  browserConst: BrowserMap;
  scrollStop: number;
  scrollPercent: number;
};

export const Percent1920pxMap: PercentageType = {
  video: {
    Width: 0.72,
    Height: 0.55,
    Top: 2.06,
    Right: 0.02,
    BorderRadius: 0.5,
  },
  videoConst: {
    Width: 28,
    Height: 45,
    Top: 206,
    Right: 2,
    BorderRadius: 0.5,
  },
  browser: {
    Width: 0.152,
    Height: 0.064,
    Top: 1.83,
    Right: 0.05,
    BorderRadius: 0.5,
  },
  browserConst: {
    Width: 115.2,
    Height: 106.4,
    Top: 183,
    Right: -5,
    BorderRadius: 0.5,
  },
  scrollStop: 800,
  scrollPercent: 8,
};

export const Percent1280pxMap: PercentageType = {
  video: {
    Width: 0.74,
    Height: 0.582,
    Top: 2.11,
    Right: 0.015,
    BorderRadius: 0.5,
  },
  videoConst: {
    Width: 26,
    Height: 41.8,
    Top: 211,
    Right: 1.5,
    BorderRadius: 0.5,
  },
  browser: {
    Width: 0.159,
    Height: 0.136,
    Top: 1.96,
    Right: 0.08,
    BorderRadius: 0.5,
  },
  browserConst: {
    Width: 115.9,
    Height: 86.4,
    Top: 196,
    Right: -8,
    BorderRadius: 0.5,
  },
  scrollStop: 800,
  scrollPercent: 8,
};

export const Percent1024pxMap: PercentageType = {
  video: {
    Width: 0.636,
    Height: 0.422,
    Top: 2.565,
    Right: 0.0225,
    BorderRadius: 0.5,
  },
  videoConst: {
    Width: 36.4,
    Height: 57.8,
    Top: 256.5,
    Right: 2.25,
    BorderRadius: 0.5,
  },
  browser: {
    Width: 0.589,
    Height: 0.2,
    Top: 2.35,
    Right: 0.1,
    BorderRadius: 0.5,
  },
  browserConst: {
    Width: 158.9,
    Height: 120,
    Top: 235,
    Right: -10,
    BorderRadius: 0.5,
  },
  scrollStop: 800,
  scrollPercent: 8,
};

export const Percent768pxMap: PercentageType = {
  video: {
    Width: 0.64,
    Height: 0.42,
    Top: 2.59,
    Right: 0.01,
    BorderRadius: 0.5,
  },
  videoConst: {
    Width: 36,
    Height: 58,
    Top: 259,
    Right: 1,
    BorderRadius: 0.02,
  },
  browser: {
    Width: 0.6,
    Height: 0.2,
    Top: 2.38,
    Right: 0.12,
    BorderRadius: 0.5,
  },
  browserConst: {
    Width: 160,
    Height: 120,
    Top: 238,
    Right: -12,
    BorderRadius: 0.5,
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
