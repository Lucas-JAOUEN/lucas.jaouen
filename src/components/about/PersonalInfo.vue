<template>
  <ul class="about-list list-unstyled open-sans-font">
    <li v-for="personalInfo in personalInfoContent" :key="personalInfo.id">
      <span class="title">{{ personalInfo.meta }}: </span>
      <span
        class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
      >
        {{ personalInfo.metaInfo }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      personalInfoContent: [
        { id: 1, meta: "first name", metaInfo: "Lucas" },
        { id: 2, meta: "last name", metaInfo: "JAOUEN" },
        { id: 3, meta: "Age", metaInfo: "22 Years" },
        { id: 4, meta: "Nationality", metaInfo: "French" },
        { id: 5, meta: "Internship", metaInfo: "30/05/22 to 21/07/22" },
        { id: 6, meta: "Address", metaInfo: "Angouleme" },
        { id: 7, meta: "phone", metaInfo: "+33670868818" },
        { id: 8, meta: "Email", metaInfo: "lucas.jaouen1@gmail.com" },
        { id: 9, meta: "Insta", metaInfo: "lucas_jaouen" },
        { id: 10, meta: "langages", metaInfo: "French, English, Spanish" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
