<?php

try{
    require __DIR__ . '/../../database/articulo.php';

    $articulo = new Articulo();

    echo $articulo->listaArticulo();

} catch(Exception $e){
    http_response_code(400);
    echo json_encode(['error' => ['Error inesperado']]);
})

?>