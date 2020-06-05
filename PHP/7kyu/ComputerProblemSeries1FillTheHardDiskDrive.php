<!-- // https://www.codewars.com/kata/5d49c93d089c6e000ff8428c -->

<?php 
function save($sizes, $hd) {
  $files = 0;
  $usedSpace = 0;
  for ($i = 0; $i < count($sizes); $i++) {
    $usedSpace += $sizes[$i];
    if ($usedSpace <= $hd) {
      $files = $i+1;
    }
  }
  return $files;
}

// June 5, 2020