import {
  Environment,
  VideoModule,
  staticResourceURL
} from 'react-360';

// Create a player
const player = VideoModule.createPlayer('myplayer');
// Play a specific video
player.play({
  source: {url: staticResourceURL('path/to/video.mp4')}, // provide the path to the video
  stereo: '3DTB', // optionally, supply the format of the video
});
// Display the background video on the Environment
Environment.setBackgroundVideo('myplayer'); // or you can use player._player which is same value
// Or, play in-line on a surface
Environment.setScreen(
  'default', /* screen name */
  'myplayer', /* player unique id */
  'default', /* surface name */
  0, 0, 600, 400 /* relative position on the surface */
);
