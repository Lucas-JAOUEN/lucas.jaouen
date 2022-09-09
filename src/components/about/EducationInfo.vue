<template>
  <ul>
    <li v-for="education in educationContent" :key="education.id">
      <div class="icon">
        <i class="fa fa-briefcase"></i>
      </div>
      <span class="time open-sans-font text-uppercase">{{
        education.year
      }}</span>
      <h5 class="poppins-font text-uppercase">
        {{ education.degree }}
        <span class="place open-sans-font">{{ education.institute }}</span>
      </h5>
      <p class="open-sans-font">{{ education.details }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      educationContent: [
        {
          id: 1,
          year: "Sept 2021 - Now",
          degree: "IT & Multimedia Engineer Degree",
          institute: "CNAM ENJMIN",
          details: `Actually, I am in the second year of my engineering degree in Computer Science and Multimedia`,
        },
        {
          id: 2,
          year: "Sept 2019 - Sept 2021",
          degree: "DUT INFO (Universitary Diploma of Technology in Computer Science)",
          institute: "CNAM Paris",
          details: `Thesis on the Back-End & Front-End development of an
                    internal application and the next year, an other thesis Defence of end of studies`,
        },
        {
          id: 3,
          year: "Sept 2018 - Nov 2018",
          degree: "DUT GMP (Universitary Diploma of Technology in Mécanic et Production option) ",
          institute: "CNAM PARIS",
          details: `Reorientation within the scope of my professional project`,
        },
        {
          id: 4,
          year: "2015 - 2018",
          degree: "BAC S ",
          institute: "Lycée la Tour des Dames",
          details: `Obtained in July 2018`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
