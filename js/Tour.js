AFRAME.registerComponent("tour", {
  schema:{
    state:{
      type:"string",
      default:"places-list"
    },
    selectedCard:{
      type:"string",
      default:"#card1"
    }
  },
  init: function () {
    this.placesContainer = this.el;   
    this.createCards();
  },
  tick: function(){
    const state = this.el.getAttribute("tour");
    const placesContainer = document.querySelector("#placesContainer")
    const id = this.el.getAttribute("id");
    // const place = placesContainer.getAttribute("tour");
    // console.log(id)
    console.log(state)
    if(state === "view"){
      this.hideEl()
      this.showEl();
    }
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);

      // Title Text Element
      const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10,
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "#000",
      opacity: 1,
    });
    entityEl.setAttribute("cursorevents", {})
    return entityEl;
  },
  createThumbNail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius: 9,
    });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },
  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    return entityEl;
  },
  hideEl: function(element){
    element.map((el)=>{
      el.setAttribute("visible", false);
    })
    console.log("working")
  },
   showEl: function(){
    const {selectedCard} = this.data
    const skyEl = document.querySelector("main-container");
    // skyEl.setAttribute("material", {src: `../assets/360_images/taj-mahal/place-0.jpg`})
    console.log(selectedCard)
    console.log(skyEl)
  }
});


