"use strict";

const SITE = {
    root: document.body.dataset.root || ".",
    email: "hikexnepal@gmail.com",
    phone: "+9779843931104",
    whatsapp: "9779843931104"
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DEFAULT_INCLUDED = ["Pre-trip planning support", "Local guide coordination", "Permit guidance for the selected route", "Accommodation and meals as confirmed in the final itinerary", "Ground transportation listed in the confirmed plan", "Basic first-aid support from the trekking team"];
const DEFAULT_EXCLUDED = ["International flights and Nepal visa", "Travel insurance and emergency evacuation", "Personal equipment and expenses", "Tips", "Services not listed as included"];
const DEFAULT_PACKING = ["Layered clothing", "Broken-in trekking shoes", "Rain protection", "Sun protection", "Personal medication", "Reusable water bottle", "Headlamp"];
const DEFAULT_SAFETY = "Final routes, transport, flights and day plans may change because of weather, road conditions, trail conditions or acclimatization needs. Hike X Nepal should confirm the safest plan directly before travel.";

const packages = [
    {
        id: "everest-base-camp",
        title: "Everest Base Camp Trek",
        activity: "Trekking",
        destination: "Everest Region",
        region: "Everest / Khumbu",
        duration: 14,
        durationText: "14 Days",
        difficulty: "Challenging",
        altitude: 5364,
        price: "Custom Quote — Free to Request",
        season: "Spring and Autumn",
        seasonMonths: ["Mar", "Apr", "May", "Sep", "Oct", "Nov"],
        image: "assets/images/treks/everest-base-camp.jpg",
        page: "trek-everest-base-camp.html",
        overview: "Follow the classic Khumbu trail through Sherpa villages, Sagarmatha National Park and dramatic viewpoints toward Everest Base Camp.",
        start: "Kathmandu / Lukla",
        end: "Kathmandu",
        groupSize: "Private or small group",
        accommodation: "Hotel and teahouse",
        meals: "Breakfast in cities; trek meals as confirmed",
        transportation: "Private transfer and Lukla flight subject to availability",
        permits: ["Sagarmatha National Park permit", "Khumbu Pasang Lhamu local permit"],
        interests: ["Trekking", "Adventure", "Nature"],
        highlights: ["Everest Base Camp and Khumbu Icefall views", "Kala Patthar viewpoint", "Namche Bazaar", "Tengboche Monastery"],
        itinerary: ["Kathmandu arrival and trek briefing", "Fly to Lukla and trek to Phakding", "Trek to Namche Bazaar", "Acclimatization in Namche", "Trek to Tengboche", "Trek to Dingboche", "Acclimatization in Dingboche", "Trek to Lobuche", "Everest Base Camp and Gorak Shep", "Kala Patthar and descend to Pheriche", "Return to Namche", "Return to Lukla", "Fly to Kathmandu", "Departure"]
    },
    {
        id: "annapurna-base-camp",
        title: "Annapurna Base Camp Trek",
        activity: "Trekking",
        destination: "Annapurna Region",
        region: "Annapurna",
        duration: 11,
        durationText: "11 Days",
        difficulty: "Moderate",
        altitude: 4130,
        price: "Custom Quote — Free to Request",
        season: "Spring and Autumn",
        seasonMonths: ["Mar", "Apr", "May", "Sep", "Oct", "Nov"],
        image: "assets/images/treks/annapurna-base-camp.jpg",
        page: "trek-annapurna-base-camp.html",
        overview: "Trek into the Annapurna Sanctuary through terraced villages, forests and a natural mountain amphitheater below Annapurna.",
        start: "Kathmandu / Pokhara",
        end: "Kathmandu / Pokhara",
        groupSize: "Private or small group",
        accommodation: "Hotel and teahouse",
        meals: "Breakfast in cities; trek meals as confirmed",
        transportation: "Tourist bus, private vehicle or flight as confirmed",
        permits: ["Annapurna Conservation Area Permit", "TIMS card if required by current rules"],
        interests: ["Trekking", "Nature"],
        highlights: ["Annapurna Base Camp panorama", "Machhapuchhre Base Camp", "Modi Khola valley", "Teahouse experience"],
        itinerary: ["Kathmandu to Pokhara", "Drive and trek to Chhomrong", "Trek to Himalaya", "Trek to Machhapuchhre Base Camp", "Reach Annapurna Base Camp", "Descend to Bamboo", "Trek to Jhinu Danda", "Drive to Pokhara", "Pokhara rest day", "Return to Kathmandu", "Departure"]
    },
    {
        id: "langtang-valley",
        title: "Langtang Valley Trek",
        activity: "Trekking",
        destination: "Langtang Region",
        region: "Langtang",
        duration: 10,
        durationText: "10 Days",
        difficulty: "Moderate",
        altitude: 4984,
        price: "Custom Quote — Free to Request",
        season: "Spring and Autumn",
        seasonMonths: ["Mar", "Apr", "May", "Sep", "Oct", "Nov"],
        image: "assets/images/treks/langtang-valley.jpg",
        page: "trek-langtang-valley.html",
        overview: "A scenic Himalayan valley route close to Kathmandu with forests, Tamang culture, yak pastures and optional viewpoint hikes.",
        start: "Kathmandu / Syabrubesi",
        end: "Kathmandu",
        groupSize: "Private or small group",
        accommodation: "Hotel and teahouse",
        meals: "Breakfast in cities; trek meals as confirmed",
        transportation: "Private or shared road transfer",
        permits: ["Langtang National Park permit", "TIMS card if required by current rules"],
        interests: ["Trekking", "Culture", "Nature"],
        highlights: ["Kyanjin Gompa", "Kyanjin Ri or Tserko Ri option", "Tamang villages", "Langtang Himal views"],
        itinerary: ["Kathmandu arrival", "Drive to Syabrubesi", "Trek to Lama Hotel", "Trek to Langtang Village", "Trek to Kyanjin Gompa", "Viewpoint acclimatization day", "Return to Lama Hotel", "Return to Syabrubesi", "Drive to Kathmandu", "Departure"]
    },
    {
        id: "mardi-himal",
        title: "Mardi Himal Trek",
        activity: "Trekking",
        destination: "Annapurna Region",
        region: "Annapurna",
        duration: 7,
        durationText: "7 Days",
        difficulty: "Moderate",
        altitude: 4500,
        price: "Custom Quote — Free to Request",
        season: "Spring and Autumn",
        seasonMonths: ["Mar", "Apr", "May", "Sep", "Oct", "Nov"],
        image: "assets/images/treks/mardi-himal.jpg",
        page: "trek-mardi-himal.html",
        overview: "A compact Annapurna ridge trek through rhododendron forest, high camp and close views of Machhapuchhre and Mardi Himal.",
        start: "Kathmandu / Pokhara",
        end: "Kathmandu / Pokhara",
        groupSize: "Private or small group",
        accommodation: "Hotel and teahouse",
        meals: "Breakfast in cities; trek meals as confirmed",
        transportation: "Tourist bus, private vehicle or flight as confirmed",
        permits: ["Annapurna Conservation Area Permit", "TIMS card if required by current rules"],
        interests: ["Trekking", "Nature"],
        highlights: ["Mardi Himal viewpoint", "Machhapuchhre close-up views", "Short Annapurna route", "Forest and ridge trails"],
        itinerary: ["Kathmandu to Pokhara", "Drive to Kande and trek to Forest Camp", "Trek to High Camp", "Mardi viewpoint and return to High Camp", "Descend to Siding", "Drive to Pokhara", "Return to Kathmandu"]
    },
    {
        id: "manaslu-circuit",
        title: "Manaslu Circuit Trek",
        activity: "Trekking",
        destination: "Manaslu",
        region: "Manaslu",
        duration: 16,
        durationText: "16 Days",
        difficulty: "Challenging",
        altitude: 5106,
        price: "Custom Quote — Free to Request",
        season: "Spring and Autumn",
        seasonMonths: ["Mar", "Apr", "May", "Sep", "Oct", "Nov"],
        image: "assets/images/treks/manaslu-circuit.jpg",
        page: "trek-manaslu-circuit.html",
        overview: "Circle the remote Manaslu region through river valleys, Tibetan-influenced villages and the high Larkya La crossing.",
        start: "Kathmandu / Machha Khola",
        end: "Kathmandu / Dharapani",
        groupSize: "Minimum group rules may apply",
        accommodation: "Hotel and teahouse",
        meals: "Breakfast in cities; trek meals as confirmed",
        transportation: "Private or shared road transfer",
        permits: ["Manaslu Restricted Area Permit", "Manaslu Conservation Area Permit", "Annapurna Conservation Area Permit"],
        interests: ["Trekking", "Culture", "Adventure"],
        highlights: ["Larkya La Pass", "Mount Manaslu views", "Remote Budhi Gandaki Valley", "Restricted-area trekking culture"],
        itinerary: ["Kathmandu arrival", "Drive to Machha Khola", "Trek to Jagat", "Trek to Deng", "Trek to Namrung", "Trek to Lho", "Trek to Sama Gaun", "Acclimatization", "Trek to Samdo", "Trek to Dharamsala", "Cross Larkya La to Bimthang", "Trek to Dharapani", "Continue descent", "Drive to Kathmandu", "Free day", "Departure"]
    },
    {
        id: "upper-mustang",
        title: "Upper Mustang Trek",
        activity: "Trekking",
        destination: "Mustang",
        region: "Mustang",
        duration: 15,
        durationText: "15 Days",
        difficulty: "Challenging",
        altitude: 4200,
        price: "Custom Quote — Free to Request",
        season: "Spring, Autumn and selected monsoon months",
        seasonMonths: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        image: "assets/images/treks/upper-mustang.jpg",
        page: "trek-upper-mustang.html",
        overview: "Journey into Upper Mustang with desert-like landscapes, monasteries, cliffside trails and the historic walled settlement of Lo Manthang.",
        start: "Kathmandu / Pokhara / Jomsom",
        end: "Kathmandu / Pokhara",
        groupSize: "Minimum group rules may apply",
        accommodation: "Hotel and teahouse",
        meals: "Breakfast in cities; trek meals as confirmed",
        transportation: "Road transfer and Jomsom flight subject to availability",
        permits: ["Upper Mustang Restricted Area Permit", "Annapurna Conservation Area Permit"],
        interests: ["Trekking", "Culture", "Adventure"],
        highlights: ["Lo Manthang", "Mustang monasteries and caves", "Kali Gandaki Valley", "Rain-shadow landscapes"],
        itinerary: ["Kathmandu arrival", "Kathmandu to Pokhara", "Fly to Jomsom and trek to Kagbeni", "Trek to Chele", "Trek to Syangboche", "Trek to Ghami", "Trek to Tsarang", "Trek to Lo Manthang", "Explore Lo Manthang", "Trek to Drakmar", "Trek to Syangboche", "Trek to Chhusang", "Trek to Jomsom", "Fly to Pokhara", "Return to Kathmandu or onward travel"]
    },
    {
        id: "kathmandu-valley-tour",
        title: "Kathmandu Valley Tour",
        activity: "Cultural",
        destination: "Kathmandu",
        region: "Kathmandu Valley",
        duration: 3,
        durationText: "1-3 Days",
        difficulty: "Easy",
        altitude: 1400,
        price: "Custom Quote — Free to Request",
        season: "Year-round, best in clear months",
        seasonMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Sep", "Oct", "Nov", "Dec"],
        image: "assets/images/tours/cultural-tour.jpg",
        page: "tours.html#kathmandu-valley-tour",
        overview: "Explore Kathmandu, Patan, Bhaktapur and nearby heritage sites with flexible pacing.",
        start: "Kathmandu",
        end: "Kathmandu",
        groupSize: "Private or small group",
        accommodation: "Hotel if overnight plan is included",
        meals: "As confirmed",
        transportation: "Private vehicle as confirmed",
        permits: ["Heritage entry tickets as applicable"],
        interests: ["Culture", "City Tours"],
        highlights: ["UNESCO heritage areas", "Temples and courtyards", "Local culture"],
        itinerary: ["Kathmandu heritage sites", "Patan and Bhaktapur heritage day", "Optional Nagarkot, Kirtipur or local experience"]
    },
    {
        id: "chitwan-jungle-safari",
        title: "Chitwan Jungle Safari",
        activity: "Wildlife",
        destination: "Chitwan",
        region: "Chitwan",
        duration: 4,
        durationText: "2-4 Days",
        difficulty: "Easy",
        altitude: 415,
        price: "Custom Quote — Free to Request",
        season: "Autumn, winter and spring",
        seasonMonths: ["Jan", "Feb", "Mar", "Apr", "Oct", "Nov", "Dec"],
        image: "assets/images/tours/jungle-safari.jpg",
        page: "tours.html#chitwan-jungle-safari",
        overview: "A wildlife-focused extension for travelers who want Nepal's lowland forests and rivers.",
        start: "Kathmandu / Pokhara / Chitwan",
        end: "Kathmandu / Pokhara",
        groupSize: "Private or small group",
        accommodation: "Hotel or jungle lodge",
        meals: "As confirmed",
        transportation: "Tourist bus, private vehicle or flight as confirmed",
        permits: ["National park entry arrangements as applicable"],
        interests: ["Wildlife", "Nature"],
        highlights: ["National park activities", "Tharu culture", "Nature walks"],
        itinerary: ["Travel to Chitwan", "Jungle activities and Tharu culture", "Canoe, nature walk or safari activities", "Return or onward travel"]
    },
    {
        id: "everest-helicopter-tour",
        title: "Everest Helicopter Tour",
        activity: "Adventure",
        destination: "Everest Region",
        region: "Everest / Khumbu",
        duration: 1,
        durationText: "1 Day",
        difficulty: "Easy",
        altitude: 3800,
        price: "Custom Quote — Free to Request",
        season: "Clear-weather months",
        seasonMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Sep", "Oct", "Nov", "Dec"],
        image: "assets/images/tours/helicopter-tour.jpg",
        page: "tours.html#everest-helicopter-tour",
        overview: "A scenic mountain flight concept that must be confirmed by weather, operator availability and regulations.",
        start: "Kathmandu",
        end: "Kathmandu",
        groupSize: "Private or seat-sharing subject to operator availability",
        accommodation: "Not included unless requested",
        meals: "As confirmed",
        transportation: "Helicopter operator schedule subject to confirmation",
        permits: ["Landing, park or local fees as applicable"],
        interests: ["Adventure", "Nature"],
        highlights: ["Himalayan views", "Short time frame", "Weather-dependent planning"],
        itinerary: ["Weather check and transfer", "Everest region scenic flight", "Photo stop if permitted and safe", "Return to Kathmandu"]
    },
    {
        id: "pokhara-scenic-tour",
        title: "Pokhara Scenic Tour",
        activity: "Tours",
        destination: "Pokhara",
        region: "Pokhara",
        duration: 3,
        durationText: "2-3 Days",
        difficulty: "Easy",
        altitude: 1600,
        price: "Custom Quote — Free to Request",
        season: "Year-round, best in clear months",
        seasonMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Sep", "Oct", "Nov", "Dec"],
        image: "assets/images/gallery/himalayan-landscape.jpg",
        page: "tours.html#pokhara-scenic-tour",
        overview: "Lakeside Pokhara, viewpoints and soft adventure options before or after trekking.",
        start: "Kathmandu / Pokhara",
        end: "Kathmandu / Pokhara",
        groupSize: "Private or small group",
        accommodation: "Hotel",
        meals: "Breakfast or as confirmed",
        transportation: "Tourist bus, private vehicle or flight as confirmed",
        permits: ["Entry tickets as applicable"],
        interests: ["Nature", "City Tours"],
        highlights: ["Phewa Lake", "Mountain viewpoints", "Relaxed pacing"],
        itinerary: ["Travel to Pokhara", "Lakeside and viewpoints", "Optional soft adventure or return"]
    },
    {
        id: "kathmandu-day-hiking",
        title: "Kathmandu Day Hiking",
        activity: "Hiking",
        destination: "Kathmandu",
        region: "Kathmandu Valley",
        duration: 1,
        durationText: "1 Day",
        difficulty: "Easy",
        altitude: 2200,
        price: "Custom Quote — Free to Request",
        season: "Year-round, best in clear months",
        seasonMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Sep", "Oct", "Nov", "Dec"],
        image: "assets/images/experiences/day-hiking.jpg",
        page: "tours.html#kathmandu-day-hiking",
        overview: "Short hiking ideas around the Kathmandu Valley for travelers with limited time.",
        start: "Kathmandu",
        end: "Kathmandu",
        groupSize: "Private or small group",
        accommodation: "Not included unless requested",
        meals: "Packed lunch or local meal as confirmed",
        transportation: "Private local transfer",
        permits: ["Local entry tickets as applicable"],
        interests: ["Trekking", "Nature", "City Tours"],
        highlights: ["Valley rim trails", "Local villages", "Flexible start times"],
        itinerary: ["Morning pickup", "Valley rim hike", "Village or viewpoint stop", "Return to Kathmandu"]
    },
    {
        id: "kathmandu-valley-day-tour",
        title: "Kathmandu Valley Day Tour",
        activity: "Day Tour",
        destination: "Kathmandu",
        region: "Kathmandu Valley",
        duration: 1,
        durationText: "Full Day",
        difficulty: "Easy",
        altitude: 1400,
        price: "From USD 45",
        season: "Year-round",
        seasonMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        image: "assets/images/gallery/kathmandu-valley.jpg",
        page: "tours.html#kathmandu-valley-day-tour",
        overview: "A flexible private day tour through Kathmandu's signature heritage sites, temples, courtyards and local neighborhoods.",
        start: "Kathmandu",
        end: "Kathmandu",
        groupSize: "Private or small group",
        accommodation: "Not included",
        meals: "Lunch optional",
        transportation: "Private vehicle with pickup and drop-off",
        permits: ["Heritage entry tickets as applicable"],
        interests: ["Culture", "City Tours"],
        highlights: ["Kathmandu Durbar Square", "Swayambhunath", "Pashupatinath", "Boudhanath"],
        itinerary: ["Hotel pickup in Kathmandu", "Visit major UNESCO heritage sites", "Local lunch or tea stop", "Return transfer to hotel"]
    },
    {
        id: "bhaktapur-patan-tour",
        title: "Bhaktapur & Patan Tour",
        activity: "Day Tour",
        destination: "Kathmandu Valley",
        region: "Kathmandu Valley",
        duration: 1,
        durationText: "Full Day",
        difficulty: "Easy",
        altitude: 1400,
        price: "From USD 55",
        season: "Year-round",
        seasonMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        image: "assets/images/tours/cultural-tour.jpg",
        page: "tours.html#bhaktapur-patan-tour",
        overview: "Explore two of the valley's finest historic cities with palace squares, temples, crafts and Newari culture.",
        start: "Kathmandu",
        end: "Kathmandu",
        groupSize: "Private or small group",
        accommodation: "Not included",
        meals: "Lunch optional",
        transportation: "Private vehicle with pickup and drop-off",
        permits: ["Bhaktapur and Patan heritage entry tickets as applicable"],
        interests: ["Culture", "City Tours"],
        highlights: ["Bhaktapur Durbar Square", "Patan Durbar Square", "Traditional courtyards", "Local craft streets"],
        itinerary: ["Morning pickup", "Guided Patan heritage visit", "Bhaktapur palace square and alleys", "Return to Kathmandu"]
    },
    {
        id: "nagarkot-sunrise-tour",
        title: "Nagarkot Sunrise Tour",
        activity: "Day Tour",
        destination: "Nagarkot",
        region: "Kathmandu Valley",
        duration: 1,
        durationText: "Half Day",
        difficulty: "Easy",
        altitude: 2175,
        price: "From USD 70",
        season: "Clear-weather months",
        seasonMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Sep", "Oct", "Nov", "Dec"],
        image: "assets/images/gallery/himalayan-landscape.jpg",
        page: "tours.html#nagarkot-sunrise-tour",
        overview: "An early-morning drive to Nagarkot for sunrise and Himalayan views, with an optional short walk or Bhaktapur add-on.",
        start: "Kathmandu",
        end: "Kathmandu",
        groupSize: "Private or small group",
        accommodation: "Not included",
        meals: "Breakfast optional",
        transportation: "Private pre-dawn vehicle transfer",
        permits: ["Local entry or parking fees as applicable"],
        interests: ["Nature", "City Tours"],
        highlights: ["Sunrise viewpoint", "Himalayan panorama", "Quiet hill scenery", "Optional Bhaktapur stop"],
        itinerary: ["Early hotel pickup", "Nagarkot sunrise viewpoint", "Breakfast or short walk", "Return to Kathmandu"]
    },
    {
        id: "pokhara-day-tour",
        title: "Pokhara Day Tour",
        activity: "Day Tour",
        destination: "Pokhara",
        region: "Pokhara",
        duration: 1,
        durationText: "Full Day",
        difficulty: "Easy",
        altitude: 1600,
        price: "From USD 80",
        season: "Year-round, best in clear months",
        seasonMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Sep", "Oct", "Nov", "Dec"],
        image: "assets/images/gallery/photo.jpg",
        page: "tours.html#pokhara-day-tour",
        overview: "A relaxed Pokhara sightseeing day with lakeside time, viewpoints and soft cultural or nature stops.",
        start: "Pokhara",
        end: "Pokhara",
        groupSize: "Private or small group",
        accommodation: "Not included",
        meals: "Lunch optional",
        transportation: "Private local vehicle",
        permits: ["Entry tickets as applicable"],
        interests: ["Nature", "City Tours"],
        highlights: ["Phewa Lake", "World Peace Pagoda or viewpoint", "Davis Falls area", "Lakeside atmosphere"],
        itinerary: ["Pokhara hotel pickup", "Viewpoint and lakeside sightseeing", "Cave or waterfall area", "Return to hotel"]
    },
    {
        id: "chitwan-day-tour",
        title: "Chitwan Day Tour",
        activity: "Day Tour",
        destination: "Chitwan",
        region: "Chitwan",
        duration: 1,
        durationText: "Full Day",
        difficulty: "Easy",
        altitude: 415,
        price: "From USD 95",
        season: "Autumn, winter and spring",
        seasonMonths: ["Jan", "Feb", "Mar", "Apr", "Oct", "Nov", "Dec"],
        image: "assets/images/tours/jungle-safari.jpg",
        page: "tours.html#chitwan-day-tour",
        overview: "A compact wildlife and culture day in Chitwan for travelers already staying near Sauraha or the park area.",
        start: "Chitwan / Sauraha",
        end: "Chitwan / Sauraha",
        groupSize: "Private or small group",
        accommodation: "Not included",
        meals: "Lunch optional",
        transportation: "Local private transfer as confirmed",
        permits: ["National park entry arrangements as applicable"],
        interests: ["Wildlife", "Nature"],
        highlights: ["Jungle activity options", "Canoe or nature walk subject to conditions", "Tharu culture", "Lowland landscapes"],
        itinerary: ["Pickup in Chitwan", "Park or buffer-zone activity", "Local culture stop", "Return transfer"]
    },
    {
        id: "adventure-activities",
        title: "Adventure Activities",
        activity: "Adventure",
        destination: "Pokhara",
        region: "Nepal",
        duration: 3,
        durationText: "1-3 Days",
        difficulty: "Moderate",
        altitude: 1600,
        price: "Custom Quote — Free to Request",
        season: "Activity-dependent",
        seasonMonths: ["Feb", "Mar", "Apr", "May", "Sep", "Oct", "Nov"],
        image: "assets/images/experiences/peak-climbing.jpg",
        page: "tours.html#adventure-activities",
        overview: "Adventure add-ons such as rafting or climbing-oriented planning where suitable and available.",
        start: "Kathmandu / Pokhara",
        end: "Kathmandu / Pokhara",
        groupSize: "Private or small group",
        accommodation: "As confirmed",
        meals: "As confirmed",
        transportation: "As confirmed",
        permits: ["Activity permits or operator requirements as applicable"],
        interests: ["Adventure", "Nature"],
        highlights: ["Custom planning", "Guide consultation", "Safety-first decisions"],
        itinerary: ["Consultation and activity selection", "Safety briefing and activity day", "Buffer or second activity day"]
    }
];

const treks = packages.filter((item) => item.activity === "Trekking");
const tours = packages.filter((item) => item.activity !== "Trekking");
const dayTours = packages.filter((item) => item.activity === "Day Tour");
let gallery = [];

async function loadGallery() {
    try {
        const response = await fetch(`${SITE.root}/data/gallery.json`.replace("/./", "/"));
        const data = await response.json();
        gallery = Array.isArray(data.photos) ? data.photos : [];
    } catch (error) {
        console.error("Could not load gallery data:", error);
        gallery = [];
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadGallery();
    initHeader();
    initMobileNav();
    initBackToTop();
    initYear();
    initRenderers();
    initFilters();
    initPackageActions();
    initHomepageItineraries();
    initInquiryForm();
    initWhatsApp();
    initLightbox();
    initDestinationExplorer();
    initTripPlanner();
    initComparison();
    initReviews();
    initPageLoader();
});

function path(src) {
    return `${SITE.root}/${src}`.replace("/./", "/");
}

function pagePath(page) {
    return SITE.root === "." ? `pages/${page}` : page;
}

function homePath(hash = "") {
    return SITE.root === "." ? `index.html${hash}` : `../index.html${hash}`;
}

function initHeader() {
    const header = document.getElementById("siteHeader");
    if (!header) return;
    const update = () => header.classList.toggle("scrolled", window.scrollY > 30);
    update();
    window.addEventListener("scroll", update, { passive: true });
}

function initMobileNav() {
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("mainNav");
    if (!toggle || !nav) return;
    const close = () => {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation menu");
        document.body.classList.remove("menu-open");
    };
    toggle.addEventListener("click", () => {
        const open = !nav.classList.contains("open");
        nav.classList.toggle("open", open);
        toggle.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
        document.body.classList.toggle("menu-open", open);
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") close();
    });
}

function initBackToTop() {
    const button = document.getElementById("backToTop");
    if (!button) return;
    const update = () => button.classList.toggle("visible", window.scrollY > 600);
    update();
    window.addEventListener("scroll", update, { passive: true });
    button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initYear() {
    document.querySelectorAll("#currentYear").forEach((year) => {
        year.textContent = new Date().getFullYear();
    });
}

function initRenderers() {
    renderPackages(document.getElementById("featuredTreks"), treks.slice(0, Number(document.getElementById("featuredTreks")?.dataset.limit || 6)));
    renderPackages(document.getElementById("featuredDayTours"), dayTours.slice(0, Number(document.getElementById("featuredDayTours")?.dataset.limit || 5)));
    renderPackages(document.getElementById("allTreks"), treks);
    renderPackages(document.getElementById("featuredTours"), tours.slice(0, Number(document.getElementById("featuredTours")?.dataset.limit || 6)));
    renderPackages(document.getElementById("allTours"), tours);
    renderPackages(document.getElementById("allPackages"), packages);
    renderGallery(document.getElementById("homeGallery"), Number(document.getElementById("homeGallery")?.dataset.limit || 0));
    renderGallery(document.getElementById("fullGallery"));
    renderTrekDetail();
    populateDestination();
    populateFilterOptions();
    renderComparison();
}

function renderPackages(container, items) {
    if (!container) return;
    container.innerHTML = items.length ? items.map(packageCard).join("") : noTripsHtml();
}

function packageCard(item) {
    return `
        <article class="trek-card package-card" id="${item.id}" data-package-id="${item.id}">
            <img src="${path(item.image)}" alt="${item.title}" width="900" height="600" loading="lazy">
            <div class="card-body">
                <div class="meta-row">
                    <span class="pill">${item.activity}</span>
                    <span class="pill">${item.destination}</span>
                    <span class="pill">${item.difficulty}</span>
                </div>
                <h3>${item.title}</h3>
                <p>${item.overview}</p>
                <ul class="card-highlights">
                    ${item.highlights.slice(0, 3).map(listItem).join("")}
                </ul>
                <dl class="fact-grid">
                    <div><dt>Duration</dt><dd>${item.durationText}</dd></div>
                    <div><dt>Price</dt><dd>${item.price}</dd></div>
                    <div><dt>Best Season</dt><dd>${item.season}</dd></div>
                    <div><dt>Destination</dt><dd>${item.destination}</dd></div>
                </dl>
                ${seasonIndicator(item)}
                <label class="compare-toggle">
                    <input type="checkbox" data-compare-id="${item.id}">
                    Compare trip
                </label>
                <div class="card-actions">
                    <button class="btn btn-secondary" type="button" data-detail-id="${item.id}">View Details</button>
                    <a class="btn btn-primary" href="${homePath("#inquiry")}" data-package="${item.title}">Book Now</a>
                </div>
            </div>
        </article>
    `;
}

function noTripsHtml() {
    return `<div class="empty-state no-trips"><h3>No trips found</h3><p>No package matches those filters right now. Reset the filters or send Hike X Nepal a custom inquiry.</p><button class="btn btn-primary" type="button" data-clear-filters>Reset Filters</button></div>`;
}

function seasonIndicator(item) {
    return `<div class="season-strip" aria-label="Best season months for ${item.title}">${MONTHS.map((month) => `<span class="${item.seasonMonths.includes(month) ? "active" : ""}">${month}</span>`).join("")}</div>`;
}

function renderGallery(container, limit = 0) {
    if (!container) return;
    const items = limit ? gallery.slice(0, limit) : gallery;
    container.innerHTML = items.map((item, index) => `
        <button class="gallery-item" type="button" data-gallery-index="${index}" aria-label="Open image: ${item.alt}">
            <img src="${path(item.src)}" alt="${item.alt}" width="900" height="600" loading="lazy">
        </button>
    `).join("");
}

function populateFilterOptions() {
    const map = {
        filterDestination: unique(packages.map((item) => item.destination)),
        filterActivity: ["Trekking", "Day Tour", "Tours", "Hiking", "Cultural", "Wildlife", "Adventure"],
        filterDifficulty: unique(packages.map((item) => item.difficulty)),
        filterSeason: unique(MONTHS),
        filterRegion: unique(treks.map((item) => item.region))
    };
    Object.entries(map).forEach(([id, values]) => {
        const select = document.getElementById(id);
        if (!select) return;
        const existing = new Set([...select.options].map((option) => option.value || option.textContent));
        values.forEach((value) => {
            if (!existing.has(value)) select.add(new Option(value, value));
        });
    });
}

function initFilters() {
    const forms = document.querySelectorAll("[data-package-filter]");
    forms.forEach((form) => {
        const target = document.getElementById(form.dataset.target || "allPackages");
        if (!target) return;
        const source = form.dataset.source === "treks" ? treks : form.dataset.source === "tours" ? tours : packages;
        const apply = () => {
            const data = new FormData(form);
            const query = String(data.get("search") || "").trim().toLowerCase();
            const destination = data.get("destination") || data.get("region") || "";
            const activity = data.get("activity") || "";
            const duration = data.get("duration") || "";
            const difficulty = data.get("difficulty") || "";
            const season = data.get("season") || "";
            const price = data.get("price") || "";
            const maxAltitude = data.get("altitude") || "";
            const filtered = source.filter((item) => {
                const searchable = `${item.title} ${item.destination} ${item.region} ${item.activity} ${item.overview}`.toLowerCase();
                const durationMatch = !duration || (duration === "short" && item.duration <= 4) || (duration === "medium" && item.duration >= 5 && item.duration <= 10) || (duration === "long" && item.duration >= 11);
                return (!query || searchable.includes(query)) &&
                    (!destination || item.destination === destination || item.region === destination) &&
                    (!activity || item.activity === activity) &&
                    (!difficulty || item.difficulty === difficulty) &&
                    (!season || item.seasonMonths.includes(season) || item.season.toLowerCase().includes(String(season).toLowerCase())) &&
                    (!price || item.price.toLowerCase().includes(String(price).toLowerCase())) &&
                    durationMatch &&
                    (!maxAltitude || item.altitude <= Number(maxAltitude));
            });
            renderPackages(target, filtered);
            const count = document.getElementById(form.dataset.count || "resultsCount");
            if (count) count.textContent = `${filtered.length} ${filtered.length === 1 ? "trip" : "trips"} found`;
            syncCompareCheckboxes();
        };
        form.addEventListener("input", apply);
        form.addEventListener("change", apply);
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            apply();
        });
        form.addEventListener("reset", () => setTimeout(apply, 0));
        apply();
    });
    document.addEventListener("click", (event) => {
        if (!event.target.closest("[data-clear-filters]")) return;
        document.querySelectorAll("[data-package-filter]").forEach((form) => form.reset());
        document.querySelectorAll("[data-package-filter]").forEach((form) => form.dispatchEvent(new Event("input", { bubbles: true })));
    });
}

