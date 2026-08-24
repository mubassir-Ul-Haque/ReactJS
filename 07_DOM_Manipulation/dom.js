/* =========================================================
   DOM SELECTION
========================================================= */

const searchInput =
    document.querySelector("#searchInput");

const category =
    document.querySelector("#category");

const cards =
    document.querySelectorAll(".product-card");

const images =
    document.querySelectorAll(".product-image");

const addButtons =
    document.querySelectorAll(".add-btn");

const cartCount =
    document.querySelector("#cartCount");

const resultCount =
    document.querySelector("#resultCount");

const emptyState =
    document.querySelector("#emptyState");

const imageModal =
    document.querySelector("#imageModal");

const previewImage =
    document.querySelector("#previewImage");

const closeModal =
    document.querySelector("#closeModal");

const contextMenu =
    document.querySelector("#contextMenu");

const mousePosition =
    document.querySelector("#mousePosition");


/* =========================================================
   STATE
========================================================= */

/*
    This variable represents our current cart count.

    Later in real SaaS applications,
    state can become much more complex.
*/

let cart = 0;


/* =========================================================
   LEVEL 4 — MOUSE EVENTS
========================================================= */


/* -----------------------------------------
   PRODUCT HOVER
----------------------------------------- */

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("hovered");

    });


    card.addEventListener("mouseleave", () => {

        card.classList.remove("hovered");

    });

});


/* -----------------------------------------
   IMAGE CLICK → OPEN PREVIEW
----------------------------------------- */

images.forEach((image) => {

    image.addEventListener("click", () => {

        /*
            Take the clicked image's source
            and put it into the modal image.
        */

        previewImage.src = image.src;

        previewImage.alt = image.alt;

        /*
            Add .open

            CSS then changes:

            display: none
            ↓
            display: flex
        */

        imageModal.classList.add("open");

    });

});


/* -----------------------------------------
   CLOSE IMAGE MODAL
----------------------------------------- */

closeModal.addEventListener("click", () => {

    imageModal.classList.remove("open");

});


/* -----------------------------------------
   CLICK OUTSIDE MODAL IMAGE
----------------------------------------- */

imageModal.addEventListener("click", (event) => {

    /*
        If user clicks the dark background,
        close the modal.

        But if they click the image itself,
        don't close it.
    */

    if (event.target === imageModal) {

        imageModal.classList.remove("open");

    }

});


/* -----------------------------------------
   CUSTOM RIGHT CLICK
----------------------------------------- */

cards.forEach((card) => {

    card.addEventListener(
        "contextmenu",
        (event) => {

            /*
                Prevent browser's default
                right-click menu.
            */

            event.preventDefault();


            /*
                Put our custom menu
                where the mouse currently is.
            */

            contextMenu.style.left =
                `${event.clientX}px`;

            contextMenu.style.top =
                `${event.clientY}px`;


            contextMenu.classList.add("show");

        }
    );

});


/* -----------------------------------------
   CLOSE CONTEXT MENU
----------------------------------------- */

document.addEventListener("click", () => {

    contextMenu.classList.remove("show");

});


/* -----------------------------------------
   MOUSE POSITION
----------------------------------------- */

document.addEventListener("mousemove", (event) => {

    mousePosition.textContent =
        `X: ${event.clientX} | Y: ${event.clientY}`;

});


/* =========================================================
   LEVEL 5 — KEYBOARD EVENTS
========================================================= */


/* -----------------------------------------
   ESCAPE → CLOSE MODAL
----------------------------------------- */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        imageModal.classList.remove("open");

        contextMenu.classList.remove("show");

    }

});


/* -----------------------------------------
   CTRL + K → FOCUS SEARCH
----------------------------------------- */

document.addEventListener("keydown", (event) => {

    if (
        event.ctrlKey &&
        event.key.toLowerCase() === "k"
    ) {

        /*
            Prevent browser's default
            Ctrl + K behaviour.
        */

        event.preventDefault();


        /*
            Move cursor into search input.
        */

        searchInput.focus();

    }

});


