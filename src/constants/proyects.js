import ManduAppImg from "@/assets/images/proyects/manduapp.png";
import MoviesLocImg from "@/assets/images/proyects/moviesloc.png";
import RCCarShopImg from "@/assets/images/proyects/rccarshop.png";

export const proyects = [
  {
    title: "ManduApp",
    description: "ManduApp es una aplicación web creada con Next.js y React, diseñada para gestionar listas e ítems con estados pendiente, en proceso y completado. La autenticación de usuarios y el almacenamiento de datos se implementaron con Firebase, asegurando que cada usuario pueda guardar y acceder a sus listas de manera segura y sencilla.",
    img: ManduAppImg,
    tools: ["Next.js", "Firebase", "Cloudinary", "Figma", "CSS", "Bootstrap (grid system)"],
    proyectURL: "https://manduapp.netlify.app/",
    githubURL: "https://github.com/rodrigocattebeke/manduApp",
  },
  {
    title: "MoviesLoc",
    description: "MoviesLoc es una webapp desarrollada con Next.js que muestra información de películas obtenida desde la API de TMDB. Permite explorar títulos populares y ver detalles como sinopsis, puntuación y fecha de estreno. El sistema de registro y login funciona de forma local con LocalStorage, ya que en ese momento todavía no usaba bases de datos externas.",
    img: MoviesLocImg,
    tools: ["Next.js", "TMDB API", "Figma", "Bootstrap", "CSS", "LocalStorage"],
    proyectURL: "https://moviesloc.netlify.app/",
    githubURL: "https://github.com/rodrigocattebeke/moviesloc",
  },
  {
    title: "RC Car Shop",
    description:
      "RC Car Shop es una web de accesorios para autos que inicialmente desarrollé con React y luego adapté a Next.js para aprovechar el renderizado del lado del servidor (SSR) y mejorar el SEO. Fue mi primer proyecto orientado a un ecommerce, donde las imágenes se gestionan mediante Cloudinary y los productos se cargan desde una tabla de Google Sheets usada como base de datos básica. No cuenta con registro ni autenticación; las compras se realizan directamente a través de WhatsApp, ofreciendo un flujo de compra rápido y sencillo. El diseño mantiene un enfoque moderno, limpio y centrado en la experiencia del usuario.",
    img: RCCarShopImg,
    tools: ["Next.js", "React", "Cloudinary", "Google Sheets (como BD)", "Bootstrap", "CSS"],
    proyectURL: "https://rccarshop.netlify.app/",
    githubURL: "https://github.com/rodrigocattebeke/rc-car-shop-next",
  },
];
