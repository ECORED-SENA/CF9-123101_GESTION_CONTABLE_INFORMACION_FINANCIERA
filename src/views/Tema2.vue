<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Diferidos
    
    .row.bg-t2-1.mt-4
      .col-12
        .p-5
          .row.justify-content-center.align-items-center 
            .col-lg-8
              .row.bg-t1-1.p-4
                p Los cargos diferidos se pueden dividir en dos partes: #[b Diferidos propiamente dicho] y los #[b gastos pagados por anticipado].  
            .col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema2/img1.png', alt='', style="width: 295px").m-auto

          separador
          #t_2_1.titulo-segundo.color-acento-contenido
            h2 2.1 Concepto de cargos diferidos

          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema2/img2.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Los diferidos dependen de su materialidad y normalmente se llevan a una cuenta de gastos, pero esto no impide que en algunas ocasiones se deba hacer cierto análisis porque puede ser que el cargo diferido cumpla la definición de activo, y si en algún momento cumple con la definición de activo, es decir que sea un recurso controlado por la empresa proveniente de sucesos pasados de los cuales se espera recibir beneficios futuros.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Concepto de gastos pagados por anticipado

    .row.justify-content-center.align-items-center
      .col-lg-7
        p Son un anticipo que se entrega (en dinero) y que van a cubrir un determinado tiempo de acuerdo con el uso. Por ejemplo, una póliza de seguro (prepagada), intereses pagados por anticipado, arrendamientos, entre otros, en los que incurre el ente económico en la ejecución de su actividad.  Lo importante, en determinado momento es saber si cumple con la definición de activo estos gastos que normalmente se ubican en una cuenta por cobrar u otras cuentas por cobrar.

        p #[b El párrafo 70 de la NIC 38, sostiene:]

        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 (…) el párrafo 68 no impide que ésta reconozca el pago anticipado como un activo, cuando dicho pago por servicios se haya realizado antes de que la entidad reciba estos servicios.
            i.fas.fa-quote-right 
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img3.png', alt='', style="width: 480px").m-auto

    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Reconocimiento y medición

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
          .col
            h3.mb-0 Reconocimiento

    .row.bg-t2-1.mt-4
      .col-12
        .p-5
          .row.justify-content-center.align-items-center
            .col-lg-5.d-flex.d-lg-block
              figure
                img(src='@/assets/curso/tema2/img4.png', alt='', style="width: 5000px").m-auto

            .col-lg-7
              .row.bg-t2-2.p-2
                p El párrafo 68 NIC 38: activos intangibles (Grupo 1) no impide que la entidad reconozca un pago anticipado como activo, cuando el pago por los bienes se haya realizado antes de que la entidad obtenga el derecho de acceso a esos bienes.

                p Los desembolsos sobre un activo intangible, reconocidos inicialmente como gastos del periodo no se reconocerán posteriormente como parte del costo de un activo intangible.

          p.mt-4 #[b Ejemplo:]

          p Párrafo 28 NIC 38 Activos Intangibles: a) los costos de introducción de un nuevo producto o servicio (incluyendo los costos de actividades publicitarias y promocionales); b) los costos de apertura del negocio en una nueva localización o dirigirlo a un nuevo segmento de clientela (incluyendo los costos de formación del personal); y (c) los costos de administración y otros costos indirectos generales.

          .row.justify-content-center.mt-4
            .col-sm-6.col-lg-5.mb-4.mb-lg-0
              .tarjeta--boton.bg-t1-4.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-3
                    figure
                      img(src='@/assets/curso/tema2/img5.svg', style="width:90px")

                h4 Medición posterior al modelo del costo
                p La medición posterior de un activo intangible se contabilizará por su costo menos el valor de la amortización acumulada y las pérdidas por deterioro del activo contempladas en el párrafo 74 de la NIC 38.

            .col-sm-6.col-lg-5.mb-4.mb-lg-0
              .tarjeta--boton.bg-t1-5.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-3
                    figure
                      img(src='@/assets/curso/tema2/img6.svg', style="width:90px")

                h4 Medición posterior al modelo revaluación
                p Un activo intangible se registrará por el valor revaluado (valor razonable), menos la amortización y las pérdidas acumuladas por deterioro que haya sufrido el activo.

    p Por otro lado, los desembolsos sobre una partida intangible deberán reconocerse como un gasto cuando se incurra en ellos (NIC 38 Párrafo 68)

    p.mt-4 #[b Ejemplo 1]

    .row.justify-content-center.bg-t1-6
      .p-lg-5
        p.mt-4.mt-md-0 El 1 de junio del año 20X1, la empresa ABC, adquiere un contrato de arrendamiento.  Paga por anticipado tres meses de arrendamiento por valor de $3.000.000, más IVA tarifa general.

        .row.justify-content-center
          .col-lg-10.mt-4
            .row.justify-content-center
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-stretch.bg-t2-3
                  .col-xl-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema2/img7.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-xl.p-lg-5
                    .p-5.w-100.align-items-cente
                      p.mb-0 Valor Anticipo ....$3.000.000
                      p.mb-0 Más IVA..............$570 .000
                      p.mb-0 Valor Total..........$3.750.000

        p.mt-4 Cuando una empresa realiza un pago anticipado por arrendamiento, este se registra inicialmente como gasto y, si aplica, también como activo por impuestos. A continuación, se presenta el asiento contable correspondiente al reconocimiento:

        .row.justify-content-center.mt-4
          .col-lg-6
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 6.
              span  Reconocimiento contable de arrendamiento pagado por anticipado

            .tabla-scroll
              table
                thead
                  tr(style="background-color: #FD9826")
                    th(style="width: 50%") Cuenta
                    th(style="width: 25%") Debe
                    th(style="width: 25%") Haber
                tbody
                  tr(style="background-color: #F6F6F6")
                    td #[b Gastos Arrendamientos]
                    td 3.000.000
                    td 
                  tr(style="background-color: #FFF")
                    td #[b Activo por Impuestos]
                    td 570.000
                    td 
                  tr(style="background-color: #F6F6F6")
                    td #[b Cuentas por Pagar]
                    td 
                    td 3.570.000

          .col-lg-6.mt-4.md-0
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 7. 
              span Registro contable - Pago de arrendamiento previamente reconocido

            .tabla-scroll
              table
                thead
                  tr(style="background-color: #FD9826")
                    th(style="width: 50%") Cuenta
                    th(style="width: 25%") Debe
                    th(style="width: 25%") Haber
                tbody
                  tr(style="background-color: #F6F6F6")
                    td #[b Cuentas por pagar]
                    td 3.570.000
                    td 
                  tr(style="background-color: #FFF")
                    td #[b Activo- Bancos Nacionales]
                    td 
                    td 3.570.000

        p.p-4.bg-t1-7.mt-4 Nota: vale la pena aclarar que, aunque la norma internacional indica que todos los desembolsos deben reconocerse como gasto, queda a criterio de la entidad si, esta debe ser registrada como gastos o clasificarse como gastos pagados por anticipado.


    p.mt-4 #[b Ejemplo 2]

    .row.justify-content-center.bg-t1-6
      .p-lg-5
        p.mt-4.md-0 El 1 de enero de 20xx la empresa SABACO Ltda., adquirió una póliza de seguros contra incendios por 1 año, por valor de $4.000.000 mediante cheque girado del banco Davivienda.

        p #[b Manejo de anticipos]

        p El 1 de enero de 20xx la empresa SABACO Ltda., adquirió una póliza de seguros contra incendios por 1 año, por valor de $4.000.000 mediante cheque girado del banco Davivienda.

        .row.justify-content-center.mt-4
          .col-lg-6
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 8. 
              span  Reconocimiento compra póliza de seguros

            .tabla-scroll
              table
                thead
                  tr(style="background-color: #FD9826")
                    th(style="width: 50%") Cuenta
                    th(style="width: 25%") Debe
                    th(style="width: 25%") Haber
                tbody
                  tr(style="background-color: #F6F6F6")
                    td #[b Activo- Póliza de Seguros- Incendios]
                    td 4.000.000
                    td 
                  tr(style="background-color: #FFF")
                    td #[b Cuentas por Pagar]
                    td 
                    td 4.000.000

          .col-lg-6.mt-4.md-0
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 9. 
              span Momento del pago
            .tabla-scroll
              table
                thead
                  tr(style="background-color: #FD9826")
                    th(style="width: 50%") Cuenta
                    th(style="width: 25%") Debe
                    th(style="width: 25%") Haber
                tbody
                  tr(style="background-color: #F6F6F6")
                    td #[b Cuentas por pagar]
                    td 4.000.000
                    td 
                  tr(style="background-color: #FFF")
                    td #[b Activo- Bancos Nacionales]
                    td 
                    td 4.000.000

        p.mt-4 La empresa mensualmente debe hacer un asiento de ajuste para reconocer en el estado de resultados el gasto por póliza de seguros de cada periodo así: 

        .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 10. 
              span Registro contable - Amortización mensual de póliza de seguros
        .row.justify-content-center.mt-4.align-items-center
          .col-lg-8
            .tabla-scroll
              table
                thead
                  tr(style="background-color: #FD9826")
                    th(style="width: 60%") Cuenta
                    th(style="width: 20%") Debe
                    th(style="width: 20%") Haber
                tbody
                  tr(style="background-color: #F6F6F6")
                    td #[b Gasto - Póliza de Seguros- Incendios]
                    td 333.333
                    td 
                  tr(style="background-color: #FFF")
                    td #[b Activo Póliza de Seguros- Incendios]
                    td 
                    td 333.333

          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img8.png', alt='', style="width: 295px")

          p.mt-4 Estos pagos por anticipado se deben ir amortizando hasta finalizar el tiempo establecido.

    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Retiros, enajenaciones y revelación
    
    p La gestión contable de los activos intangibles requiere no solo reconocer y medir adecuadamente estos elementos, sino también establecer los criterios para su retiro o enajenación cuando dejan de generar beneficios económicos

    .row.justify-content-center.mt-4
      .col-sm-6.col-lg-5.mb-4.mb-lg-0
        .tarjeta--boton.bg-t1-4.p-5.h-100
          .row.justify-content-center.mb-3
            .col-3
              figure
                img(src='@/assets/curso/tema2/img9.svg', style="width:90px")

          h4 Retiros y enajenaciones
          p Un activo intangible es dado de baja cuando es enajenado, también cuando no se esperan retribuciones o beneficios económicos en el futuro. 

          p Cuando se da de baja un activo, debe ser reconocido en el estado de resultados, medido por la diferencia entre el valor en libros del activo y/o por cualquier flujo por efecto de la enajenación (si existen).


      .col-sm-6.col-lg-5.mb-4.mb-lg-0
        .tarjeta--boton.bg-t1-5.p-5.h-100
          .row.justify-content-center.mb-3
            .col-3
              figure
                img(src='@/assets/curso/tema2/img10.svg', style="width:90px")

          h4 Revelación
          p La revelación de los activos intangibles debe incluir: las bases de medición, el método de amortización, las vidas útiles o las tasas de amortización utilizadas, conciliación de los movimientos del período para cada clase de activo intangible, método de medición (Costo / revaluación), desembolsos por investigación y desarrollo entre otros.

       
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
