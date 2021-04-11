var VueTyperPlugin = window.VueTyper.default
Vue.use(VueTyperPlugin)

const javaText = `public class AboutMe {
    public String name = "Vincent Li";
    public String school = "University of Toronto";
    public String[] languages = ["English", "Japanese"];
    private int age = 20;

    // Hobbies
    public Prize doHackathon() { ... }
    public void playVideoGames() { ... }
    public Music playGuitar() { ... }
    public Entertainment watchAnime() { ... }

};`;

const pythonText = `class AboutMe:
    name = "Vincent Li"
    school = "University of Toronto"
    languages = ["English", "Japanese"]
    age = 20
    
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
    public string school = "University of Toronto";
    public string[] languages = ["English", "Japanese"];
    private int age = 20;

    // Hobbies
    public Prize doHackathon() { ... }
    public void playVideoGames() { ... }
    public Music playGuitar() { ... }
    public Entertainment watchAnime() { ... }

}`

const jsText = `class AboutMe {
    static name = "Vincent Li";
    school = "University of Toronto";
    languages = ["English", "Japanese"];
    age = 20;

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
    char school[21] = "University of Toronto";
    char languages[2][10] = {"English", "Japanese"};
    int age = 20;

    return 0;
}`

const typewriterDiv = 
`<div>
    <h1 class="big-title mb-5"><span style="color: #668de8;">V</span>incent<span style="color: #668de8;">L</span>i<ext v-bind:file="ext"/></h1>
        <div class="typewriter">
            <vue-typer id="aboutcode" :text="[java, c, python, cs, js]" :type-delay='10' :erase-on-complete='false' erase-style='clear' @erased='onErased' :pre-erase-delay='4000'></vue-typer>
        </div>
</div>`;

Vue.component('typewriter', {
    data: () => {
        return {
            java: javaText,
            python: pythonText,
            cs: csText,
            js: jsText,
            c: cText,
            ext: ".java"
        };
    },
    template: typewriterDiv,
    methods: {
        onErased: function(typedString) {
          if(typedString == javaText) {
            this.ext = ".c";
          }
          else if (typedString == cText) {
            this.ext = ".py";
          }
          else if (typedString == pythonText) {
            this.ext = ".cs";
          }
          else if (typedString == csText) {
            this.ext = ".js";
          }
          else if (typedString == jsText) {
            this.ext = ".java";
          }
        }
      }
  });

Vue.component('ext', {
    props: ['file'],
    template: '<span>{{ file }}</span>'
})


var app = new Vue({
    el: '#about-me-code'
});
