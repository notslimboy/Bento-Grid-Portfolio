export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  projectRelation: string;
  text: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Andi Wijaya",
    role: "Lead Product Manager",
    company: "Garudafood",
    projectRelation: "Chocolatos X-Quest",
    text: "Raka did an amazing job designing the interactive loops for our Chocolatos edutourism ride. He has a unique talent for bridging physical sensor inputs with highly engaging game mechanics.",
    rating: 5
  },
  {
    id: "t2",
    name: "Sarah Clarissa",
    role: "Campaign Director",
    company: "Momogi Campaign",
    projectRelation: "Momogi Roblox Nusantara",
    text: "His game economy and balancing model for our Roblox campaign was outstanding. He managed to create a highly rewarding physical-to-digital redemption flow that drove great player retention.",
    rating: 5
  },
  {
    id: "t3",
    name: "Dr. Marcus Vance",
    role: "Executive Producer",
    company: "Legends of Learning",
    projectRelation: "Science School Adventure",
    text: "Working with Raka on our educational physics stages was a breeze. He structured complex force and gravity concepts into fun, intuitive level designs that perfectly fit the US curriculum.",
    rating: 5
  },
  {
    id: "t4",
    name: "Nauval",
    role: "Lead Developer",
    company: "Miraimimpi",
    projectRelation: "Kocheng: BoB",
    text: "Raka's design for Kocheng: BoB was incredibly chaotic and fun. His understanding of physics-based play and level dynamics kept our player community highly competitive and engaged.",
    rating: 5
  },
  {
    id: "t5",
    name: "Miftachus Tsaqif",
    role: "Lead Programmer",
    company: "Monster Group",
    projectRelation: "Mahabrats",
    text: "Raka did a phenomenal job balancing the game systems and virtual economies for Mahabrats. His formulas and design sheets were incredibly precise and easy for the dev team to implement.",
    rating: 5
  },
  {
    id: "t6",
    name: "Adhy",
    role: "Co-Founder",
    company: "Selasar Game Design",
    projectRelation: "SGD Community",
    text: "Raka is an incredibly diligent figure in Selasar Game Design. He is always eager to share his game design knowledge with the community while actively keeping our discussions healthy and conducive.",
    rating: 5
  },
  {
    id: "t7",
    name: "Anung",
    role: "Community Moderator",
    company: "Selasar Game Design",
    projectRelation: "SGD Community",
    text: "His passion for mentoring and sharing design resources has helped many aspiring designers in SGD grow. Raka's consistency and tenacity are key reasons why our community stays active and positive.",
    rating: 5
  },
  {
    id: "t8",
    name: "Alvikha",
    role: "Core Member",
    company: "Selasar Game Design",
    projectRelation: "SGD Community",
    text: "Raka has a wonderful way of keeping the community atmosphere warm and productive. He regularly shares industry insights and goes out of his way to help others solve design blocks.",
    rating: 5
  }
];
