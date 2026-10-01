import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Maximize2, GraduationCap, Film, RotateCcw, ArrowRight, Shield, Compass, Sparkles } from 'lucide-react';
import videoFile from '../assets/video.mp4';

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:31');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
        
        const curMins = Math.floor(video.currentTime / 60);
        const curSecs = Math.floor(video.currentTime % 60).toString().padStart(2, '0');
        setCurrentTime(`${curMins}:${curSecs}`);
      }
    };

    const handleLoadedMetadata = () => {
      if (video.duration) {
        const durMins = Math.floor(video.duration / 60);
        const durSecs = Math.floor(video.duration % 60).toString().padStart(2, '0');
        setDuration(`${durMins}:${durSecs}`);
      }
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    if (video.readyState >= 1 && video.duration) {
      handleLoadedMetadata();
    }

    // Initial play attempt (muted for autoplay policy)
    video.play().catch(() => {
      setIsPlaying(false);
    });

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleRestart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  const handleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
  };

  return (
    <section className="max-w-5xl mx-auto px-4 space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E5E0D5] pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-terracotta">
              AKROMIND · Career Counselling & Stream Mapping
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif italic text-warm-charcoal tracking-tight">
            Strategic Career Counselling & Pathway Mapping
          </h2>
        </div>
        <p className="text-xs text-stone-600 font-serif max-w-md leading-relaxed">
          A personal look inside our Career Counselling sessions: helping students and ambitious professionals discover their natural aptitudes, choose high-growth academic streams, and build confident lifelong career trajectories.
        </p>
      </div>

      {/* Main Vertical Video Theater Card for Career Counselling Reel */}
      <div 
        ref={containerRef}
        className="relative bg-[#1C1816] rounded-sm overflow-hidden border border-[#2D2623] shadow-2xl group max-w-md sm:max-w-lg mx-auto"
      >
        {/* Floating Top Info Overlay */}
        <div className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-[#1C1816]/90 via-[#1C1816]/40 to-transparent flex justify-between items-center pointer-events-none">
          <div className="flex items-center gap-2 pointer-events-auto">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 bg-terracotta text-white rounded-xs flex items-center gap-1.5 shadow-sm">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Career Counselling</span>
            </span>
            <span className="text-xs text-warm-cream/90 font-serif italic hidden sm:inline">
              AKROMIND: Career Roadmaps & Choices
            </span>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-stone-300 bg-black/40 px-2.5 py-1 rounded-xs backdrop-blur-xs">
            <Film className="w-3.5 h-3.5 text-terracotta" />
            <span>video.mp4</span>
          </div>
        </div>

        {/* Vertical Video Element (9:16 Aspect Ratio) */}
        <div 
          className="relative aspect-[9/16] w-full bg-black flex items-center justify-center cursor-pointer select-none overflow-hidden" 
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            playsInline
            autoPlay
            muted={isMuted}
            preload="auto"
          >
            <source src="/assets/video.mp4" type="video/mp4" />
            <source src="/video.mp4" type="video/mp4" />
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Central Play Watermark on Pause */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex flex-col items-center justify-center text-center p-6 space-y-4"
              >
                <div className="w-18 h-18 rounded-full bg-terracotta text-white flex items-center justify-center pl-1 shadow-2xl hover:scale-105 transition-transform">
                  <Play className="w-8 h-8 fill-current" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white tracking-wide uppercase font-sans">Click to Play Video</h4>
                  <p className="text-xs text-stone-300 font-serif italic max-w-xs">
                    Watch our Career Counselling & Guidance Session
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Video Progress & Control Bar */}
        <div className="bg-[#1C1816] border-t border-[#2D2623] p-4 flex flex-col gap-3">
          {/* Seek Bar */}
          <div 
            className="w-full h-1.5 bg-stone-800 rounded-full cursor-pointer relative overflow-hidden group/bar"
            onClick={handleSeek}
          >
            <div 
              className="h-full bg-terracotta transition-all duration-100 rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between gap-3 text-warm-cream">
            <div className="flex items-center gap-2.5">
              <button 
                onClick={togglePlay}
                className="w-8 h-8 rounded-xs bg-[#2D2623] hover:bg-terracotta hover:text-white flex items-center justify-center transition-colors cursor-pointer text-stone-300"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 pl-0.5 fill-current" />}
              </button>

              <button 
                onClick={handleRestart}
                className="w-8 h-8 rounded-xs bg-[#2D2623] hover:bg-terracotta hover:text-white flex items-center justify-center transition-colors cursor-pointer text-stone-300"
                title="Restart Video"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button 
                onClick={toggleMute}
                className="w-8 h-8 rounded-xs bg-[#2D2623] hover:bg-terracotta hover:text-white flex items-center justify-center transition-colors cursor-pointer text-stone-300"
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <span className="text-[11px] font-mono text-stone-400">
                {currentTime} / {duration}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={handleFullscreen}
                className="w-8 h-8 rounded-xs bg-[#2D2623] hover:bg-terracotta hover:text-white flex items-center justify-center transition-colors cursor-pointer text-stone-300"
                title="Fullscreen Mode"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Callout Footer (Career Counselling Focus) */}
        <div className="bg-[#241F1C] border-t border-[#2D2623] p-4 sm:p-5 flex flex-col gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta font-bold">
                AKROMIND Career Advisory
              </span>
              <span className="text-[10px] font-mono text-stone-400 flex items-center gap-1">
                <Shield className="w-3 h-3 text-stone-400" /> 1-on-1 Guidance
              </span>
            </div>
            <p className="text-xs text-warm-cream/90 font-serif italic">
              Multi-dimensional aptitude testing, academic stream mapping, university admissions guidance, and high-impact career transition roadmaps.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
            <Link 
              to="/verticals/akromind"
              className="w-full sm:w-auto justify-center text-[10px] font-bold uppercase tracking-widest px-4 py-2.5 bg-terracotta hover:bg-terracotta/90 text-white rounded-xs inline-flex items-center gap-1.5 transition-colors"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Explore Career Counselling</span>
            </Link>
            <Link 
              to="/contact"
              className="w-full sm:w-auto justify-center text-[10px] font-bold uppercase tracking-widest px-4 py-2.5 border border-stone-600 hover:border-warm-cream text-warm-cream rounded-xs inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Book 1-on-1 Career Session</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
