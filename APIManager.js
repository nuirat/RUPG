class APIManager {
    constructor() {
        this.data = {}
        this.user={}
        this.pokeCount=1
        this.pokemonUrl=""
    }
    
    getContent()
    {
    let manger=this.data
        $.ajax(
            {
                method: "GET",
                
                url:  "https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text",
                success: function (data) {
                  manger.content=data           
                },
                error: function (xhr, text, error) {
                    console.log(text)
                }
            })
        
    }
    getnextPokemon()
    {
    let manger=this
        $.ajax(
            {
                method: "GET",
                
                url:  `https://pokeapi.co/api/v2/pokemon/?offset=${manger.pokeCount}&limit=1`,
                success: function (data) {
                    manger.data.pokemon={}
                    manger.data.pokemon.name=data.results[0].name 
                    manger.data.pokemonUrl=data.results[0].url 
                    manger.getPokemon()
                    manger.pokeCount++
                },
                error: function (xhr, text, error) {
                    console.log(text)
                }
            })
        
    }
    getPokemon()
    {
    let manger=this.data
        $.ajax(
            {
                method: "GET",
                
                url: manger.pokemonUrl,
                success: function (data) {
                  manger.pokemon.img=data.sprites.back_default  
                },
                error: function (xhr, text, error) {
                    console.log(text)
                }
            })
        
    }
    getUser()
    {
    let manger=this.data
        $.ajax(
            {
                method: "GET",
                
                url:  "https://randomuser.me/api/?results=7",
                success: function (data) {
                    manger.name=data.results[0].name.first+" "+data.results[0].name.last
                    manger.location=data.results[0].location.city+","+data.results[0].location.country
                    manger.friends=[] 
                    manger.img=data.results[0].picture.medium                 
                    for(let i=1;i<=6;i++)
                    {
                        manger.friends.push({'name':data.results[i].name.first+" "+data.results[i].name.last})
                    }                 
                },
                error: function (xhr, text, error) {
                    console.log(text)
                }
            })
        
    }
    getQuote()
    {
        let manger=this.data

        $.ajax(
            {
                method: "GET",
                
                url:  "https://api.kanye.rest/",
                success: function (data) {
                    manger.quote=data["quote"]
                },
                error: function (xhr, text, error) {
                    console.log(text)
                }
            }) 
    }
}

let api =new APIManager()