function populateDestination() {
    const select = document.getElementById("destination");
    if (!select) return;
    select.innerHTML = `<option value="">Select a package</option>` + packages.map((item) => `<option value="${item.title}">${item.title}</option>`).join("") + `<option>Custom Nepal Trip</option>`;
}

function initPackageActions() {
    document.addEventListener("click", (event) => {
        const detail = event.target.closest("[data-detail-id]");
        if (detail) showPackageDetail(detail.dataset.detailId);
        const link = event.target.closest("[data-package], [data-booking-package]");
        if (!link) return;
        const packageName = link.dataset.package || link.dataset.bookingPackage;
        sessionStorage.setItem("hxnPackage", packageName);
        updateWhatsApp(packageName);
        const select = document.getElementById("destination");
        if (select) select.value = packageName;
    });
    const stored = sessionStorage.getItem("hxnPackage");
    const select = document.getElementById("destination");
    if (select && stored) select.value = stored;
}

function showPackageDetail(id) {
    const item = packages.find((candidate) => candidate.id === id);
    if (!item) return;
    let modal = document.getElementById("packageModal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "packageModal";
        modal.className = "package-modal";
        modal.setAttribute("role", "dialog");
        modal.setAttribute("aria-modal", "true");
        document.body.append(modal);
    }
    modal.innerHTML = `
        <div class="modal-backdrop" data-close-modal></div>
        <div class="modal-panel" role="document">
            <button class="modal-close" type="button" aria-label="Close package details" data-close-modal>×</button>
            ${detailHtml(item, false)}
        </div>
    `;
    modal.classList.add("open");
    document.body.classList.add("lightbox-open");
    modal.querySelector(".modal-close").focus();
}

