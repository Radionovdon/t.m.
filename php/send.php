<?php

$name = $_POST['name'];
$emailTel = $_POST['emailTel'];
$question = $_POST['question'];
$date = $date('d.m.y');
$time = $time('H:i');
$adminEmail = 'radionovdon@gmail.com';

$name = htmlspecialchars($name);
$emailTel = htmlspecialchars($emailTel);
$question = htmlspecialchars($question);

$name = urldecode($name);
$emailTel = urldecode($emailTel);
$question = urldecode($question);

$name = trim($name);
$emailTel = trim($emailTel);
$question = trim($question);

echo $name;
echo $emailTel;
echo $question;

mail("$adminEmail", "$time $date Заявка с сайта от $name, $emailTel", "$question");

$f = fopen('messages.txt', 'a+');
fwrite($f, '\n $time $date Заявка от $name, $emailTel');
fwrite($f, '\n $question');
fwrite($f, '\n ------------------');
fclose($f);

?>