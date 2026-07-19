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
    <span class="decor-word home-hero__decor" aria-hidden="true">Creative dev</span>
    <div class="container content-layer home-hero__grid">
      <div>
        <p class="home-hero__eyebrow">Creative full-stack playground</p>
        <h1 class="display-word home-hero__title">
          <span>Costa</span>
          <span>Maskulov</span>
        </h1>
        <p class="home-hero__role">Developpeur full-stack</p>
        <p class="home-hero__text">
          Je transforme des idees en interfaces vivantes, creatives et maintenables.
        </p>
        <div class="home-hero__actions">
          <BaseButton href="/projets">Voir mes projets</BaseButton>
          <BaseButton href="/contact" variant="pink">Me contacter</BaseButton>
        </div>
        <div class="home-hero__pills" aria-label="Competences principales">
          <StackTag label="Vue" tone="violet" />
          <StackTag label="Node" tone="cream" />
          <StackTag label="TypeScript" tone="dark" />
          <StackTag label="GitHub" tone="dark" />
        </div>
      </div>
      <div class="home-hero__code" aria-hidden="true">
        <div class="home-hero__code-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="home-hero__code-content">
          <p><span>const</span> costa = {</p>
          <p><i>role:</i> "full-stack developer",</p>
          <p><i>focus:</i> "creative interfaces",</p>
          <p><i>stack:</i> ["Vue", "Node", "Firebase"]</p>
          <p>}</p>
        </div>
        <div class="home-hero__code-chip">available_for_interface</div>
        <span class="home-hero__code-sticker">Creative dev</span>
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

.home-section-title--projects {
  max-width: 860px;
}

.home-section-title--stack,
.home-section-title--process {
  max-width: 780px;
}

.home-hero {
  min-height: 720px;
  display: flex;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
}

.home-hero__decor {
  right: 7%;
  top: 17%;
  color: var(--color-brand-deep);
  font-size: clamp(4.5rem, 8vw, 8rem);
  opacity: 0.16;
  transform: rotate(12deg);
}

.home-hero__diamond {
  left: 37%;
  top: 15%;
  color: var(--color-brand-deep);
}

.home-hero__burst {
  right: 8%;
  top: 7%;
  color: var(--color-brand-deep);
}

.home-hero__spark {
  right: 22%;
  bottom: 15%;
  color: var(--color-brand-deep);
}

.home-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 620px) minmax(360px, 500px);
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4xl);
}

.home-hero__eyebrow,
.home-hero__role {
  color: var(--color-accent-lime);
  font-weight: 950;
}

.home-hero__text {
  max-width: 560px;
  margin-top: var(--space-md);
  color: rgba(245, 241, 232, 0.86);
  font-size: 1.25rem;
}

.home-hero__title {
  width: min(100%, 620px);
  margin-top: var(--space-xs);
  font-size: clamp(7.5rem, 11vw, 10.5rem);
}

.home-hero__title span {
  display: block;
  width: max-content;
  max-width: 145%;
  transform: scaleX(0.68);
  transform-origin: left center;
}

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-top: var(--space-xl);
}

.home-hero__pills {
  display: flex;
  width: max-content;
  max-width: 100%;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: var(--space-xl);
  padding: 6px;
  border: 2px solid rgba(23, 16, 91, 0.55);
  border-radius: 999px;
  background: rgba(23, 16, 91, 0.35);
}

.home-hero__code {
  position: relative;
  min-height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--space-xl);
  border: var(--border-strong);
  border-radius: 24px;
  background: var(--color-neutral-black);
  box-shadow: 10px 10px 0 var(--color-neutral-cream);
  color: var(--color-accent-lime);
  transform: rotate(6deg);
}

.home-hero__code-bar {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: var(--space-xl);
}

.home-hero__code-bar span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-accent-lime);
}

.home-hero__code-bar span:nth-child(2) {
  background: var(--color-neutral-cream);
}

.home-hero__code-content {
  overflow: hidden;
  color: var(--color-accent-lime);
  font-family: "Courier New", monospace;
  font-size: clamp(0.95rem, 1.2vw, 1.15rem);
  font-weight: 700;
  line-height: 1.7;
}

.home-hero__code-content span {
  color: var(--color-accent-pink);
}

.home-hero__code-content i {
  color: var(--color-neutral-cream);
  font-style: normal;
}

.home-hero__code-chip {
  width: 100%;
  margin-top: var(--space-xl);
  padding: 18px 22px;
  border: 2px solid var(--color-neutral-black);
  border-radius: 15px;
  background: var(--color-accent-lime);
  color: var(--color-neutral-black);
  font-family: "Courier New", monospace;
  font-size: 0.9rem;
  font-weight: 900;
}

.home-hero__code-sticker {
  position: absolute;
  right: -34px;
  top: -32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 136px;
  min-height: 84px;
  padding: 12px;
  border: var(--border-strong);
  border-radius: 20px;
  background: var(--color-accent-pink);
  color: var(--color-neutral-black);
  font-weight: 900;
  line-height: 1;
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
    padding-bottom: var(--space-4xl);
  }

  .home-hero__grid,
  .home-about__grid {
    grid-template-columns: 1fr;
    gap: var(--space-3xl);
  }

  .home-hero__code {
    min-height: 260px;
    transform: rotate(0deg);
  }

  .home-hero__title {
    width: 100%;
    font-size: clamp(4.75rem, 22vw, 5.7rem);
  }

  .home-hero__title span {
    max-width: 150%;
    transform: scaleX(0.58);
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
