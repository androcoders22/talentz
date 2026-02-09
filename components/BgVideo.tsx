import React from "react";

interface BgVideoProps {
  vimeoId?: string;
  style?: React.CSSProperties;
}

const BgVideo: React.FC<BgVideoProps> = ({ style }) => (
  <>
    <div className={`absolute w-full h-full overflow-hidden`} style={style}>
      <iframe
        title="Vimeo Background Video"
        src={`https://player.vimeo.com/video/1084145546?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&quality=240p`}
        className="absolute scale-[4] md:scale-125 w-full h-full object-cover"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </div>
  </>
);

export default BgVideo;
