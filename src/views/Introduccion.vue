<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p Durante el presente componente tendrá la oportunidad de fortalecer sus conocimientos frente a la legislación laboral; por ende, es necesario que indague sobre las generalidades de contratos, nómina, beneficios a empleados y reconocimiento de los hechos presentados. Lo anterior se debe realizar teniendo en cuenta la normativa vigente.

    
    .video.mb-5.mt-4
      iframe(width="560" height="315" src="https://www.youtube.com/embed/3KDDv2LrIcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    .row.bg-intro1
      .col-12
        .p-5
          p Para la elaboración de este componente, se abordaron varios autores conocidos en contratos de trabajo y liquidación de nómina, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido que el conocimiento es social y, por lo tanto, es para usarlo por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de gestión contable e información financiera.

          .row.justify-content-center.mt-4 
            .col-lg-8
              p.p-4.bg-intro2 #[b Nota aclaratoria:] las tablas que se toman como referencia en los ejemplos de cada uno de los temas desarrollados, elaboradas mediante el programa Excel son derivadas de estos ejercicios, la elaboración es propia del autor del presente componente, por lo tanto, no se numeran y no se establece un nombre específico.
            .col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/intro/img1.png', alt='', style="width: 480px").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
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
