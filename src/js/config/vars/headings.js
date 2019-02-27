// Rebuild and save CSS to changes to update
// Based on https://type-scale.com/ and https://medium.com/sketch-app-sources/exploring-responsive-type-scales-cf1da541be54

const typeSettings = {
  scaleMultiplier: {
    minorSecond: 1.067,
    majorSecond: 1.125,
    minorThird: 1.2,
    majorThird: 1.25,
    perfectFourth: 1.333,
    augmentedFourth: 1.414,
    perfectFifth: 1.5,
    goldenRatio: 1.618
  },
  typeScale: {
    minorSecond: [1.383, 1.296, 1.215, 1.138, 1.067, 1],
    majorSecond: [1.802, 1.602, 1.424, 1.266, 1.125, 1],
    minorThird: [2.488, 2.074, 1.728, 1.44, 1.2, 1],
    majorThird: [3.052, 2.441, 1.953, 1.563, 1.25, 1],
    perfectFourth: [4.209, 3.157, 2.369, 1.777, 1.333, 1],
    augmentedFourth: [5.653, 3.998, 2.827, 1.999, 1.414, 1],
    perfectFifth: [7.594, 5.063, 3.375, 2.25, 1.5, 1],
    goldenRatio: [11.089, 6.854, 4.236, 2.618, 1.618]
  }
};

// Edit these two lines below to change typeScale and Mulitplier
const { augmentedFourth: scaleMultiplier } = typeSettings.scaleMultiplier; // Choose Multiplier
const { augmentedFourth: typeScale } = typeSettings.typeScale; // Choose Scale

const valueUp = values => {
  return values.map(value => {
    let size = value * scaleMultiplier;
    return size.toFixed(3);
  });
};

const hValuesMobile = valueUp(typeScale);
const hValuesMohileLg = valueUp(hValuesMobile);
const hTablet = valueUp(hValuesMohileLg);
const hDesktop = valueUp(hTablet);

module.exports = {
  $gH1: `${typeScale[0]}rem`,
  $gH2: `${typeScale[1]}rem`,
  $gH3: `${typeScale[2]}rem`,
  $gH4: `${typeScale[3]}rem`,
  $gH5: `${typeScale[4]}rem`,
  $gH6: `${typeScale[5]}rem`,

  $gMobileH1: `${hValuesMobile[0]}rem`,
  $gMobileH2: `${hValuesMobile[1]}rem`,
  $gMobileH3: `${hValuesMobile[2]}rem`,
  $gMobileH4: `${hValuesMobile[3]}rem`,
  $gMobileH5: `${hValuesMobile[4]}rem`,
  $gMobileH6: `${hValuesMobile[5]}rem`,

  $gMobileLgH1: `${hValuesMohileLg[0]}rem`,
  $gMobileLgH2: `${hValuesMohileLg[1]}rem`,
  $gMobileLgH3: `${hValuesMohileLg[2]}rem`,
  $gMobileLgH4: `${hValuesMohileLg[3]}rem`,
  $gMobileLgH5: `${hValuesMohileLg[4]}rem`,
  $gMobileLgH6: `${hValuesMohileLg[5]}rem`,

  $gTabletH1: `${hTablet[0]}rem`,
  $gTabletH2: `${hTablet[1]}rem`,
  $gTabletH3: `${hTablet[2]}rem`,
  $gTabletH4: `${hTablet[3]}rem`,
  $gTabletH5: `${hTablet[4]}rem`,
  $gTabletH6: `${hTablet[5]}rem`,

  $gDesktopH1: `${hDesktop[0]}rem`,
  $gDesktopH2: `${hDesktop[1]}rem`,
  $gDesktopH3: `${hDesktop[2]}rem`,
  $gDesktopH4: `${hDesktop[3]}rem`,
  $gDesktopH5: `${hDesktop[4]}rem`,
  $gDesktopH6: `${hDesktop[5]}rem`
};
