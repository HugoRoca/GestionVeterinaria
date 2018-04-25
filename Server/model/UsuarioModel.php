<?php

class UsuarioModel extends ModeloBase{
    private $table;

    public function __construct(){
        $this->table = "usuarios";
        parent::__construct($this->table);
    }

    //Metodos de consulta
    public function getUsuario(){
        $query = "SELECT * FROM usuarios WHERE email = 'hugo.roca@zoluxiones.com'";
        $usuario = $this->ejecutarSql($query);
        return $usuario;
    }
}

?>