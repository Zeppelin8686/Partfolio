<?php
  
  $name = $_POST['user-name'];
  $mail = $_POST['user-email'];
  $comment = $_POST['message'];

  $mail_message = '
  <html>
      <head>
          <title>Заявка</title>
      </head>
      <body>
          <h2>Заказ</h2>
          <ul>
              <li>Имя: ' . $name . '</li>
              <li>Email: ' . $mail . '</li>
              <li>Комментарии к заказу: ' . $comment . '</li>
          </ul>
      </body>
  </html>    
  ';

  $headers = "From: Costumer <admin@partfolio.com>\r\n".
  "MIME-Version: 1.0" . "\r\n" .
  "Content-type: text/html; charset=UTF-8" . "\r\n";

  $mail = mail('awesome.baravik@yandex.com', 'Заказ', $mail_message, $headers) ;

  if ($mail) {
      echo 'Сообщение отправлено';
  }else{
      echo 'На сервере произошла ошибка';
  }

?>