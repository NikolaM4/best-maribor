import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface Partner {
  name: string;
  logo: string;
}

const PartnersCarousel = () => {
  // Placeholder partner data - you can replace with real logos
  const partners: Partner[] = [
    { name: 'Partner 1', logo: 'https://placehold.co/200x100/purple/white?text=Partner+1' },
    { name: 'Partner 2', logo: 'https://placehold.co/200x100/blue/white?text=Partner+2' },
    { name: 'Partner 3', logo: 'https://placehold.co/200x100/orange/white?text=Partner+3' },
    { name: 'Partner 4', logo: 'https://placehold.co/200x100/purple/white?text=Partner+4' },
    { name: 'Partner 5', logo: 'https://placehold.co/200x100/blue/white?text=Partner+5' },
    { name: 'Partner 6', logo: 'https://placehold.co/200x100/orange/white?text=Partner+6' },
  ];

  return (
    <section className="py-20 bg-surface-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading companies and organizations
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="partners-swiper"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnersCarousel;
