const { createApp } = Vue;

createApp({
    data() {
        return {
            games: [
                {
                    image: 'images/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                } , {
                    image: 'images/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                } , {
                    image: 'images/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                } , {
                    image: 'images/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                } , {
                    image: 'images/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                } 
            ] ,

            gameDisplayedIndex: 0,

            timerID: undefined,
            autoScrollIsStopped: false,
        }
    },

    methods: {
        activeTheAdjacent(isOrderFromFirstToLast = true) {
            if (isOrderFromFirstToLast) {
                this.gameDisplayedIndex = this.gameDisplayedIndex + 1 < this.games.length ? ++this.gameDisplayedIndex : 0;
            } else {
                this.gameDisplayedIndex = this.gameDisplayedIndex - 1 >= 0 ? --this.gameDisplayedIndex : this.games.length - 1;
            }
        },

        autoScroll(isPlay = true) {
            if(!this.autoScrollIsStopped) {
                clearInterval(this.timerID);
                
                if(isPlay) {
                    this.timerID = setInterval(() => this.activeTheAdjacent() , "3000");
                }
            }
        }
    },

    mounted() {
        this.autoScroll();
    }
}).mount('#app');