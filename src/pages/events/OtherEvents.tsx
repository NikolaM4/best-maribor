const OtherEvents = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Other BEST Events</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Beyond courses and career events, BEST organizes many other activities including workshops, 
          social events, international meetings, and training sessions.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Workshops & Training</h2>
        <p className="text-muted-foreground mb-4">
          Regular workshops on topics like leadership, project management, public speaking, and 
          digital marketing help members develop soft skills.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Social Events</h2>
        <p className="text-muted-foreground mb-4">
          Team building activities, movie nights, game nights, and trips help build strong 
          friendships within the BEST community.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">International Meetings</h2>
        <p className="text-muted-foreground mb-4">
          BEST organizes several international meetings each year where representatives from all 
          local groups gather to share experiences and plan future activities.
        </p>
      </div>
    </div>
  );
};

export default OtherEvents;