/* -----------------------------------------
   ENTER KEY
----------------------------------------- */

searchInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        console.log(
            "Searching for:",
            searchInput.value
        );

    }

});


/* =========================================================
   LEVEL 6 — INPUT EVENTS
========================================================= */


/* -----------------------------------------
   SEARCH + FILTER FUNCTION
----------------------------------------- */

/*
    Instead of writing separate filtering
    logic for search and category,

    we create ONE reusable function.
*/

function filterProducts() {

    /*
        Get search text.

        Example:

        "HOOdie"

        becomes:

        "hoodie"
    */

    const query =
        searchInput.value
            .toLowerCase()
            .trim();


    /*
        Get selected category.

        Example:

        "clothing"
        "accessories"
        "all"
    */

    const selectedCategory =
        category.value;


    /*
        Keep track of how many products
        are currently visible.
    */

    let visibleProducts = 0;


    /* Check every product */

    cards.forEach((card) => {

        /*
            Read product name from:

            data-name="Hoodie"
        */

        const productName =
            card.dataset.name.toLowerCase();


        /*
            Read category from:

            data-category="clothing"
        */

        const productCategory =
            card.dataset.category;


        /*
            Does the product match search?
        */

        const matchesSearch =
            productName.includes(query);


        /*
            Does category match?

            "all" means everything matches.
        */

        const matchesCategory =
            selectedCategory === "all" ||
            productCategory === selectedCategory;


        /*
            BOTH conditions must be true.
        */

        if (
            matchesSearch &&
            matchesCategory
        ) {

            card.style.display = "";

            visibleProducts++;

        } else {

            card.style.display = "none";

        }

    });


    /* -----------------------------------------
       UPDATE RESULT COUNT
    ----------------------------------------- */

    resultCount.textContent =
        `${visibleProducts} product${
            visibleProducts !== 1 ? "s" : ""
        } found`;


    /* -----------------------------------------
       SHOW EMPTY STATE
    ----------------------------------------- */

    if (visibleProducts === 0) {

        emptyState.classList.add("show");

    } else {

        emptyState.classList.remove("show");

    }

}


/* -----------------------------------------
   SEARCH INPUT EVENT
----------------------------------------- */

searchInput.addEventListener(
    "input",
    filterProducts
);


/* -----------------------------------------
   CATEGORY CHANGE EVENT
----------------------------------------- */

category.addEventListener(
    "change",
    filterProducts
);


/* -----------------------------------------
   SEARCH FOCUS
----------------------------------------- */

searchInput.addEventListener("focus", () => {

    searchInput.classList.add("focused");

});


/* -----------------------------------------
   SEARCH BLUR
----------------------------------------- */

searchInput.addEventListener("blur", () => {

    searchInput.classList.remove("focused");

});


/* =========================================================
   CART SYSTEM
========================================================= */

addButtons.forEach((button) => {

    button.addEventListener("click", () => {

        /*
            Find the product card containing
            the clicked button.
        */

        const card =
            button.closest(".product-card");


        /*
            Read product name.

            Example:

            Hoodie
        */

        const productName =
            card.dataset.name;


        /*
            Increase cart count.
        */

        cart++;


        /*
            Update DOM.
        */

        cartCount.textContent = cart;


        /*
            Give feedback in console.
        */

        console.log(
            `${productName} added to cart`
        );


        /*
            Temporary button feedback.
        */

        const originalText =
            button.textContent;


        button.textContent =
            "✓ Added";


        /*
            Return button to normal
            after 800ms.
        */

        setTimeout(() => {

            button.textContent =
                originalText;

        }, 800);

    });

});


/* =========================================================
   INITIAL STATE
========================================================= */

/*
    Run filter once when page loads.

    This ensures result count starts correctly.
*/

filterProducts();