function detailHtml(item, includeHero = true) {
    return `
        ${includeHero ? `<section class="page-hero" style="--hero-image:url('${path(item.image)}')"><div class="container"><span class="section-kicker">${item.destination}</span><h1>${item.title}</h1><p>${item.overview}</p></div></section>` : `<div class="detail-hero"><img src="${path(item.image)}" alt="${item.title}"><div><span class="section-kicker">${item.destination}</span><h2>${item.title}</h2><p>${item.overview}</p></div></div>`}
        <div class="${includeHero ? "container detail-layout detail-page-layout" : "detail-layout modal-detail-layout"}">
            <div>
                <article class="detail-card"><h2>Overview</h2><p>${item.overview}</p></article>
                <article class="detail-card"><h2>Trip Inclusions</h2><div class="two-list"><div><h3>Included services</h3><ul>${DEFAULT_INCLUDED.map(listItem).join("")}</ul></div><div><h3>Excluded services</h3><ul>${DEFAULT_EXCLUDED.map(listItem).join("")}</ul></div></div></article>
                <article class="detail-card"><h2>Required Permits</h2><ul>${item.permits.map(listItem).join("")}</ul></article>
                <article class="detail-card"><h2>Packing Recommendations</h2><ul>${DEFAULT_PACKING.map(listItem).join("")}</ul></article>
                <article class="detail-card"><h2>Safety Information</h2><p>${DEFAULT_SAFETY}</p></article>
                <article class="detail-card"><h2>Day-by-Day Itinerary</h2><div class="timeline">${item.itinerary.map((day, index) => itineraryDay(day, index, item)).join("")}</div></article>
            </div>
            <aside class="sidebar-card">
                <h2>Trip facts</h2>
                <dl class="fact-grid">
                    <div><dt>Duration</dt><dd>${item.durationText}</dd></div>
                    <div><dt>Difficulty</dt><dd>${item.difficulty}</dd></div>
                    <div><dt>Price</dt><dd>${item.price}</dd></div>
                    <div><dt>Max Altitude</dt><dd>${item.altitude.toLocaleString()} m</dd></div>
                    <div><dt>Start</dt><dd>${item.start}</dd></div>
                    <div><dt>End</dt><dd>${item.end}</dd></div>
                    <div><dt>Best Season</dt><dd>${item.season}</dd></div>
                    <div><dt>Group Size</dt><dd>${item.groupSize}</dd></div>
                    <div><dt>Accommodation</dt><dd>${item.accommodation}</dd></div>
                    <div><dt>Meals</dt><dd>${item.meals}</dd></div>
                    <div><dt>Transport</dt><dd>${item.transportation}</dd></div>
                </dl>
                ${seasonIndicator(item)}
                <a class="btn btn-primary" href="${homePath("#inquiry")}" data-package="${item.title}">Book Now</a>
                <a class="btn btn-secondary whatsapp-link" href="${whatsappUrl(item.title)}" target="_blank" rel="noopener">Ask on WhatsApp</a>
            </aside>
        </div>
    `;
}

