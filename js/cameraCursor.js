AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectItemId : {default : "", type:"string"}
    },
    init : function(){
        this.handleMouseEnter();
        this.handleMouseLeave();
    },
    comicListState : function(){
        const id = this.el.getAttribute("id")
        const comicId = ["avengers","captainAmerica","ironMan","wandaVision"]
        if(comicId.includes(id)){
            const comicsContainer = document.querySelector("#comicscontainer")
            comicsContainer.setAttribute("cursor-listener",{
                selectItemId : id
            })
            this.el.setAttribute("material",{
                color: "#D76B30",
                opacity: 1
            })
        }
    },
    handleMouseEnter : function(){
        this.el.addEventListener("mouseenter",()=>{
            this.comicListState()
        })
    },
    handleMouseLeave : function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectItemId} = this.data
            if(selectItemId){
                const el = document.querySelector(`#${selectItemId}`)
                const id = el.getAttribute("id")
                if(id === selectItemId){
                    el.setAttribute("material",{
                        color:"blue",
                        opacity : 1
                    })
                }
            }
        })
    }
}) 