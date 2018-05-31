<?php

require '../config/conexion.php';

Class Paciente{
    
    public function __contruct(){

    }

    public function insertar($nombre, $idraza, $idespecie, $sexo, $tamaño, $color, $peso, $edad_mes, $edad_año, $fecha_nacimiento, $observaciones, $fecha_hora_registro, $idusuario){
        $sql = "INSERT INTO pacientes(nombre, idraza, idespecie, sexo, tamaño, color, peso, edad_mes, edad_año, fecha_nacimiento, observaciones, fecha_hora_registro, idusuario, estado)
                VALUES('$nombre', '$idraza', '$idespecie', '$sexo', '$tamaño', '$color', '$peso', '$edad_mes', '$edad_año', '$fecha_nacimiento', '$observaciones', '$fecha_hora_registro', '$idusuario', '1')";

        return ejecutarConsulta($sql);
    }
}

?>