function itineraryDay(day, index, item) {
    const finalDay = index === item.itinerary.length - 1;
    return `
        <div class="timeline-day">
            <span>Day ${index + 1}</span>
            <div>
                <h3>${day}</h3>
                <dl>
                    <div><dt>Walking distance</dt><dd>${item.activity === "Trekking" && !finalDay ? "Route dependent" : "Not applicable"}</dd></div>
                    <div><dt>Walking hours</dt><dd>${item.activity === "Trekking" && !finalDay ? "3-7 hours" : "Flexible"}</dd></div>
                    <div><dt>Altitude</dt><dd>${index === item.itinerary.length - 2 ? item.altitude.toLocaleString() + " m max" : "Varies by stop"}</dd></div>
                    <div><dt>Accommodation</dt><dd>${finalDay ? "Not included unless requested" : item.accommodation}</dd></div>
                    <div><dt>Meals</dt><dd>${item.meals}</dd></div>
                </dl>
                <p>${day} with timing, distance and overnight location confirmed before departure.</p>
            </div>
        </div>
    `;
}

function renderTrekDetail() {
    const target = document.getElementById("trekDetail");
    if (!target) return;
    const item = packages.find((candidate) => candidate.id === target.dataset.trek);
    if (!item) return;
    document.title = `${item.title} | Hike X Nepal`;
    target.innerHTML = detailHtml(item, true);
}

