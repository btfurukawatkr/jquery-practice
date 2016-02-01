var data = [
'abacus','abalone','abandon','abandoned','abandonment','abate','abbey','abbreviation','abdicate','abdomen','abdominal','aberrant','aberration','abet','abhor','abide','abiding','ability','abject','ablaze','able','ably','abolish','abolition','abominable','abomination','aboriginal','abort','abortion','abound','above-mentioned','abrasive','abreast','abroad','abrupt','absence','absent','absentee','absolute','absolutely','absorb','absorbing','absorption','abstain','abstention','abstinence','abstract','abstract','abstraction','absurd',
'baby','bachelor','back','backbone','bad','baffle','baggage','bait','bait','bake','bakery','bald','bald','ballad','ballast','ballast','ballot','ballot','ban','ban','bane','banish','bank','bank','banker','bankrupt','bankrupt','bankrupt','bankruptcy','baptism','barbarian','barbarian','bare','bare','bare','barely','bargain','bargain','barn','barrage','barrage','barrage','barren','barren','barrier','barter','barter','basic','basically','basis',
'cab','cabin','cactus','calamity','calculate','calculation','calculator','call','calligraphy','calm','camaraderie','camel','camellia','canal','cancer','candid','candidate','cannabis','canned','cannon','capable','capacity','cape','capital','capitalism','capitalize','capitalize','capricious','capsule','capture','carcinogen','cardboard','cardinal','care','care','career','careful','careless','caress','caress','carnage','carp','carpenter','carry','cartoon','castle','casually','cataract','cataract','catastrophic'
];

function searchAutocomplete(inputText) {
  var resultArray = [];
  for (var i = 0; i < data.length; i++) {
    var inputTextLen = inputText.length;
    var tmpDataVal = data[i].substring(0, inputTextLen);
    if (inputText == tmpDataVal) {
      resultArray.push(data[i]);
    }
  }
  return resultArray;

}
