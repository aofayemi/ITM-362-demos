if(!('querySelector' in document && 'addEventListener' in document)){
//old, old browser. Say bye
console.log('Old browser');
return;
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('OMG content is loaded!!!');
  var heading_text = document.querySelector('content h1').innerText
  console.log('The heading text is :', heading_text);


})
