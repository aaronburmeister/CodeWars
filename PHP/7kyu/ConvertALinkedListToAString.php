<?php
// https://www.codewars.com/kata/582c297e56373f0426000098

function stringify($list) {
    if ($list == NULL) return "NULL";
    $array = [];
    // add the data
    $array[0] = $list->data;
    // check if there is a next
    if ($list->next) {
      $array[1] = stringify($list->next);
    } else {
      // if not, add null at the end
      $array[1] = "NULL";
    }
    // return the string
    return join(' -> ', $array);
}

// June 5, 2020