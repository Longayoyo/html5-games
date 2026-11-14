<script>
  window.Wortal = {
    initializeAsync: () => Promise.resolve(),
    startGameAsync: () => Promise.resolve(),
    setLoadingProgress: (progress) => {},
    onPause: (callback) => {},
    onResume: (callback) => {},
    ads: {
      showInterstitial: (placement, description, beforeAd, afterAd, noFill) => {
        if (beforeAd) beforeAd();
        if (afterAd) afterAd();
        if (noFill) noFill();
      },
      showRewarded: (description, beforeAd, afterAd, adDismissed, adViewed, noFill) => {
        if (beforeAd) beforeAd();
        if (adViewed) adViewed();
        if (afterAd) afterAd();
      },
      showBanner: () => {},
      hideBanner: () => {},
      isAdBlocked: () => false
    },
    analytics: {
      logLevelStart: () => {},
      logLevelEnd: () => {},
      logScore: () => {},
      logGameChoice: () => {}
    },
    player: {
      getID: () => "local-player",
      getName: () => "Player",
      getPhoto: () => "",
      isFirstPlay: () => true,
      getDataAsync: () => Promise.resolve({}),
      setDataAsync: () => Promise.resolve()
    },
    session: {
      getEntryPointData: () => ({}),
      getEntryPointAsync: () => Promise.resolve("direct"),
      getLocale: () => "en-US",
      getTrafficSource: () => ({}),
      getPlatform: () => "web",
      getDevice: () => "DESKTOP"
    },
    context: {
      getID: () => null,
      getType: () => "SOLO",
      inviteAsync: () => Promise.resolve(),
      shareAsync: () => Promise.resolve({ shareCount: 0 })
    }
  };
</script>