function initInquiryForm() {
    const form = document.getElementById("contactForm");
    let status = document.getElementById("formStatus");
    if (!form) return;
    if (!status) {
        status = document.createElement("div");
        status.id = "formStatus";
        status.className = "form-status";
        status.setAttribute("aria-live", "polite");
        form.prepend(status);
    }
    const date = document.getElementById("travelDate");
    if (date) date.min = new Date().toISOString().slice(0, 10);
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        form.querySelectorAll(".field-error").forEach((node) => node.remove());
        status.className = "form-status";
        status.textContent = "";
        const required = ["name", "email", "phone", "destination", "travelDate", "travelers", "country", "message"]
            .filter((id) => document.getElementById(id));
        const errors = required.flatMap((id) => {
            const field = document.getElementById(id);
            return field && !field.value.trim() ? [[field, "Required"]] : [];
        });
        const email = document.getElementById("email");
        const travelers = document.getElementById("travelers");
        if (email?.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) errors.push([email, "Enter a valid email address"]);
        if (date?.value && date.value < date.min) errors.push([date, "Choose today or a future date"]);
        if (travelers?.value && Number(travelers.value) < 1) errors.push([travelers, "Enter at least 1 traveler"]);
        if (errors.length) {
            errors.forEach(([field, message]) => {
                const error = document.createElement("span");
                error.className = "field-error";
                error.textContent = message;
                field.closest("label, .form-group")?.append(error);
            });
            status.classList.add("error");
            status.textContent = "Please fix the highlighted fields.";
            errors[0][0].focus();
            return;
        }
        const data = new FormData(form);
        const submitButton = form.querySelector(".form-submit");
        if (submitButton) submitButton.disabled = true;
        status.textContent = "Sending your inquiry...";

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(data).toString()
        })
            .then((response) => {
                if (!response.ok) throw new Error("Submission failed");
                status.classList.add("success");
                status.textContent = "Thank you. Your inquiry has been sent \u2014 Hike X Nepal will reply by email or WhatsApp soon.";
                form.reset();
            })
            .catch(() => {
                const value = (name, fallback = "Not specified") => data.get(name) || fallback;
                const bodyLines = [
                    `Selected package: ${value("destination")}`,
                    `Preferred start date: ${value("travelDate")}`,
                    `Number of travelers: ${value("travelers")}`,
                    `Full name: ${value("name")}`,
                    `Email: ${value("email")}`,
                    `WhatsApp / Phone: ${value("phone")}`,
                    `Country: ${value("country")}`,
                    "",
                    "Message:",
                    value("message"),
                    "",
                    "Note: This is an inquiry request, not a confirmed booking."
                ];
                status.classList.add("error");
                status.textContent = "We could not send this automatically, so your email app will open instead. Please press send there to complete your inquiry.";
                window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(`Hike X Nepal Booking Request - ${value("destination")}`)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
            })
            .finally(() => {
                if (submitButton) submitButton.disabled = false;
            });
    });
}

