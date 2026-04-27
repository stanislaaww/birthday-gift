import { useRef } from 'react';
import useContent from './hooks/useContent';
import HeroSection from './sections/HeroSection';
import GallerySection from './sections/GallerySection';
import MessageSection from './sections/MessageSection';
import VideoSection from './sections/VideoSection';
import GiftSection from './sections/GiftSection';
import FinalSection from './sections/FinalSection';
import MusicToggle from './components/MusicToggle';

export default function App() {
  const { content, loading } = useContent();
  const galleryRef = useRef(null);
  const heroRef = useRef(null);

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToTop = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl animate-pulse-soft mb-4">💜</div>
          <p className="text-lavender-500">загружаем волшебство...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <MusicToggle src={content.musicSrc} />

      <div ref={heroRef}>
        <HeroSection content={content} onStart={scrollToGallery} />
      </div>
      <div ref={galleryRef}>
        <GallerySection photos={content.photos} />
      </div>
      <MessageSection message={content.message} />
      <VideoSection link={content.videoLink} title={content.videoTitle} />
      <GiftSection content={content} />
      <FinalSection message={content.finalMessage} onRestart={scrollToTop} />
    </div>
  );
}
