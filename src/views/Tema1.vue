<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Intangibles y Diferidos

    .row.justify-content-center.align-items-center 
      .col-lg-9
        .row.bg-t1-1.p-4
          p La NIC-38 establece que “un activo intangible debe ser identificable, es de carácter no monetario y sin apariencia física” (Blanco, 2013, p. 5). 
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img1.png', alt='', style="width: 295px").m-auto

    .row.bg-intro1.mt-4
      .col-12
        .p-5
          separador
          #t_1_1.titulo-segundo.color-acento-contenido
            h2 1.1  Marco normativo

          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/img2.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Para realizar la presentación razonable y en cumplimiento de las NIIF, los estados financieros siempre deben reflejar, razonablemente, todas y cada una de sus partidas, dentro de las que se encuentran, los activos intangibles. Esta presentación razonable exige proporcionar la imagen fiel de los efectos de las transacciones, eventos y condiciones de acuerdo con las definiciones y criterios de reconocimiento de los activos, pasivos, ingresos y gastos fijados en el Marco Conceptual de la norma.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Importancia de los intangibles dentro de las organizaciones

    .row.justify-content-center.align-items-center
      .col-lg-7
        .row.bg-t1-2.p-4
          p Los intangibles se han convertido en un factor importante dentro de las organizaciones y su valor agregado se ve reflejado a través de diferentes elementos (licencias, concesiones, patentes, propiedad intelectual, software entre otros) que han tenido relevancia y se han catalogado como activos capitalizables dentro de las organizaciones.

          p Es importante reconocer que los activos intangibles no crean valor por sí mismos, puesto que, estos deben ir acompañados por la capacidad intelectual del factor humano ya que, en muchas ocasiones el mal manejo de estos elementos, o un mal reconocimiento o medición de estos activos dentro de las organizaciones pueden generar declive o desprendimiento de valor para el bien o servicio.

      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img3.png', alt='', style="width: 480px").m-auto

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Clasificación de Activos Intangibles

    .row.bg-intro1.mt-4
      .col-12
        .p-5
          .row.justify-content-center
            .col-sm-6.col-lg-5.mb-4.mb-lg-0
              .tarjeta--boton.bg-t1-4.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-3
                    figure
                      img(src='@/assets/curso/tema1/img4.png', style="width:90px")

                h4 Activos Intangibles No Identificables:
                p Son activos que no se pueden separar. Por ejemplo, una empresa no puede vender su posicionamiento porque tendría que vender toda la empresa, no puede vender por un lado la empresa y por otro lado el posicionamiento, se tiene que vender las dos cosas en conjunto ya que son inherentes a la entidad. 

            .col-sm-6.col-lg-5.mb-4.mb-lg-0
              .tarjeta--boton.bg-t1-5.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-3
                    figure
                      img(src='@/assets/curso/tema1/img5.png', style="width:90px")

                h4 Activos Intangibles Identificables:
                p Contrario a los no identificables los activos identificables son activos que se pueden separar. En este caso, podemos señalar algunos ejemplos como, los relacionados con la tecnología, bases de datos, software, licencias entre otros. 

    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Reconocimiento y medición de Intangibles

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
          .col
            h3.mb-0 Reconocimiento de Intangibles

    p.mt-4 Las Normas Internacionales de Información Financiera (NIIF) - NIC 38 Activos Intangibles, reconocerán los activos intangibles teniendo en cuenta la circunstancia o la eventualidad de la adquisición. 

    .row.align-items-center.justify-content-center
      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img6.png', alt='', style="width: 500px")
      .col-lg-7
        .row.bg-t1-2.p-4
          p Estos activos pueden ser adquiridos por separado, como parte de una combinación de negocios, mediante una subvención del gobierno, o a través de permuta.

          p De igual manera es importante tener claro que los activos intangibles cuando se adquieren por separado se reconocerán por el precio de adquisición y cualquier otro costo directamente atribuible a la preparación y puesta en marcha del activo, y cuando son adquiridos mediante permuta de activos se reconocerán por el valor en libros del activo entregado o por el valor razonable. En los demás casos se reconocerá por su valor razonable.

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
          .col
            h3.mb-0 Medición de intangibles

    p.mt-4.p-4.bg-t1-2  De acuerdo con la NIC 38 un activo intangible se mide inicialmente al costo. Este costo comprende el precio de adquisición teniendo en cuenta los aranceles de importación e impuestos descontables en que se incurran sobre la adquisición, una vez aplicados los descuentos y rebajas comerciales, como también cualquier otro costo directamente atribuido y que implique la puesta en marcha y funcionamiento del activo.

    separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Generalidades de intangibles: vida útil, periodo, método de amortización y valor razonable.

    p La vida útil de los activos intangibles es considerada como el periodo de tiempo, durante el cual se espera contribuyan a la generación de flujos de efectivo para la entidad.

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
          .col
            h3.mb-0 Vida útil

    .row.align-items-center.justify-content-center.mt-4
      .col-lg-7
        .row.bg-t1-2.p-5
          p Una entidad deberá considerar si la vida útil de un activo intangible es finita o indefinida, si el activo tiene una vida finita se amortizará. Estos activos cuando son generados internamente tienen una vida útil definida. En el caso donde no pueda determinarse con fiabilidad, se estima que es de 10 años.

          p Normalmente los activos con vida útil finita se amortizan. Si, el activo tiene una vida infinita no se amortizará, pero cada periodo se deberá evaluar si existe o no deterioro.

          p De acuerdo con la NIC 38 la vida útil es “el periodo durante el cual se espera que la entidad utilice el activo” o “el número de unidades de producción o similares que se espera obtener del mismo por parte de una entidad”. 
      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img7.png', alt='', style="width: 500px")

    p.mt-4 #[b Ejemplo]

    .row.justify-content-center.bg-t1-6
      .p-lg-5
        p La compañía SABACO Ltda., el 1 de enero del año 20X1, adquiere una patente farmacéutica, a la que le queda una vida útil de 6 años, por $4.500.000.  En la misma fecha adquiere una marca comercial por $2.500.000. 
        p A principios del año 20X3 la entidad analiza que, la marca ha sufrido un deterioro del 30% de su valor y que dejará de tener valor comercial y por tanto dejará de producir flujos de efectivo dentro de 4 años.

        p De acuerdo con la NIC 38 la vida útil es “el periodo durante el cual se espera que la entidad utilice el activo” o “el número de unidades de producción o similares que se espera obtener del mismo por parte de una entidad”. 

        p #[b 1. Enero 1 de 20X1 se realiza el registro de la adquisición de la patente y de la marca:]
        p **Causación- reconocimiento

        .row.justify-content-center.mt-4
          .col-lg-6
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 1.
              span Registro contable - Causación / Reconocimiento

            .tabla-scroll
              table.table.table-bordered
                thead
                  tr
                    th.htb Cuenta
                    th.htb Debe
                    th.htb Haber
                tbody
                  tr(style="background-color: #F6F6F6")
                    td #[b Propiedad Industrial Patente]
                    td 4.500
                    td 
                  tr(style="background-color: #FFF")
                    td #[b Propiedad Industrial Patente]
                    td 2.500
                    td 
                  tr(style="background-color: #F6F6F6")
                    td #[b Costos y Gastos por pagar]
                    td 
                    td 7.000.0

          .col-lg-6.mt-4
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 2. 
              span Registro contable - Pago

            .tabla-scroll
              table
                thead
                  tr(style="background-color: #FD9826")
                    th Cuenta
                    th Debe
                    th Haber
                tbody
                  tr(style="background-color: #F6F6F6")
                    td #[b Costos y Gastos por pagar]
                    td 7.000
                    td 
                  tr(style="background-color: #FFF")
                    td #[b Efectivo y Equivalentes a Efectivo- Bancos]
                    td 
                    td 7.000.0

        p.mt-4 #[b 2. Diciembre 31 del año  20X1, se registra la amortización del activo con vida útil definida]
        p Nota: de la misma forma aplica para el año 20X2 y sucesivos.

        .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 3. 
              span Registro contable - Amortización Intangible: Patente (mensual por 4 años)
        .row.justify-content-center.mt-4.align-items-center
          .col-lg-7
            .tabla-scroll
              table
                thead
                  tr(style="background-color: #FD9826")
                    th(style="width: 60%") Cuenta
                    th(style="width: 20%") Debe
                    th(style="width: 20%") Haber
                tbody
                  tr(style="background-color: #F6F6F6")
                    td #[b Gastos Amortización Propiedad Industrial Patente]
                    td 93,75
                    td 
                  tr(style="background-color: #FFF")
                    td #[b Efectivo y Equivalentes a Efectivo]
                    td 
                      td 93,75

          .col-lg-5.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img8.png', alt='', style="width: 295px")

        p.mt-4 #[b 3. A 1 de enero del año 20X3, se registra el deterioro que ha sufrido la marca correspondiente al 30%.]
        p Nota: se considera su valor en libros teniendo en cuenta el deterioro que ha sufrido el intangible.

        .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 4. 
              span 
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
                    td #[b Pérdidas por deterioro del activo Intangible(2500*0.3)]
                    td 750
                    td 
                  tr(style="background-color: #FFF")
                    td #[b Deterioro de valor de Propiedad Industrial Marcas]
                    td 
                      td 750

          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img9.png', alt='', style="width: 295px")

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
          .col
            h3.mb-0 Periodo y Método de Amortización

    .row.bg-intro1.mt-4
      .col-12
        .p-5
          p De acuerdo con el ejercicio anterior, la amortización es la distribución sistémica a lo largo de la vida útil de un activo con vida útil finita, es decir, se debe dividir el valor total del año en doce meses para poder registrar el valor correspondiente a cada mes.

          .row.justify-content-center.mt-4.align-items-center
            .col-lg-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 5. 
                span 
              .tabla-scroll
                table
                  thead
                    tr(style="background-color: #FD9826")
                      th(style="width: 60%") Cuenta
                      th(style="width: 20%") Debe
                      th(style="width: 20%") Haber
                  tbody
                    tr(style="background-color: #F6F6F6")
                      td #[b Gastos Amortización Propiedad Industrial Patente(4500/4)]
                      td 93,75 
                      td 
                    tr(style="background-color: #FFF")
                      td #[b Efectivo y Equivalentes a Efectivo]
                      td 
                      td 93,75 

          p.mt-4 Vale la pena recordar que, la amortización de los intangibles inicia cuando el activo esté a disposición y en condiciones de uso. 
          p El método de amortización utilizado refleja el patrón de agotamiento esperado, por parte de la entidad.  El cargo por amortización de cada período se reconocerá en el resultado del periodo, según indicaciones de la NIC 38.

          p El método de amortización utilizado refleja el patrón de agotamiento esperado, por parte de la entidad.  El cargo por amortización de cada período se reconocerá en el resultado del periodo, según indicaciones de la NIC 38.

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
          .col
            h3.mb-0 Valor Razonable

    p.mt-4 Corresponde al precio que se recibirá por vender un activo o que se pagaría por transferir un pasivo en una transacción entre dos agentes o participantes en el mercado en el momento de la medición del activo.

    p #[b Por ejemplo:]

    p Tomando el caso anterior se tiene, que el activo intangible “marcas”, de acuerdo con factores de mercado se determinó que, su valor razonable es de $1.750

    .row.justify-content-center
      .col-lg-10.mt-4
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-t1-7
              .col-xl-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/img10.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-xl.p-lg-5
                .p-5.w-100.align-items-center
                  p.mb-0 #[b Entonces:]
                  p.mb-0 Valor en libros..........$2.500
                  p.mb-0 Valor razonable........$1.750
                  p.mb-0 Valor del deterioro.....$ 750

              
    separador
    #t_1_6.titulo-segundo.color-acento-contenido
      h2 1.6 Política contable de intangibles
    
    p La Política contable de intangibles establece las características de reconocimiento, medición inicial y posterior, presentación y revelación de la información contable y financiera de los activos intangibles que posee la entidad, la cual debe ser diseñada de acuerdo con criterios del marco normativo. 

    .row.justify-content-center
      .col-lg-10.mt-4
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-t1-8
              .col-xl.p-4
                .p-4.w-100.align-items-center
                  p La organización deberá optar, como política contable el modelo del costo o el modelo de revaluación, según indican los párrafos 74 y 75 respectivamente de la NIC 38. La norma también indica que, si un activo intangible por ejemplo se contabiliza según el modelo del costo, todos los demás activos clasificados en la misma clase se deberán contabilizar con el mismo modelo.
              .col-lg-5.pe-xl-0.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/img11.png', alt='', class="w-100 h-100 object-fit-cover")
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
