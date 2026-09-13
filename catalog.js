
/* =========================
   ФІЛЬТРИ
========================= */

const brandFilter =
    document.getElementById("brandFilter");

const typeFilter =
    document.getElementById("typeFilter");

const priceFilter =
    document.getElementById("priceFilter");

const cars =
    document.querySelectorAll(".car-card");

const noCars =
    document.getElementById("noCars");


function filterCars() {

    const brand = brandFilter.value;
    const type = typeFilter.value;
    const price = priceFilter.value;

    let found = 0;


    cars.forEach(car => {

        const carBrand =
            car.dataset.brand;

        const carType =
            car.dataset.type;

        const carPrice =
            Number(car.dataset.price);


        let show = true;


        /* Марка */

        if (
            brand !== "all" &&
            carBrand !== brand
        ) {
            show = false;
        }


        /* Кузов */

        if (
            type !== "all" &&
            carType !== type
        ) {
            show = false;
        }


        /* Ціна */

        if (
            price !== "all" &&
            carPrice > Number(price)
        ) {
            show = false;
        }


        if (show) {

            car.style.display = "block";

            found++;

        } else {

            car.style.display = "none";

        }

    });


    if (found === 0) {

        noCars.style.display = "block";

    } else {

        noCars.style.display = "none";

    }

}


/* Запускаємо фільтр */

brandFilter.addEventListener(
    "change",
    filterCars
);

typeFilter.addEventListener(
    "change",
    filterCars
);

priceFilter.addEventListener(
    "change",
    filterCars
);


/* =========================
   ВИБІР АВТО
========================= */

const modal =
    document.getElementById("modal");

const modalName =
    document.getElementById("modalName");

const modalPrice =
    document.getElementById("modalPrice");

const modalInfo =
    document.getElementById("modalInfo");

const closeModal =
    document.getElementById("closeModal");

const chooseButtons =
    document.querySelectorAll(".choose-btn");


chooseButtons.forEach(button => {

    button.addEventListener("click", () => {

        modalName.textContent =
            button.dataset.name;

        modalPrice.textContent =
            button.dataset.price;

        modalInfo.textContent =
            button.dataset.info;


        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* Закрити */

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

    document.body.style.overflow = "auto";

});


/* Закрити при кліку за вікном */

modal.addEventListener("click", event => {

    if (event.target === modal) {

        modal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});


/* ESC */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        modal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});