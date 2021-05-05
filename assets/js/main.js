particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
const instance = new Typewriter('#typewriter', {
    loop: true
});

instance.typeString("Hello World!")
    .pauseFor(1000)
    .deleteAll()
    .typeString('I am Anıl Çırakcı.')
    .pauseFor(1000)
    .deleteChars(16)
    .typeString('am an enthusiastic highschool student<br>in Turkey.')
    .pauseFor(1000)
    .deleteChars(44)
    .typeString('currently learning<br>Web Development and Cyber Security.')
    .pauseFor(1000)
    .deleteChars(56)
    .typeString('am also interested in robotics and mechanics.')
    .pauseFor(1000)
    .deleteChars(45)
    .typeString('have worked with Arduino, Raspberry Pi and many ATmega chips.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Check out my projects at<br>github.com/anilcirakci')
    .pauseFor(1000)
    .deleteAll()
    .start();