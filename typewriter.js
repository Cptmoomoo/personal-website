var VueTyperPlugin = window.VueTyper.default
Vue.use(VueTyperPlugin)

const javaText = `public class AboutMe {
    public String name = "Vincent Li";
    public String school = "University of Toronto";
    public String[] languages = ["English", "Japanese"];
    private int age = 20;

    // Hobbies
    public Prize doHackathon() { ... };
    public void playVideoGames() { ... };
    public Music playGuitar() { ... };
    public Entertainment watchAnime() { ... };

};`;

const pythonText = `class AboutMe:
    def __init__(self):
        self.name = "Vincent Li"
        self.school = "University of Toronto"
        self.languages = ["English", "Japanese"]
        self.age = 20
    
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
    public Prize doHackathon() { ... };
    public void playVideoGames() { ... };
    public Music playGuitar() { ... };
    public Entertainment watchAnime() { ... };

}`

const typewriterDiv = 
`<div>
    <h1 class="big-title mb-5"><span style="color: #668de8;">V</span>incent<span style="color: #668de8;">L</span>i<ext v-bind:file="ext"/></h1>
        <div class="typewriter">
            <vue-typer id="aboutcode" :text="[java, python, cs]" :type-delay='10' :erase-on-complete='false' erase-style='clear' @erased='onErased' :pre-erase-delay='4500'></vue-typer>
        </div>
</div>`;

Vue.component('typewriter', {
    data: () => {
        return {
            java: javaText,
            python: pythonText,
            cs: csText,
            ext: ".java"
        };
    },
    template: typewriterDiv,
    methods: {
        onErased: function(typedString) {
          if(typedString == javaText) {
            this.ext = ".py";
          }
          else if (typedString == pythonText) {
            this.ext = ".cs";
          }
          else if (typedString == csText) {
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