function initHomepageItineraries() {
    const modal = document.getElementById("trekModal");
    const content = document.getElementById("trekModalContent");
    if (!modal || !content) return;
    const aliases = {
        everest: "everest-base-camp",
        annapurna: "annapurna-base-camp",
        langtang: "langtang-valley",
        mardi: "mardi-himal",
        manaslu: "manaslu-circuit",
        mustang: "upper-mustang"
    };
    const close = () => {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("lightbox-open");
    };
    document.addEventListener("click", (event) => {
        const trigger = event.target.closest("[data-itinerary-id]");
        if (trigger) {
            const id = aliases[trigger.dataset.itineraryId] || trigger.dataset.itineraryId;
            const item = packages.find((candidate) => candidate.id === id);
            if (!item) return;
            content.innerHTML = `
                <span class="section-kicker">${item.region}</span>
                <h2 id="trekModalTitle">${item.title}</h2>
                <p>${item.overview}</p>
                <div class="timeline">${item.itinerary.map((day, index) => itineraryDay(day, index, item)).join("")}</div>
                <div class="button-row">
                    <a class="btn btn-primary" href="${homePath("#inquiry")}" data-package="${item.title}">Book Now</a>
                    <a class="btn btn-secondary whatsapp-link" href="${whatsappUrl(item.title)}" target="_blank" rel="noopener">Ask on WhatsApp</a>
                </div>
            `;
            modal.classList.add("open");
            modal.setAttribute("aria-hidden", "false");
            document.body.classList.add("lightbox-open");
            modal.querySelector(".trek-modal-close")?.focus();
        }
        if (event.target.closest("[data-itinerary-close]")) close();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") close();
    });
}

