<?php

	$name = htmlspecialchars ($_POST['name']);
	$emailPhone = htmlspecialchars ($_POST['emailPhone']);
	$question = htmlspecialchars ($_POST['question']);
	$recipients = array('radionovdon@gmail.com', 'radionovdon@gmail.com');
	$to = implode(',', $recipients);
	$subject = 'Машина Времени - Новое Сообщение';
	$body = "Имя: ".$name."\n\n"."Адрес/Телефон: ".$emailPhone."\n\n"."Сообщение: "."\n\n".$question;


	mail ($to, $subject, $body);

?>