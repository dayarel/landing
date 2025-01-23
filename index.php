<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="web/css/dist/nueva-landing.css">
  </head>
  <body>
   
    <div class="overlay-modal"></div>
    <?php 
    include 'icons.html';
    include 'nav.html'; ?>
    
    <div class="page-wrapper">
        <main>
          <?php 
              include 'hero.html';
              include 'por-que.html';
              include 'plazas.html';
              include 'reviews.html';
          ?>
        </main>
        <aside>
          <?php include 'cupon.html'; ?>
        </aside>
    </div>

<?php 
include 'footer.html'; 
?>
<div class="review-modal">
  <?php include 
</div>
<script src="web/js/src/jquery.js"></script>
<script src="web/js/src/slick.min.js"></script>
<script src="web/js/dist/init.min.js"></script>
  </body>
</html>
