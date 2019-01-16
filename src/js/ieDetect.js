const ieDetect = (() => {
  const detect = () => {
    if (typeof window !== "undefined") {
      const ua = window.navigator.userAgent;
      const msie = ua.indexOf("MSIE");
      const trident = ua.indexOf("Trident/");
      if (msie !== -1 || trident !== -1) {
        return true;
      } else {
        return false;
      }
    }
  };
  return {
    detect
  };
})();

export default ieDetect;
