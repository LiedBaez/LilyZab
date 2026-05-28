import { PHOTOS_BY_YEAR } from './photos.generated.js';

const photos = (year) => PHOTOS_BY_YEAR[year] || [];

// Cada capítulo es un año (o un par de años) de la historia.
// El orden de este array define el orden de la página.
export const CHAPTERS = [
  {
    year: 2017,
    titulo: 'Mi voz',
    subtitulo:
      'Me da pena oírme. Nunca me ha gustado mi propia voz. Pero tú la amaste desde el día que la oíste, y nunca paraste de pedirme este video y aquí está, por fin.',
    fotos: [],
    videos: [
      {
        id: 'Ykv885uA2wU',
        fecha: '3 de abril de 2017',
      },
    ],
    cartas: [],
  },
  {
    year: 2018,
    titulo: 'Cómo nos encontramos',
    subtitulo:
      'Jugábamos Eggwars en Minecraft. Tú tenías 13, yo 16. Hablábamos cada mañana sin saber a dónde nos iba a llevar.',
    fotos: photos('2018'),
    videos: [
      {
        id: 'Bi1sI9HkmW4',
        titulo: 'Jugando con tu cuenta de Minecraft',
        fecha: 'Aquellos años',
        descripcion:
          'Siempre me pides usar tu cuenta para subirte tus estadísticas. Aquí, una de las veces — matando a alguien con tu nombre.',
      },
    ],
    cartas: [],
    pullQuote: {
      texto: 'Sin darnos cuenta, cada mensaje, cada nota de voz, se volvió indispensable.',
      autor: 'Lily, 2021',
    },
  },
  {
    year: 2019,
    titulo: 'El 1 de agosto',
    subtitulo:
      'Después de meses, de una ausencia, de mil indirectas… nos hicimos novios. Y ese mismo día nos tomamos la primera foto que tendríamos juntos, aún a distancia.',
    fotos: photos('2019'),
    cartas: [],
    pullQuoteBefore: true,
    pullQuote: {
      texto: 'El primero de agosto del año dos mil diecinueve, nos hicimos novios.',
      autor: 'Lily',
    },
  },
  {
    year: '2020 · 2021',
    titulo: 'Matilda',
    subtitulo:
      'Nuestra hija. Yo la cuido desde aquí, pero desde el primer día también fue tuya — te la presenté en mensajes y notas de voz, y aprendió a quererte sin haberte visto. Así como nosotros.',
    fotos: [...photos('2020'), ...photos('2021')],
    videos: [
      {
        id: 'aXsw2NAqdWs',
        titulo: 'Quiero tener té. Té quiero.',
        fecha: '3 de agosto de 2020',
        descripcion:
          'Un poema que te dediqué, lo grabé dos días después de nuestro aniversario.',
      },
      {
        id: 'L6R_vAvHwV0',
        titulo: 'Tu tarea de contabilidad',
        fecha: '24 de noviembre de 2021',
        descripcion:
          'Te ayudé a hacer este video para tu clase de contabilidad de 5to año. Cada tarea que me pedías ayudarte, yo sentía un amor muy profundo por ser parte de ti y tu apoyo, amé cada que me pedías algo con inteligencia artificial, transcripciones y todo lo demás. Te amo.',
      },
    ],
    cartas: ['lily-2021'],
    pullQuote: {
      texto: 'Hay éxtasis en mi agonía, y tú me causas mucho placer.',
      autor: 'Lily, 1 de agosto de 2021',
    },
  },
  {
    year: 2022,
    titulo: 'Tantos pequeños momentos',
    subtitulo: 'Años enteros',
    fotos: photos('2022'),
    cartas: [],
  },
  {
    year: 2023,
    titulo: 'Cumples 18 — somos adultos',
    subtitulo:
      'Te escribí para tu primer cumple como adulta. No quería palabras bonitas, quería darte lo que yo necesité a esa edad.',
    fotos: photos('2023'),
    cartas: ['zab-cumple18'],
    extras: ['detalleQueAdoro'],
    pullQuote: {
      texto: 'Mañana podría escaparme contigo y olvidarme de todo.',
      autor: 'Zab, para tus 18',
    },
  },
  {
    year: 2024,
    titulo: 'Estoy para ti',
    subtitulo: 'Cada foto que te mandé fue pensando en ti.',
    fotos: photos('2024'),
    cartas: ['zab-quinto', 'lily-quinto'],
    extras: ['tradition'],
  },
  {
    year: 2025,
    titulo: 'Sigo aquí, esperándote',
    subtitulo:
      'Otro año mío, esperando a que sea nuestro. Trabajando, ahorrando, contando los meses para por fin verte.',
    fotos: photos('2025'),
    videos: [
      {
        id: 'sMTzZIN0_vQ',
        titulo: 'Una tarde de Hypixel contigo',
        fecha: '3 de agosto de 2025',
        descripcion:
          'Volvimos a Minecraft, esta vez en Hypixel. Riéndonos, conviviendo. Después de tantos años, eso seguimos sabiendo hacer mejor que nada.',
      },
    ],
    cartas: [],
    pullQuote: {
      texto: 'Te amo más que ayer, y te amaré mañana más que hoy.',
      autor: 'Lily, 2024',
    },
  },
  {
    year: 2026,
    titulo: 'Y seguimos juntos',
    subtitulo: 'Faltan días. Faltan horas. Pero ya casi.',
    fotos: photos('2026'),
    cartas: [],
    extras: ['finalReflection'],
  },
];
