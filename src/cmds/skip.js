import { playing, disp, connection } from "./play.js";

//Skip Video and Start Playing Next Song in Queue
const skip = (msg, musicQ) => {
  disp.destroy();
  msg.channel.send("Skipped!");

  if (musicQ.length < 1) return;

  const { title, url, image } = musicQ.shift();
  playing(msg, connection, title, url, image, musicQ);
};

export default skip;
