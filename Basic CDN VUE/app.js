const app = Vue.createApp({
    data() {
        return {
            bookTitle: "Alchemist",
            bookDate: 100,
            books: [
                { title: "kek", date: 1 },
                { title: "jep", date: 2 },
                { title: "zep", date: 3 },
                { title: "lep", date: 4 },
                { title: "hep", date: 5 },
            ],
            showBeginign: false,
            showHdiing: false,
            showMouseEvents: false,
            showCycles: false,
            showAtributeBinding: false,
            mouseX: 0,
            mouseY: 0,
            siteUrl: "http://placeholder.pro",
            mouseEventsMsg: "",
            imgUri: "assets/1.bmp",
        }
    },
    methods: {
        changeTitle() {
            this.bookTitle = "Keksk";
        },
        revertTitle(title) {
            this.bookTitle = title;
        },

        raiseCounter() {
            this.bookDate++;
        },
        reduceCounter() {
            this.bookDate--;
        },

        mouseEvent(e, number) {
            this.mouseEventsMsg = e.type + "is ocured";
            if (number) this.mouseEventsMsg += " and data is " + number;
        },
        mouseMoveEvent(e) {
            this.mouseX = e.offsetX;
            this.mouseY = e.offsetY;
            this.mouseEventsMsg = e.type + "is ocured";
            this.mouseEventsMsg += " and data is X " + e.offsetX
            this.mouseEventsMsg += " Y " + e.offsetY
        },

        addBook() {
            this.books.push({
                title: this.books[this.books.length - 1].title + "le",
                date: this.books[this.books.length - 1].date
            })
            this.books[this.books.length - 1].date++;
        },

        changeShowBeginignVisibility() {
            this.showBeginign = !this.showBeginign;
        },
        changeVshowHdiingVisibility() {
            this.showHdiing = !this.showHdiing;
        },
        changeMouseEventsVisibility() {
            this.showMouseEvents = !this.showMouseEvents;
        },
        changeCyclesVisibility() {
            this.showCycles = !this.showCycles;
        },
        changeAtributeVisibility() {
            this.showAtributeBinding = !this.showAtributeBinding;
        },
        changeImg() {
            if (this.imgUri === "assets/2.bmp") {
                this.imgUri = "assets/1.bmp";
            }
            else {
                this.imgUri = "assets/2.bmp";
            }
        },

        incriseDate(item) {
            item.date++;
        },
    },
    computed:{
        filteredItems(){
            return this.books.filter((item) => {
                return (item.date % 5) === 0;
            });
        }
    }
});

app.mount("#app");