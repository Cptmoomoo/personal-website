var VueTyperPlugin = window.VueTyper.default
Vue.use(VueTyperPlugin)

const AGE = 21;

const javaText = `public class AboutMe {
    public String name = "Vincent Li";
    public String workplace = "AMD";
    public String school = "University of Toronto";
    public String[] languages = ["English", "Japanese"];

    // Hobbies
    public Prize doHackathon() { ... }
    public void playVideoGames() { ... }
    public Music playGuitar() { ... }
    public Entertainment watchAnime() { ... }

};`;

const pythonText = `class AboutMe:
    name = "Vincent Li"
    workplace = "AMD"
    school = "University of Toronto"
    languages = ["English", "Japanese"]
    
    # Hobbies
    def do_hackathon() -> Prize:
    def play_video_games() -> None:
    def play_guitar() -> Music:
    def watch_anime() -> Entertainment:
`;

const csText = 
`[This.Is.Not.Java]
public class AboutMe
{
    readonly string name = "Vincent Li";
    public string workplace = "AMD";
    public string school = "University of Toronto";
    public string[] languages = ["English", "Japanese"];

    // Hobbies
    public Prize doHackathon() { ... }
    public void playVideoGames() { ... }
    public Music playGuitar() { ... }
    public Entertainment watchAnime() { ... }

}`;

const jsText = `class AboutMe {
    static name = "Vincent Li";
    workplace = "AMD";
    school = "University of Toronto";
    languages = ["English", "Japanese"];

    // Hobbies
    doHackathon = () => { ... }
    playVideoGames = () => { ... }
    playGuitar = () => { ... }
    watchAnime = () => { ... }

}`;

const cText = `// Hobbies
double doHackathon();
int* playVideoGames();
char* playGuitar();
int watchAnime();

// About Me
int main() {
    char name[10] = "Vincent Li";
    char workplace[3] = "AMD";
    char school[21] = "University of Toronto";
    char languages[2][10] = {"English", "Japanese"};

    return 0;
}`;

const codeAniTemp = 
`
<div>
  <div id="about-me-code" class="container px-5">
    <div>
      <h1 class="big-title mb-5"><span style="color: #668de8;">V</span>incent<span style="color: #668de8;">L</span>i<ext v-bind:file="ext"/></h1>
          <typewriter :text="text"/>
    </div>
  </div>
  <div id="codebuttons" class="buttons-div">
    <button :class="'button is-active is-small ' + javaStyle" v-on:click="changeText(1)">Java</button>
    <button :class="'button is-active is-small ' + cStyle" v-on:click="changeText(2)">C</button>
    <button id="csbutton" :class="'button is-active is-small ' + csStyle" v-on:click="changeText(3)">C#</button>
    <button id="jsbutton" :class="'button is-active is-small ' + jsStyle" v-on:click="changeText(4)">Javascript</button>
    <button id="pybutton" :class="'button is-active is-small ' + pyStyle" v-on:click="changeText(5)">Python</button>
  </div>
</div>`;

Vue.component('typewriterblock', {
    data: () => {
        return {
            javaStyle: "is-darkblue",
            cStyle: "is-blue",
            csStyle: "is-blue",
            jsStyle: "is-blue",
            pyStyle: "is-blue",
            ext: ".java",
            text: javaText
        };
    },
    template: codeAniTemp,
    methods: {
        changeText: function(id) {
          if (id == "1") {
            this.ext = ".java";
            this.text = javaText;
            this.javaStyle = "is-darkblue";
            this.cStyle = this.csStyle = this.jsStyle = this.pyStyle = "is-blue";
          }
          else if (id == "2") {
            this.ext = ".c";
            this.text = cText;
            this.cStyle = "is-darkblue";
            this.javaStyle = this.csStyle = this.jsStyle = this.pyStyle = "is-blue";
          }
          else if (id == "3") {
            this.ext = ".cs";
            this.text = csText;
            this.csStyle = "is-darkblue";
            this.cStyle = this.javaStyle = this.jsStyle = this.pyStyle = "is-blue";
          }
          else if (id == "4") {
            this.ext = ".js";
            this.text = jsText;
            this.jsStyle = "is-darkblue";
            this.cStyle = this.csStyle = this.javaStyle = this.pyStyle = "is-blue";
          }
          else if (id == "5") {
            this.ext = ".py";
            this.text = pythonText;
            this.pyStyle = "is-darkblue";
            this.cStyle = this.csStyle = this.jsStyle = this.javaStyle = "is-blue";
          }
        }
      }
  });

Vue.component('typewriter', {
  props: ['text'],
  template: `<div class="typewriter">
    <vue-typer id="aboutcode" :text="text" :type-delay='8' :repeat="0"></vue-typer>
</div>`
});

Vue.component('ext', {
    props: ['file'],
    template: '<span>{{ file }}</span>'
});

var app = new Vue({
    el: '#codediv',
});
