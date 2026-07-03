export interface Contributor {
  id: string;
  name: string;
  role: string;
  photo: string | null;
  institution?: string; // e.g., for Faculty Advisor
}

export interface TeamData {
  faculty: Contributor[];
  researchTeam: Contributor[];
  btechStudents: Contributor[];
  interns: Contributor[];
}

export const teamData: TeamData = {
  faculty: [
    {
      id: 'karthik',
      name: 'Prof. Karthik Vaidhyanathan',
      role: 'Faculty Advisor',
      institution: 'Software Engineering Research Centre (SERC)\nIIIT Hyderabad',
      photo: null,
    },
  ],
  researchTeam: [
    {
      id: 'chandrasekar',
      name: 'Chandrasekar S',
      role: "Master's Student",
      photo: null,
    },
    {
      id: 'kritin',
      name: 'Maddireddy Kritin',
      role: 'Honours Student',
      photo: null,
    },
    {
      id: 'santhosh',
      name: 'Kotekal Methukula Santhosh',
      role: 'Honours Student',
      photo: null,
    },
  ],
  btechStudents: [
    {
      id: 'nijesh',
      name: 'Nijesh Raghava',
      role: 'B.Tech Student',
      photo: null,
    },
    {
      id: 'vamseedhar',
      name: 'Varanasi Vamseedhar',
      role: 'B.Tech Student',
      photo: null,
    },
    {
      id: 'ayush',
      name: 'Ayush Agarwal',
      role: 'B.Tech Student',
      photo: null,
    },
    {
      id: 'siddharth',
      name: 'Siddharth Mavani',
      role: 'B.Tech Student',
      photo: null,
    },
    {
      id: 'rohan',
      name: 'Rohan C',
      role: 'B.Tech Student',
      photo: null,
    },
    {
      id: 'harshit',
      name: 'Harshit Karwal',
      role: 'B.Tech Student',
      photo: null,
    },
    {
      id: 'mukta',
      name: 'Mukta Chanda',
      role: 'B.Tech Student',
      photo: null,
    },
    {
      id: 'shashwat',
      name: 'Shashwat Dash',
      role: 'B.Tech Student',
      photo: null,
    },
  ],
  interns: [
    {
      id: 'sanjay',
      name: 'Sanjay J',
      role: 'Intern',
      photo: null,
    },
    {
      id: 'shelvaaathithyan',
      name: 'Shelvaaathithyan VK',
      role: 'Intern',
      photo: null,
    },
  ],
};
