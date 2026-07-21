<script setup lang="ts">
import BaseButton from '@/design-system/components/BaseButton.vue'
import ContactCTA from '@/design-system/components/ContactCTA.vue'
import SectionTitle from '@/design-system/components/SectionTitle.vue'
import StackTag from '@/design-system/components/StackTag.vue'
import ProjectCard from '@/features/projects/components/ProjectCard.vue'
import { featuredProjects } from '@/shared/data/projects'

const stackGroups = [
  {
    title: 'Front-end',
    text: 'Interfaces, composants et experiences web interactives.',
    tone: 'cream',
    tags: [
      { label: 'Vue.js', tone: 'dark' },
      { label: 'TypeScript', tone: 'lime' },
      { label: 'Tailwind', tone: 'dark' },
      { label: 'Responsive', tone: 'dark' },
    ],
  },
  {
    title: 'Back-end',
    text: 'APIs, logique metier et donnees fiables.',
    tone: 'violet',
    tags: [
      { label: 'Node.js', tone: 'lime' },
      { label: 'Firebase', tone: 'lime' },
      { label: 'Express', tone: 'lime' },
    ],
  },
  {
    title: 'Design / UI',
    text: 'Design system, maquettes et integration fidele.',
    tone: 'pink',
    tags: [
      { label: 'Figma', tone: 'cream' },
      { label: 'Design system', tone: 'cream' },
      { label: 'Prototype', tone: 'lime' },
    ],
  },
] as const

const methodSteps = [
  {
    number: '01',
    title: "Comprendre l'idee",
    text: "Identifier le besoin, le contexte et l'objectif du projet.",
  },
  {
    number: '02',
    title: "Structurer l'experience",
    text: 'Organiser les pages, les parcours et les informations importantes.',
  },
  {
    number: '03',
    title: 'Creer une interface claire',
    text: 'Construire une direction visuelle coherente, expressive et lisible.',
  },
  {
    number: '04',
    title: 'Developper une base maintenable',
    text: 'Decouper le projet en composants, donnees et modules propres.',
  },
  {
    number: '05',
    title: 'Tester et ameliorer',
    text: "Ajuster l'experience, corriger les problemes et ameliorer les details.",
  },
] as const

const supportPills = [
  'Developpeur etudiant',
  'Alternance recherchee',
  'UI vivante',
  'Composants maintenables',
  'Responsive first',
] as const

const aboutPills = [
  'Architecture',
  'Front-end dynamique',
  'Recherche alternance',
  'Interfaces web creatives',
] as const
</script>

