//--------------INFO----------------//
// Desarrollador: IvГЎn Barcia
// Sitio Web: http://ivanbarcia.eu
// Hecho en: Galicia, EspaГ±a

// Nombre: Slidx
// VersiГіn: 3.0
// Sitio Web: https://github.com/ivarcia/codelab-slidx
//----------------------------------//


jQuery(document).ready(function () {

    //------------------------------  CONFIGURACIГ“N  -------------------------------//
    var button = '#slidx_button'; //Elemento en el que pulsamos para abrir y cerrar el menГє.
    var menu = '#slidx_menu'; //Elemento que contiene el menГє responsive.
    var mode = 'click' //Escribe 'click' o 'hover' si quieres que se abra en menГє al pulsar el botГіn o al pasar por encima de Г©l.
    var side = 'right' //Indica de que lado estГЎ el menГє ('right' o 'left')
    var buttonMove = 'yes' //Indica si quieres que tambiГ©n se mueva el botГіn cuando abres el menГє en modo 'click' ('yes' o 'no')
    var shadow = 'yes' //Indica si se crea una sombra en el resto de la pГЎgina, cuando se abre el menГє ('yes' o 'no')
    var opacity = 0.6; //Opacidad de la sombra que se crea en el resto de la pГЎgina con el menГє abierto. (0=transparente 1=opaco)
    var size = 300; //Ancho del menГє.
    var speed = 0.3; //Velocidad de apertura y cierre (en s.)
    var normalTime = 0; //Tiempo que tarda el menГє en abrirse/cerrarse cuando pulsamos el botГіn (en ms. recomendable dejar en 0).
    var menuTime = 300; //Tiempo que tarda el menГє en cerrarse cuando pulsamos un elemento dentro del menu (en ms.).
    var menuTop = 0; //Espaciado entre la parte superior del menГє y la parte superior de la pantalla (en px. por defecto = 0)
    var menuBottom = 0; //Espaciado entre la parte inferior del menГє y la parte inferior de la pantalla (en px. por defecto = 0)
    var zIndexMenu = 9998; //z-index del menГє (el botГіn lleva 1 nГєmero menos al nГєmero que introduzcas, y la sombra, 2 menos.)

    //Otras variables. (No toques esto, si no sabes lo que haces)
    var slidxOpen = "slidx_open";
    var slidxShadow = "slidx_shadow";
    var slidxShadowID = '#' + slidxShadow;
    var zIndexButton = zIndexMenu - 1;
    var zIndexShadow = zIndexMenu - 2;
    var speedM = speed * 1000;
    //------------------------------  ESTILOS CSS  -------------------------------//
    //AГ±adimos los estilos bГЎsicos por defecto al botГіn.
    if (buttonMove == 'yes') {
        
    }

    //AГ±adimos los  estilos bГЎsicos por defecto al menГє.
    jQuery(menu).css({
        'position': 'fixed',
        'top': menuTop + 'px',
        'bottom': menuBottom + 'px',
        'width': size + 'px',
        'max-width': '100%',
        'overflow-y': 'auto',
        'transition': speed + 's',
        'z-index': zIndexMenu,
    });

    //Si es derecho
    if (side == 'right') {
        jQuery(menu).css({
            'left': '-' + size + 'px',
        })
    }

    //Si es izquierdo
    if (side !== 'right') {
        jQuery(menu).css({
            'right': '-' + size + 'px',
        })
    }

    //------------------------------  FUNCIONES  -------------------------------//
    //Г‰sta es la funciГіn que abre el menГє.
    function open() {

        if (side == 'right') {

            jQuery(menu).animate({
                left: '0',
            }, normalTime);

            

        }

        if (side !== 'right') {

            jQuery(menu).animate({
                right: '0',
            }, normalTime);

            
        }

        jQuery(menu).addClass(slidxOpen);

        if (shadow == 'yes') {
            jQuery("<div>", {
                id: slidxShadow, //atributo directo, igual que si fuГ©ramos con attr(вЂњidвЂќ)
                css: //propiedad de jQuery
                {
                    'position': 'fixed',
                    'top': '0px',
                    'width': '100%',
                    'height': '100%',
                    'background-color': '#fff',
                    'opacity': '0.7',
                    'z-index': zIndexShadow,
                },
            }).appendTo('html');

            jQuery(slidxShadowID).fadeTo(speedM, opacity);
        }
    };

    //Г‰sta es la funciГіn que cierra el menГє. (Hay dos versiones en funciГіn del tiempo de cierre)
    function close(delayTime) {
        if (side == 'right') {
            jQuery(menu).animate({
                left: '-' + size,
            }, delayTime)

            if (buttonMove == 'yes') {
                
            }
        }

        if (side !== 'right') {
            jQuery(menu).animate({
                right: '-' + size,
            }, delayTime)

            if (buttonMove == 'yes') {
               
            }
        }

        jQuery(menu).removeClass(slidxOpen);
        jQuery(slidxShadowID).fadeOut(speedM);

        setTimeout(function () {
            jQuery(slidxShadowID).remove();
        }, speedM);
    };

    //------------------------------  ACTIVADORES  -------------------------------//
    //--------------- Modo CLICK ---------------//
    if (mode == 'click') {
        // Al pulsar el button abrimos el menГє si estГЎ cerrado, o lo cerramos si estГЎ abierto.
        jQuery(button).click(function () {
            //No realiza la acciГіn por defecto del botГіn
            event.preventDefault();
            if (!jQuery(menu).hasClass(slidxOpen)) {
                open();
            } else {
                close(normalTime);
            }
        });

        //Al pulsar en un elemento del menГє, tambiГ©n se cierra el menu.
        //FГ­jate que el tiempo de cierre que introduzco es mayor que cuando lo cierro con el boton directamente, simplemente porque queda mejor visualmente
        jQuery('.sidebar-submenu__link').click(function () {
        	close(normalTime);
        	jQuery('#slidx_button').removeClass("cross");
        });
    }

    jQuery(document).on('click', slidxShadowID, function () {
        close(normalTime);
        jQuery('#slidx_button').removeClass("cross");
    });


    //--------------- Modo HOVER ---------------//
    if (mode == 'hover') {
        // Al pasar el ratГіn por encima del botГіn abrimos el menГє si estГЎ cerrado, o lo cerramos si estГЎ abierto.
        jQuery(button).mouseover(function () {
            if (!jQuery(menu).hasClass(slidxOpen)) {
                open();
            } else {
                close(normalTime);
            }
        });

        //Al sacar el ratГіn del menГє, se cierra en menГє.
        jQuery(menu).mouseleave(function () {
            close(normalTime);
        });

        //Al pulsar en un elemento del menГє, tambiГ©n se cierra el menu.
        //fГ­jate que el tiempo de cierre que introduzco es mayor que cuando lo cierro con el boton directamente, simplemente porque queda mejor visualmente
        jQuery(menu).click(function () {
            close(menuTime);
        });
    };
});