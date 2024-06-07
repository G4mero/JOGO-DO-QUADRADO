/*
Nomes dos integrantes:
- Rafael Souza - RA:753043
- Guilherme Caires - RA:754293
*/
const courses = [
    {
        name: "Análise e Desenvolvimento de Sistemas",
        image: "FUNDAÇÃO.png",
        link: "https://www.fsa.br/graduacao/analise-e-desenvolvimento-de-sistemas/"
    },
{
    name: "Ciência de Dados e Inteligência Artificial",
    image: "FUNDAÇÃO.png",
    link: "https://www.fsa.br/graduacao/ciencia-de-dados-inteligencia-artificial/"
},
{
    name: "Ciência da Computação",
    image: "FUNDAÇÃO.png",
    link: "https://www.fsa.br/graduacao/ciencia-da-computacao/"
},
{
    name: "Gestão da Tecnologia da Informação",
    image: "FUNDAÇÃO.png",
    link: "https://www.fsa.br/graduacao/gestao-ti/"
},
{
    name: "Engenharia da Computação",
    image: "FUNDAÇÃO.png",
    link: "https://www.fsa.br/graduacao/engenharia-da-computacao/"
},
{
    name: "Redes de Computadores",
    image: "FUNDAÇÃO.png",
    link: "https://www.fsa.br/graduacao/redes-de-computadores/"
},
{
    name: " Sistemas de Informação",
    image: "FUNDAÇÃO.png",
    link: "https://www.fsa.br/graduacao/sistema-de-informacao/"
},
];

function displayCourses() {
    const coursesSection = document.getElementById("courses");

    courses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course");

        const image = document.createElement("img");
        image.src = course.image;
        courseDiv.appendChild(image);

        const title = document.createElement("h2");
        title.textContent = course.name;
        courseDiv.appendChild(title);

        const link = document.createElement("p");
        const anchor = document.createElement("a");
        anchor.href = course.link;
        anchor.textContent = "Click aqui, para saber mais sobre o curso...";
        link.appendChild(anchor);
        courseDiv.appendChild(link);

        coursesSection.appendChild(courseDiv);
    });
}

window.onload = function() {
    displayCourses();
};