<template>
  <section class="home-hero section section--violet">
    <span class="home-doodle home-doodle--diamond home-hero__diamond" aria-hidden="true"></span>
    <span class="home-doodle home-doodle--burst home-hero__burst" aria-hidden="true"></span>
    <span class="home-doodle home-doodle--spark home-hero__spark" aria-hidden="true"></span>
    <span class="home-doodle home-doodle--arrow home-hero__arrow" aria-hidden="true"></span>
    <span class="home-doodle home-doodle--squiggle home-hero__squiggle" aria-hidden="true"></span>
    <span class="home-doodle home-doodle--bolt home-hero__bolt" aria-hidden="true"></span>
    <div class="container content-layer home-hero__grid">
      <div class="home-hero__copy">
        <p class="home-hero__eyebrow">CREATIVE FULL-STACK PLAYGROUND</p>
        <h1 class="display-word home-hero__title">
          <span>Costa</span>
          <span>Maskulov</span>
        </h1>
        <p class="home-hero__role">Développeur full-stack</p>
        <p class="home-hero__text">
          Je transforme des idées en interfaces vivantes, créatives et maintenables.
        </p>
        <div class="home-hero__actions">
          <BaseButton href="/projets">Voir mes projets</BaseButton>
          <BaseButton href="/contact" variant="outline">Me contacter</BaseButton>
        </div>
        <div class="home-hero__pills" aria-label="Compétences principales">
          <span class="home-hero__pill-code">&lt;/&gt;</span>
          <span>Vue.js</span>
          <span class="home-hero__pill-dot" aria-hidden="true"></span>
          <span>Node.js</span>
          <span class="home-hero__pill-dot" aria-hidden="true"></span>
          <span>Creative UI</span>
          <span class="home-hero__pill-dot" aria-hidden="true"></span>
          <span>GitHub</span>
        </div>
      </div>
      <div class="home-hero__code" aria-hidden="true">
        <p class="home-hero__code-file">portfolio.ts</p>
        <div class="home-hero__code-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="home-hero__code-content">
          <p><span>const</span> costa = {</p>
          <p><i>role:</i> <em>"full-stack developer"</em>,</p>
          <p><i>focus:</i> <em>"creative interfaces"</em>,</p>
          <p><i>stack:</i> [<em>"Vue"</em>, <em>"Node"</em>, <em>"Firebase"</em>]</p>
          <p>}</p>
        </div>
        <div class="home-hero__code-chip">status:<br />available_for_alternance</div>
        <span class="home-hero__code-sticker">Creative<br />dev</span>
      </div>
    </div>
  </section>

  <section class="home-projects-section section section--cream">
    <span class="decor-word home-projects-section__decor" aria-hidden="true">Selected work</span>
    <span class="home-doodle home-doodle--spark home-projects-section__spark-a" aria-hidden="true"></span>
    <span class="home-doodle home-doodle--spark home-projects-section__spark-b" aria-hidden="true"></span>
    <div class="container content-layer">
      <SectionTitle
        class="home-section-title home-section-title--projects"
        eyebrow="01 - Projets"
        title="Projets, interfaces & experimentations"
        description="Une selection de projets web, applications et interfaces creatives ou j'explore le developpement full-stack."
      />
      <div class="home-projects">
        <ProjectCard
          v-for="(project, index) in featuredProjects"
          :key="project.id"
          :project="project"
          :variant="index === 0 ? 'violet' : index === 2 ? 'dark' : 'cream'"
        />
      </div>
      <BaseButton class="home-projects-section__button" href="/projets" variant="dark">
        Voir tous les projets
      </BaseButton>
    </div>
  </section>

  <section class="home-stack section section--dark">
    <span class="decor-word home-stack__decor" aria-hidden="true">Stack</span>
    <span class="home-doodle home-doodle--burst home-stack__burst" aria-hidden="true"></span>
    <div class="container content-layer">
      <SectionTitle
        class="home-section-title home-section-title--stack"
        eyebrow="02 - Stack"
        title="Une stack moderne pour des interfaces vivantes."
        description="J'utilise une stack claire et moderne, avec une attention particuliere portee a la modularite, au responsive et a l'experience utilisateur."
        inverse
      />
      <div class="home-stack__cards">
        <article
          v-for="group in stackGroups"
          :key="group.title"
          class="home-stack-card"
          :class="`home-stack-card--${group.tone}`"
        >
          <h3>{{ group.title }}</h3>
          <p>{{ group.text }}</p>
          <div class="home-stack-card__tags">
            <StackTag
              v-for="tag in group.tags"
              :key="tag.label"
              :label="tag.label"
              :tone="tag.tone"
            />
          </div>
        </article>
      </div>
      <div class="home-stack__strip" aria-label="Axes de travail">
        <span v-for="pill in supportPills" :key="pill">{{ pill }}</span>
      </div>
    </div>
  </section>

  <section class="home-process section section--cream">
    <span class="decor-word home-process__decor" aria-hidden="true">Process</span>
    <span class="home-doodle home-doodle--spark home-process__spark" aria-hidden="true"></span>
    <div class="container content-layer">
      <SectionTitle
        class="home-section-title home-section-title--process"
        eyebrow="03 - Methode"
        title="Je pense mes projets comme des systemes complets."
        description="Une idee claire, une interface expressive, des composants reutilisables et une base technique capable d'evoluer."
      />
      <div class="home-process__panel">
        <article v-for="step in methodSteps" :key="step.number" class="home-process-step">
          <span>{{ step.number }}</span>
          <div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="home-about section section--violet">
    <span class="decor-word home-about__decor" aria-hidden="true">About</span>
    <span class="home-doodle home-doodle--arrow home-about__arrow" aria-hidden="true"></span>
    <div class="container content-layer home-about__grid">
      <div>
        <p class="home-about__eyebrow">04 - A propos</p>
        <h2>Je construis des interfaces avec du caractere et une structure propre derriere.</h2>
        <p>
          Je suis Costa Maskulov, developpeur full-stack en formation d'ingenierie
          informatique. J'aime creer des interfaces modernes, creatives et utiles,
          avec une attention particuliere portee a la structure, au detail et a
          l'experience utilisateur.
        </p>
        <BaseButton href="/a-propos">En savoir plus</BaseButton>
      </div>
      <aside class="home-about__card">
        <p>Actuellement</p>
        <div>
          <StackTag
            v-for="pill in aboutPills"
            :key="pill"
            :label="pill"
            :tone="pill === 'Recherche alternance' ? 'lime' : 'dark'"
          />
        </div>
        <p>
          Je cherche a rejoindre une equipe ou je peux construire des interfaces
          utiles, propres et vivantes.
        </p>
        <span>Open to work</span>
      </aside>
    </div>
  </section>

  <ContactCTA />