function initReviews() {
    const list = document.getElementById("reviewsList");
    const form = document.getElementById("reviewForm");
    if (!list || !form) return;
    const key = "hxnReviews";
    const defaults = [
        { name: "Maya R.", text: "Helpful planning, friendly communication, and a beautiful Nepal experience from start to finish." },
        { name: "Daniel K.", text: "The team made the trek feel organized and personal. I would happily travel with them again." }
    ];
    const read = () => {
        try {
            return JSON.parse(localStorage.getItem(key)) || defaults;
        } catch {
            return defaults;
        }
    };
    const render = () => {
        list.innerHTML = read().map((review) => `
            <article class="review-card">
                <div class="review-stars" aria-label="5 stars">★★★★★</div>
                <p>${escapeHtml(review.text)}</p>
                <strong>${escapeHtml(review.name)}</strong>
            </article>
        `).join("");
    };
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("reviewerName")?.value.trim();
        const text = document.getElementById("reviewText")?.value.trim();
        if (!name || !text) return;
        localStorage.setItem(key, JSON.stringify([{ name, text }, ...read()].slice(0, 6)));
        form.reset();
        render();
    });
    render();
}

function initPageLoader() {
    const loader = document.getElementById("pageLoader");
    if (!loader) return;
    const hide = () => loader.classList.add("hidden");
    if (document.readyState === "complete") hide();
    window.addEventListener("load", hide, { once: true });
    setTimeout(hide, 900);
}

function initWhatsApp() {
    updateWhatsApp(sessionStorage.getItem("hxnPackage") || "planning a Nepal trip");
}

function updateWhatsApp(packageName) {
    document.querySelectorAll(".whatsapp-float").forEach((link) => {
        link.href = whatsappUrl(packageName);
        link.setAttribute("aria-label", `Ask Hike X Nepal about ${packageName} on WhatsApp`);
    });
}

