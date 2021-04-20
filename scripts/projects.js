var VueTyperPlugin = window.VueTyper.default;
Vue.use(VueTyperPlugin)

// Hard Skills tags
Vue.component('hskill-tag', {
    props: ['skill'],
    template: `<span class="tag is-link small-text-tags">{{ skill }}</span>`
});

// Soft Skills tags
Vue.component('sskill-tag', {
    props: ['skill'],
    template: `<span class="tag is-warning small-text-tags">{{ skill }}</span>`
});

// Skills associated with projects
Vue.component('skill-proj', {
    props: ['skill'],
    template: `<span class="tag is-link is-light small-text-tags">{{ skill }}</span>`
});



const cardTemplate = 
`<div class="card mx-2 my-4 has-background-black">
<div class="card-image">
  <figure class="image is-3by2">
    <a :href="imgHref">
      <img :src="imgSrc" alt="imgAlt">
    </a>
  </figure>
</div>
<div class="card-content">
  <div class="media">
    <div class="media-content">
      <p class="title is-4 has-text-white card-title-small">{{ title }}</p>
      <p class="subtitle is-6 lightblue card-subtitle-small">{{ hackathon }}</p>
    </div>
  </div>
  <div class="tags has-addons" v-if="winningPrize">
    <span class="tag is-warning small-text-tags">WINNER</span>
    <span class="tag is-link small-text-tags">{{ winningPrize }}</span>
  </div>
  <div class="tags">
    <skill-proj v-for="skill in skills" :skill="skill"></skill-proj>
  </div>
  <div class="content small-text-mobile">
    {{ desc }}
  </div>
  <div class="is-flex is-justify-content-center is-align-items-center">
    <button class="button is-small is-hovered is-blue mx-2" v-on:click="openNewWindow(devpost)" v-if="devpost">Devpost</button>
    <p class="is-size-4 button-seperator" v-if="github && devpost">|</p>
    <button class="button is-small is-hovered is-blue mx-2" v-if="github" v-on:click="openNewWindow(github)">Github</button>
  </div>
</div>
</div>`;

Vue.component('project-card', {
    props: ['title', 'hackathon', 'imgHref', 'imgSrc', 'imgAlt', 'winningPrize', 'skills', 'desc', 'devpost', 'github'], 
    template: cardTemplate,
    methods: {
        openNewWindow: (link) => {
            window.open(link);
        }
    }
});
  
  
var app = new Vue({
    el: '#projects-cards',
    data: {
      hskills: ["Python", "Java", "C", "C#", "Javascript", "Node.js", "TypeScript", "Heroku", "HTML/CSS"],
      sskills: ["Problem Solving", "Fast Learner", "Teamwork", "Independant", "Sense of Humor"]
    }
});
  