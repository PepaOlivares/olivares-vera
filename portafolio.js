// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/PARTY-1.gif",
    title: "Fiesta \"ÖPHIC\" Final de Semestre",
    about: "Diseño de transiciones de luces para \"ÖPHIC\" fiesta inspirada en el mundo onírico.",

}, {

    figure: "media/p6.gif",
    title: "Luminaria Slime de Yeso",
    about: "Proyecto que buscaba insertar un material experimental: \"Slime de Yeso\" en una pieza lumínica.",

}, {

    figure: "media/p5.gif",
    title: "Bioluminaria",
    about: "Proyecto de iluminación de exploración de materiales (silicona transparente) inspirado el la biolumenicencia de criaturas marinas.",

}, {

  figure: "media/p2.gif",
  title: "Fotografías suburbanas",
  about: "Son fotografías hechas espontáneamente desde un iphone, en lugares suburbanos de Santiago.",

}, {

    figure: "media/p1.gif",
    title: "Cueros Aritma",
    about: "Elaboración de marca y productos en conjunto con un microemprendedor, para aumentar eficiencia y valor de sus productos artesanales.",

}, {

  figure: "media/p4.gif",
  title: "Accesorios Chana",
  about: "Bisuterias realizadas con mezclilla reciclada en conjunto a microemprendedora oriunda de Peñalolen.",



  }, {

    figure: "media/p3.gif",
    title: "MONOGOSO",
    about: "Diseño de servicio de comida al paso, inspirado en el bebida chilena \"Cola de mono\". ",

}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
