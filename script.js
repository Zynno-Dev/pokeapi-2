
$("#pokestats").hide()

$("#boton").click(function() {
    let poke = $("#num").val()
    $.ajax({
        url:"https://pokeapi.co/api/v2/pokemon/" + poke,
        type:"GET",
        dataType:"json"
    })
    .done(function(resultado){
        $("#pokeimg").attr("src", resultado.sprites.front_shiny)
        $("#name").text("Nombre: " + resultado.name)
        $("#skill").text("Habilidad Main: " + resultado.abilities[0].ability.name)
        $("#pokenumero").text("Numero De Orden: " + resultado.order)
    })
    .fail(function(xhr, status, error){
        console.log(xhr)
        console.log(status)
        console.log(error)
    })

    if(!isNaN(poke)){
    $("#pokestats").show()
    $("html, body").animate({  
        scrollTop: $("p:last").offset().top  
        }, 1300)
    }
})

$("#boton2").click(function(){
    let poke2 = $("#num").val()
    $.ajax({
        url:"https://pokeapi.co/api/v2/pokemon/" + poke2,
        type:"GET",
        dataType:"json"
    })
    .done(function(linkp){
        let link = linkp.name
        location.href=("https://www.pokemon.com/el/pokedex/" + link)
    })
    .fail(function(xhr, status, error){
        console.log(xhr)
        console.log(status)
        console.log(error)
    })
})