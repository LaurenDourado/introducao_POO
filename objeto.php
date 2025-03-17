<?php
$aluno = [
    // Propiedades do objeto
    "nome" => "Lauren" ,
    "idade" => 16,

    // Método do objeto
    "estudar" => function() use (&$aluno){
        echo "{$aluno['nome']} está estudando";
    }
];

$aluno['estudar']()
?>