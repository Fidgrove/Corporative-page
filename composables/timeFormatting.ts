export const useSecondsToReadableTime = (duration: number, ms = true) => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = Math.floor(duration) % 60;
  const milliseconds = Math.round(
    +`.${duration.toString().split(".")[1]}` * 1000,
  );
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  const formattedMilliseconds = milliseconds.toString().padStart(3, "0");
  return ms
    ? `${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`
    : `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
