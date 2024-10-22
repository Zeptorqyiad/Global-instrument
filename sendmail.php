<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// Получаем данные из формы
	$name = $_POST['name'];
	$email = $_POST['email'];
	$telephone = $_POST['telephone'];
	$city = $_POST['city'];
	$message = $_POST['message'];

	// Настраиваем получателя письма
	$to = "sales@mirinst.ru";  // Укажите ваш реальный email
	$subject = "Запрос с формы на сайте";
	$body = "Имя: $name\nEmail: $email\nТелефон: $telephone\nГород: $city\nСообщение: $message";

	// Указываем заголовки письма
	$headers = "From: sales@mirinst.ru\r\n";
	$headers .= "Content-type: text/plain; charset=UTF-8\r\n";

	// Отправляем письмо
	if (mail($to, $subject, $body, $headers)) {
		echo "success";  // Возвращаем 'success' в случае успешной отправки
	} else {
		echo "error";  // Возвращаем 'error' в случае ошибки
	}
}
