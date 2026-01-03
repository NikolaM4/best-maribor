import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const EventGallery = () => {
  // Placeholder event images - replace with real event photos
  const eventImages = [
    { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop', alt: 'Hackathon Event' },
    { url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop', alt: 'Workshop' },
    { url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop', alt: 'Team Meeting' },
    { url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop', alt: 'Conference' },
    { url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop', alt: 'Networking Event' },
    { url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop', alt: 'Team Building' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments captured from our amazing events
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={false}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={500}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="event-gallery-swiper pb-12"
          style={{ opacity: 1 }}
        >
          {eventImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden shadow-lg bg-muted">
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="eager"
                  className="w-full h-64 md:h-80 object-cover"
                  style={{ opacity: 1 }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EventGallery;
