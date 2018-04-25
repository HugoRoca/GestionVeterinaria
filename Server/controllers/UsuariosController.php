<?php

class UsuariosController extends ControladorBase{
    
    public function __construct(){
        parent::__construct();
    }

    public function index(){
        //Creamos el objeto usuario
        $usuario = new Usuario();

        //Conseguimos todos los usuarios
        $alluser = $usuario->getAll();
    }
}

?>