import { useState, useEffect } from 'react'

interface YouTubeBackgroundProps {
  youtubeId: string
  posterImage: string
  className?: string
}

export function YouTubeBackground({
  youtubeId,
  posterImage,
  className = '',
}: YouTubeBackgroundProps) {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    }

    const initPlayer = () => {
      if (window.YT && window.YT.Player) {
        new window.YT.Player(`youtube-player-${youtubeId}`, {
          videoId: youtubeId,
          playerVars: {
            autoplay: 1,
            controls: 0,
            loop: 1,
            mute: 1,
            playlist: youtubeId,
            playsinline: 1,
            rel: 0,
            showinfo: 0,
            modestbranding: 1,
            iv_load_policy: 3,
          },
          events: {
            onReady: () => setVideoLoaded(true),
            onError: () => setVideoError(true),
          },
        })
      }
    }

    if (window.YT && window.YT.Player) {
      initPlayer()
    } else {
      window.addEventListener('load', initPlayer)
      window.addEventListener('youtube-iframe-api-ready', initPlayer)
    }

    return () => {
      window.removeEventListener('load', initPlayer)
      window.removeEventListener('youtube-iframe-api-ready', initPlayer)
    }
  }, [youtubeId])

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Poster image always shown as fallback */}
      <img
        src={posterImage}
        alt=""
        className="h-full w-full object-cover object-center"
        loading="eager"
        decoding="async"
      />

      {/* YouTube iframe overlay */}
      {!videoError && (
        <div
          id={`youtube-player-${youtubeId}`}
          className="absolute inset-0"
          style={{ opacity: videoLoaded ? 1 : 0 }}
        />
      )}
    </div>
  )
}
