const navTitle = document.querySelectorAll(".nav-sec");
const footerTitles = document.querySelectorAll(".footer-cont");
const subTitle = document.querySelector(".subtitle");
const artTexts = document.querySelectorAll(".art-text");
const sectionTitles = document.querySelectorAll(".section_title");
const footerContent = document.querySelector(".footer_content");
const projectsTitle = document.querySelectorAll(".title-project");
const projectsDescription = document.querySelectorAll(".desc-project");
const aboutTitle = document.querySelectorAll(".about_title");
const contactContent = document.querySelector(".contact_content");
const aboutContent = document.querySelectorAll(".about_content");
const btnLang = document.querySelector(".change-lang");
const btnEnglish = document.querySelector(".lang-en");
const btnPortuguese = document.querySelector(".lang-pt");
const btnProjects = document.querySelector(".go-projects");
const techUsed1 = document.querySelectorAll(".tech-used1");
const techUsed2 = document.querySelectorAll(".tech-used2");
const techUsed3 = document.querySelectorAll(".tech-used3");
const techUsed4 = document.querySelectorAll(".tech-used4");
const techUsed5 = document.querySelectorAll(".tech-used5");

const tooltip = document.querySelectorAll(".bottom");

////////////////////////////////// toggle language

btnLang.addEventListener("click", () => {
  btnEnglish.classList.contains("hiddden") ? enableEnglish() : enablePortuguese();
});

function enableEnglish() {
  btnPortuguese.classList.toggle("hiddden");

  setTimeout(function () {
    btnLang.style.flexDirection = "row";
  }, 350);

  setTimeout(function () {
    btnEnglish.classList.toggle("hiddden");
    lang();
  }, 300);
}

function enablePortuguese() {
  btnEnglish.classList.toggle("hiddden");

  setTimeout(function () {
    btnLang.style.flexDirection = "row-reverse";
  }, 350);

  setTimeout(function () {
    btnPortuguese.classList.toggle("hiddden");
    lang();
  }, 300);
}

