import { MasonryGallery } from "@/components/reactbits/MasonryGallery";
import { AnimatedHero } from "@/components/reactbits/AnimatedHero";

const Gallery = () => {
  // Sample gallery items - replace with actual images
  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      alt: "BEST Maribor Event 1",
    },
    {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=800&fit=crop",
      alt: "BEST Maribor Event 2",
    },
    {
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=500&fit=crop",
      alt: "BEST Maribor Event 3",
    },
    {
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=700&fit=crop",
      alt: "BEST Maribor Workshop",
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
      alt: "Team Meeting",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=900&fit=crop",
      alt: "Conference",
    },
    {
      src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=550&fit=crop",
      alt: "Teamwork",
    },
    {
      src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&h=650&fit=crop",
      alt: "Presentation",
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=700&fit=crop",
      alt: "Innovation Lab",
    },
    {
      src: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&h=800&fit=crop",
      alt: "Collaboration",
    },
    {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
      alt: "Study Group",
    },
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=750&fit=crop",
      alt: "Team Building",
    },
  ];

  return (
    <div className="min-h-screen">
      <AnimatedHero className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-lg text-muted-foreground">
              Browse through our collection of photos from events, courses, and activities.
            </p>
          </div>
        </div>
      </AnimatedHero>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <MasonryGallery items={galleryItems} />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
