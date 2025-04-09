export default {
  global: {
    Name: 'Activos Intangibles',
    Description:
      'Hallar valor en un panorama empresarial tan cambiante donde<br> tradicionalmente los recursos de la empresa eran cosas que se podían<br> palpar como un edificio, una máquina, un vehículo, un terreno sobre lo que las empresas centran su atención; pero con el paso del tiempo, los procesos, las relaciones y los modelos comerciales han evolucionado; y es así como, las empresas invierten cada vez más en activos intangibles no solamente en una computadora, un software, sino también en la investigación, innovación, la marca, el diseño organizacional, el conocimiento, las relaciones, entre otros. Por lo anterior, en el presente componente se analiza el tratamiento contable de los activos intangibles y diferidos, de acuerdo con los criterios establecidos en las Normas Internacionales de Información Financiera.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Tema 1',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Subtema 1',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tema 2',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tema 3',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'Es la distribución sistemática del importe depreciable del activo intangible durante la vida útil; el activo útil es un recurso controlado por la entidad como resultado de sucesos pasados y del que la entidad espera obtener beneficios económicos futuros. (IFRS, 2008, pág. 3)',
    },
    {
      termino: 'Activo intangible',
      significado:
        'Activo identificable, de carácter no monetario y sin apariencia física. (IFRS, 2013, pág. 1)',
    },
    {
      termino: 'Activo Monetario',
      significado:
        'Es dinero en efectivo u otro activo, por el que se va a recibir una cantidad fija de dinero. (IFRS, 2008, pág. 3)',
    },
    {
      termino: 'Amortización',
      significado:
        'Distribución sistemática del importe depreciable de un activo intangible a lo largo de su vida útil. En el caso de activos intangibles, el término “amortización” se utiliza en vez de “depreciación”. (IFRS, 2008, pág. 4)',
    },
    {
      termino: 'Costo',
      significado:
        'Importe de efectivo que equivale al pago efectuado o al valor razonable de lo entregado para adquirir ese activo, en el momento de su construcción o adquisición. (IFRS, 2008, pág. 11)',
    },
    {
      termino: 'Gasto',
      significado:
        'Son los decrementos en los beneficios económicos, producidos a lo largo del periodo contable, en forma de salidas o disminuciones del valor de los activos, o bien por la generación o aumento de los pasivos que dan como resultado decrementos en el patrimonio, y no están relacionados con las distribuciones realizadas a los propietarios de este patrimonio.',
    },
    {
      termino: 'Gastos pagados por anticipado',
      significado:
        'Representan una erogación efectuada por servicios que se van a recibir o por bienes que se van a consumir en el uso exclusivo del negocio y cuyo propósito no es el de venderlos ni utilizarlos en el proceso productivo.',
    },
    {
      termino: 'NIC',
      significado:
        'Las Normas Internacionales de Contabilidad (NIC), son un conjunto de normas que reglamenta la información que debe presentarse en los estados financieros de las empresas, así como la forma como esa información debe registrarse para su análisis. (Burgos Alarcón, 2007)',
    },
    {
      termino: 'NIIF',
      significado:
        'Sigla en español de las IFRS - Normas expedidas por IASB. Este término trae incluidas las NIC (Normas Internacionales de Contabilidad), NIIF (Normas Internacionales de Información Financiera, así como las interpretaciones CINIIF y SIC.',
    },
    {
      termino: 'Pérdida por deterioro',
      significado:
        'El exceso del importe en libros sobre el importe recuperable de un activo. (NIIF, 2008, pág. 29)',
    },
    {
      termino: 'Valor depreciable',
      significado:
        'Es el costo de un activo u otro que lo sustituye menos su valor residual. (NIIF, 2008)',
    },
    {
      termino: 'Valor residual',
      significado:
        'Es el importe estimado que la entidad podría obtener de un activo por su disposición, después de haber deducido los costos estimados para su disposición, si el activo tuviera ya la edad y condición esperadas al término de su vida útil. (CTCP, 2020, 11 de diciembre)',
    },
    {
      termino: 'Vida útil',
      significado:
        'El periodo durante el cual se espera que la entidad utilice el activo; o el número de unidades de producción o similares que se espera obtener del mismo por parte de una entidad. (CTCP, 2020, 11 de diciembre)',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
