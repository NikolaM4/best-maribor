const Courses = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Academic Courses</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          BEST courses are hands-on technical training events where students learn from industry professionals 
          and academics. Courses typically last one week and cover cutting-edge topics in engineering and technology.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">What to Expect</h2>
        <p className="text-muted-foreground mb-4">
          Courses combine theoretical knowledge with practical workshops, company visits, and networking 
          opportunities. You'll work on real-world projects and gain insights into industry practices.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Topics</h2>
        <p className="text-muted-foreground mb-4">
          Past course topics have included: Artificial Intelligence, Robotics, Sustainable Energy, 
          Software Development, IoT, Data Science, and more.
        </p>

        <div className="text-center py-12">
          <p className="text-muted-foreground">Check back soon for upcoming course announcements!</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
