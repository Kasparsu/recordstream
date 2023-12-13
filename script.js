const ffmpeg = require("ffmpeg-static");
const { spawn } = require("child_process");

const process = spawn(
    ffmpeg,
  ["-y", "-progress", "pipe:1", "-probesize", "10M", "-f", "gdigrab", "-t", "1" ,"-framerate", "60", "-i", "desktop", "%03d.bmp"],
  { stdio: "pipe" }
);
const stream = process.stdout;
stream.on("data", chunk => {
    console.log(chunk);
});

