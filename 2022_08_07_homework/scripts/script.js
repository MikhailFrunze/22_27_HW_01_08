//Задан массив объектов workers. Выведите на экран карточки со следующей информацией по всем работникам: ID, Имя, Фамилия, Возраст, Зарплата, фото. Зарплата рассчитывается через умножение 
//ставки на количество дней. Карточки должны включать отображение фотографии. Примените стили к карточкам: width, padding, border, background-color.

const workers = [
    {
        id: 1,
        first_name: "Olga",
        last_name: "Petrova",
        age: 18,
        rate: 100,
        days: 15,
        photo: "https://reqres.in/img/faces/12-image.jpg",
        progress: 50
    },
    {
        id: 2,
        first_name: "Petr",
        last_name: "Ivanov",
        age: 46,
        rate: 70,
        days: 22,
        photo: "https://reqres.in/img/faces/4-image.jpg",
        progress: 10
    },
    {
        id: 3,
        first_name: "Oleg",
        last_name: "Orlov",
        age: 32,
        rate: 34,
        days: 10,
        photo: "https://reqres.in/img/faces/10-image.jpg",
        progress: 75
    },
    {
        id: 4,
        first_name: "Irina",
        last_name: "Medvedeva",
        age: 22,
        rate: 85,
        days: 17,
        photo: "https://reqres.in/img/faces/2-image.jpg",
        progress: 30
    },
];

const rootElem = document.querySelector('.root');

workers.forEach(({ id, first_name, last_name, age, rate, days, photo, progress }) => {
    const card = document.createElement('div');
    const idElem = document.createElement('p');
    const firstNameElem = document.createElement('p');
    const lastNameElem = document.createElement('p');
    const ageElem = document.createElement('p');
    const rateElem = document.createElement('p');
    const daysElem = document.createElement('p');
    const photoElem = document.createElement('img');
    const progressElem = document.createElement('p');
    const wageElem = document.createElement('p');

    idElem.innerText = `ID: ${id}`;
    firstNameElem.innerText = `First name: ${first_name}`;
    lastNameElem.innerText = `Last name: ${last_name}`;
    ageElem.innerText = `Age: ${age}`;
    rateElem.innerText = `Rate: ${rate}`;
    daysElem.innerText = `Days: ${days}`;
    photoElem.setAttribute('src', `${photo}`);
    photoElem.setAttribute('alt', "Worker's photo");
    progressElem.innerText = `Progress: ${progress}`;
    wageElem.innerText = `Wage: ` + `${rate}` * `${days}`;
   
    card.append(idElem, firstNameElem, lastNameElem, ageElem, rateElem, daysElem, photoElem, progressElem, wageElem);
    rootElem.append(card);
});