const data = {
  english: {
    navbar: ["Projects", "About", "Contact"],
    tooltip_content: ["Copied!", "Copied!"],
    subtitle: "Web developer",
    project_titles: [
      "Formula 1 2022 Drivers HUB",
      "Brazilian Food Cart",
      "API Locker Management",
      "GitHub UserSearch",
      "Countries Info",
    ],
    project_description: [
      "One of my favorites projects. The website is built using React and it displays content about the drivers of Formula 1 using Ergast API and it fetches pictures from the Wikipedia API using the driver's name.",
      "React project that uses hooks (useReducer, useEffect, useContent and others) to manage a food menu cart. The website is fully responsive and it brings brazilian food to the internet.",
      "Project created to practice Express/Node and their aspects of coding. This project has the objective to build knowledge to build more complex APIs in the future as the whole project does not rely in any database service. This future API was tested using Postman.",
      "Project that uses fetchAPI and async await functions. The GitHub API is being used to fetch data from GitHub using the data provided by the user.",
      "Repository and project that displays data from countries from the user's search. This project uses AJAX API calls to provide data.",
    ],
    about_title: ["Abstract", "Hobbies", "Skills"],
    about_content: [
      "My name is Guilherme Lopes and I’m a self taught web developer. Despite the fact that I'm a student of the Bachelor's Information Systems, I have studied code using free resources such as videos and courses. I have a huge interest about the web development envolving both front-end and back-end. Right now I'm studying React and Node/Express.",
      "When I'm not coding or studying, I'm lifting weights or listenning to some music.",
      "Coding technologies",
      "Other tools",
    ],
    tech_used1: ["React", "Styled Components", "ChartJs", "Axios", "ErgastAPI", "WikipediaAPI"],
    tech_used2: ["React", "useReducer", "useContext", "Styled Components", "Components patterns"],
    tech_used3: ["Node", "Express", "Postman"],
    tech_used4: ["HTML", "SCSS", "JavaScript", "FetchAPI", "async/await", "GitHubAPI", "infinite scrolling"],
    tech_used5: ["HTML", "SCSS", "useContext", "Styled Components", "Components patterns"],
    project_text: "Projects",
    contact_content: `You can always contact me by email or LinkedIn.`,
    footer_content: "Made with ♥  by Guilherme Lopes",
    footer_titles: ["Projects", "About", "Contact"],
  },
  portuguese: {
    navbar: ["Projetos", "Sobre", "Contato"],
    tooltip_content: ["Copiado!", "Copiado!"],
    subtitle: "Desenvolvedor web",
    project_titles: [
      "Formula 1 2022 Drivers HUB",
      "Carrinho de Comida Brasileira",
      "API de Gerenciamento de Armários",
      "GitHub Procura de Usuário",
      "Informações de Países",
    ],
    project_description: [
      "Um dos meus projetos favoritos. O site é construído usando React e exibe conteúdo sobre os pilotos da Fórmula 1 usando a API Ergast e busca imagens da API da Wikipedia usando o nome do piloto.",
      "Projeto React que utiliza hooks (useReducer, useEffect, useContent e outros) para gerenciar um carrinho de comidas brasileiras. O site é totalmente responsivo e traz a comida brasileira para a internet.",
      "Projeto criado para praticar Express/Node e seus aspectos de código. Este projeto tem como objetivo construir conhecimento para construir APIs mais complexas no futuro, pois todo o projeto não depende de nenhum serviço de banco de dados. Esta futura API foi testada usando o Postman.",
      "Projeto que usa as funções fetchAPI e async await. A API do GitHub está sendo usada para buscar dados do GitHub usando os dados fornecidos pelo usuário.",
      "Repositório e projeto que exibe dados de países da pesquisa do usuário. Este projeto usa chamadas de API AJAX para fornecer dados.",
    ],
    about_title: ["Resumo", "Hobbies", "Habilidades"],
    about_content: [
      "Meu nome é Guilherme Lopes e eu aprendi a programar por minha conta, apesar de ser estudante do curso de Sistemas de Informação em Curitiba-PR. Eu estudei por diversas plataformas e metodologias gratuitas de programação. Eu tenho um grande interesse no desenvolvimento web, englobando tanto o lado front-end quanto o lado back-end. Neste momento, estou estudando React e Node/Express.",
      "Quando não estou programando, provavelmente estou levando pesos.",
      "Tecnologias de programação",
      "Outras ferramentas",
    ],
    tech_used1: ["React", "Styled Components", "ChartJs", "Axios", "ErgastAPI", "WikipediaAPI"],
    tech_used2: ["React", "useReducer", "useContext", "Styled Components", "Components patterns"],
    tech_used3: ["Node", "Express", "Postman"],
    tech_used4: ["HTML", "SCSS", "JavaScript", "FetchAPI", "async/await", "GitHubAPI", "infinite scrolling"],
    tech_used5: ["HTML", "SCSS", "useContext", "Styled Components", "Components patterns"],
    project_text: "Projetos",
    contact_content: "Você pode sempre me contactar por e-mail ou por LinkedIn.",
    footer_content: "Feito com ♥ pelo Guilherme Lopes",
    footer_titles: ["Projetos", "Sobre", "Contato"],
  },
};

function lang() {
  const attr = (btnEnglish.classList.contains("hiddden") ? btnPortuguese : btnEnglish).getAttribute("language");

  navTitle.forEach((el, index) => (el.textContent = data[attr].navbar[index]));
  footerTitles.forEach((el, index) => (el.textContent = data[attr].footer_titles[index]));
  sectionTitles.forEach((title, index) => (title.textContent = data[attr].navbar[index]));
  projectsTitle.forEach((project_titles, index) => (project_titles.textContent = data[attr].project_titles[index]));
  projectsDescription.forEach(
    (project_description, index) => (project_description.textContent = data[attr].project_description[index])
  );
  aboutTitle.forEach((about_title, index) => (about_title.textContent = data[attr].about_title[index]));
  aboutContent.forEach((about_content, index) => (about_content.textContent = data[attr].about_content[index]));
  techUsed1.forEach((tech_used1, index) => (tech_used1.textContent = data[attr].tech_used1[index]));
  techUsed2.forEach((tech_used2, index) => (tech_used2.textContent = data[attr].tech_used2[index]));
  techUsed3.forEach((tech_used3, index) => (tech_used3.textContent = data[attr].tech_used3[index]));
  techUsed4.forEach((tech_used4, index) => (tech_used4.textContent = data[attr].tech_used4[index]));
  techUsed5.forEach((tech_used5, index) => (tech_used5.textContent = data[attr].tech_used5[index]));
  tooltip.forEach((tooltip, index) => (tooltip.textContent = data[attr].tooltip_content[index]));

  contactContent.textContent = data[attr].contact_content;
  subTitle.textContent = data[attr].subtitle;
  footerContent.innerHTML = data[attr].footer_content;
  btnProjects.textContent = data[attr].project_text;
}

lang();
