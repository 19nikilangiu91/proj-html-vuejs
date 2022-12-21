import { reactive } from 'vue'

// Importo lo "store"
export const store = reactive({
    // Header Content
    headerTitle: "Barber Shop",
    underTitle: "The Pinnacle of Male Grooming",
    contentFooter: [
        {
            img: "images/avadabarbers_footer_shop_image-300x234.png",
            text: "Shop Our Range Now",

        },
        {
            img: "images/avadabarbers-logo-x1.png",
            // textone: "Avada Barbers",
            // texttwo: "23 New York Street",
            // textthree: "New York City",
            // textfour: "info@yourwebsite.com",
            // textfive: "+1(555) 555-1212",
            // textsix: "Follow Us",
        },
        {
            img: "images/avadabarbers_footer_appointment_image-300x234.png",
            text: "Book Your Appointment",

        }
    ]
});