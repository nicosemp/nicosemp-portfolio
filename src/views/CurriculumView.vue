<script setup lang="ts">
import { RouterLink } from "vue-router";
import CurriculumBlock from "@/components/CurriculumBlock.vue";
// TODO: cosa manca nel curriculum? altri lavori secondari con toggle?

const print = () => window.print();
</script>

<template>
  <div class="container pt-6">
    <div class="flex justify-between mb-4 print:hidden">
      <RouterLink :to="{ name: 'home' }" class="special-link">Home</RouterLink>

      <a class="special-link special-link-green" @click="print">Print</a>
    </div>

    <h1 class="text-center uppercase border-b border-black text-5xl">
      Nicolò Maria Semprini
    </h1>

    <div class="flex py-2">
      <div class="basis-1/2 text-right pr-4">
        <p class="mb-2">1994-12-01, Rome, Italy</p>
        <p class="mb-2">(+39) 334 2831 369</p>
        <p>English: professional level, both written and spoken</p>
      </div>
      <div class="basis-1/2 border-l border-black pl-4">
        <p class="mb-2">Viale di Porta Ardeatina, 118, 00154, Rome, Italy</p>
        <p class="mb-2">nicosemp@gmail.com</p>
        <p>Italian: mother tongue</p>
      </div>
    </div>

    <h2 class="uppercase border-b border-black">Professional Experience</h2>

    <CurriculumBlock
      company="In-Place"
      place="Rome, Italy"
      position="CTO & Co-founder"
      date="March 2021 - Present"
    >
      <p>
        Planning and supervising the development of a web application for the
        telerehabilitation of children in developmental age. The web app is
        being developed on a MEVN stack.
      </p>
      <p>
        In 2021: secured funding from Invitalia: National Agency for Inward
        Investment and Economic Development.
      </p>
    </CurriculumBlock>

    <CurriculumBlock
      company="Made in Tomorrow"
      place="Rome, Italy"
      position="Full Stack Software Developer"
      date="April 2017 - Present"
    >
      <p>
        Working in the IT department, developing web applications with Vue.js
        front-end and Node.js back-end, custom Wordpress themes and plugins for
        websites of any size, Android and iOS applications with Flutter.
      </p>
      <p>Main projects:</p>
      <ul>
        <li>
          Developed a new web app with Vue.js for a large internet service
          provider. It increased the loading speed by a factor of 3. Users can
          now manage their contracts and invoices with an interface that is
          faster, more intuitive and reliable.
        </li>
        <li>
          Developed an infographic for a convention held by a United Nations
          agency.
        </li>
        <li>
          Developed a news website with a custom ADS management interface to
          track impressions and clicks.
        </li>
        <li>
          Developed a large e-Commerce for food distribution with many custom
          pages and functionalities, to manage hundreds of orders per month.
        </li>
        <li>
          Promoted for the adoption of new tools and workflows, always looking
          out for new ways to improve project management and product delivery.
        </li>
        <li>Followed and managed 2 interns working on different projects.</li>
      </ul>
    </CurriculumBlock>

    <CurriculumBlock
      company="Freelancer"
      place="Rome, Italy"
      position="Full Stack Software Developer"
      date="September 2013 - Present"
    >
      <p>
        Working both alone or in collaboration with up to 4 team members on
        custom Wordpress themes and plugins, and Android/iOS mobile applications
        with Flutter.
      </p>
      <p>Main projects:</p>
      <ul>
        <li>
          Developed an e-Commerce for a large chain of restaurants to receive
          and handle table bookings, home deliveries, and pick-up requests.
          Increased the order management speed, which resulted in a significant
          increase in income for the restaurants.
        </li>
        <li>
          Developed an Android/iOS application for the same chain of
          restaurants, leveraging the website's API and thus giving the users a
          native mobile experience to make bookings and orders.
        </li>
        <li>
          Developed a website for a nonprofit organization raising funds for
          scientific research on cystic fibrosis.
        </li>
      </ul>
    </CurriculumBlock>

    <h2 class="uppercase border-b border-black mb-2">
      Skills and personal interests
    </h2>
    <p class="font-semibold">Programming skills</p>
    <div class="pills">
      <span>HTML</span><span>CSS</span><span>jQuery</span><span>Bootstrap</span
      ><span>SASS</span><span>Vue.js</span><span>JavaScript</span
      ><span>TypeScript</span><span>Node.js</span><span>Express.js</span
      ><span>Cypress.io</span><span>PHP</span><span>MySQL</span
      ><span>Wordpress</span><span>Dart</span><span>Flutter</span
      ><span>Git</span>
    </div>
    <p class="font-semibold">Languages</p>
    <div class="pills">
      <span>English: professional level, both written and spoken</span
      ><span>Italian: mother tongue</span>
    </div>
    <p class="font-semibold">Personal Interests</p>
    <div class="pills">
      <span>Logic puzzles</span><span>Parkour</span><span>Snowboard</span
      ><span>Kitesurf</span><span>Wakeboard</span><span>Tabletop games</span>
    </div>
  </div>
</template>

<style scoped>
h1,
h2 {
  @apply font-semibold;
}
h1 {
  @apply text-4xl;
}
h2 {
  @apply text-2xl;
}
ul {
  @apply list-disc list-inside;
}

.container {
  max-width: 1024px;
  min-width: 1024px;
  @apply px-8;
}
.special-link {
  @apply text-blue-800;
  &:after {
    @apply bg-blue-200;
  }
  &.special-link-green {
    @apply text-green-800;
    &:after {
      @apply bg-green-200;
    }
  }
}
</style>