function whatsappUrl(packageName) {
    const message = `Hello Hike X Nepal, I am interested in ${packageName}. I would like more information about availability, price, and itinerary.`;
    return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

function initLightbox() {
    if (!document.querySelector(".gallery-item")) return;
    const box = document.createElement("div");
    box.className = "lightbox";
    box.innerHTML = `<button class="lightbox-close" type="button" aria-label="Close gallery">×</button><button class="lightbox-prev" type="button" aria-label="Previous image">‹</button><img alt=""><button class="lightbox-next" type="button" aria-label="Next image">›</button>`;
    document.body.append(box);
    let index = 0;
    const image = box.querySelector("img");
    const show = (next) => {
        index = (next + gallery.length) % gallery.length;
        image.src = path(gallery[index].src);
        image.alt = gallery[index].alt;
        box.classList.add("open");
        document.body.classList.add("lightbox-open");
        box.querySelector(".lightbox-close").focus();
    };
    document.addEventListener("click", (event) => {
        const item = event.target.closest("[data-gallery-index]");
        if (item) show(Number(item.dataset.galleryIndex));
        if (event.target.closest("[data-close-modal]")) closeModal();
    });
    box.querySelector(".lightbox-close").addEventListener("click", () => closeLightbox(box));
    box.querySelector(".lightbox-prev").addEventListener("click", () => show(index - 1));
    box.querySelector(".lightbox-next").addEventListener("click", () => show(index + 1));
    box.addEventListener("click", (event) => {
        if (event.target === box) closeLightbox(box);
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeLightbox(box);
            closeModal();
        }
        if (!box.classList.contains("open")) return;
        if (event.key === "ArrowLeft") show(index - 1);
        if (event.key === "ArrowRight") show(index + 1);
    });
}

function closeLightbox(box) {
    box.classList.remove("open");
    document.body.classList.remove("lightbox-open");
}

function closeModal() {
    document.getElementById("packageModal")?.classList.remove("open");
    document.body.classList.remove("lightbox-open");
}

function initDestinationExplorer() {
    const target = document.getElementById("destinationExplorer");
    if (!target) return;
    const destinations = ["Kathmandu", "Pokhara", "Everest Region", "Annapurna Region", "Langtang Region", "Mustang", "Chitwan", "Manaslu"];
    const render = (destination = destinations[0]) => {
        const related = packages.filter((item) => item.destination === destination || item.region.includes(destination.replace(" Region", "")));
        target.innerHTML = `
            <div class="destination-map">
                ${destinations.map((item, index) => `<button class="${item === destination ? "active" : ""}" style="--x:${14 + (index % 4) * 24}%;--y:${22 + Math.floor(index / 4) * 42}%;" type="button" data-destination="${item}">${item}</button>`).join("")}
            </div>
            <div class="destination-results">
                <span class="section-kicker">${destination}</span>
                <h3>Related packages</h3>
                <div>${related.length ? related.map((item) => `<button type="button" data-detail-id="${item.id}">${item.title}<span>${item.durationText} · ${item.difficulty}</span></button>`).join("") : "<p>No package is assigned here yet. Use the trip planner for a custom route.</p>"}</div>
            </div>
        `;
    };
    target.addEventListener("click", (event) => {
        const button = event.target.closest("[data-destination]");
        if (button) render(button.dataset.destination);
    });
    render();
}

function initTripPlanner() {
    const form = document.getElementById("tripPlannerForm");
    const result = document.getElementById("tripPlannerResults");
    if (!form || !result) return;
    const plan = () => {
        const data = new FormData(form);
        const interest = data.get("interest");
        const duration = data.get("plannerDuration");
        const filtered = packages.filter((item) => {
            const durationMatch = duration === "short" ? item.duration <= 4 : duration === "medium" ? item.duration >= 5 && item.duration <= 10 : item.duration >= 11;
            return item.interests.includes(interest) && durationMatch;
        }).slice(0, 3);
        result.innerHTML = filtered.length ? filtered.map((item) => `<article class="planner-result"><h3>${item.title}</h3><p>${item.overview}</p><button class="btn btn-secondary" type="button" data-detail-id="${item.id}">View Details</button><a class="btn btn-primary" href="#inquiry" data-package="${item.title}">Request This Plan</a></article>`).join("") : `<div class="empty-state"><h3>Custom trip recommended</h3><p>That combination is best handled as a tailored itinerary. Send your preferences and Hike X Nepal can confirm realistic options.</p><a class="btn btn-primary" href="#inquiry" data-package="Custom Nepal Trip">Request Custom Plan</a></div>`;
    };
    form.addEventListener("change", plan);
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        plan();
    });
    plan();
}

function initComparison() {
    document.addEventListener("change", (event) => {
        const input = event.target.closest("[data-compare-id]");
        if (!input) return;
        const selected = getCompareIds();
        if (input.checked && selected.length > 3) {
            input.checked = false;
            alert("You can compare up to 3 packages.");
        }
        renderComparison();
    });
}

function getCompareIds() {
    return [...document.querySelectorAll("[data-compare-id]:checked")].map((input) => input.dataset.compareId);
}

function syncCompareCheckboxes() {
    const selected = new Set(getCompareIds());
    document.querySelectorAll("[data-compare-id]").forEach((input) => {
        input.checked = selected.has(input.dataset.compareId);
    });
}

function renderComparison() {
    const target = document.getElementById("comparisonTable");
    if (!target) return;
    const selected = getCompareIds().map((id) => packages.find((item) => item.id === id)).filter(Boolean);
    if (!selected.length) {
        target.innerHTML = `<div class="empty-state"><h3>Select up to 3 packages</h3><p>Use the Compare trip checkbox on package cards to build a side-by-side view.</p></div>`;
        return;
    }
    const rows = [
        ["Price", "price"],
        ["Duration", "durationText"],
        ["Difficulty", "difficulty"],
        ["Maximum altitude", "altitude"],
        ["Best season", "season"],
        ["Starting point", "start"],
        ["Accommodation", "accommodation"],
        ["Group size", "groupSize"]
    ];
    target.innerHTML = `<div class="comparison-scroll"><table><thead><tr><th>Trip</th>${selected.map((item) => `<th>${item.title}</th>`).join("")}</tr></thead><tbody>${rows.map(([label, key]) => `<tr><th>${label}</th>${selected.map((item) => `<td>${key === "altitude" ? item[key].toLocaleString() + " m" : item[key]}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function unique(values) {
    return [...new Set(values.filter(Boolean))];
}

function listItem(item) {
    return `<li>${item}</li>`;
}

function slug(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
    })[char]);
}