import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALKEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimeUpdate, 1000));
function onTimeUpdate(e) {
  localStorage.setItem(LOCALKEY, e.seconds);
}

const savedTime = localStorage.getItem(LOCALKEY);
if (savedTime) {
  const currentTime = JSON.parse(savedTime);
  player.setCurrentTime(currentTime);
}

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {

//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;
