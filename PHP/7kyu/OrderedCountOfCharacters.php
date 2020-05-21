// https://www.codewars.com/kata/57a6633153ba33189e000074

<?php
function orderedCount($text) {
    if ($text == "") {
      return [];
    }
    
    $text_array = str_split($text);
    $countedArray = [];
    for ($i = 0; $i < sizeof($text_array); $i++) {
      $characterList = [];
      for ($j = 0; $j < sizeof($countedArray); $j++) {
        array_push($characterList, $countedArray[$j][0]);
      }
  
      if (in_array($text_array[$i], $characterList)) {
        $index = array_search($text_array[$i], $characterList);
        $countedArray[$index][1]++;
      } else {
        array_push($countedArray, [$text_array[$i], 1]);
      }
    }
    return $countedArray;
}
?>

// May 2020