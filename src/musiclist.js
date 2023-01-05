
import { writable} from "svelte/store";


export const musicList = writable (
    [
        {
        image: "alltoowell.jpg",
        audio: "All_Too_Well.mp3",
        name: "All too  well",
        artist: "Taylor Switf"
    },
    {
        image: "coneyisland.jpg",
        audio: "coney_island.mp3",
        name: "Coney Island",
        artist: "Taylor Switf"
    },
    {
        image: "newyearday.jpg",
        audio: "New_Years_Day.mp3",
        name: "New Year Day",
        artist: "Taylor Switf"
    },
    {
        image: "seven.jpg",
        audio: "seven.mp3",
        name: "Seven",
        artist: "Taylor Switf"
    },
    {
        image: "willow.jpg",
        audio: "willow.mp3",
        name: "Willow",
        artist: "Taylor Switf"
    },
    {
        image: "goodnightngo.webp",
        audio: "goodnight_n_go.mp3",
        name: "Goodnight n Go",
        artist: "Ariana Grande"
    },
    {
        image: "justlikemagic.webp",
        audio: "just_like_magic.mp3",
        name: "Just like magic",
        artist: "Ariana Grande"
    },
    {
        image: "obvious.webp",
        audio: "obvious.mp3",
        name: "Obvious",
        artist: "Ariana Grande"
    },
    {
        image: "petedavison.webp",
        audio: "pete_davidson.mp3",
        name: "Pete Davidson",
        artist: "Ariana Grande"
    },
    {
        image: "thinking.webp",
        audio: "Thinking_Bout_You.mp3",
        name: "Thinking 'Bout You",
        artist: "Ariana Grande"
    },
]
);