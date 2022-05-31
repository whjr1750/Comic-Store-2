AFRAME.registerComponent("comic",{
    init: function(){
        this.comicscontainer = this.el;
        this.createCards();
    },
    createCards : function(){
        const thumbNailsRef = [
            {
               id  :"avengers",
               title : "Avengers" ,
               url : "./assets/avengers.jpg",
            },
            {
                id : "captainAmerica",
                title : "Captain America",
                url: "./assets/CaptainAmerica.jpg",
            },
            {
                id : "doctorStrange" ,
                title : "Doctor Strange",
                url : "./assets/DoctorStrange.jpeg",
            },
            {
                id : "ironMan",
                title : "Iron Man",
                url : "./assets/ironMan.jpg",
            },
            {
                id : "wandaVision",
                title : "Wanda Vision",
                url : "./assets/WandaVision.jpg",
            },
        ];
        let prevoiusXPosition = -80

        for(var item of thumbNailsRef){
           const posX = prevoiusXPosition + 25
           const posY = 0
           const posZ = -40
           const position = {x:posX,y:posY,z:posZ}
           prevoiusXPosition = posX

           const borderEl = this.createBorder(position,item.id)
           const thumbnail = this.createThumbNail(item)
           borderEl.appendChild(thumbnail)
           const titleEl = this.createTitle(position,item)
           borderEl.appendChild(titleEl)
           this.comicscontainer.appendChild(borderEl);
        }
    },

    createBorder : function(position,id){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id",id)
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive : "plane",
            width : 20,
            height : 23
        })
        entityEl.setAttribute("position",position)
        entityEl.setAttribute("material",{
            color:"blue",
            opacity : 1
        })
        return entityEl
    },

    createThumbNail : function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
          primitive:"plane",
          width:15,
          height:20,

        })
        entityEl.setAttribute("position",{x: 1 , y:0, z:1})
        entityEl.setAttribute("material",{
          src: item.url
        })
        return entityEl
    },

    createTitle : function(position,item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("text",{
          font:"exo2bold",
          align:"center",
         width:100,
         color:"white",
         value:item.title
        })
        const ElPosition = position
        ElPosition.y = -30
        entityEl.setAttribute("position",ElPosition)
        entityEl.setAttribute("visible",true)
        return entityEl
    }
})     