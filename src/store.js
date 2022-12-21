import { reactive } from 'vue'

// Importo lo "store"
export const store = reactive({
    // Header Content
    headerTitle: "Barber Shop",
    underTitle: "The Pinnacle of Male Grooming",

    // Main Top Content
    upMainTitle: "AWARD WINNING",
    mainTitle: "Pro Barbers",

    // Footer Content
    contentFooter: [
        {
            img: "images/avadabarbers_footer_shop_image-300x234.png",
            text: "Shop Our Range Now",
            url: "#",

        },
        {
            img: "images/avadabarbers-logo-x1.png",
            textOne: "Avada Barbers",
            textTwo: "23 New York Street",
            textThree: "New York City",
            textFour: "info@yourwebsite.com",
            textFive: "+1(555) 555-1212",
            textSix: "Follow Us",
        },
        {
            img: "images/avadabarbers_footer_appointment_image-300x234.png",
            text: "Book Your Appointment",
            url: "#",

        }
    ],
});