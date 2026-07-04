import ProjectCardFeatured from "../projects/ProjectCardFeatured";
import ProjectCardSimple from "../projects/ProjectCardSimple";

import imgJadeProps from "../../assets/jadeprops.webp";
import imgMinibus from "../../assets/minibushirelondon.webp";
import imgDaisysPaws from "../../assets/daisyspaws.webp";
import imgDubaiPrint from "../../assets/dubaiprintdesign.webp";
import imgExcursions from "../../assets/excursionsdubai.webp";
import imgJetsetVisas from "../../assets/jetsetvisas.webp";
import imgSafaris from "../../assets/safaris.webp";
import imgUaeCar from "../../assets/uaeluxurycarhire.webp";
import imgUaeTransfers from "../../assets/uaetransfers.webp";
import imgTawaf from "../../assets/tawafessentials.webp";
import imgCompareTransport from "../../assets/comparetransport.webp";
import imgJetsetApp from "../../assets/app.jetsetvisas.webp";
import imgLuxeWayRides from "../../assets/luxwayrides.webp";
import imgMamas from "../../assets/mamascuisine.webp";
import imgCompareFlights from "../../assets/compareflights.webp";
import imgKarak from "../../assets/karak-time.webp";
import imgSmpNationwide from "../../assets/smpnationwide.webp";
import imgFranksHandyman from "../../assets/frankshandyman.webp";
import imgMaldivesHotelReviews from "../../assets/maldivesproject.webp";

const featuredProjects = [
  {
    category: "Real Estate",
    title: "Jade Props",
    image: imgJadeProps,
    link: "https://jadeprops.com/",
  },
  {
    category: "Vehicle Hire",
    title: "Minibus Hire London",
    image: imgMinibus,
    link: "https://www.minibushirelondon.org/",
  },
  {
    category: "Pet Boutique",
    title: "Daisy's Paws",
    image: imgDaisysPaws,
    link: "https://www.daisyspaws.com/",
  },
  {
    category: "Print Design",
    title: "Dubai Print Design",
    image: imgDubaiPrint,
    link: "https://www.dubaiprintdesign.com/",
  },
];

const simpleProjects = [
  { category: "Tour Booking", title: "Excursions Dubai", link: "https://www.excursionsdubai.ae/", image: imgExcursions },
  { category: "Visa Services", title: "Jetset Visas", link: "https://www.jetsetvisas.ae/", image: imgJetsetVisas },
  { category: "Desert Safaris", title: "Safaris UAE", link: "https://www.safaris.ae/", image: imgSafaris },
  { category: "Luxury Car Hire", title: "UAE Luxury Car Hire", link: "https://www.uaeluxurycarhire.com/", image: imgUaeCar },
  { category: "Flight Booking", title: "Compare Flights AE", link: "https://www.compareflights.ae/", image: imgCompareFlights },
  { category: "Taxi & Transfers", title: "UAE Transfers", link: "https://www.uaetransfers.com/", image: imgUaeTransfers },
  { category: "Umrah Essentials", title: "Tawaf Essentials", link: "https://www.tawafessentials.com/", image: imgTawaf },
  { category: "Transport Comparison", title: "Compare Transport UK", link: "http://comparetransport.co.uk/", image: imgCompareTransport },
  { category: "Visa App", title: "Jetset Visas App", link: "https://app.jetsetvisas.ae/", image: imgJetsetApp },
  { category: "Taxi Booking", title: "Luxe Way Rides", link: "https://www.luxewayride.com/", image: imgLuxeWayRides },
  { category: "Restaurant", title: "Mama's Cuisine", link: "https://mamascuisine.netlify.app/", image: imgMamas },
  { category: "Restaurant", title: "Karak Time", link: "https://karak-time-swy8.onrender.com/", image: imgKarak },
  { category: "Scalp Micropigmentation", title: "SMP Nationwide", link: "https://www.smpnationwide.co.uk/", image: imgSmpNationwide },
  { category: "Handyman Services", title: "Franks Handyman Services", link: "https://www.frankhandyman.co.uk/", image: imgFranksHandyman },
  { category: "Hotel Reviews", title: "Maldives Hotel Reviews", link: "https://www.maldiveshotelreviews.com/", image: imgMaldivesHotelReviews },
];

export default function ProjectsSection() {
  return (
    <section className="py-24" id="projects">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-black text-primary">SELECTED WORKS</h2>
          <p className="text-on-surface-variant uppercase tracking-[0.2em] text-xs mt-2">
            19 Live Deployments
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredProjects.map((project) => (
            <ProjectCardFeatured key={project.title} {...project} />
          ))}
          {simpleProjects.map((project) => (
            <ProjectCardSimple key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