</template>

<style scoped>
.home-doodle {
  position: absolute;
  z-index: 0;
  pointer-events: none;
}

.home-doodle--diamond {
  width: 86px;
  height: 86px;
  border: 10px solid currentColor;
  border-radius: 22px 6px 22px 6px;
  color: currentColor;
  opacity: 0.18;
  transform: rotate(26deg) skew(-8deg, -8deg);
}

.home-doodle--spark {
  width: 58px;
  height: 58px;
  color: currentColor;
  opacity: 0.22;
}

.home-doodle--spark::before,
.home-doodle--spark::after {
  position: absolute;
  inset: 50% auto auto 50%;
  width: 10px;
  height: 74px;
  border-radius: 999px;
  background: currentColor;
  content: "";
  transform: translate(-50%, -50%);
}

.home-doodle--spark::after {
  transform: translate(-50%, -50%) rotate(90deg);
}

.home-doodle--burst {
  width: 126px;
  height: 96px;
  color: currentColor;
  opacity: 0.55;
}

.home-doodle--burst::before,
.home-doodle--burst::after {
  position: absolute;
  inset: 10px 0 auto auto;
  width: 28px;
  height: 82px;
  border: 8px solid currentColor;
  border-radius: 50% 50% 8px 8px;
  content: "";
  transform-origin: bottom center;
}

.home-doodle--burst::before {
  right: 46px;
  transform: rotate(-12deg);
}

.home-doodle--burst::after {
  right: 2px;
  transform: rotate(28deg);
}

.home-doodle--arrow {
  width: 220px;
  height: 90px;
  border-bottom: 6px solid currentColor;
  border-radius: 0 0 0 80%;
  color: currentColor;
  opacity: 0.28;
  transform: rotate(-7deg);
}

.home-doodle--arrow::before {
  position: absolute;
  right: -3px;
  bottom: -15px;
  width: 34px;
  height: 34px;
  border-right: 6px solid currentColor;
  border-bottom: 6px solid currentColor;
  content: "";
  transform: rotate(-45deg);
}

.home-doodle--squiggle {
  width: 188px;
  height: 76px;
  color: currentColor;
  opacity: 0.42;
}

.home-doodle--squiggle::before {
  position: absolute;
  left: 8px;
  top: 30px;
  width: 128px;
  height: 38px;
  border-top: 7px solid currentColor;
  border-radius: 50%;
  content: "";
  transform: rotate(8deg);
}

.home-doodle--squiggle::after {
  position: absolute;
  right: 8px;
  top: 40px;
  width: 28px;
  height: 28px;
  border-right: 7px solid currentColor;
  border-bottom: 7px solid currentColor;
  content: "";
  transform: rotate(-18deg);
}

.home-doodle--bolt {
  width: 250px;
  height: 315px;
  color: currentColor;
  opacity: 0.54;
}

.home-doodle--bolt::before,
.home-doodle--bolt::after {
  position: absolute;
  inset: 0;
  background: currentColor;
  clip-path: polygon(39% 0, 100% 14%, 70% 42%, 95% 51%, 9% 100%, 36% 61%, 0 51%);
  content: "";
}

.home-doodle--bolt::after {
  inset: 32px;
  background: var(--color-brand-electric);
}

.home-section-title--projects {
  max-width: 860px;
}

.home-section-title--stack,
.home-section-title--process {
  max-width: 780px;
}

.home-hero {
  display: flex;
  align-items: center;
  min-height: calc(100svh - 80px);
  padding: 0 clamp(88px, 5.4vw, 116px);
}

.home-hero__diamond {
  left: 40%;
  top: 18%;
  color: var(--color-brand-deep);
}

.home-hero__burst {
  right: 6%;
  top: 8%;
  color: var(--color-brand-deep);
}

.home-hero__spark {
  width: 70px;
  height: 70px;
  left: 50%;
  top: 3%;
  color: var(--color-brand-deep);
  opacity: 0.64;
  background:
    linear-gradient(currentColor, currentColor) center / 10px 70px no-repeat,
    linear-gradient(90deg, currentColor, currentColor) center / 70px 10px no-repeat,
    linear-gradient(45deg, transparent 46%, currentColor 47%, currentColor 53%, transparent 54%),
    linear-gradient(-45deg, transparent 46%, currentColor 47%, currentColor 53%, transparent 54%);
  border-radius: 999px;
}

