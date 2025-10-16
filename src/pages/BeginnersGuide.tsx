import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BeginnersGuide = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Beginner's Guide</h1>
        <p className="text-lg text-muted-foreground mb-8">
          New to BEST? This guide will help you understand what we do and how to get involved.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welcome to BEST!</CardTitle>
            <CardDescription>Everything you need to know to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              BEST (Board of European Students of Technology) is a student organization that connects students across
              Europe. We organize events, courses, and provide opportunities for personal and professional growth.
            </p>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="what-is-best">
            <AccordionTrigger className="text-lg font-semibold">What is BEST?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              BEST is a non-profit, non-political organization founded in 1989. We have 83 local groups across 33
              countries, connecting over 3,000 students. Our mission is to help students become more internationally
              minded and develop skills for working in an international environment.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="how-to-join">
            <AccordionTrigger className="text-lg font-semibold">How do I join BEST Maribor?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              To join BEST Maribor, you need to be a student at the University of Maribor studying engineering or
              technology. Fill out our application form, attend an introduction meeting, and participate in team
              activities. The process usually takes 2-3 weeks.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="events">
            <AccordionTrigger className="text-lg font-semibold">What kind of events do you organize?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We organize various types of events including academic courses (hands-on technical training), career fairs
              (technical days), hackathons, workshops, social events, and study exchanges. Each event is designed to
              help you develop both technical and soft skills.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="time-commitment">
            <AccordionTrigger className="text-lg font-semibold">How much time do I need to commit?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              The time commitment varies depending on your role and involvement. As a regular member, you can
              participate in events that interest you. If you take on an organizational role, expect to dedicate 5-10
              hours per week. We understand you're a student first, and we're flexible with schedules.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="benefits">
            <AccordionTrigger className="text-lg font-semibold">
              What are the benefits of being a member?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Members get access to all BEST events, international networking opportunities, leadership training, direct
              contact with companies, free workshops, and the chance to travel across Europe. You'll also develop
              valuable soft skills like project management, teamwork, and public speaking.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="costs">
            <AccordionTrigger className="text-lg font-semibold">Is there a membership fee?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              BEST Maribor membership is free! Some events may have a small participation fee to cover materials and
              logistics, but we keep costs as low as possible. Many events are completely free for members.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default BeginnersGuide;
