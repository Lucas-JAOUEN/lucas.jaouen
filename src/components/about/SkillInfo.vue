<template>
  <div
    class="col-6 col-md-3 mb-3 mb-sm-5"
    :key="skills.id"
    v-for="skills in skillsContent"
  >
    <div :class="`c100 ${skills.skillClass}`">
      <span>{{ skills.skillPercent }}%</span>
      <div class="slice">
        <div class="bar"></div>
        <div class="fill"></div>
      </div>
    </div>
    <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
      {{ skills.skillName }}
    </h6>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillsContent: [
        { id: 1, skillClass: "p50", skillPercent: "50", skillName: "C/R" },
        {
          id: 2,
          skillClass: "p75",
          skillPercent: "75",
          skillName: "JAVA / Python",
        },
        { id: 3, skillClass: "p85", skillPercent: "85", skillName: "HTML / CSS / JS" },
        { id: 4, skillClass: "p40", skillPercent: "40", skillName: "PHP" },
        {
          id: 5,
          skillClass: "p95",
          skillPercent: "95",
          skillName: "WORDPRESS",
        },
        { id: 6, skillClass: "p30", skillPercent: "30", skillName: "Blender / Maya 3D / Unity 3D" },
        { id: 7, skillClass: "p50", skillPercent: "50", skillName: "ANGULAR / VUE / GIT" },
        { id: 8, skillClass: "p70", skillPercent: "70", skillName: "Quasar" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
