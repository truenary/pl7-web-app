
import TeamMemberCard from "./TeamMemberCard";

function TeamMember() {
  const teamMembers = [
       { imageSrc: "nikita.jpg", name: "Nikita  baini", role: "drawing " },
        { imageSrc: "smriti.jpg", name: "smriti upriti", role: "Flutter " },
    { imageSrc: "kals.JPG", name: "Shraddha Regmi", role: "Flutter Developer" },
    { imageSrc: "logo.jpg", name: "Bikal Rumba", role: "Flutter Developer" },
    { imageSrc: "dai.jpg", name: "Rahul Dai", role: "React Developer" },
    { imageSrc: "puja.jpg", name: "Puja Lama", role: "Backend Developer" },
     { imageSrc: "logo.jpg", name: "Niruta  baini", role: "Backend Developer" }
   
  

    
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center text-blue-500 capitalize lg:text-3xl">Our Executive Team</h1>
      <p className="max-w-2xl mx-auto my-6 text-center text-blue-500">This is our team.</p>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4 mx-12 my-11">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} imageSrc={member.imageSrc} name={member.name} role={member.role} />
        ))}
      </div>
    </div>
  );
}

export default TeamMember;
