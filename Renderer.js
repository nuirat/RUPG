
class Renderer {
    renderUsers = (userInfo) =>{
        this.renderUser(userInfo)
        this.renderFriends(userInfo)  
        this.renderQuote(userInfo)
        this.renderMeat(userInfo)  
        this.renderPokemon(userInfo)
    }
    renderUser(userInfo)
    {
        $(".user-container").empty()
        let source = $('#first').html();
        let templete = Handlebars.compile(source)
        let newHTML=templete(userInfo)
        $('.user-container').append(newHTML);
    }
    renderPokemon(userInfo)
    {
        $(".pokemon-container").empty()
        let source=$('#five').html()
        let templete=Handlebars.compile(source)
        let newHTML=templete(userInfo.pokemon)
        $('.pokemon-container').append(newHTML); 
    }
    renderMeat(userInfo)
    {
        $(".meat-container").empty()
        let source=$('#four').html()
        let templete=Handlebars.compile(source)
        let newHTML=templete(userInfo)
        $('.meat-container').append(newHTML); 
    }
    renderQuote(userInfo)
    {
        $(".quote-container").empty()
        let source=$('#three').html()
        let templete=Handlebars.compile(source)
        let newHTML=templete(userInfo)
        $('.quote-container').append(newHTML);
    }
    renderFriends(userInfo)
    {
        let source=$('#second').html()
        let templete=Handlebars.compile(source)
        let friends=[]
        friends=userInfo.friends
        let newHTML=templete({friends})
        $(".friends-container").empty()
        $('.friends-container').append(newHTML)
    }
}