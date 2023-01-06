AFRAME.registerComponent("cursorevents",{
    schema:{
        selectItemId: {type:"string", default:""},
        selectedCard: {type: "string", default:"#card1"}
    },
    init: function(){
        this.handleMouseEvents();
        this.handleMouseEventsLeave();
        this.handleMouseClick();
    },
    handlePlaceList: function(){
        const id = this.el.getAttribute("id");
        const placesid = ["taj-mahal", "budapest", "eiffel-tower", "new-york-city"];
        if(placesid.includes(id)){
            const placeContainer = document.querySelector("#places-container");
            placeContainer.setAttribute("cursorevents", {selectItemId: id});
            this.el.setAttribute("material", {color: "red", opacity: 0.8})
        }
    },  
    handleMouseEvents: function(){
        this.el.addEventListener("mouseenter", ()=>{
            this.handlePlaceList();
        })
    } ,
    handleMouseEventsLeave: function(){
        this.el.addEventListener("mouseleave", ()=>{
            const selectedItemid = this.data.selectItemId;
            // console.log(this.data.selectItemId)
            // console.log(selectedItemid)
            if(selectedItemid){
                const element = document.querySelector(`#${selectedItemid}`)
                const id = element.getAttribute("id");
                if(id == selectedItemid){
                    element.setAttribute("material", {color: "black", opacity: 1})
                }
            }
        })
    },
    handleMouseClick: function(){
        this.el.addEventListener("click", ()=>{
            const placeContainer = document.querySelector("#places-container");
            const {state} = placeContainer.getAttribute("tour");
            // console.log(state)
            if(state === "places-list"){
                console.log("working")
                const id = this.el.getAttribute("id");
                console.log(id)
                const placeId = ["taj-mahal", "budapest", "eiffel-tower", "new-york-city"];
                if(placeId.includes(id)){
                    console.log(placeId, id)
                    placeContainer.setAttribute("tour", {state: "view"});
                    // console.log(state, selectedCard)    
                }
            }
        })
    }
})