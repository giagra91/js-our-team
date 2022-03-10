// Array di oggetti fornito
const team = [
    {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
    },
    {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
    },
    {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
    },
    {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
    },
    {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
    },
];


// Ciclo for in per stampare in console gli elementi dei vari oggetti sottoforma di stringa
for (let i = 0 ; i < team.length ; i++ ){

    document.getElementById(`output`).innerHTML+=`
    <div class="col-4 p-4 text-center">
    <img class="img-fluid" src="img/${team[i].image}">
    <h5 class="fw-bold my-3 fs-4 d-inline-block">${team[i].name}</h5>
    <span class="px-5 py-1">${team[i].role}/span>
</div>
    `
}
