<?php

require_once '../models/Paciente.php';

$paciente = new Paciente();

$idpaciente = isset($_POST['idpaciente']) ? limpiarCadena($_POST['idpaciente']) : '';
$nombre = isset($_POST['nombre']) ? limpiarCadena($_POST['nombre']) : '';
$idraza = isset($_POST['idraza']) ? limpiarCadena($_POST['idraza']) : '';
$idespecie = isset($_POST['idespecie']) ? limpiarCadena($_POST['idespecie']) : '';
$sexo = isset($_POST['sexo']) ? limpiarCadena($_POST['sexo']) : '';
$tamaño = isset($_POST['tamaño']) ? limpiarCadena($_POST['tamaño']) : '';
$color = isset($_POST['color']) ? limpiarCadena($_POST['color']) : '';
$peso = isset($_POST['peso']) ? limpiarCadena($_POST['peso']) : '';
$edad_mes = isset($_POST['edad_mes']) ? limpiarCadena($_POST['edad_mes']) : '';
$edad_año = isset($_POST['edad_año']) ? limpiarCadena($_POST['edad_año']) : '';
$fecha_nacimiento = isset($_POST['fecha_nacimiento']) ? limpiarCadena($_POST['fecha_nacimiento']) : '';
$observaciones = isset($_POST['observaciones']) ? limpiarCadena($_POST['observaciones']) : '';
$fecha_hora_registro = isset($_POST['fecha_hora_registro']) ? limpiarCadena($_POST['fecha_hora_registro']) : '';
$idusuario = isset($_POST['idusuario']) ? limpiarCadena($_POST['idusuario']) : '';

switch ($_GET['op']) {
    case 'insert&edit':
        if (empty($idpaciente)) {
            $exec = $paciente->insert($nombre, $idraza, $idespecie, $sexo, $tamaño, $color, $peso, $edad_mes, $edad_año, $fecha_nacimiento, $observaciones, $fecha_hora_registro, $idusuario);
            echo $exec ? 'Paciente registrado.' : 'No se pudo registrar paciente.';
        }
        break;

    case 'disabled':
        # code...
        break;

    case 'enable':
        # code...
        break;

    case 'listByID':
        # code...
        break;

    case 'list':
        $exec = $paciente->list();
        $data = array();

        while ($reg = $exec->fetch_object()) {
            $data[] = array(
                '0'=> ($reg->estado) ? '' : '',
                '1'=> $reg->nombre,
                '2'=> $reg->raza,
                '3'=> $reg->especie,
                '4'=> $reg->sexo,
                '5'=> $reg->tamaño,
                '6'=> $reg->peso,
                '7'=> $reg->fecha_nacimiento
            );
        }

        $result = array(
            'sEcho'=> 1,
            'iTotalRecords'=> count($data),
            'iTotalDisplayRecords'=> count($data),
            'aaData'=> $data
        );

        echo json_encode($result);

        break;
}

?>