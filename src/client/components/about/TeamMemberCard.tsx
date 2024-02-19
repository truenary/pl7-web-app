import React from "react";

interface TeamMemberCardProps {
  imageSrc: string;
  name: string;
  role: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ imageSrc, name, role }) => {
  return (
    <div>
      <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={imageSrc} alt={name} />
        <h1 className="mt-4 text-2xl font-semibold capitalize text-blue-500 group-hover:text-white">{name}</h1>
        <p className="mt-2 text-blue-500 capitalize group-hover:text-gray-300">{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
