import { useScrollReveal } from '@/hooks/useScrollReveal';

const AboutMaribor = () => {
  const heroRef = useScrollReveal();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div ref={heroRef} className="scroll-reveal">
        <h1 className="text-4xl font-bold mb-6">About BEST Maribor</h1>
      </div>
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          BEST Maribor is the local group representing the University of Maribor in the BEST network. 
          We are a student organization dedicated to connecting students with companies and providing 
          opportunities for personal and professional development.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">What We Do</h2>
        <p className="text-muted-foreground mb-4">
          We organize various events including academic courses, career fairs, hackathons, and social activities. 
          Our goal is to enhance the student experience and prepare members for their future careers.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
        <p className="text-muted-foreground mb-4">
          BEST Maribor is run entirely by students who volunteer their time to make a difference in the 
          student community. We have departments focused on events, corporate relations, IT, and more.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Location</h2>
        <p className="text-muted-foreground mb-4">
          We are based at the University of Maribor, Slovenia's second-largest university, known for its 
          strong engineering and technology programs.
        </p>
      </div>
    </div>
  );
};

export default AboutMaribor;
