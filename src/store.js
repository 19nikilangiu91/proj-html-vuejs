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

    // Main Reviews Content
    // Shawing Section

    imageShawing: "images/shaving_butter-200x200.png",
    titleShawing: "THIS MONTHS FEATURED PRODUCT",
    titleMainShawing: "SHAVING BUTTER",
    textShawing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta aperiam et officiis expedita aut? Qui voluptate tempora inventore ad assumenda iste dicta quidem consectetur fugit, nemo voluptatem laboriosam id?",

    buttonTitleShawing: "BUY NOW",

    // Reviews Section

    contentReviews: [
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta aperiam et officiis expedita aut? Qui voluptate tempora inventore ad assumenda iste dicta quidem consectetur fugit, nemo voluptatem laboriosam id?",
            img: "images/avadabarbers-trimcut-gallery6-200x200.jpg",
            name: "John Doe",
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta aperiam et officiis expedita aut? Qui voluptate tempora inventore ad assumenda iste dicta quidem consectetur fugit, nemo voluptatem laboriosam id?",
            img: "images/avadabarbers-trimcut-gallery7-200x201.jpg",
            name: "Pete Jones",
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta aperiam et officiis expedita aut? Qui voluptate tempora inventore ad assumenda iste dicta quidem consectetur fugit, nemo voluptatem laboriosam id?",
            img: "images/avadabarbers-trimcut-gallery3-200x201.jpg",
            name: "Mark Wilson",
        }
    ],

    titleReviews: "WHAT PEOPLE SAY",
    titleMainReviews: "Reviews",

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

    // Main Blog Content

    contentBlog: [
        {
            img: "images/avadabarbers-second-blog-320x202.jpg",
            title: "AvadaBarbers Now Open",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta aperiam et officiis expedita aut? Qui voluptate tempora inventore ad assumenda iste dicta quidem consectetur fugit, nemo voluptatem laboriosam id?",

        },
        {
            img: "images/avadabarbers-choosing-blog-320x202.jpg",
            title: "Choosing the Right Barber",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta aperiam et officiis expedita aut? Qui voluptate tempora inventore ad assumenda iste dicta quidem consectetur fugit, nemo voluptatem laboriosam id?",
        },
        {
            img: "images/avadabarbers-ourservice-blog-320x202.jpg",
            title: "Quick Service Guide",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta aperiam et officiis expedita aut? Qui voluptate tempora inventore ad assumenda iste dicta quidem consectetur fugit, nemo voluptatem laboriosam id?",
        }
    ],

    titleReviews: "TALES FROM THE BARBER SHOP",
    titleMainReviews: "Recent Blog Posts",
    buttonTitleBlog: "READ MORE FROM OUR BLOG",


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