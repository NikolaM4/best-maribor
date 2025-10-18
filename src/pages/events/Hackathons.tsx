import { useScrollReveal } from '@/hooks/useScrollReveal';

const Hackathons = () => {
  const heroRef = useScrollReveal();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div ref={heroRef} className="scroll-reveal">
        <h1 className="text-4xl font-bold mb-6">Hackathons</h1>
      </div>
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          BEST hackathons are intensive coding competitions where teams work together to solve 
          real-world problems and build innovative solutions within a limited timeframe.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Format</h2>
        <p className="text-muted-foreground mb-4">
          Most hackathons last 24-48 hours. Teams of 3-5 students work on a challenge, receiving 
          mentorship from industry experts. The best solutions win prizes and recognition.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Who Can Participate</h2>
        <p className="text-muted-foreground mb-4">
          Hackathons are open to students of all skill levels. Whether you're a coding expert or 
          just starting out, you'll find a team and challenge that fits your abilities.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What You'll Gain</h2>
        <p className="text-muted-foreground mb-4">
          Beyond prizes, hackathons teach you rapid prototyping, teamwork under pressure, creative 
          problem-solving, and how to pitch ideas effectively.
        </p>
      </div>
    </div>
  );
};

export default Hackathons;
