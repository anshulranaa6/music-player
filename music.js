let music = document.querySelector("audio");
let img = document.querySelector("img");
let play = document.getElementById("play");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let artist = document.getElementById("artist");
let title = document.getElementById("title");

let songs = [
    {
        name: "1",
        title: "IT'S ALWAYS BLUE",
        artist: "LEGION",
    },
    {
        name: "2",
        title: "TRAP",
        artist: "CARTEL",
    },
    {
        name: "3",
        title: "THEY MAD",
        artist: "LOWKEY PESCI",
    },
];

let isPlaying = false;
let songIndex = 0;

let playmusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
}

let pausemusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
}

play.addEventListener("click", () => {
    if (isPlaying) {
        pausemusic();
    } else {
        playmusic();
    }
});

let loadSong = (song) => {
    title.textContent = song.title;
    artist.textContent = song.artist;
    music.src = "/songs/" + song.name + ".mp3";
    img.src = "/covers/" + song.name + ".jpg";
}

let playSong = (index) => {
    loadSong(songs[index]);
    playmusic();
}

next.addEventListener("click", () => {
    songIndex = (songIndex + 1) % songs.length;
    // console.log(songIndex)
    playSong(songIndex);
});

prev.addEventListener("click", () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    playSong(songIndex);
});

pausemusic()