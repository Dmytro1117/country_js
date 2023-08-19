import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT = 'videoplayer-current-time';

const player = new Player(document.querySelector('iframe'));

const onPlay = function ({ seconds: currentTime }) {
  localStorage.setItem(CURRENT, JSON.stringify(currentTime));
};

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(localStorage.getItem(CURRENT))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
