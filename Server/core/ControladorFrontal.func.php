<?php

/**************************************************************************************************
 * Ahora crearemos el fichero ControladorFrontal.func.php que tiene las funciones que se encargan *
 * de cargar un controlador u otro y una acción u otra en función de lo que se le diga por la url.*
 *************************************************************************************************/

function cargaControlador($controller){
    $controlador = ucwords($controller).'Controller';
    $strFileController = 'controller/'.$controlador.'.php';

    if(!is_file($strFileController)){
        $strFileController = 'controller/'.ucwords(CONTROLADOR_DEFECTO).'Controller.php';
    }

    require_once $strFileController;
    $controllerObj = new $controlador();

    return $controllerObj;
}

function cargaAccion($controllerObj, $action){
    $accion = $action;
    $controllerObj->$accion();
}

function larzarAccion($controllerObj){
    if(isset($_GET["action"]) && method_exists($controllerObj, $_GET["action"])){
        cargaAccion($controllerObj, $_GET["action"]);
    }else{
        cargaAccion($controllerObj, ACCION_DEFECTO);
    }
}

?>