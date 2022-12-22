import { reactive } from 'vue'

// Importo lo "store"
export const store = reactive({

    // MenuNav Content
    menuNav: [
        {
            text: "Shop Our Range Now",
            url: "#",
        },
        {
            text: "Book Your Appointment",
            url: "#",
        }
    ],

    // Header Content
    titleUpHeader: "Barber Shop",
    titleDownHeader: "The Pinnacle of Male Grooming",
    titleButtonHeader: "LEARN MORE",

    // Main Top Content
    upMainTitle: "AWARD WINNING",
    upMainTitle: "Pro Barbers",
    upMainButton: "MEET YOUR NEW BARBER",

    // Main Services Content

    titleServices: "MENS GROMING",
    titleMainServices: "SERVICES",
    buttonTitleServices: "READ ABOUT OUR SERVICES",

    contentServices: [
        {
            img: "images/avadabarbers-washndry-icon.png",
            title: "Trim & Cut",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta aperiam et officiis expedita aut? Qui voluptate tempora inventore ad assumenda iste dicta quidem consectetur fugit, nemo voluptatem laboriosam id?",

        },
        {
            img: "images/avadabarbers-trimcut-icon-before.png",
            title: "Wash & Dry",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta aperiam et officiis expedita aut? Qui voluptate tempora inventore ad assumenda iste dicta quidem consectetur fugit, nemo voluptatem laboriosam id?",
        },
        {
            img: "images/avadabarbers-beardtrim-icon.png",
            title: "Beard Tidy",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta aperiam et officiis expedita aut? Qui voluptate tempora inventore ad assumenda iste dicta quidem consectetur fugit, nemo voluptatem laboriosam id?",
        }
    ],

    // // Main Products Content

    titleProducts: "WE HAVE YOUR COVERED",
    titleMainProducts: "AVADA GROMING PRODUCTS",
    buttonTitleProducts: "SHOP OUR PRODUCT RANGE",

    contentProducts: [
        {
            img: "images/brush_dark-400x400.png",
            title: "Brush",
            text: "$15.00",
        },
        {
            img: "images/scissors-400x400.png",
            title: "Scissors",
            text: "$85.00",
        },
        {
            img: "images/hot_oil_dark-400x400.png",
            title: "Hot Oil",
            text: "$15.00",
        },
        {
            img: "images/straight_razor_dark-400x400.png",
            title: "Straight Razor",
            text: "$30.00",
        }
    ],


    // Footer Content
    contentFooter: [
        {
            img: "images/avadabarbers_footer_shop_image-300x234.png",
            text: "Shop Our Range Now",
        },
        {
            img: "images/avadabarbers-logo-x1.png",
            textOne: "Avada Barbers",
            textTwo: "23 New York Street",
            textThree: "New York City",
            textFour: "info@yourwebsite.com",
            textFive: "+1(555) 555-1212",
            textSix: "Follow Us",
            logOne: "<font-awesome-icon icon='fa-brands fa-facebook-f' />"
        },
        {
            img: "images/avadabarbers_footer_appointment_image-300x234.png",
            text: "Book Your Appointment",
        }
    ],
});