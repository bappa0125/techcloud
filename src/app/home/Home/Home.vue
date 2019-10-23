<template>
  <div>
    <stage :disable-particles="disableParticles" />
    <home-section
      image="https://images.unsplash.com/photo-1549082984-1323b94df9a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=60"
      alternative
    >
      <vue-headline level="2">Unified Learning platform</vue-headline>
      <br />
      <vue-headline level="3">Authomated Lab Provisioning</vue-headline>
      <p>On demand AWS lab provisioning , fully automated, secured,goverened , self destructive</p>
      <br />
      <vue-headline level="3">Instant Automated feedback</vue-headline>
      <p>
        Cloud Labs are different than coding or multiple choice quetions may need an expert to judge the 
        final out come. Platfrom will give fully automated instant feedback about student , progress , errors, possible solutions
        at scale each time every time

      </p>
      <br />
      <vue-headline level="3">Tons of use-cases</vue-headline>
      <p>
        <ul>
          <li>Learning and Knowledge management</li>
          <li>POC , Rapid prototyping team</li>
          <li>Hackathon , code Jams</li>
          <li>Internal external hiring </li>
        </ul>
      </p>
    </home-section>

    <home-section
      image="https://images.unsplash.com/photo-1521790361543-f645cf042ec4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=60"
      flip
    >
      <vue-headline level="2">Enterprise ready</vue-headline>
      <br />
      <vue-headline level="3">Real time Scenarios</vue-headline>
      <p>
        We provide real time eterprise level content which can solve customr problems.
      </p>
      <br />
      <vue-headline level="3">Best practices</vue-headline>
      <p>
        All the scenarios embibe best practices, updated with latest srvices , vendor agonisitic 
      </p>
      <br />
      <vue-headline level="3">True Cloud experience Or Native Hosting </vue-headline>
      <p>
        You can host the platfrom in your enviornment or use the Cloud subscription model
      </p>
    </home-section>

    <home-section
      image="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=60"
      alternative
    >
      <vue-headline level="2">User experience</vue-headline>
      <br />
      <vue-headline level="3">Animated Help -Student</vue-headline>
      <p>
       Student can het animated help with guided navigation within the platfrom 
      </p>
      <br />
      <vue-headline level="3">Detailed Dash board </vue-headline>
      <p>
        Both student and evaluation team can see detailed steps of each and every assignment through a comprehensive
        logging mechanism 
      </p>
      <br />
      <vue-headline level="3">Design System</vue-headline>
      <p>
        Includes a blueprint for a 100% customizable Design System with a huge amount of enterprise level case business
        cases 
        
      </p>
    </home-section>

    <home-section
      image="https://images.unsplash.com/photo-1516381548400-349d680edb56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=60"
      flip
    >
      <vue-headline level="2">Quick start</vue-headline>
      <br />
      <vue-headline level="3">Via <code>npx</code></vue-headline>
      <br />
      <ol>
        <li>
          Run <code>npx @vuesion/create [project-name]</code><br />
          for example <code>npx @vuesion/create my-app</code>
        </li>
        <li>Change directory <code>cd my-app</code></li>
        <li>Run <code>npm run dev</code></li>
      </ol>
      <br />
      <br />
      <vue-headline level="3">Via Git</vue-headline>
      <br />
      <ol>
        <li>
          Download or clone (<code>git clone https://github.com/<br />vuesion/vuesion</code>) the repository
        </li>
        <li>Change directory <code>cd vuesion</code></li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Run <code>npm run dev</code></li>
      </ol>
    </home-section>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import Stage from '../components/Stage/Stage.vue';
import HomeSection from '@/app/home/components/HomeSection/HomeSection.vue';
import { IState } from '@/app/state';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  metaInfo: {
    title: 'vuesion - flexible, scalable, opinionated, fast',
    meta: [
      {
        name: 'description',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      {
        name: 'robots',
        content: 'INDEX,FOLLOW',
      },
      {
        name: 'keywords',
        content: 'vue.js, vuex, vuex-persist, seo, server-side-rendering, isomorphic, progressive-web-app',
      },

      { name: 'og:url', content: 'https://vuesion.herokuapp.com/' },
      { name: 'og:site_name', content: 'vuesion' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en' },
      {
        name: 'og:title',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      {
        name: 'og:description',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      { name: 'og:image:url', content: 'https://vuesion.herokuapp.com/logo.png' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@vuesion1' },
      { name: 'twitter:creator', content: '@vuesion1' },
      {
        name: 'twitter:title',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      { name: 'twitter:url', content: 'https://vuesion.herokuapp.com/' },
      { name: 'twitter:image', content: 'https://vuesion.herokuapp.com/logo.png' },
      {
        name: 'twitter:description',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
    ],
  },
  components: {
    VueHeadline,
    HomeSection,
    Stage,
  },
  computed: {
    ...mapState({
      disableParticles: (state: IState) =>
        (state.app.config && state.app.config.features && state.app.config.features.disableParticles) || false,
    }),
  },
};
</script>
