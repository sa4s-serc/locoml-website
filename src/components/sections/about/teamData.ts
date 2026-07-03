export interface Contributor {
  id: string;
  name: string;
  role: string;
  photo: string | null;
  institution?: string;
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
      name: 'Dr. Karthik Vaidhyanathan',
      role: 'Faculty Advisor',
      institution: 'Software Engineering Research Centre (SERC)\nIIIT Hyderabad',
      photo: '/team/karthik-vaidhyanathan.jpg',
    },
  ],
  researchTeam: [
    {
      id: 'chandrasekar',
      name: 'Chandrasekar S',
      role: "Master's Student",
      photo: '/team/chandrasekar-s.jpg',
    },
    {
      id: 'kritin',
      name: 'Kritin Maddireddy',
      role: 'Honours Student',
      photo: '/team/maddireddy-kritin.jpg',
    },
    {
      id: 'santhosh',
      name: 'Santhosh Kotekal Methukula',
      role: 'Honours Student',
      photo: '/team/kotekal-santhosh.jpg',
    },
  ],
  btechStudents: [
    {
      id: 'nijesh',
      name: 'Nijesh Raghava',
      role: 'B.Tech Student',
      photo: null, // → /team/nijesh-raghava.jpg
    },
    {
      id: 'vamseedhar',
      name: 'Varanasi Vamseedhar',
      role: 'B.Tech Student',
      photo: null, // → /team/varanasi-vamseedhar.jpg
    },
    {
      id: 'ayush',
      name: 'Ayush Agarwal',
      role: 'B.Tech Student',
      photo: null, // → /team/ayush-agarwal.jpg
    },
    {
      id: 'siddharth',
      name: 'Siddharth Mavani',
      role: 'B.Tech Student',
      photo: '/team/siddharth-mavani.jpg',
    },
    {
      id: 'rohan',
      name: 'Rohan C',
      role: 'B.Tech Student',
      photo: null, // → /team/rohan-c.jpg
    },
    {
      id: 'harshit',
      name: 'Harshit Karwal',
      role: 'B.Tech Student',
      photo: '/team/harshit-karwal.jpg',
    },
    {
      id: 'mukta',
      name: 'Mukta Chanda',
      role: 'B.Tech Student',
      photo: '/team/mukta-chanda.jpg',
    },
    {
      id: 'shashwat',
      name: 'Shashwat Dash',
      role: 'B.Tech Student',
      photo: '/team/shashwat-dash.jpg',
    },
  ],
  interns: [
    {
      id: 'sanjay',
      name: 'Sanjay J',
      role: 'Intern',
      photo: '/team/sanjay-j.jpg',
    },
    {
      id: 'shelvaaathithyan',
      name: 'Shelvaaathithyan VK',
      role: 'Intern',
      photo: '/team/shelvaaathithyan-vk.jpg',
    },
  ],
};
