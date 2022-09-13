const products = [
    {
        id:1,
        name: 'Alcatel 3H',
        description: 'Tamaño de la pantalla: 6.52 "(165.64 mm x 75.59 mm x 8.8 mm)',
        price: 33199,
        image: ['https://http2.mlstatic.com/D_NQ_NP_2X_705727-MLA47762780436_102021-F.webp','https://http2.mlstatic.com/D_NQ_NP_666595-MLA47752720383_102021-O.webp','https://http2.mlstatic.com/D_NQ_NP_862968-MLA47752638548_102021-O.webp','https://http2.mlstatic.com/D_NQ_NP_940163-MLA47752638549_102021-O.webp'],
        stock: 67,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_2X_705727-MLA47762780436_102021-F.webp',
        brandId: 1
    },
    {
        id:2,
        name: 'Apple iPhone 11',
        description: 'Clasificación IP68 de resistencia al agua y al polvo (hasta 30 minutos a una profundidad máxima de 2 metros',
        price: 177000,
        image: ['https://http2.mlstatic.com/D_NQ_NP_2X_796892-MLA46114829828_052021-F.webp','https://http2.mlstatic.com/D_NQ_NP_2X_781098-MLA46114829829_052021-F.webp','https://http2.mlstatic.com/D_NQ_NP_962164-MLA46115014397_052021-O.webp','https://http2.mlstatic.com/D_NQ_NP_615019-MLA46114829834_052021-O.webp'],
        stock: 42,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_2X_796892-MLA46114829828_052021-F.webp',
        brandId: 2
    },
    {
        id:3,
        name: 'Moto G60s',
        description: 'Procesador MediaTek MT6382 Helio G95 Octa-Core de 2.05GHz con 6GB de RAM',
        price: 53000,
        image: ['https://http2.mlstatic.com/D_NQ_NP_966438-MLA48112811958_112021-O.webp','https://http2.mlstatic.com/D_NQ_NP_938617-MLA48112925074_112021-O.webp','https://http2.mlstatic.com/D_NQ_NP_733877-MLA48112828923_112021-O.webp','https://http2.mlstatic.com/D_NQ_NP_804552-MLA48112811957_112021-O.webp'],
        stock: 84,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_966438-MLA48112811958_112021-O.webp',
        brandId: 3
    },
    {
        id:4,
        name: 'Motorola Edge 20 ',
        description: 'Procesador MediaTek Dimensity 720 Octa-Core de 2GHz con 6GB de RAM',
        price: 72900,
        image: ['https://http2.mlstatic.com/D_NQ_NP_833619-MLA48233725917_112021-O.webp','https://http2.mlstatic.com/D_NQ_NP_938617-MLA48112925074_112021-O.webp','https://http2.mlstatic.com/D_NQ_NP_733877-MLA48112828923_112021-O.webp','https://http2.mlstatic.com/D_NQ_NP_804552-MLA48112811957_112021-O.webp'],
        stock: 6,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_833619-MLA48233725917_112021-O.webp',
        brandId: 3
    },
    {
        id:5,
        name: 'Samsung Galaxy Tab  ',
        description: 'Memoria interna expandible hasta 1 TB con fuente externa.',
        price: 53000,
        image: ['https://http2.mlstatic.com/D_NQ_NP_765874-MLA47146197629_082021-O.webp','https://http2.mlstatic.com/D_NQ_NP_662402-MLA47146427171_082021-O.webp','https://http2.mlstatic.com/D_NQ_NP_733877-MLA48112828923_112021-O.webp','https://http2.mlstatic.com/D_NQ_NP_804552-MLA48112811957_112021-O.webp'],
        stock: 6,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_765874-MLA47146197629_082021-O.webp',
        brandId: 4
    },
    {
        id:6,
        name: 'Apple Macbook Air',
        description: 'GPU de hasta 8 núcleos con gráficos hasta 5 veces más veloces para apps y juegos con gráficos avanzados',
        price: 190000,
        image: ['https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-O.webp','https://http2.mlstatic.com/D_NQ_NP_645799-MLA46516517280_062021-O.webp','https://http2.mlstatic.com/D_NQ_NP_640916-MLA46516517281_062021-O.webp','https://http2.mlstatic.com/D_NQ_NP_628610-MLA46516504412_062021-O.webp'],
        stock: 6,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-O.webp',
        brandId: 2
    },
    {
        id:7,
        name: 'Samsung Galaxy I7 ',
        description: 'GPU de hasta 8 núcleos con gráficos hasta 5 veces más veloces para apps y juegos con gráficos avanzados',
        price: 179399,
        image: ['https://http2.mlstatic.com/D_NQ_NP_665967-MLA49447613233_032022-O.webp','https://http2.mlstatic.com/D_NQ_NP_946007-MLA49447520832_032022-O.webp','https://http2.mlstatic.com/D_NQ_NP_705424-MLA49447629138_032022-O.webp','https://http2.mlstatic.com/D_NQ_NP_626157-MLA49447516880_032022-O.webp'],
        stock: 8,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_665967-MLA49447613233_032022-O.webp',
        brandId: 4
    },
    {
        id:8,
        name: 'Samsung Galaxy Watch4 Classic ',
        description: 'Caja 42mm de acero inoxidable silver, malla silver de fluoroelastómero y bisel black de acero inoxidable SM-R880',
        price: 53999,
        image: ['https://http2.mlstatic.com/D_NQ_NP_781975-MLA47030150137_082021-O.webp','https://http2.mlstatic.com/D_NQ_NP_642070-MLA47030150138_082021-O.webp','https://http2.mlstatic.com/D_NQ_NP_600593-MLA47030070378_082021-O.webp','https://http2.mlstatic.com/D_NQ_NP_617497-MLA47030070380_082021-O.webp'],
        stock: 16,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_781975-MLA47030150137_082021-O.webp',
        brandId: 4
    },
    {
        id:9,
        name: 'Apple Watch Series 7',
        description: 'Caja de aluminio color azul medianoche - Correa deportiva azul medianoche',
        price: 78216,
        image: ['https://http2.mlstatic.com/D_NQ_NP_858093-MLA48096508611_112021-O.webp','https://http2.mlstatic.com/D_NQ_NP_918886-MLA48096508608_112021-O.webp','https://http2.mlstatic.com/D_NQ_NP_613094-MLA48096714353_112021-O.webp','https://http2.mlstatic.com/D_NQ_NP_792251-MLA48096443783_112021-O.webp'],
        stock: 21,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_858093-MLA48096508611_112021-O.webp',
        brandId: 2
    },
    {
        id:10,
        name: 'Alcatel 1',
        description: 'Procesador MediaTek MT6739 Quad-Core de 1.3GHz con 1GB de RAM',
        price: 17799,
        image: ['https://http2.mlstatic.com/D_NQ_NP_913104-MLA41487029341_042020-O.webp','https://http2.mlstatic.com/D_NQ_NP_934103-MLA41486926442_042020-O.webp','https://http2.mlstatic.com/D_NQ_NP_968795-MLA41487029342_042020-O.webp','https://http2.mlstatic.com/D_NQ_NP_964976-MLA41487029343_042020-O.webp'],
        stock: 14,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_913104-MLA41487029341_042020-O.webp',
        brandId: 1
    },

]

export default products