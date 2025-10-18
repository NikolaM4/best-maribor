import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import courseRobotics from '@/assets/course-robotics.jpg';
import courseCoding from '@/assets/course-coding.jpg';
import courseEnergy from '@/assets/course-energy.jpg';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Courses = () => {
  const heroRef = useScrollReveal();
  const courses = [
    {
      title: 'Robotics & Automation',
      description: 'Learn about modern robotics, automation systems, and hands-on experience with robot programming.',
      image: courseRobotics,
      duration: '5 days',
      level: 'Intermediate'
    },
    {
      title: 'Software Development',
      description: 'Intensive coding bootcamp covering modern web development, algorithms, and best practices.',
      image: courseCoding,
      duration: '7 days',
      level: 'Beginner to Advanced'
    },
    {
      title: 'Sustainable Energy',
      description: 'Explore renewable energy technologies, solar power systems, and sustainable engineering.',
      image: courseEnergy,
      duration: '5 days',
      level: 'Intermediate'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div ref={heroRef} className="scroll-reveal">
        <h1 className="text-4xl font-bold mb-6">Academic Courses</h1>
      </div>
      <div className="prose max-w-none mb-12">
        <p className="text-lg text-muted-foreground mb-6">
          BEST courses are hands-on technical training events where students learn from industry professionals 
          and academics. Courses typically last one week and cover cutting-edge topics in engineering and technology.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">What to Expect</h2>
        <p className="text-muted-foreground mb-4">
          Courses combine theoretical knowledge with practical workshops, company visits, and networking 
          opportunities. You'll work on real-world projects and gain insights into industry practices.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Featured Courses</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {courses.map((course, index) => (
          <Card key={index} className="overflow-hidden hover-scale group">
            <div className="overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {course.duration}
                </span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                  {course.level}
                </span>
              </div>
              <Button className="w-full">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center py-12 bg-muted/30 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">More Courses Coming Soon!</h3>
        <p className="text-muted-foreground mb-6">
          Check back regularly for new course announcements and registration dates.
        </p>
        <Button size="lg">Subscribe to Updates</Button>
      </div>
    </div>
  );
};

export default Courses;
