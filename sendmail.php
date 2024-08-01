<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->isHTML(true);

// От кого письмо
$mail->setFrom('');
// Кому отправить
$mail->addAddress('');
// Тема письма
$mail->Subject = '';

// Город
$hand = "";
if ($_POST['hand'] == "") {
	$hand = "";
}
// Тело письма
$body = '<h1></h1>';

if (trim(!empty($_POST['name']))) {
	$body .= '<><strong>Имя</strong> ' . $_POST['name'] . '</p>';
}
if (trim(!empty($_POST['email']))) {
	$body .= '<><strong>Email</strong> ' . $_POST['email'] . '</p>';
}
if (trim(!empty($_POST['city']))) {
	$body .= '<p><strong>Город:</strong> ' . $hand . '</p>';
}
if (trim(!empty($_POST['age']))) {
	$body .= '<><strong>Возраст</strong> ' . $_POST['age'] . '</p>';
}
if (trim(!empty($_POST['message']))) {
	$body .= '<><strong>Возраст</strong> ' . $_POST['age'] . '</p>';
}

$mail->Body = $body;

// Отправка
if (!$mail->send()) {
	$message = 'Ошибка';
} else {
	$message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
