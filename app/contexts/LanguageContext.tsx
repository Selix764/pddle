"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "RO" | "EN"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  RO: {
    // Header
    "header.locations": "Locații",
    "header.contact": "Contact",
    "header.findLocker": "Găsește Locker",
    "header.downloadApp": "Descarcă App",
    "header.switchTo": "Schimbă la",
    "header.english": "Engleză",
    "header.romanian": "Română",
    "header.about": "Despre",
    "header.business": "Afaceri",

    // Homepage Hero
    "hero.title": "Găsește-ți echilibrul",
    "hero.subtitle":
      "Sari peste bătaia de cap cu închirierea. Lockerele noastre sigure îți oferă acces instant la plăci de paddleboard premium 24/7. Experimentează libertatea pe apă.",
    "hero.findLocker": "Găsește un Locker",
    "hero.contactUs": "Contactează-ne",

    // How It Works
    "howItWorks.title": "Cum funcționează",
    "howItWorks.subtitle": "Trei pași simpli către aventura ta perfectă cu paddleboard",
    "howItWorks.step1.title": "Găsește Lockerul Tău",
    "howItWorks.step1.description":
      "Localizează cel mai apropiat locker securizat pentru paddleboard folosind aplicația noastră inteligentă",
    "howItWorks.step2.title": "Deblochează Instant",
    "howItWorks.step2.description": "Scanează codul QR cu telefonul - SUP-ul tău premium este gata în câteva secunde",
    "howItWorks.step3.title": "Vâslește și Bucură-te",
    "howItWorks.step3.description": "Ieși pe apă imediat, returnează la orice locație când ai terminat",

    // Benefits
    "benefits.title": "De ce să alegi",
    "benefits.subtitle": "Experimentează libertatea și securitatea închirierilor automate de paddleboard",
    "benefits.quickRentals.title": "Închirieri Rapide",
    "benefits.quickRentals.subtitle": "aventuri super",
    "benefits.quickRentals.description":
      "Ajunge pe apă în mai puțin de 60 de secunde cu sistemul nostru de lockere inteligente",
    "benefits.onDemand.title": "Închiriază la Cerere",
    "benefits.onDemand.subtitle": "vibrații bune",
    "benefits.onDemand.description": "Nu sunt necesare rezervări - SUP-uri premium disponibile 24/7 la îndemâna ta",
    "benefits.liveYourMoment.title": "Trăiește-ți Momentul",
    "benefits.liveYourMoment.subtitle": "plutește prin natură",
    "benefits.liveYourMoment.description":
      "Experimentează libertatea pe apă cu echipamentele noastre premium și locațiile sigure",

    // Location Section
    "location.title": "Unde găsești",
    "location.subtitle": "Acum disponibil în peste 50 de locații premium!",
    "location.expanding.title": "Mereu în Expansiune",
    "location.expanding.subtitle": "Mai Multe Locații",
    "location.expanding.description":
      "Adăugăm constant noi locații de lockere sigure în cele mai bune puncte de pe malul apei. Experiențele SUP premium sunt acum disponibile în locurile tale favorite de pe plaje și lacuri.",
    "location.viewAll": "Vezi Toate Locațiile",

    // Pricing
    "pricing.title": "Prețuri Simple",
    "pricing.subtitle": "Tarife transparente fără taxe ascunse. Plătești doar pentru ceea ce folosești.",
    "pricing.hourly": "Pe Oră",
    "pricing.hourly.price": "25 lei",
    "pricing.hourly.period": "pe oră",
    "pricing.halfDay": "Jumătate de Zi",
    "pricing.halfDay.price": "80 lei",
    "pricing.halfDay.period": "4 ore",
    "pricing.fullDay": "Zi Întreagă",
    "pricing.fullDay.price": "120 lei",
    "pricing.fullDay.period": "8 ore",
    "pricing.features.premiumBoard": "Placă SUP premium",
    "pricing.features.safetyEquipment": "Echipament de siguranță",
    "pricing.features.access247": "Acces 24/7",
    "pricing.features.save20": "Economisești 20 lei",
    "pricing.features.save80": "Economisești 80 lei",
    "pricing.startAdventure": "Începe Aventura",
    "pricing.mostPopular": "Cel Mai Popular",

    // CTA Section
    "cta.title": "Gata să Vâslești?",
    "cta.subtitle":
      "Descarcă aplicația noastră și descoperă libertatea închirierilor instant de SUP. Următoarea ta aventură este la doar un tap distanță.",
    "cta.findLocker": "Găsește Lockerul Tău",
    "cta.downloadApp": "Descarcă App",
    "cta.ios": "iOS și Android",
    "cta.secure": "Sigur și Asigurat",
    "cta.support": "Suport 24/7",

    // Locations Page
    "locations.hero.title": "Descoperă-ți",
    "locations.hero.spot": "locul",
    "locations.hero.subtitle":
      "Găsește lockerul perfect pentru paddleboard lângă tine. De la lacuri liniștite la plaje oceanice, următoarea ta aventură te așteaptă la una dintre locațiile noastre premium.",
    "locations.hero.viewMap": "Vezi Harta",
    "locations.hero.getHelp": "Obține Ajutor",
    "locations.map.title": "Hartă Interactivă Lockere",
    "locations.map.subtitle": "Vezi toate stațiile de lockere inteligente în timp real",
    "locations.map.enableLocation": "Activează Serviciile de Localizare",
    "locations.stats.smartLockers": "Lockere Inteligente",
    "locations.stats.availableNow": "Disponibile Acum",
    "locations.stats.alwaysOpen": "Mereu Deschis",
    "locations.stats.cities": "Orașe",
    "locations.filters.title": "Găsește Lockerul Tău Perfect",
    "locations.filters.allCities": "Toate Orașele",
    "locations.filters.allTypes": "Toate Tipurile de Lockere",
    "locations.filters.allStatus": "Toate Statusurile",
    "locations.filters.availableNow": "Disponibil Acum",
    "locations.filters.limited": "Disponibilitate Limitată",
    "locations.filters.maintenance": "Mentenanță",
    "locations.filters.apply": "Aplică Filtrele",
    "locations.nearby.title": "Stații de Lockere din Apropiere",
    "locations.nearby.sortDistance": "Sortează după distanță",
    "locations.locker.available": "Disponibil",
    "locations.locker.fullyBooked": "Complet Rezervat",
    "locations.locker.operational": "Operațional",
    "locations.locker.maintenance": "Mentenanță",
    "locations.locker.access247": "Acces 24/7",
    "locations.locker.lockers": "Lockere",
    "locations.locker.unlock": "Deblochează Lockerul",
    "locations.locker.underMaintenance": "În Mentenanță",
    "locations.locker.details": "Detalii",
    "locations.support.title": "Probleme cu Lockerul?",
    "locations.support.subtitle": "Echipa noastră de suport tehnic este disponibilă 24/7",
    "locations.support.report": "Raportează Problema",

    // Contact Page
    "contact.hero.title": "Suntem aici să",
    "contact.hero.help": "ajutăm",
    "contact.hero.subtitle":
      "Ai întrebări despre lockerele noastre inteligente? Ai nevoie de suport tehnic? Echipa noastră dedicată este gata să te asiste 24/7.",
    "contact.hero.sendMessage": "Trimite Mesaj",
    "contact.hero.callNow": "Sună Acum",
    "contact.form.title": "Trimite-ne un Mesaj",
    "contact.form.firstName": "Prenume",
    "contact.form.lastName": "Nume",
    "contact.form.email": "Email",
    "contact.form.phone": "Telefon",
    "contact.form.subject": "Subiect",
    "contact.form.message": "Mesaj",
    "contact.form.placeholder": "Spune-ne cum te putem ajuta...",
    "contact.form.send": "Trimite Mesajul",
    "contact.form.subjects.general": "Întrebare Generală",
    "contact.form.subjects.technical": "Suport Tehnic",
    "contact.form.subjects.partnership": "Oportunitate de Parteneriat",
    "contact.form.subjects.locker": "Probleme cu Lockerul",
    "contact.form.subjects.other": "Altele",
    "contact.info.title": "Intră în Contact",
    "contact.info.headquarters": "Sediul Central",
    "contact.info.phone": "Telefon",
    "contact.info.email": "Email",
    "contact.info.hours": "Program de Lucru",
    "contact.info.schedule": "Luni - Vineri: 8:00 - 18:00\nSâmbătă: 9:00 - 16:00\nDuminică: Închis",
    "contact.map.title": "Hartă Interactivă",
    "contact.help.title": "Ajutor Rapid",
    "contact.help.subtitle": "Cauți răspunsuri rapide? Verifică întrebările noastre cele mai comune:",
    "contact.help.howToRent": "Cum închiriez un paddleboard?",
    "contact.help.lockerIssues": "Ce fac dacă am probleme cu un locker?",
    "contact.help.technical": "Cum raportez o problemă tehnică?",
    "contact.help.partnership": "Oportunități de parteneriat",

    // Footer
    "footer.description":
      "Cea mai inteligentă modalitate de a închiria paddleboard-uri. Acces instant, echipament premium, libertate totală.",
    "footer.quickAccess": "Acces Rapid",
    "footer.findLocations": "Găsește Locații",
    "footer.contact": "Contact",
    "footer.getApp": "Obține App-ul",
    "footer.downloadOn": "Descarcă pe",
    "footer.appStore": "App Store",
    "footer.getItOn": "Obține pe",
    "footer.googlePlay": "Google Play",
    "footer.rights": "Toate drepturile rezervate.",

    // Amenities
    "amenities.parking": "Parcare",
    "amenities.cafe": "Cafenea",
    "amenities.wifi": "WiFi",
    "amenities.secure": "Sigur",
    "amenities.beachAccess": "Acces la Plajă",
    "amenities.premiumSecurity": "Securitate Premium",
    "amenities.refreshments": "Răcoritoare",
    "amenities.familyParking": "Parcare Familie",
    "amenities.calmWaters": "Ape Calme",
    "amenities.extraLarge": "Extra Mare",
    "amenities.riverAccess": "Acces la Râu",
    "amenities.ecoFriendly": "Eco-Friendly",
    "amenities.transitAccess": "Acces Transport",
    "amenities.foodNearby": "Mâncare în Apropiere",
    "amenities.highSecurity": "Securitate Înaltă",
    "amenities.freeWifi": "WiFi Gratuit",
    "amenities.marineAccess": "Acces Marin",
    "amenities.weatherProof": "Rezistent la Intemperii",
    "amenities.touristArea": "Zonă Turistică",

    // About Page
    "about.hero.title": "Povestea",
    "about.hero.subtitle": "Născut din pasiunea pentru sporturile nautice și viziunea de a face SUP-ul accesibil tuturor, pddle revoluționează modul în care oamenii experimentează paddleboard-ul.",
    "about.hero.ourJourney": "Călătoria Noastră",
    "about.hero.meetTeam": "Echipa Noastră",
    "about.story.title": "Povestea Noastră",
    "about.story.intro": "pddle s-a născut dintr-o credință simplă: toată lumea ar trebui să aibă acces ușor la experiența transformatoare a paddleboard-ului. Ce a început ca un proiect de pasiune de weekend a crescut într-o misiune de a revoluționa accesibilitatea sporturilor nautice.",
    "about.story.founder": "Fondatorul nostru, Alex Rivera, a descoperit SUP-ul într-o perioadă dificilă din cariera sa corporativă. Pacea și claritatea pe care le-a găsit pe apă l-au inspirat să împărtășească această experiență cu alții. Frustrat de greutățile magazinelor tradiționale de închiriere - ore limitate, cozi lungi și locații incomode - Alex și-a imaginat o modalitate mai bună.",
    "about.values.title": "Valorile Noastre",
    "about.values.passion.title": "Pasiune pentru Apă",
    "about.values.passion.description": "Credem că toată lumea ar trebui să experimenteze bucuria și libertatea de a fi pe apă. SUP-ul este mai mult decât un sport - este o modalitate de a te conecta cu natura și cu tine însuți.",
    "about.values.safety.title": "Siguranța Primează",
    "about.values.safety.description": "Siguranța ta este prioritatea noastră principală. Toate echipamentele sunt întreținute regulat, iar instructorii noștri sunt certificați în siguranța pe apă și primul ajutor.",
    "about.values.community.title": "Focus pe Comunitate",
    "about.values.community.description": "Construim o comunitate de entuziaști ai apei care se sprijină și se inspiră reciproc să exploreze, să învețe și să crească împreună.",
    "about.values.environment.title": "Responsabilitate Ecologică",
    "about.values.environment.description": "Suntem angajați să protejăm apele pe care le iubim prin practici durabile și educație ecologică.",
    "about.team.title": "Echipa Noastră",
    "about.team.subtitle": "Echipa noastră diversă reunește expertiza în tehnologie, biologie marină, operațiuni și instruire SUP pentru a crea cea mai bună experiență SUP posibilă.",
    "about.team.alex.name": "Alex Rivera",
    "about.team.alex.role": "Fondator & CEO",
    "about.team.alex.bio": "Fost director de tehnologie transformat în antreprenor de sporturi nautice. Alex a fondat pddle după ce a experimentat puterea transformatoare a SUP-ului într-o perioadă dificilă din viața sa.",
    "about.team.alex.experience": "15 ani în tehnologie, 8 ani entuziast SUP",
    "about.team.maria.name": "Maria Santos",
    "about.team.maria.role": "Director Operațiuni",
    "about.team.maria.bio": "Biolog marin și expert în operațiuni care se asigură că echipamentele și locațiile noastre îndeplinesc cele mai înalte standarde de siguranță și responsabilitate ecologică.",
    "about.team.maria.experience": "12 ani biologie marină, 6 ani operațiuni",
    "about.team.david.name": "David Kim",
    "about.team.david.role": "Director Tehnologie",
    "about.team.david.bio": "Inginer software care a dezvoltat sistemul nostru de lockere inteligente și aplicația mobilă. Inovațiile lui David fac închirierea SUP să fie fără probleme și accesibilă.",
    "about.team.david.experience": "10 ani dezvoltare software",
    "about.team.sarah.name": "Sarah Johnson",
    "about.team.sarah.role": "Instructor Principal",
    "about.team.sarah.bio": "Instructor profesionist SUP și profesor de yoga care conduce programul nostru de formare a instructorilor și dezvoltă conținutul nostru educațional.",
    "about.team.sarah.experience": "8 ani instruire SUP, 500+ studenți certificați",
    "about.timeline.title": "Călătoria Noastră",
    "about.timeline.2019.title": "Începutul",
    "about.timeline.2019.description": "Fondarea pddle cu prima stație de lockere inteligente la Lake Tahoe",
    "about.timeline.2020.title": "Expansiunea",
    "about.timeline.2020.description": "Lansarea a 10 locații în California și introducerea tururilor ghidate",
    "about.timeline.2021.title": "Inovația",
    "about.timeline.2021.description": "Dezvoltarea aplicației mobile și sistemului avansat de rezervări",
    "about.timeline.2022.title": "Creșterea",
    "about.timeline.2022.description": "Ajungerea la 50+ locații și 10.000+ clienți fericiți",
    "about.timeline.2023.title": "Recunoașterea",
    "about.timeline.2023.description": "Numit 'Cea Mai Bună Închiriere de Sporturi Nautice' de Consiliul de Turism din California",
    "about.timeline.2024.title": "Viitorul",
    "about.timeline.2024.description": "Expansiune națională cu 100+ locații planificate",
    "about.mission.title": "Misiunea Noastră",
    "about.mission.description": "Să facem paddleboard-ul accesibil, sigur și plăcut pentru toți, promovând în același timp o comunitate care respectă și protejează mediile noastre prețioase acvatice. Credem că timpul petrecut pe apă ar trebui să fie fără efort, inspirant și transformator.",
    "about.cta.title": "Alătură-te Poveștii Noastre",
    "about.cta.subtitle": "Fie că ești un începător sau un profesionist cu experiență, te invităm să fii parte din comunitatea pddle și să-ți descoperi propria poveste pe apă.",
    "about.cta.findLocation": "Găsește o Locație",
    "about.cta.bookExperience": "Rezervă o Experiență",

    // Business Page
    "business.hero.title": "Parteneriat cu",
    "business.hero.subtitle": "Transformă-ți afacerea cu experiențe SUP premium. De la team building corporativ la parteneriate cu resorturi, oferim soluții complete care generează venituri și încântă clienții.",
    "business.hero.exploreSolutions": "Explorează Soluțiile",
    "business.hero.getQuote": "Obține Ofertă",
    "business.solutions.title": "Soluții de Afaceri",
    "business.solutions.subtitle": "Fie că ești un hotel, resort, organizator de evenimente corporative sau proprietar de afacere, avem soluția SUP perfectă pentru a-ți îmbunătăți ofertele.",
    "business.corporate.title": "Team Building Corporativ",
    "business.corporate.description": "Întărește legăturile din echipă cu aventuri SUP ghidate concepute pentru grupurile corporative.",
    "business.corporate.pricing": "Începe de la 180 lei/persoană",
    "business.hotel.title": "Parteneriate Hotel & Resort",
    "business.hotel.description": "Îmbunătățește experiența oaspeților cu servicii premium de închiriere SUP și tururi ghidate.",
    "business.hotel.pricing": "Tarife de parteneriat personalizate",
    "business.events.title": "Servicii Evenimente & Nunți",
    "business.events.description": "Creează amintiri de neuitat cu experiențe SUP pentru ocazii speciale.",
    "business.events.pricing": "Începe de la 260 lei/persoană",
    "business.benefits.title": "De Ce să Alegi pddle pentru Afacerea Ta",
    "business.benefits.revenue.title": "Crește Veniturile",
    "business.benefits.revenue.description": "Adaugă un nou flux de venituri cu investiție minimă. Modelul nostru de parteneriat asigură profitabilitatea din prima zi.",
    "business.benefits.experience.title": "Îmbunătățește Experiența Clienților",
    "business.benefits.experience.description": "Oferă activități acvatice unice care diferențiază afacerea ta și creează amintiri durabile pentru clienți.",
    "business.benefits.insurance.title": "Acoperire Completă de Asigurare",
    "business.benefits.insurance.description": "Asigurare de răspundere civilă cuprinzătoare și protocoale de siguranță protejează afacerea ta și oferă liniște sufletească.",
    "business.benefits.turnkey.title": "Soluție Completă",
    "business.benefits.turnkey.description": "Ne ocupăm de echipamente, întreținere, instruire și rezervări. Tu te concentrezi pe afacerea ta principală.",
    "business.packages.title": "Pachete de Parteneriat",
    "business.packages.starter.title": "Pachet Starter",
    "business.packages.starter.description": "Perfect pentru afaceri mici și hoteluri",
    "business.packages.professional.title": "Pachet Profesional",
    "business.packages.professional.description": "Ideal pentru resorturi și operațiuni mai mari",
    "business.packages.enterprise.title": "Pachet Enterprise",
    "business.packages.enterprise.description": "Soluție completă pentru resorturi mari",
    "business.testimonials.title": "Ce Spun Partenerii Noștri",
    "business.cta.title": "Gata să Creezi Parteneriat?",
    "business.cta.subtitle": "Să discutăm cum pddle poate transforma experiența clienților tăi și să genereze noi oportunități de venituri pentru afacerea ta.",
    "business.cta.contact": "Contactează-ne",
    "business.cta.schedule": "Programează o Întâlnire",

    // Business Package Features
    "business.features.5to10boards": "5-10 plăci SUP",
    "business.features.15to25boards": "15-25 plăci SUP",
    "business.features.50plusboards": "50+ plăci SUP",
    "business.features.basicTraining": "Formare de bază",
    "business.features.advancedTraining": "Formare avansată",
    "business.features.completeTraining": "Program complet de formare",
    "business.features.monthlyMaintenance": "Mentenanță lunară",
    "business.features.weeklyMaintenance": "Mentenanță săptămânală",
    "business.features.dailyMaintenance": "Mentenanță zilnică",
    "business.features.customerSupport": "Suport clienți",
    "business.features.prioritySupport": "Suport prioritar",
    "business.features.247support": "Suport 24/7",
    "business.features.marketingMaterials": "Materiale de marketing",
    "business.features.customBranding": "Branding personalizat",
    "business.features.dedicatedAccount": "Manager de cont dedicat",
    

  },
  EN: {
    // Header
    "header.locations": "Locations",
    "header.contact": "Contact",
    "header.findLocker": "Find Locker",
    "header.downloadApp": "Download App",
    "header.switchTo": "Switch to",
    "header.english": "English",
    "header.romanian": "Romanian",
    "header.about": "About",
    "header.business": "Business",

    // Homepage Hero
    "hero.title": "Find your balance",
    "hero.subtitle":
      "Skip the rental shop hassle. Our secure lockers give you instant access to premium paddleboards 24/7. Experience freedom on the water.",
    "hero.findLocker": "Find a Locker",
    "hero.contactUs": "Contact Us",

    // How It Works
    "howItWorks.title": "How pddle Works",
    "howItWorks.subtitle": "Three simple steps to your perfect paddleboard adventure",
    "howItWorks.step1.title": "Find Your Locker",
    "howItWorks.step1.description": "Locate the nearest secure paddleboard locker using our smart app",
    "howItWorks.step2.title": "Unlock Instantly",
    "howItWorks.step2.description": "Scan QR code with your phone - your premium SUP is ready in seconds",
    "howItWorks.step3.title": "Paddle & Enjoy",
    "howItWorks.step3.description": "Hit the water immediately, return to any location when you're done",

    // Benefits
    "benefits.title": "Why Choose pddle?",
    "benefits.subtitle": "Experience the freedom and security of automated paddleboard rentals",
    "benefits.quickRentals.title": "Quick Rentals",
    "benefits.quickRentals.subtitle": "super adventures",
    "benefits.quickRentals.description": "Get on the water in under 60 seconds with our smart locker system",
    "benefits.onDemand.title": "Rent on Demand",
    "benefits.onDemand.subtitle": "good vibes",
    "benefits.onDemand.description": "No reservations needed - premium SUPs available 24/7 at your fingertips",
    "benefits.liveYourMoment.title": "Live Your Moment",
    "benefits.liveYourMoment.subtitle": "float through nature",
    "benefits.liveYourMoment.description":
      "Experience freedom on the water with our premium equipment and secure locations",

    // Location Section
    "location.title": "Where you find pddle",
    "location.subtitle": "Now available at 50+ premium locations!",
    "location.expanding.title": "Always Expanding",
    "location.expanding.subtitle": "More Locations",
    "location.expanding.description":
      "We're constantly adding new secure locker locations at the best waterfront spots. Premium SUP experiences are now available at your favorite beaches and lakes.",
    "location.viewAll": "View All Locations",

    // Pricing
    "pricing.title": "Simple Pricing",
    "pricing.subtitle": "Transparent rates with no hidden fees. Pay only for what you use.",
    "pricing.hourly": "Hourly",
    "pricing.hourly.price": "$25",
    "pricing.hourly.period": "per hour",
    "pricing.halfDay": "Half Day",
    "pricing.halfDay.price": "$80",
    "pricing.halfDay.period": "4 hours",
    "pricing.fullDay": "Full Day",
    "pricing.fullDay.price": "$120",
    "pricing.fullDay.period": "8 hours",
    "pricing.features.premiumBoard": "Premium SUP board",
    "pricing.features.safetyEquipment": "Safety equipment",
    "pricing.features.access247": "24/7 access",
    "pricing.features.save20": "Save $20",
    "pricing.features.save80": "Save $80",
    "pricing.startAdventure": "Start Your Adventure",
    "pricing.mostPopular": "Most Popular",

    // CTA Section
    "cta.title": "Ready to Paddle?",
    "cta.subtitle":
      "Download our app and discover the freedom of instant SUP rentals. Your next adventure is just a tap away.",
    "cta.findLocker": "Find Your Locker",
    "cta.downloadApp": "Download App",
    "cta.ios": "iOS & Android",
    "cta.secure": "Secure & Insured",
    "cta.support": "24/7 Support",

    // Locations Page
    "locations.hero.title": "Discover your",
    "locations.hero.spot": "spot",
    "locations.hero.subtitle":
      "Find the perfect paddleboard locker near you. From serene lakes to ocean beaches, your next adventure is waiting at one of our premium locations.",
    "locations.hero.viewMap": "View Map",
    "locations.hero.getHelp": "Get Help",
    "locations.map.title": "Interactive Locker Map",
    "locations.map.subtitle": "View all smart locker stations in real-time",
    "locations.map.enableLocation": "Enable Location Services",
    "locations.stats.smartLockers": "Smart Lockers",
    "locations.stats.availableNow": "Available Now",
    "locations.stats.alwaysOpen": "Always Open",
    "locations.stats.cities": "Cities",
    "locations.filters.title": "Find Your Perfect Locker",
    "locations.filters.allCities": "All Cities",
    "locations.filters.allTypes": "All Locker Types",
    "locations.filters.allStatus": "All Status",
    "locations.filters.availableNow": "Available Now",
    "locations.filters.limited": "Limited Availability",
    "locations.filters.maintenance": "Maintenance",
    "locations.filters.apply": "Apply Filters",
    "locations.nearby.title": "Nearby Locker Stations",
    "locations.nearby.sortDistance": "Sort by distance",
    "locations.locker.available": "Available",
    "locations.locker.fullyBooked": "Fully Booked",
    "locations.locker.operational": "Operational",
    "locations.locker.maintenance": "Maintenance",
    "locations.locker.access247": "24/7 Access",
    "locations.locker.lockers": "Lockers",
    "locations.locker.unlock": "Unlock Locker",
    "locations.locker.underMaintenance": "Under Maintenance",
    "locations.locker.details": "Details",
    "locations.support.title": "Locker Issues?",
    "locations.support.subtitle": "Our technical support team is available 24/7",
    "locations.support.report": "Report Issue",

    // Contact Page
    "contact.hero.title": "We're here to",
    "contact.hero.help": "help",
    "contact.hero.subtitle":
      "Have questions about our smart lockers? Need technical support? Our dedicated team is ready to assist you 24/7.",
    "contact.hero.sendMessage": "Send Message",
    "contact.hero.callNow": "Call Now",
    "contact.form.title": "Send us a Message",
    "contact.form.firstName": "First Name",
    "contact.form.lastName": "Last Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.placeholder": "Tell us how we can help you...",
    "contact.form.send": "Send Message",
    "contact.form.subjects.general": "General Inquiry",
    "contact.form.subjects.technical": "Technical Support",
    "contact.form.subjects.partnership": "Partnership Opportunity",
    "contact.form.subjects.locker": "Locker Issues",
    "contact.form.subjects.other": "Other",
    "contact.info.title": "Get in Touch",
    "contact.info.headquarters": "Headquarters",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.hours": "Business Hours",
    "contact.info.schedule": "Monday - Friday: 8:00 AM - 6:00 PM PST\nSaturday: 9:00 AM - 4:00 PM PST\nSunday: Closed",
    "contact.map.title": "Interactive Map",
    "contact.help.title": "Quick Help",
    "contact.help.subtitle": "Looking for quick answers? Check out our most common questions:",
    "contact.help.howToRent": "How do I rent a paddleboard?",
    "contact.help.lockerIssues": "What if I have issues with a locker?",
    "contact.help.technical": "How do I report a technical issue?",
    "contact.help.partnership": "Partnership opportunities",

    // Footer
    "footer.description": "The smartest way to rent paddleboards. Instant access, premium equipment, total freedom.",
    "footer.quickAccess": "Quick Access",
    "footer.findLocations": "Find Locations",
    "footer.contact": "Contact",
    "footer.getApp": "Get the App",
    "footer.downloadOn": "Download on",
    "footer.appStore": "App Store",
    "footer.getItOn": "Get it on",
    "footer.googlePlay": "Google Play",
    "footer.rights": "All rights reserved.",

    // Amenities
    "amenities.parking": "Parking",
    "amenities.cafe": "Cafe",
    "amenities.wifi": "WiFi",
    "amenities.secure": "Secure",
    "amenities.beachAccess": "Beach Access",
    "amenities.premiumSecurity": "Premium Security",
    "amenities.refreshments": "Refreshments",
    "amenities.familyParking": "Family Parking",
    "amenities.calmWaters": "Calm Waters",
    "amenities.extraLarge": "Extra Large",
    "amenities.riverAccess": "River Access",
    "amenities.ecoFriendly": "Eco-Friendly",
    "amenities.transitAccess": "Transit Access",
    "amenities.foodNearby": "Food Nearby",
    "amenities.highSecurity": "High Security",
    "amenities.freeWifi": "Free WiFi",
    "amenities.marineAccess": "Marine Access",
    "amenities.weatherProof": "Weather Proof",
    "amenities.touristArea": "Tourist Area",

    // About Page
    "about.hero.title": "Our Story",
    "about.hero.subtitle": "Born from a passion for watersports and a vision to make SUP accessible to everyone, pddle is revolutionizing how people experience paddleboarding.",
    "about.hero.ourJourney": "Our Journey",
    "about.hero.meetTeam": "Meet Our Team",
    "about.story.title": "Our Story",
    "about.story.intro": "pddle was born from a simple belief: everyone should have easy access to the transformative experience of paddleboarding. What started as a weekend passion project has grown into a mission to revolutionize watersports accessibility.",
    "about.story.founder": "Our founder, Alex Rivera, discovered SUP during a challenging period in his corporate career. The peace and clarity he found on the water inspired him to share this experience with others. Frustrated by the hassles of traditional rental shops - limited hours, long queues, and inconvenient locations - Alex envisioned a better way.",
    "about.values.title": "Our Values",
    "about.values.passion.title": "Passion for Water",
    "about.values.passion.description": "We believe everyone should experience the joy and freedom of being on the water. SUP is more than a sport - it's a way to connect with nature and yourself.",
    "about.values.safety.title": "Safety First",
    "about.values.safety.description": "Your safety is our top priority. All equipment is regularly maintained, and our instructors are certified in water safety and first aid.",
    "about.values.community.title": "Community Focus",
    "about.values.community.description": "We're building a community of water enthusiasts who support and inspire each other to explore, learn, and grow together.",
    "about.values.environment.title": "Environmental Responsibility",
    "about.values.environment.description": "We're committed to protecting the waters we love through sustainable practices and environmental education.",
    "about.team.title": "Our Team",
    "about.team.subtitle": "Our diverse team brings together expertise in technology, marine biology, operations, and SUP instruction to create the best possible SUP experience.",
    "about.team.alex.name": "Alex Rivera",
    "about.team.alex.role": "Founder & CEO",
    "about.team.alex.bio": "Former tech executive turned watersports entrepreneur. Alex founded pddle after experiencing the transformative power of SUP during a difficult period in his life.",
    "about.team.alex.experience": "15 years in tech, 8 years SUP enthusiast",
    "about.team.maria.name": "Maria Santos",
    "about.team.maria.role": "Operations Director",
    "about.team.maria.bio": "Marine biologist and operations expert who ensures our equipment and locations meet the highest standards of safety and environmental responsibility.",
    "about.team.maria.experience": "12 years marine biology, 6 years operations",
    "about.team.david.name": "David Kim",
    "about.team.david.role": "Technology Director",
    "about.team.david.bio": "Software engineer who developed our smart locker system and mobile app. David's innovations make SUP rental seamless and accessible.",
    "about.team.david.experience": "10 years software development",
    "about.team.sarah.name": "Sarah Johnson",
    "about.team.sarah.role": "Lead Instructor",
    "about.team.sarah.bio": "Professional SUP instructor and yoga teacher who leads our instructor training program and develops our educational content.",
    "about.team.sarah.experience": "8 years SUP instruction, 500+ students certified",
    "about.timeline.title": "Our Journey",
    "about.timeline.2019.title": "The Beginning",
    "about.timeline.2019.description": "Founded pddle with first smart locker station at Lake Tahoe",
    "about.timeline.2020.title": "Expansion",
    "about.timeline.2020.description": "Launched 10 locations across California and introduced guided tours",
    "about.timeline.2021.title": "Innovation",
    "about.timeline.2021.description": "Developed mobile app and advanced booking system",
    "about.timeline.2022.title": "Growth",
    "about.timeline.2022.description": "Reached 50+ locations and 10,000+ happy customers",
    "about.timeline.2023.title": "Recognition",
    "about.timeline.2023.description": "Named 'Best Watersports Rental' by California Tourism Board",
    "about.timeline.2024.title": "The Future",
    "about.timeline.2024.description": "National expansion with 100+ locations planned",
    "about.mission.title": "Our Mission",
    "about.mission.description": "To make paddleboarding accessible, safe, and enjoyable for everyone while fostering a community that respects and protects our precious aquatic environments. We believe time spent on the water should be effortless, inspiring, and transformative.",
    "about.cta.title": "Join Our Story",
    "about.cta.subtitle": "Whether you're a beginner or experienced pro, we invite you to be part of the pddle community and discover your own story on the water.",
    "about.cta.findLocation": "Find a Location",
    "about.cta.bookExperience": "Book an Experience",

    // Business Page
    "business.hero.title": "Partner with",
    "business.hero.subtitle": "Transform your business with premium SUP experiences. From corporate team building to resort partnerships, we provide complete solutions that drive revenue and delight customers.",
    "business.hero.exploreSolutions": "Explore Solutions",
    "business.hero.getQuote": "Get Quote",
    "business.solutions.title": "Business Solutions",
    "business.solutions.subtitle": "Whether you're a hotel, resort, corporate event organizer, or business owner, we have the perfect SUP solution to enhance your offerings.",
    "business.corporate.title": "Corporate Team Building",
    "business.corporate.description": "Strengthen team bonds with guided SUP adventures designed for corporate groups.",
    "business.corporate.pricing": "Starting from $75/person",
    "business.hotel.title": "Hotel & Resort Partnerships",
    "business.hotel.description": "Enhance guest experiences with premium SUP rental services and guided tours.",
    "business.hotel.pricing": "Custom partnership rates",
    "business.events.title": "Event & Wedding Services",
    "business.events.description": "Create unforgettable memories with SUP experiences for special occasions.",
    "business.events.pricing": "Starting from $100/person",
    "business.benefits.title": "Why Choose pddle for Your Business",
    "business.benefits.revenue.title": "Increase Revenue",
    "business.benefits.revenue.description": "Add a new revenue stream with minimal investment. Our partnership model ensures profitability from day one.",
    "business.benefits.experience.title": "Enhance Customer Experience",
    "business.benefits.experience.description": "Offer unique water activities that differentiate your business and create lasting memories for customers.",
    "business.benefits.insurance.title": "Full Insurance Coverage",
    "business.benefits.insurance.description": "Comprehensive liability insurance and safety protocols protect your business and provide peace of mind.",
    "business.benefits.turnkey.title": "Turnkey Solution",
    "business.benefits.turnkey.description": "We handle equipment, maintenance, training, and bookings. You focus on your core business.",
    "business.packages.title": "Partnership Packages",
    "business.packages.starter.title": "Starter Package",
    "business.packages.starter.description": "Perfect for small businesses and boutique hotels",
    "business.packages.professional.title": "Professional Package",
    "business.packages.professional.description": "Ideal for resorts and larger operations",
    "business.packages.enterprise.title": "Enterprise Package",
    "business.packages.enterprise.description": "Complete solution for large resorts",
    "business.testimonials.title": "What Our Partners Say",
    "business.cta.title": "Ready to Partner?",
    "business.cta.subtitle": "Let's discuss how pddle can transform your customer experience and generate new revenue opportunities for your business.",
    "business.cta.contact": "Contact Us",
    "business.cta.schedule": "Schedule a Meeting",

    // Business Package Features
    "business.features.5to10boards": "5-10 SUP boards",
    "business.features.15to25boards": "15-25 SUP boards",
    "business.features.50plusboards": "50+ SUP boards",
    "business.features.basicTraining": "Basic training",
    "business.features.advancedTraining": "Advanced training",
    "business.features.completeTraining": "Complete training program",
    "business.features.monthlyMaintenance": "Monthly maintenance",
    "business.features.weeklyMaintenance": "Weekly maintenance",
    "business.features.dailyMaintenance": "Daily maintenance",
    "business.features.customerSupport": "Customer support",
    "business.features.prioritySupport": "Priority support",
    "business.features.247support": "24/7 support",
    "business.features.marketingMaterials": "Marketing materials",
    "business.features.customBranding": "Custom branding",
    "business.features.dedicatedAccount": "Dedicated account manager",
    
    // Business Page Additional Translations
    "business.packages.subtitle": "Choose the perfect package that fits your business needs",
    "business.mostPopular": "Most Popular",
    "business.learnMore": "Learn More",

    // Business Solutions Features
    "business.corporate.features.customActivities": "Customized group activities",
    "business.corporate.features.facilitation": "Professional facilitation",
    "business.corporate.features.challenges": "Team challenges",
    "business.corporate.features.catering": "Catering options",

    "business.hotel.features.guestPrograms": "Guest activity programs",
    "business.hotel.features.equipmentManagement": "Equipment management",
    "business.hotel.features.certifiedInstructors": "Certified instructors",
    "business.hotel.features.liabilityCoverage": "Liability coverage",

    "business.events.features.bachelorParties": "Bachelor/bachelorette parties",
    "business.events.features.weddingActivities": "Wedding activities",
    "business.events.features.privateEvents": "Private group events",
    "business.events.features.photography": "Photography services",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("RO")
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // Load saved language from localStorage after hydration
    const savedLanguage = localStorage.getItem("pddle-language") as Language
    if (savedLanguage && (savedLanguage === "RO" || savedLanguage === "EN")) {
      setLanguage(savedLanguage)
    }
    setIsHydrated(true)
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("pddle-language", lang)
  }

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key
  }

  // Use a simpler fallback during SSR to prevent hydration mismatches
  if (!isHydrated) {
    const fallbackT = (key: string): string => {
      return (translations["RO"] as Record<string, string>)[key] || key
    }
    return (
      <LanguageContext.Provider value={{ language: "RO", setLanguage: handleSetLanguage, t: fallbackT }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