.home-hero__spark::before,
.home-hero__spark::after {
  display: none;
}

.home-hero__arrow {
  left: 36%;
  bottom: 15%;
  color: var(--color-brand-deep);
}

.home-hero__squiggle {
  left: 39%;
  top: 42%;
  color: var(--color-brand-deep);
}

.home-hero__bolt {
  right: 2%;
  bottom: 2%;
  color: var(--color-brand-deep);
}

.home-hero__grid {
  display: grid;
  width: min(100%, 1820px);
  grid-template-columns: minmax(520px, 720px) minmax(600px, 760px);
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4xl);
}

.home-hero__copy {
  position: relative;
}

.home-hero__copy::before,
.home-hero__copy::after {
  position: absolute;
  z-index: 0;
  left: -80px;
  width: 560px;
  height: 96px;
  border-radius: 999px;
  background: var(--color-brand-deep);
  clip-path: polygon(0 28%, 92% 0, 100% 46%, 8% 100%);
  content: "";
  opacity: 0.48;
  pointer-events: none;
}

.home-hero__copy::before {
  top: 86px;
  transform: rotate(10deg);
}

.home-hero__copy::after {
  top: 236px;
  width: 620px;
  opacity: 0.4;
  transform: rotate(16deg);
}

.home-hero__copy > * {
  position: relative;
  z-index: 1;
}

.home-hero__eyebrow,
.home-hero__role {
  color: var(--color-accent-lime);
  font-weight: 950;
}

.home-hero__eyebrow {
  color: var(--color-neutral-cream);
  font-size: clamp(1.05rem, 1.25vw, 1.45rem);
  line-height: 1.1;
}

.home-hero__role {
  margin-top: var(--space-xl);
  font-size: clamp(2.05rem, 2.8vw, 3rem);
  line-height: 1;
}

.home-hero__text {
  max-width: 670px;
  margin-top: var(--space-lg);
  color: rgba(245, 241, 232, 0.86);
  font-size: clamp(1.45rem, 2vw, 2.15rem);
  line-height: 1.65;
}

.home-hero__title {
  width: min(100%, 660px);
  margin-top: var(--space-sm);
  font-size: clamp(10rem, 14.2vw, 14.8rem);
}

.home-hero__title span {
  display: block;
}

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-top: var(--space-xl);
}

.home-hero__actions .base-button {
  min-height: 56px;
  padding: 0 34px;
  font-size: 1.08rem;
}

.home-hero__pills {
  display: flex;
  width: max-content;
  max-width: 100%;
  align-items: center;
  flex-wrap: nowrap;
  gap: 18px;
  margin-top: var(--space-xl);
  padding: 8px 20px;
  border: 2px solid rgba(23, 16, 91, 0.55);
  border-radius: 999px;
  background: rgba(23, 16, 91, 0.34);
  color: var(--color-neutral-cream);
  font-weight: 850;
}

.home-hero__pill-code {
  color: var(--color-accent-lime);
  font-family: "Courier New", monospace;
  font-weight: 950;
}

.home-hero__pill-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent-lime);
}

