import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Loader2 } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  posterImage: string;
  title: string;
  isVertical?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, posterImage, title, isVertical }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Auto-hide controls when playing and mouse is idle
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<number | null>(null);

  const isIframe = videoUrl.includes('youtube.com') || 
                  videoUrl.includes('youtu.be') || 
                  (videoUrl.includes('vimeo.com') && !videoUrl.includes('.mp4')) ||
                  videoUrl.includes('instagram.com') ||
                  videoUrl.includes('tiktok.com');

  const isV = isVertical || 
              videoUrl.includes('instagram.com') || 
              videoUrl.includes('tiktok.com') || 
              videoUrl.includes('/shorts/') || 
              videoUrl.includes('/reel/');

  // Get embeddable URL for YouTube / Vimeo / Instagram / TikTok
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      if (url.includes('/shorts/')) {
        const shortsMatch = url.match(/\/shorts\/([^/?#\s]+)/);
        if (shortsMatch && shortsMatch[1]) {
          return `https://www.youtube.com/embed/${shortsMatch[1]}?autoplay=1&rel=0`;
        }
      }
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      let videoId = (match && match[2].length === 11) ? match[2] : null;
      
      if (!videoId) {
        const fallbackReg = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const fallbackMatch = url.match(fallbackReg);
        if (fallbackMatch && fallbackMatch[1]) {
          videoId = fallbackMatch[1];
        }
      }
      return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : url;
    }
    if (url.includes('vimeo.com')) {
      const regExp = /vimeo\.com\/(\d+)/;
      const match = url.match(regExp);
      const videoId = match ? match[1] : null;
      return videoId ? `https://player.vimeo.com/video/${videoId}?autoplay=1` : url;
    }
    if (url.includes('instagram.com')) {
      const match = url.match(/(?:\/p\/|\/reel\/|\/reels\/)([^/?#\s]+)/);
      const shortcode = match ? match[1] : null;
      return shortcode ? `https://www.instagram.com/reel/${shortcode}/embed` : url;
    }
    if (url.includes('tiktok.com')) {
      const match = url.match(/\/video\/(\d+)/);
      const videoId = match ? match[1] : null;
      return videoId ? `https://www.tiktok.com/embed/v2/${videoId}` : url;
    }
    return url;
  };

  useEffect(() => {
    const handleMouseLeave = () => {
      if (isPlaying) {
        setShowControls(false);
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (container) {
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isPlaying]);

  const resetControlsTimeout = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = window.setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  const handleMouseMove = () => {
    resetControlsTimeout();
  };

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      setHasStarted(true);
      setIsLoading(true);
      video.play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
    resetControlsTimeout();
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const val = parseFloat(e.target.value);
    setVolume(val);
    const video = videoRef.current;
    if (video) {
      video.volume = val;
      video.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime);
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    setDuration(video.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const seekTime = parseFloat(e.target.value);
    video.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const seekTime = percentage * duration;
    video.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch((err) => {
        console.error(`Erro ao ativar tela cheia: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (isIframe) {
    return (
      <div 
        className={`relative rounded-[32px] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-black group transition-all duration-500 ${isV ? 'aspect-[9/16] w-full max-w-[270px] xs:max-w-[290px] sm:max-w-[330px] mx-auto ring-4 ring-slate-800/40 dark:ring-slate-700/30' : 'aspect-video w-full'}`}
        id="iframe-video-player"
      >
        {!hasStarted ? (
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={posterImage} 
              alt={title} 
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center transition-colors group-hover:bg-black/50">
              <button
                onClick={() => setHasStarted(true)}
                className="w-20 h-20 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer animate-pulse relative z-10"
                aria-label="Dar Play no Vídeo"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </button>
            </div>
          </div>
        ) : (
          <iframe
            src={getEmbedUrl(videoUrl)}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (isPlaying) setShowControls(false);
      }}
      onClick={() => togglePlay()}
      className={`relative rounded-[32px] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-slate-950 group cursor-pointer select-none transition-all duration-500 ${isV ? 'aspect-[9/16] w-full max-w-[270px] xs:max-w-[290px] sm:max-w-[330px] mx-auto ring-4 ring-slate-800/40 dark:ring-slate-700/30' : 'aspect-video w-full'}`}
      id="custom-html5-video-player"
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterImage}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => setIsLoading(false)}
        onEnded={handleVideoEnded}
        onClick={(e) => {
          e.stopPropagation();
          togglePlay();
        }}
        className="w-full h-full object-cover"
        playsInline
      />

      {/* Backdrop overlay for poster state */}
      {!hasStarted && (
        <div className="absolute inset-0 bg-black/25 flex items-center justify-center transition-colors duration-500 group-hover:bg-black/40">
          {/* Neon Pulse Play Indicator */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-brand-orange/30 blur-xl scale-125 animate-pulse" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="relative w-24 h-24 rounded-full bg-brand-orange hover:bg-brand-peach text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border border-white/20"
              aria-label="Assistir Vídeo Editado"
            >
              <Play className="w-10 h-10 fill-current translate-x-0.5" />
            </button>
          </div>
          
          <div className="absolute bottom-8 left-8 right-8 text-center md:text-left">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/50 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              Clique para Assistir Trabalho Finalizado ({formatTime(duration || 120)})
            </span>
          </div>
        </div>
      )}

      {/* Buffering Spinner */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
          <Loader2 className="w-12 h-12 text-brand-orange animate-spin" />
        </div>
      )}

      {/* Control Bar Overlay */}
      <div 
        className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-all duration-300 flex flex-col gap-4 pt-16 ${
          (showControls || !isPlaying) && hasStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Progress Timeline Tracker */}
        <div className="flex items-center gap-3 group/progress">
          <span className="text-white/70 font-mono text-xs select-none">
            {formatTime(currentTime)}
          </span>
          
          <div 
            onClick={handleProgressClick}
            className="flex-1 h-1.5 hover:h-2.5 bg-white/20 rounded-full relative overflow-hidden transition-all duration-200 cursor-pointer"
          >
            {/* Filled progress bar */}
            <div 
              style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
              className="h-full bg-gradient-to-r from-brand-orange to-brand-peach rounded-full relative"
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white opacity-0 group-hover/progress:opacity-100 transition-opacity" />
            </div>
          </div>

          <span className="text-white/70 font-mono text-xs select-none">
            {formatTime(duration)}
          </span>
        </div>

        {/* Playback action items & sound dynamics */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Play/Pause state */}
            <button
              onClick={() => togglePlay()}
              className="p-2 text-white hover:text-brand-orange transition-colors cursor-pointer"
              aria-label={isPlaying ? 'Pausar' : 'Dar Play'}
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
            </button>

            {/* Replay */}
            <button
              onClick={() => {
                const video = videoRef.current;
                if (video) {
                  video.currentTime = 0;
                  if (!isPlaying) togglePlay();
                }
              }}
              className="p-2 text-white/80 hover:text-brand-orange transition-colors cursor-pointer"
              aria-label="Recomeçar do início"
              title="Recomeçar"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Separator */}
            <div className="w-px h-4 bg-white/10" />

            {/* Speaker Sound controls */}
            <div className="flex items-center gap-2 group/volume">
              <button
                onClick={toggleMute}
                className="p-2 text-white hover:text-brand-orange transition-colors cursor-pointer"
                aria-label={isMuted ? 'Mudo' : 'Som ativo'}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-0 group-hover/volume:w-16 transition-all duration-300 h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-brand-orange"
                style={{
                  background: `linear-gradient(to right, #ff7a50 0%, #ff7a50 ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.2) ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.2) 100%)`
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-[10px] font-mono text-white/40 uppercase tracking-widest font-bold">
              {title}
            </span>
            
            {/* Maximize to full monitor view */}
            <button
              onClick={toggleFullscreen}
              className="p-2 text-white hover:text-brand-orange transition-colors cursor-pointer"
              aria-label="Tela Inteira"
              title="Tela Cheia"
            >
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
