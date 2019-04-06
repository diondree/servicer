import ReactGA from 'react-ga';

export const trackEvent = event => {
  //   ReactGA.initialize('UA-137600898-1', { debug: true });
  ReactGA.event(event);
};