.home-hero__code {
  position: relative;
  z-index: 2;
  justify-self: end;
  width: min(100%, clamp(560px, 35vw, 700px));
  min-height: clamp(450px, 31vw, 545px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(36px, 3vw, 52px);
  border: var(--border-strong);
  border-radius: 32px;
  background: var(--color-neutral-black);
  box-shadow: 10px 10px 0 var(--color-neutral-cream);
  color: var(--color-accent-lime);
  transform: rotate(7deg);
}

.home-hero__code-file {
  color: var(--color-accent-lime);
  font-family: "Courier New", monospace;
  font-size: clamp(1rem, 1.2vw, 1.35rem);
  font-weight: 900;
}

.home-hero__code-bar {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: calc(var(--space-xl) * -1);
  margin-bottom: var(--space-2xl);
}

.home-hero__code-bar span {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: var(--color-accent-pink);
}

.home-hero__code-bar span:nth-child(2) {
  background: var(--color-accent-lime);
}

.home-hero__code-bar span:nth-child(3) {
  background: var(--color-neutral-cream);
}

.home-hero__code-content {
  overflow: hidden;
  color: var(--color-neutral-cream);
  font-family: "Courier New", monospace;
  font-size: clamp(1.2rem, 1.55vw, 1.75rem);
  font-weight: 700;
  line-height: 1.55;
}

.home-hero__code-content span {
  color: var(--color-accent-pink);
}

.home-hero__code-content i {
  color: var(--color-accent-pink);
  font-style: normal;
}

.home-hero__code-content em {
  color: var(--color-accent-lime);
  font-style: normal;
}

.home-hero__code-chip {
  width: 100%;
  margin-top: var(--space-3xl);
  padding: 22px 26px;
  border: 2px solid var(--color-neutral-black);
  border-radius: 15px;
  background: var(--color-accent-lime);
  color: var(--color-neutral-black);
  font-family: "Courier New", monospace;
  font-size: clamp(1rem, 1.3vw, 1.38rem);
  font-weight: 900;
  line-height: 1.25;
}

.home-hero__code-sticker {
  position: absolute;
  right: -54px;
  top: -42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 178px;
  min-height: 112px;
  padding: 16px;
  border: var(--border-strong);
  border-radius: 28px;
  background: var(--color-accent-pink);
  color: var(--color-neutral-black);
  font-weight: 900;
  font-size: clamp(1.25rem, 1.85vw, 2rem);
  line-height: 0.95;
  text-align: center;
  transform: rotate(8deg);
}

.home-projects-section {
  min-height: 1250px;
}

.home-projects-section__decor {
  right: 7%;
  top: 7%;
  color: var(--color-neutral-black);
  font-size: clamp(6rem, 9vw, 10rem);
  opacity: 0.045;
  text-align: right;
  transform: rotate(4deg) scaleX(0.68);
  transform-origin: right top;
}

.home-projects-section__spark-a,
.home-projects-section__spark-b {
  color: var(--color-neutral-black);
  opacity: 0.18;
}

.home-projects-section__spark-a {
  left: 3%;
  bottom: 26%;
}

.home-projects-section__spark-b {
  right: 3%;
  bottom: 16%;
}

.home-projects {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-xl);
  margin-top: var(--space-3xl);
}

.home-projects-section__button {
  display: flex;
  width: max-content;
  margin: var(--space-3xl) auto 0;
}

.home-stack {
  min-height: 898px;
}

.home-stack__decor {
  right: 9%;
  top: 11%;
  color: var(--color-neutral-cream);
  font-size: clamp(7rem, 12vw, 14rem);
  opacity: 0.04;
}

.home-stack__burst {
  right: 5%;
  top: 24%;
  color: var(--color-neutral-cream);
  opacity: 0.16;
}

.home-stack__cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-xl);
  margin-top: var(--space-3xl);
}

.home-stack-card {
  min-height: 300px;
  padding: var(--space-xl);
  border: var(--border-strong);
  border-radius: 24px;
  box-shadow: 8px 8px 0 var(--color-neutral-black);
}

.home-stack-card--cream {
  border-color: var(--color-accent-lime);
  background: var(--color-neutral-cream);
  color: var(--color-neutral-black);
}

.home-stack-card--violet {
  background: var(--color-brand-electric);
  color: var(--color-neutral-cream);
}

.home-stack-card--pink {
  background: var(--color-accent-pink);
  color: var(--color-neutral-black);
}

.home-stack-card h3 {
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 0.95;
}

.home-stack-card p {
  margin-top: var(--space-md);
  color: currentColor;
  opacity: 0.78;
}

.home-stack-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: var(--space-lg);
}

.home-stack__strip {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: var(--space-md);
  margin-top: var(--space-3xl);
  padding: 10px;
  border: 1px solid rgba(245, 241, 232, 0.25);
  border-radius: 24px;
}

.home-stack__strip span {
  min-width: 0;
  padding: 9px 14px;
  border: 1px solid var(--color-accent-lime);
  border-radius: 999px;
  background: var(--color-brand-deep);
  color: var(--color-neutral-cream);
  font-size: 0.78rem;
  font-weight: 800;
  text-align: center;
}

.home-process {
  min-height: 1153px;
}

.home-process__decor {
  right: 8%;
  top: 9%;
  color: var(--color-neutral-black);
  font-size: clamp(7rem, 11vw, 13rem);
  opacity: 0.06;
}

.home-process__spark {
  right: 9%;
  top: 22%;
  color: var(--color-brand-electric);
  opacity: 0.2;
}

