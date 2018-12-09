export default obj => {
  const { type, eventCategory, eventAction, eventLabel, pageview } = obj;

  if (type === 'pageview') {
    window.dataLayer.push({
      event: 'virtualPageview',
      virtualPathname: pageview
    });
  } else {
    window.dataLayer.push({
      event: 'event',
      eventCategory: eventCategory,
      eventAction: eventAction,
      eventLabel: eventLabel
    });
  }
};
