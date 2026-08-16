// ============================================================
// js/data.js
// Único archivo que contiene la información del negocio.
// Editar este archivo para actualizar textos, precios y servicios.
// ============================================================

export const businessData = {
  // ---------- Datos generales ----------
  general: {
    nombre: "Bella Vita Studio",
    eslogan: "Belleza y bienestar en cada detalle",
    whatsapp: "5215512345678", // Código de país + número, sin espacios ni símbolos
    direccionCorta: "Av. Reforma 245, Col. Centro",
    direccionCompleta: "Av. Reforma 245, Col. Centro, Ciudad de México, México",
    horario: "Lun - Sáb: 9:00 am - 8:00 pm",
    logo: "/assets/logo.png",
    heroImagen: "/assets/hero.png",
    sitioUrl: "https://demo-servicio2.pages.dev/", // URL completa de tu sitio web
    nosotros: {
      titulo: "Sobre Nosotros",
      descripcion: "Bella Vita Studio nació con la pasión de transformar la belleza y el bienestar en una experiencia única. Con más de 10 años de experiencia, nuestro equipo de profesionales está comprometido a ofrecerte servicios de alta calidad en un ambiente relajante y acogedor.",
      imagen: "/assets/nosotros.png",
    },
    ubicacion: {
      titulo: "Encuéntranos",
    },
  },

  // ---------- Categorías de servicios ----------
  categorias: [
    { id: "todos", nombre: "Todos" },
    { id: "capilar", nombre: "Capilar" },
    { id: "unas", nombre: "Uñas" },
    { id: "faciales", nombre: "Faciales" },
    { id: "barberia", nombre: "Barbería" },
  ],

  // ---------- Lista de servicios ----------
  servicios: [
    {
      id: 1,
      nombre: "Corte de Cabello",
      descripcion: "Corte personalizado según tipo de rostro y estilo.",
      precio: 250,
      categoria: "capilar",
      imagen: "/assets/items/item1.png",
    },
    {
      id: 2,
      nombre: "Coloración Completa",
      descripcion: "Tinte, mechas o balayage con productos profesionales.",
      precio: 950,
      categoria: "capilar",
      imagen: "/assets/items/item2.png",
    },
    {
      id: 3,
      nombre: "Manicure Spa",
      descripcion: "Limado, cutícula, hidratación y esmaltado semipermanente.",
      precio: 220,
      categoria: "unas",
      imagen: "/assets/items/item3.png",
    },
    {
      id: 4,
      nombre: "Pedicure Relajante",
      descripcion: "Exfoliación, masaje y esmaltado con enfoque relajante.",
      precio: 280,
      categoria: "unas",
      imagen: "/assets/items/item4.png",
    },
    {
      id: 5,
      nombre: "Limpieza Facial Profunda",
      descripcion: "Limpieza, exfoliación y mascarilla según tipo de piel.",
      precio: 480,
      categoria: "faciales",
      imagen: "/assets/items/item5.png",
    },
    {
      id: 6,
      nombre: "Arreglo de Barba",
      descripcion: "Perfilado, afeitado clásico con navaja y toalla caliente.",
      precio: 180,
      categoria: "barberia",
      imagen: "/assets/items/item6.png",
    },
  ],
};