.home-process__panel {
  margin-top: var(--space-4xl);
  overflow: hidden;
  border: var(--border-strong);
  border-radius: 24px;
  background: var(--color-neutral-black);
  box-shadow: 8px 8px 0 var(--color-brand-electric);
  color: var(--color-neutral-cream);
}

.home-process-step {
  display: grid;
  min-height: 96px;
  grid-template-columns: 100px 1fr;
  gap: var(--space-xl);
  align-items: center;
  padding: 0 var(--space-4xl);
  border-top: 1px solid rgba(245, 241, 232, 0.16);
}

.home-process-step:first-child {
  border-top: 0;
}

.home-process-step span {
  color: var(--color-accent-lime);
  font-family: var(--font-display);
  font-size: 4.5rem;
  line-height: 0.78;
}

.home-process-step:nth-child(even) span {
  color: var(--color-accent-pink);
}

.home-process-step:nth-child(3) span {
  color: var(--color-brand-electric);
}

.home-process-step h3 {
  font-size: clamp(1.45rem, 2vw, 2rem);
  line-height: 1;
}

.home-process-step p {
  margin-top: var(--space-xs);
  color: rgba(245, 241, 232, 0.74);
}

.home-about {
  min-height: 595px;
  display: flex;
  align-items: center;
}

.home-about__decor {
  left: 43%;
  top: 7%;
  color: var(--color-brand-deep);
  font-size: clamp(8rem, 13vw, 14rem);
  opacity: 0.14;
}

.home-about__arrow {
  left: 31%;
  bottom: 14%;
  color: var(--color-brand-deep);
}

.home-about__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 600px;
  gap: var(--space-4xl);
  align-items: center;
}

.home-about__eyebrow {
  color: var(--color-accent-lime);
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
}

.home-about h2 {
  max-width: 680px;
  margin-top: var(--space-md);
  font-size: clamp(2.8rem, 5vw, 5.25rem);
  line-height: 0.95;
}

.home-about p:not(.home-about__eyebrow) {
  max-width: 660px;
  margin-top: var(--space-lg);
  color: rgba(245, 241, 232, 0.82);
}

.home-about .base-button {
  margin-top: var(--space-xl);
}

.home-about__card {
  position: relative;
  min-height: 360px;
  padding: var(--space-2xl);
  border: var(--border-strong);
  border-radius: 24px;
  background: var(--color-neutral-cream);
  box-shadow: 8px 8px 0 var(--color-neutral-black);
  color: var(--color-neutral-black);
}

.home-about__card > p:first-child {
  margin: 0 0 var(--space-md);
  color: var(--color-brand-electric);
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
}

.home-about__card div {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.home-about__card > p:nth-of-type(2) {
  margin-top: var(--space-2xl);
  color: var(--color-neutral-grey);
}

.home-about__card > span {
  position: absolute;
  right: -22px;
  bottom: 26px;
  display: inline-flex;
  width: 126px;
  min-height: 84px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: var(--border-strong);
  border-radius: 20px;
  background: var(--color-accent-pink);
  color: var(--color-neutral-black);
  font-weight: 950;
  line-height: 1;
  text-align: center;
  transform: rotate(8deg);
}

@media (max-width: 900px) {
  .home-hero {
    min-height: auto;
    padding-top: var(--space-4xl);
    padding-right: var(--space-lg);
    padding-bottom: var(--space-4xl);
    padding-left: var(--space-lg);
  }

  .home-hero__grid,
  .home-about__grid {
    grid-template-columns: 1fr;
    gap: var(--space-3xl);
  }

  .home-hero__code {
    width: 100%;
    min-height: 260px;
    transform: rotate(0deg);
  }

  .home-hero__copy::before,
  .home-hero__copy::after,
  .home-hero__diamond,
  .home-hero__burst,
  .home-hero__spark,
  .home-hero__arrow,
  .home-hero__squiggle,
  .home-hero__bolt {
    display: none;
  }

  .home-hero__title {
    width: 100%;
    font-size: clamp(5.7rem, 29vw, 7.2rem);
  }

  .home-hero__text {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  .home-hero__role {
    font-size: clamp(1.85rem, 8vw, 2.15rem);
  }

  .home-hero__pills {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }

  .home-projects,
  .home-stack__cards,
  .home-stack__strip {
    grid-template-columns: 1fr;
  }

  .home-projects-section,
  .home-stack,
  .home-process,
  .home-about {
    min-height: auto;
  }

  .home-process-step {
    grid-template-columns: 68px 1fr;
    padding: var(--space-lg);
  }

  .home-about__card {
    min-height: auto;
  }
}
</style>
