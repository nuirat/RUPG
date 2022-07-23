api =new APIManager()
renderer= new Renderer()
$('#load').on('click',function()
{
    api.getUser()
    api.getQuote()
    api.getContent()
    api.getnextPokemon()
    
})
$('#dis').on('click',function()
{
    renderer.renderUsers(api.data)
}
)