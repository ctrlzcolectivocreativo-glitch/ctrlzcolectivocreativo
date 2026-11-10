/* ===== CONTENIDO EDITABLE ===== */
const CONTACT = { /* Vacío = no se muestra. */
  whatsapp: "https://wa.me/573123265669", phone: "312 326 5669",
  instagram: "https://www.instagram.com/ctrlz.creativo/",
  behance: "https://www.behance.net/colecticreativ2",
  email: "",   // ej: "hola@tudominio.com"
  web: "",     // ej: "https://tudominio.com"
  linkedin: ""
};
const METRICS = []; // solo cifras reales: [{value:120,label:"piezas",context:"2025"}]
const TEAM = [
  {name:"Fernando", role:"Diseñador gráfico y editor de video", photo:"img/fernando.jpg"},
  {name:"Olly", role:"Diseñadora gráfica", photo:"img/olly.jpg"}
];
const SERVICES = [
 {n:"01",t:"Branding & Identidad",d:"Construimos marcas con una idea clara detrás de cada símbolo.",e:["Diseño de logotipos","Identidad visual","Sistemas gráficos","Manuales y lineamientos de marca","Aplicaciones de identidad"],img:"img/branding-poster.jpg"},
 {n:"02",t:"Diseño Gráfico",d:"Piezas que comunican con claridad y se hacen notar.",e:["Piezas publicitarias","Carteles y afiches","Catálogos","Presentaciones","Diseño editorial","Material gráfico corporativo"],img:"img/diseno-grafico.jpg"},
 {n:"03",t:"Diseño para Redes Sociales",d:"Sistemas visuales coherentes para tu contenido digital.",e:["Posts","Carruseles","Historias","Campañas visuales","Plantillas para redes","Sistemas gráficos para contenido digital"],img:"img/social-poster.jpg"},
 {n:"04",t:"Motion Design",d:"Damos movimiento y personalidad a tu comunicación con recursos gráficos.",e:["Motion flyers","Animación de logotipos","Tipografía animada","Motion graphics","Videos gráficos animados","Piezas publicitarias animadas"],video:"video/flyer-animado.mp4",img:"img/flyer-animado.jpg"},
 {n:"05",t:"Edición de Video",d:"Editamos el material que tú nos entregas. No realizamos grabación ni producción presencial.",e:["Edición de reels","Videos publicitarios","Montaje y narrativa audiovisual","Transiciones y efectos","Subtítulos y música","Adaptación de formatos"],video:"video/gomedia.mp4",img:"img/gomedia.jpg"}
];
/* GALERÍA. k: branding | redes | motion | video. conceptual:true => etiqueta "Proyecto conceptual" */
const ITEMS = [
 {k:"motion",v:"video/flyer-animado.mp4",img:"img/flyer-animado.jpg",name:"Flyer animado",type:"Motion design · Exploración creativa",desc:"Flyer promocional diseñado y animado con recursos gráficos.",services:["Diseño del flyer","Motion graphics"],conceptual:true},
 {k:"motion",v:"video/flyer-timeline.mp4",img:"img/flyer-timeline.jpg",name:"Flyer animado: del diseño a la línea de tiempo",type:"Motion design · Proceso",desc:"El mismo flyer mostrando el diseño, la animación resultante y la línea de tiempo de edición.",services:["Diseño","Animación","Edición"],conceptual:true},
 {k:"motion",v:"video/producto-del-mes.mp4",img:"img/producto-del-mes.jpg",name:"Aliado del mes · Agropaisa",type:"Motion design",desc:"Animación de una pieza gráfica de «Producto del mes» con transiciones y logotipo animado.",services:["Motion graphics","Animación de logotipo"]},
 {k:"motion",v:"video/agropaisa-puntos.mp4",img:"img/agropaisa-puntos.jpg",name:"Más cerca del campo · Agropaisa",type:"Motion design · Video horizontal",desc:"Video animado sobre los puntos de venta a nivel nacional, con mapa y datos animados.",services:["Motion graphics","Formato horizontal"]},
 {k:"video",v:"video/penalti-ia.mp4",img:"img/penalti-ia.jpg",name:"El penalti ganador · Agropaisa",type:"Edición de video · Clips generados con IA",desc:"Pieza en la que los clips se generaron con herramientas de IA y el montaje, la animación y el cierre los realiza Ctrl Z.",services:["Montaje","Motion graphics","Uso de IA para generar clips"]},
 {k:"video",v:"video/olga-destacado.mp4",img:"img/olga-destacado.jpg",name:"Video destacado · Artes d'Olga",type:"Edición de video",desc:"Video destacado de la tienda con montaje, transiciones y cierre con datos de contacto.",services:["Edición","Transiciones","Cierre animado"]},
 {k:"video",v:"video/olga-aguja.mp4",img:"img/olga-aguja.jpg",name:"Aguja mágica · Artes d'Olga",type:"Edición de video",desc:"Reel de producto sobre el uso de la aguja mágica para bordar.",services:["Edición de reels","Formato vertical"]},
 {k:"video",v:"video/gomedia.mp4",img:"img/gomedia.jpg",name:"Video destacado · Go Media",type:"Edición de video",desc:"Edición con tipografía animada, subtítulos y recursos gráficos sobre redes sociales.",services:["Edición","Subtítulos","Tipografía animada"]},
 {k:"video",v:"video/masvida-1.mp4",img:"img/masvida-1.jpg",name:"Reel · Más Vida IPS",type:"Edición de video",desc:"Reel con material proporcionado, rótulos y firma gráfica de marca.",services:["Edición de reels","Gráficos","Música"]},
 {k:"video",v:"video/masvida-2.mp4",img:"img/masvida-2.jpg",name:"Reel · Más Vida IPS · Alimentación",type:"Edición de video",desc:"Reel con listado numerado, rótulos animados y cierre de marca.",services:["Edición de reels","Gráficos","Subtítulos"]},
 {k:"video",v:"video/masvida-3.mp4",img:"img/masvida-3.jpg",name:"Reel · Más Vida IPS · Testimonios",type:"Edición de video",desc:"Montaje de un testimonio con subtítulos resaltados y recursos gráficos.",services:["Montaje","Subtítulos"]},
 {k:"video",v:"video/masvida-odonto.mp4",img:"img/masvida-odonto.jpg",name:"Reel · Odontología Más Vida",type:"Edición de video",desc:"Reel con errores numerados, imágenes de apoyo, rótulos y cierre de marca.",services:["Edición de reels","Gráficos","Subtítulos"]},
 {k:"branding",img:"img/amperelab.jpg",name:"Amperelab",type:"Branding & Identidad",desc:"Símbolo que fusiona la inicial y un rayo con líneas que evocan circuitos.",need:"Una marca tecnológica moderna que una simplicidad y dinamismo.",services:["Logotipo","Paleta","Aplicaciones de marca"]},
 {k:"branding",img:"img/prosegura.jpg",name:"Prosegura LTDA",type:"Branding & Identidad",desc:"Imagotipo que integra las letras P y S con alas y un pilar griego.",need:"Transmitir seguridad y confianza para una agencia de seguros.",services:["Imagotipo","Papelería","Aplicaciones de marca"]},
 {k:"branding",img:"img/llamatrina.jpg",name:"Llamatrina Medicina Estética",type:"Branding & Identidad",desc:"Imagotipo inspirado en la Llama Trina: silueta femenina y formas de llama.",need:"Reflejar fuerza, elegancia y feminidad.",services:["Imagotipo","Paleta","Pieza para redes"]},
 {k:"branding",img:"img/fac.jpg",name:"FAC Structural Engineering",type:"Branding & Identidad",desc:"Símbolo geométrico tridimensional que integra las letras F, A y C.",need:"Transmitir solidez, precisión y equilibrio.",services:["Logotipo","Paleta","Aplicaciones de marca"]},
 {k:"branding",img:"img/isarq.jpg",name:"ISARQ Arquitectura",type:"Branding & Identidad",desc:"Imagotipo geométrico con las letras I, S y A inspirado en un edificio moderno.",need:"Jerarquía y solidez, con los tonos naranja y gris requeridos por el cliente.",services:["Imagotipo","Variantes de color","Aplicaciones de marca"]},
 {k:"redes",img:"img/artesdolga.jpg",name:"Artes d'Olga",type:"Contenido visual para redes y tienda virtual",desc:"Presencia visual para una marca de insumos de bordado y tejido: piezas para redes, etiquetas y tienda virtual.",need:"Una presencia visual coherente, atractiva y profesional en Instagram, Facebook y YouTube.",services:["Diseño para redes","Diseño de etiquetas"]},
 {k:"redes",img:"img/olga-1.jpg",name:"Artes d'Olga · Kits de producto",type:"Diseño para redes",desc:"Posts de producto para la tienda virtual.",services:["Posts","Sistema gráfico"]},
 {k:"redes",img:"img/olga-2.jpg",name:"Artes d'Olga · Hilos y accesorios",type:"Diseño para redes",desc:"Posts de producto para la tienda virtual.",services:["Posts","Sistema gráfico"]}
];
const CASES = [
 {id:"isarq",name:"ISARQ Arquitectura",ctx:"Marca de arquitectura que necesitaba una identidad propia.",reto:"Comunicar jerarquía y solidez usando los tonos naranja y gris requeridos por el cliente.",expl:"Partimos del rectángulo como base geométrica y de la idea de un edificio moderno.",des:"Combinamos las letras I, S y A en un símbolo estructurado y definimos variantes de color.",ent:"Imagotipo, versiones en color, isotipos y aplicaciones de marca.",res:"Identidad visual completa. Resultados cuantitativos: pendiente de documentar.",imgs:["img/isarq.jpg"]},
 {id:"artesdolga",name:"Artes d'Olga",ctx:"Marca de insumos de bordado y tejido con tienda virtual y redes.",reto:"Construir una presencia visual coherente y profesional en varias plataformas.",expl:"Una línea visual rosa y cálida, con el producto como protagonista.",des:"Piezas para redes, etiquetas y videos destacados.",ent:"Posts de producto, kits, etiquetas y reels editados.",res:"Piezas finales publicadas en redes. Métricas: pendiente de documentar.",imgs:["img/artesdolga.jpg","img/olga-1.jpg","img/olga-2.jpg"],video:"video/olga-destacado.mp4",poster:"img/olga-destacado.jpg"}
];
