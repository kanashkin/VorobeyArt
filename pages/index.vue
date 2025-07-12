<script setup>
import DefaultHero from "~/components/Blocks/DefaultHero.vue";
import DefaultLogos from "~/components/Blocks/DefaultLogos.vue";
import DefaultProjects from "~/components/Blocks/DefaultProjects.vue";
import DefaultTelegram from "~/components/Blocks/DefaultTelegram.vue";
import Footer from "~/components/Cases/Footer.vue";

defineProps({
  curtains: String,
});
</script>

<template>
  <main>
    <DefaultHero :curtains="curtains" />
    <DefaultLogos class="logos" />
    <DefaultProjects />
    <DefaultTelegram />
    <Footer :case="false" />
  </main>
</template>

<style lang="scss">
.logos {
  margin-top: 0 !important;
}
/* или вообще убери, если не используешь */
</style>
