import { useRef, useState } from "react";
import { MdPlayArrow, MdPause, MdVolumeOff, MdVolumeUp } from "react-icons/md";

function VideoCard(elem) {
  const videoRef = useRef(null);
  const progressRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hover, setHover] = useState(false);
  const [seeking, setSeeking] = useState(false);

  /* Play / Pause */
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  /* Mute */
  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !muted;
    setMuted(!muted);
  };

  /* Update progress */
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    setProgress((video.currentTime / video.duration) * 100);
  };

  /* Seek */
  const seek = (e) => {
    const bar = progressRef.current;
    const video = videoRef.current;

    const rect = bar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percent = Math.min(Math.max(offsetX / rect.width, 0), 1);

    video.currentTime = percent * video.duration;
    setProgress(percent * 100);
  };

  const startSeek = (e) => {
    setSeeking(true);
    seek(e);
  };

  const moveSeek = (e) => {
    if (seeking) seek(e);
  };

  const stopSeek = () => setSeeking(false);

  return (
    <div
      className={`w-full max-w-[900px] rounded-xl border-txSecondary light:border-none text-white light:text-txPrimary bg-primaryD light:bg-primary  shadow-sm overflow-hidden m-4  ${!elem.theme ?"light":""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setSeeking(false);
      }}
    >
      {/* VIDEO */}
      <div className="relative w-full h-[500px] bg-black">
        <video
          ref={videoRef}
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
          muted={muted}
          loop
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-cover"
        />

        {/* Overlay Controls */}
        {hover && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition">
            <button
              onClick={togglePlay}
              className="w-14 h-14 text-white/90 light:bg-logo2 bg-logo hover:border-2 active:scale-95 hover:border-white rounded-full flex items-center justify-center shadow-lg"
            >
              {playing ? <MdPause size={32} /> : <MdPlayArrow size={32} />}
            </button>
          </div>
        )}

        {/* Bottom Controls */}
        {hover && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
            {/* Mute */}
            <button
              onClick={toggleMute}
              className="text-white active:text-logo light:active:text-logo2 bg-black/50 p-1 rounded-full"
            >
              {muted ? <MdVolumeOff size={22} /> : <MdVolumeUp size={22} />}
            </button>

            {/* Progress */}
            <div
              ref={progressRef}
              onMouseDown={startSeek}
              onMouseMove={moveSeek}
              onMouseUp={stopSeek}
              onMouseLeave={stopSeek}
              className="flex-1 h-2 bg-white/30 rounded-full cursor-pointer"
            >
              <div
                className="h-full light:bg-logo2/70 bg-logo/70 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <h3 className="text-[17px] font-bold ">
            <span className="inline-block px-2 mr-5 py-1 text-xs rounded-full bg-purple-100 text-purple-700 hover:text-purple-200 hover:bg-purple-700">
            video
            </span> 
            ChromeCast! Now Available For Netflex
        </h3>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs ">
          <span>👤 DevBytes • 1.2M views</span>
          <span>⏱ 0:58</span>
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-2">
          <button className="px-3 py-1 text-sm rounded-lg light:bg-secondary bg-secondaryD/70 light:hover:bg-gray-200  hover:bg-secondaryD ">
            ❤️ 12.4K
          </button>
          <button className="px-3 py-1 text-sm rounded-lg light:bg-secondary bg-secondaryD/70 light:hover:bg-gray-200  hover:bg-secondaryD ">
            💬 322
          </button>
          <button className="px-3 py-1 text-sm rounded-lg  light:bg-secondary bg-secondaryD/70 light:hover:bg-gray-200  hover:bg-secondaryD ">
            🔗 Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
