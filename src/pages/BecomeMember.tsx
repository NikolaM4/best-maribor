import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const BecomeMember = () => {
  const heroRef = useScrollReveal();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div ref={heroRef} className="max-w-4xl mx-auto scroll-reveal">
        <h1 className="text-4xl font-bold mb-6">Become a Member</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Join BEST Maribor and unlock opportunities for personal growth, professional development, 
          and international networking.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Member Benefits</CardTitle>
              <CardDescription>What you get as a BEST member</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Access to all BEST events and courses</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>International networking opportunities</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Leadership and soft skills development</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Direct contact with companies</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Participation in study exchanges (BSE)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Free training sessions and workshops</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Requirements</CardTitle>
              <CardDescription>Who can join BEST</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Student at University of Maribor</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Studying engineering or technology</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Motivated and enthusiastic</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Team player mindset</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Willingness to contribute</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Basic English proficiency</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Join?</CardTitle>
            <CardDescription>
              Applications are open! Fill out the application form to start your BEST journey.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                The application process includes:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                <li>Fill out the online application form</li>
                <li>Attend an introduction meeting</li>
                <li>Participate in team activities</li>
                <li>Complete the membership confirmation</li>
              </ol>
              <Button size="lg" className="mt-4">
                Apply Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BecomeMember;
