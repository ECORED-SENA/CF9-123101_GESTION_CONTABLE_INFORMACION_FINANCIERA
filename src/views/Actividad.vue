<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión y el uso adecuado de las herramientas básicas en la ventana <em>Board</em> del <em>software</em> EAGLE.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes características define un activo intangible según la NIC 38?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es un activo monetario con forma física.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es un pasivo con valor de mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Es identificable, no monetario y sin apariencia física.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Es tangible y de fácil comercialización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes es un ejemplo de un activo intangible identificable?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Software.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Posicionamiento de marca.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Buena reputación empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Relaciones comerciales implícitas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué indica la NIC 38 respecto a la vida útil de un activo intangible?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Todos los activos deben tener una vida útil indefinida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo los tangibles deben amortizarse.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Debe estimarse en 5 años.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Puede ser finita o indefinida, dependiendo del activo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué método de medición inicial se aplica a un activo intangible adquirido separadamente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Valor residual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Costo de adquisición.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Valor proyectado a 5 años.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Valor de mercado futuro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuándo inicia la amortización de un activo intangible?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Al momento de la firma del contrato.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuando se realiza el pago.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cuando el activo está disponible y en condiciones de uso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'En el cierre fiscal del año en curso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué sucede si un activo intangible tiene una vida útil indefinida?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se amortiza cada año.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se elimina del balance.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No se amortiza pero se evalúa su deterioro cada periodo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se registra como gasto mensual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el criterio para elegir entre el modelo del costo o revaluación como política contable?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La opción más barata.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La decisión debe aplicarse a toda la clase de activos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Lo que indique el auditor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El nivel de ingresos de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué representa el valor razonable de un activo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un valor ficticio acordado internamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El precio de venta entre participantes del mercado en el momento de la medición.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El valor fiscal registrado en libros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La suma de su valor residual más intereses.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué son los gastos pagados por anticipado?\tx',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Pagos que cubren un periodo futuro sin haberse recibido aún el bien o servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gastos acumulados por depreciación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pagos hechos en exceso y no reconocidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Saldos negativos de cuentas por pagar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuándo se da de baja un activo intangible?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando se enajena o no se esperan beneficios futuros.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cuando su costo se recupera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuando cumple cinco años.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Al final de cada año contable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Los activos intangibles deben tener apariencia física para ser reconocidos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El método de amortización debe reflejar el patrón esperado de agotamiento del activo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Un cargo diferido puede considerarse activo si genera beneficios económicos futuros.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Todos los gastos anticipados deben reconocerse siempre como gasto inmediato.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El deterioro de un activo intangible disminuye su valor en libros.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
