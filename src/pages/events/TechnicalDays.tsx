import { useScrollReveal } from '@/hooks/useScrollReveal';

const TechnicalDays = () => {
  const heroRef = useScrollReveal();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div ref={heroRef} className="scroll-reveal">
        <h1 className="text-4xl font-bold mb-6">Technical Days</h1>
      </div>
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Technical Days are career-focused events where students meet companies and learn about job 
          opportunities, internships, and career paths in engineering and technology.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Event Format</h2>
        <p className="text-muted-foreground mb-4">
          These events typically include company presentations, networking sessions, CV workshops, 
          and sometimes site visits to company facilities.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Participating Companies</h2>
        <p className="text-muted-foreground mb-4">
          We partner with leading local and international companies in various sectors including 
          IT, manufacturing, automotive, energy, and consulting.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">For Students</h2>
        <p className="text-muted-foreground mb-4">
          This is your chance to make direct contact with potential employers, learn about career 
          opportunities, and understand what companies are looking for in candidates.
        </p>
      </div>
    </div>
  );
};

export default TechnicalDays;
