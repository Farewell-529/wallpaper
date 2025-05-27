import { useState } from 'react';
import type { Image } from "../types/images";
import { useNavigate } from 'react-router-dom';
function Carousel({ images }: { images: Image[] }) {
  const navigate = useNavigate()
  const [showInfo, setShowInfo] = useState(true);
  const handleImageClick = () => {
    navigate(`/${images[0].source}/${images[0].id}`);
  };
  return (
    <div className='relative' onMouseEnter={() => setShowInfo(false)} onMouseLeave={() => setShowInfo(true)}>
      <div className="flex justify-center mt-6">
        <div className='cursor-pointer'>
          {/* 示例：只显示第一张图片，可根据需要实现轮播 */}
          {images && images.length > 0 ? (
            <img onClick={handleImageClick} className="rounded-2xl w-[80rem] h-[25rem] object-cover" src={images[0].url} alt="" />
          ) : (
            <div className="rounded-2xl w-[80rem] h-[25rem] bg-gray-200 flex items-center justify-center">暂无图片</div>
          )}
        </div>
      </div>
      <div
        className={`absolute bottom-2 px-2 font-mono text-sm flex justify-between 
                    w-full transition-opacity duration-400 ${showInfo ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <div className="px-1 py-0.5 bg-white/50 rounded-xl">🖼{images[0]?.resolution}</div>
        <div className="px-1 py-0.5 bg-white/50 rounded-xl">🎨{images[0]?.source}</div>
      </div>
    </div>
  );
}

export default Carousel;