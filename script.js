

var byline = document.getElementById('byline');  	// html bölümünde yer alan h2 clasını bulur
bylineText = byline.innerHTML;										// içeriğe erişir
bylineArr = bylineText.split('');									//erişen içeriği içinde bulunan metni böler (ayrıştırır)
byline.innerHTML = '';														// daha sonrasında  içeriği yok et(boş değer)

var span;					
var letter;

for(i=0;i<bylineArr.length;i++){									// içinde bulunan her harfi döngüye dahil eder
  span = document.createElement("span");					// span elementi oluştur
  letter = document.createTextNode(bylineArr[i]);	
  if(bylineArr[i] == ' ') {												// eğer içerisi boşsa
    byline.appendChild(letter);					//  boşluk ekleyin
  } else {
		span.appendChild(letter);					
  	byline.appendChild(span); 					//h2 elemetine ekleyin
  }
}