import { Linkedin, Mail } from "lucide-react";
import { ChromaGrid } from "./reactbits/ChromaGrid";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  email?: string;
  linkedin?: string;
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Domen Vučina",
      role: "President",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      email: "domen.vucina@BEST-eu.org",
      linkedin: "#",
    },
    {
      name: "Maks Ferkulj",
      role: "Secretary",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      email: "maks.ferkulj@BEST-eu.org",
      linkedin: "#",
    },
    {
      name: "Klemen Poglajen",
      role: "Fundraising/Corporate Relations coordinator",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      email: "klemen.poglajen@BEST-eu.org",
      linkedin: "#",
    },
    {
      name: "Lucija Flutcher",
      role: "Public/External Relations coordinator",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      email: "lucija.flucher@BEST-eu.org",
      linkedin: "#",
    },
    {
      name: "Nuša Simonič",
      role: "Human Resources coordinator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      email: "nusa.simonic@BEST-eu.org",
      linkedin: "#",
    },
    {
      name: "Nikola Mitrović",
      role: "Information Technologies coordinator",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
      email: "nikola.mitrovic.02@BEST-eu.org",
      linkedin: "https://www.linkedin.com/in/nikola-mitrovi%C4%87-137793255/",
    },
  ];

  return (
    <section className="py-20 bg-surface-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated individuals who make BEST Maribor possible
          </p>
        </div>

        <ChromaGrid
          items={teamMembers.map((member) => ({
            name: member.name,
            role: member.role,
            image: member.image,
            email: member.email,
            linkedin: member.linkedin,
          }))}
        />
      </div>
    </section>
  );
};

export default TeamSection;
