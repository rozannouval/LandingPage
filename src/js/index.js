let typedTitle = new Typed(".typing-title", {
  strings: [
    "Rozan Nouval",
    "Welcome in My Portfolio Website",
    "I am a Student at SMK Yadika Soreang",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});

// Toggle class active untuk hamburger menu
const navbarNavigasi = document.querySelector(".text-hilang");

// SKILLS
const skills = [
  { name: "HTML", percentage: 80 },
  { name: "CSS", percentage: 80 },
  { name: "JavaScript", percentage: 40 },
  { name: "React.js", percentage: 50 },
  { name: "Next.js", percentage: 60 },
  { name: "Astro.js", percentage: 25 },
  { name: "Tailwind", percentage: 80 },
  { name: "Shadcn UI", percentage: 80 },
  { name: "PHP", percentage: 10 },
  { name: "Express.js", percentage: 30 },
  { name: "Supabase", percentage: 20 },
];

const skillsContainer = document.getElementById('skillsContainer');

skills.forEach((skill) => {
  const skillElement = document.createElement('div');
  skillElement.className = 'mb-4';

  const innerHTML = `
    <div class="flex items-center justify-between">
      <span class="font-semibold">${skill.name}</span>
      <span class="text-gray-600">${skill.percentage}%</span>
    </div>
    <div class="bg-gray-300 rounded-full h-4 mt-1">
      <div class="bg-blue-500 h-full rounded-full" style="width: ${skill.percentage}%"></div>
    </div>
  `;

  skillElement.innerHTML = innerHTML;
  skillsContainer.appendChild(skillElement);
});