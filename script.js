var designProcess = [];
var designProcessListCount = Math.ceil($('.design-process').find('li').length);
var designProcessFirstListCount = Math.ceil($('.design-process').find('li').length/2);
$('.design-process').find('li').each(function(index, el) {
  designProcess.push($(this)[0]);
});
$('.design-process').find('ul').remove();

var firstUl = "<ul>";
for (var i = 0; i < designProcessFirstListCount; i++) {
  firstUl = firstUl + designProcess[i].outerHTML;
}
firstUl = firstUl + "</ul>";
firstUl = firstUl + "<ul>";

for (var i = designProcessFirstListCount; i < designProcessListCount; i++) {
  firstUl = firstUl + designProcess[i].outerHTML;
}
firstUl = firstUl + "</ul>";

$('.design-process-list').append(firstUl);
