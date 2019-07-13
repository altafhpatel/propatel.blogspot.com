var lang=1;var urdukey_phonetic=[0x0020,0x0021,0x002D,0x0023,0x064A,0x066A,0x0653,0x2024,0x0029,0x0028,0x064C,0x0653,0x060C,0x0674,0x06D4,0x002F,0x06F0,0x06F1,0x06F2,0x06F3,0x06F4,0x06F5,0x06F6,0x06F7,0x06F8,0x06F9,0x003A,0x061B,0x0650,0x0624,0x064E,0x061F,0x0655,0x0622,0xE000,0x062B,0x0688,0xE001,0xE003,0x063A,0x062D,0x0670,0x0636,0x062E,0xE002,0x0655,0x06BA,0x0629,0x064F,0x0652,0x0691,0x0635,0x0679,0x0621,0x0638,0xFDFA,0x0698,0x064A,0x0630,0x0647,0xFDF2,0xE004,0x0652,0x0651,0x064B,0x0627,0x0628,0x0686,0x062F,0x0639,0x0641,0x06AF,0x06BE,0x06CC,0x062C,0x06A9,0x0644,0x0645,0x0646,0x06C1,0x067E,0x0642,0x0631,0x0633,0x062A,0x0626,0x0637,0x0648,0x0634,0x06D2,0x0632,0x2018,0x0674,0x2019,0x064D];var urdukey_urdu98=[0x0020,0x0021,0x0022,0x0023,0x06E4,0x066A,0x0653,0x0027,0x0029,0x0028,0x002A,0x002B,0x060C,0x002D,0x06D4,0x002F,0x06F0,0x06F1,0x06F2,0x06F3,0x06F4,0x06F5,0x06F6,0x06F7,0x06F8,0x06F9,0x003A,0x061B,0xFD3E,0x003D,0xFD3F,0x061F,0x0655,0x0650,0x0688,0xE001,0x0630,0x063A,0x064B,0x064D,0x0622,0x0621,0x064F,0x064C,0xE004,0xFDFA,0x0691,0x0647,0xE000,0x0624,0x0632,0x0651,0x0679,0x062E,0x0626,0x064E,0x0636,0x064A,0x0698,0x06BE,0x0670,0x0637,0x0652,0xE003,0x0629,0x0633,0x0628,0x062B,0x062F,0x0639,0x0641,0x06AF,0x0627,0x06D2,0x062C,0x06A9,0x0644,0x0645,0x0646,0x06C1,0x067E,0x0642,0x0631,0x0634,0x062A,0x062D,0x0648,0x0686,0x0635,0x06CC,0x06BA,0xE002,0x0674,0x0638,0xFDF2];function FKeyDown()
{if(window.event.shiftKey&&window.event.altKey){if(lang==0){lang=1;window.defaultStatus="Urdu Mode";}
else{lang=0;window.defaultStatus="English Mode";}
return false;}
return true;}
function FKeyPress()
{var key=window.event.keyCode;if(key<0x0020||key>=0x00FF)
return;if(lang==1){if(key==0x0020&&window.event.shiftKey)
window.event.keyCode=0x200C;else
window.event.keyCode=urdukey_urdu98[key-0x0020];}
return true;}
function LangFar(myobj)
{myobj.style.textAlign="right";myobj.style.direction="rtl";myobj.focus();lang=1;}
function LangEng(myobj)
{myobj.style.textAlign="left";myobj.style.direction="ltr";myobj.focus();lang=0;}
function hurf(alpha)
{if(alpha=="alifmada")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"آ";}
if(alpha=="alif")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ا";}
if(alpha=="bay")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ب";}
if(alpha=="pay")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"پ";}
if(alpha=="tay")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ت";}
if(alpha=="thay")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ٹ";}
if(alpha=="say")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ث";}
if(alpha=="jim")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ج";}
if(alpha=="hay1")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ح";}
if(alpha=="khay")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"خ";}
if(alpha=="chay")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"چ";}
if(alpha=="dal")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"د";}
if(alpha=="dhal")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ڈ";}
if(alpha=="zal")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ذ";}
if(alpha=="ray")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ر";}
if(alpha=="zay")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ز";}
if(alpha=="kaf")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ک";}
if(alpha=="gaf")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"گ";}
if(alpha=="qaf")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ق";}
if(alpha=="fay")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ف";}
if(alpha=="gain")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"غ";}
if(alpha=="ain")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ع";}
if(alpha=="zhoy")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ظ";}
if(alpha=="thoy")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ط";}
if(alpha=="duad")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ض";}
if(alpha=="suad")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ص";}
if(alpha=="sheen")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ش";}
if(alpha=="seen")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"س";}
if(alpha=="zhay")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ژ";}
if(alpha=="rahy")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ڑ";}
if(alpha=="pbuh")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ﷺ";}
if(alpha=="Allah")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"لله";}
if(alpha=="bariya")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ے";}
if(alpha=="yamada")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ئ";}
if(alpha=="ya")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ی";}
if(alpha=="dochachmihay")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ھ";}
if(alpha=="hay")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ہ";}
if(alpha=="hamza")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ء";}
if(alpha=="wowmada")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ؤ";}
if(alpha=="wow")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"و";}
if(alpha=="gunah")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ں";}
if(alpha=="noon")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ن";}
if(alpha=="mim")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"م";}
if(alpha=="lam")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"ل";}
if(alpha=="space")
{document.getElementById('txt1').value=document.getElementById('txt1').value+" ";}
if(alpha=="entr")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\r";}
if(alpha=="bspace")
{varbk=document.getElementById('txt1').value;varbk=varbk.substring(0,varbk.length-1);document.getElementById('txt1').value=varbk;}
if(alpha=="dash")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"۔";}
if(alpha=="salam")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rاسلام علیکم";}
if(alpha=="دل کی گہرائیوں سے دلی عید مبارک")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rدل کی گہرائیوں سے دلی عید مبارک۔";}
if(alpha=="ہم سب کی طرف سے دلی عید مبارک")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rہم سب کی طرف سے دلی عید مبارک۔";}
if(alpha=="آپ کو نیک دعاؤں اور تمناؤں کے ساتھ عید مبارک")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rآپ کو نیک دعاؤں اور تمناؤں کے ساتھ عید مبارک۔";}
if(alpha=="آپ کو خوشیوں سے بھرپور عید مبارک ہو")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rآپ کو خوشیوں سے بھرپور عید مبارک ہو۔";}
if(alpha=="رحمتوں اور برکتوں والا مہینہ مبارک ہو")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rرحمتوں اور برکتوں والا مہینہ مبارک ہو۔";}
if(alpha=="مغفرتوں والا مہینہ مبارک ہو")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rمغفرتوں والا مہینہ مبارک ہو۔";}
if(alpha=="اﷲ آپ کو اس مہینے میں ہزاروں خوشیاں عطا فرمائے")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rاﷲ آپ کو اس مہینے میں ہزاروں خوشیاں عطا فرمائے۔";}
if(alpha=="اﷲ آپ کو اس مہینے میں ہزاروں برکتیں و نعمتیں عطا فرمائے")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rاﷲ آپ کو اس مہینے میں ہزاروں برکتیں و نعمتیں عطا فرمائے۔";}
if(alpha=="سالگرہ مبارک")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rسالگرہ مبارک";}
if(alpha=="آپ کو سالگرہ کا دن مبارک ہو")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rآپ کو سالگرہ کا دن مبارک ہو";}
if(alpha=="میری دعا ہے کہ آپ کو ہزاروں سالگرہ نصیب ہوں")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rمیری دعا ہے کہ آپ کو ہزاروں سالگرہ نصیب ہوں";}
if(alpha=="مجھے امید ہے آپ کی زندگی ہمیشہ خوشیوں سے بھری ہوگی")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rمجھے امید ہے آپ کی زندگی ہمیشہ خوشیوں سے بھری ہوگی";}
if(alpha=="کاش آپ ابھی میری زندگی میں آجاؤ")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rکاش آپ ابھی میری زندگی میں آجاؤ";}
if(alpha=="آپ کی یاد دل کو تڑپا رہی ہے")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rآپ کی یاد دل کو تڑپا رہی ہے";}
if(alpha=="آدھے آدھے تھے ہم دونوں مل جاتے تو پورے ہوتے")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rآدھے آدھے تھے ہم دونوں\rمل جاتے تو پورے ہوتے";}
if(alpha=="آپ کی نظرِ کرم کا شکریہ")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rآپ کی نظرِ کرم کا شکریہ";}
if(alpha=="ہمیں یاد کرنے پر دل و جان سے آپ کا شکریہ")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rہمیں یاد کرنے پر دل و جان سے آپ کا شکریہ";}
if(alpha=="میں بہت خوش قسمت ہوں کہ مجھے آپ جیسا بہترین دوست ملا")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rمیں بہت خوش قسمت ہوں کہ مجھے آپ جیسا بہترین دوست ملا";}
if(alpha=="میں اﷲ سے دعا کرتا ہوں کہ میری اور آپ کی دوستی ہمیشہ سلامت رہے")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rمیں اﷲ سے دعا کرتا ہوں کہ میری اور آپ کی دوستی ہمیشہ سلامت رہے";}
if(alpha=="خدا کرے میری اور آپ کی دوستی کو کسی کی نظر نہ لگے")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rخدا کرے میری اور آپ کی دوستی کو کسی کی نظر نہ لگے";}
if(alpha=="آپ کو یہ کامیابی مبارک ہو")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rآپ کو یہ کامیابی مبارک ہو";}
if(alpha=="اﷲ آپ کو ایسی ہزار کامیابیاں عطا فرمائے")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rاﷲ آپ کو ایسی ہزار کامیابیاں عطا فرمائے";}
if(alpha=="جانتا ہوں آپ کا دل بہت بڑا ہے اس لیے آپ میری خطا کو نظر انداز کر کے مجھے معاف کر دیں گے")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rجانتا ہوں آپ کا دل بہت بڑا ہے اس لیے آپ میری خطا کو نظر انداز کر کے مجھے معاف کر دیں گے";}
if(alpha=="آپ بہت اچھے ہیں آپ سے معافی کی امید رکھتا ہوں")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rآپ بہت اچھے ہیں آپ سے معافی کی امید رکھتا ہوں";}
if(alpha=="میں اپنی خطا مانتے ہوئے آپ سے معافی کا طلبگار ہوں")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rمیں اپنی خطا مانتے ہوئے آپ سے معافی کا طلبگار ہوں";}
if(alpha=="میں دعا گو ہوں کہ آپ ہمیشہ مسکراہٹوں کے موتی بکھیرتے رہیں")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rمیں دعا گو ہوں کہ آپ ہمیشہ مسکراہٹوں کے موتی بکھیرتے رہیں";}
if(alpha=="زندگی ہمیشہ آپ کی مسکراتے ہوئے گزرے")
{document.getElementById('txt1').value=document.getElementById('txt1').value+"\rزندگی ہمیشہ آپ کی مسکراتے ہوئے گزرے";}
if(alpha=="ہم سب کی طرف سے آپکو عید مبارک")
{document.getElementById('txt1').value="ہم سب کی طرف سے آپکو عید مبارک";}
if(alpha=="ہم سب کی طرف سے آپکو عید مبارک")
{document.getElementById('txt1').value="ہم سب کی طرف سے آپکو عید مبارک";}
if(alpha=="ہم سب کی طرف سے آپکو عید مبارک")
{document.getElementById('txt1').value="ہم سب کی طرف سے آپکو عید مبارک";}
if(alpha=="ہم سب کی طرف سے آپکو عید مبارک")
{document.getElementById('txt1').value="ہم سب کی طرف سے آپکو عید مبارک";}
if(alpha=="دل کی گہرائیوں سے عید مبارک")
{document.getElementById('txt1').value="دل کی گہرائیوں سے عید مبارک";}
if(alpha=="ہم سب کی طرف سے دلی عید مبارک")
{document.getElementById('txt1').value="ہم سب کی طرف سے دلی عید مبارک";}
if(alpha=="نیک تمناؤں کے ساتھ عید مبارک")
{document.getElementById('txt1').value="نیک تمناؤں کے ساتھ عید مبارک";}
if(alpha=="آپ کو خوشیوں بھری عید مبارک ہو")
{document.getElementById('txt1').value="آپ کو خوشیوں بھری عید مبارک ہو";}}
function hurf2(alpha)
{if(alpha=="alifmada")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"آ";}
if(alpha=="alif")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ا";}
if(alpha=="bay")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ب";}
if(alpha=="pay")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"پ";}
if(alpha=="tay")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ت";}
if(alpha=="thay")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ٹ";}
if(alpha=="say")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ث";}
if(alpha=="jim")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ج";}
if(alpha=="hay1")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ح";}
if(alpha=="khay")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"خ";}
if(alpha=="chay")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"چ";}
if(alpha=="dal")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"د";}
if(alpha=="dhal")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ڈ";}
if(alpha=="zal")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ذ";}
if(alpha=="ray")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ر";}
if(alpha=="zay")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ز";}
if(alpha=="kaf")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ک";}
if(alpha=="gaf")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"گ";}
if(alpha=="qaf")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ق";}
if(alpha=="fay")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ف";}
if(alpha=="gain")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"غ";}
if(alpha=="ain")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ع";}
if(alpha=="zhoy")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ظ";}
if(alpha=="thoy")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ط";}
if(alpha=="duad")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ض";}
if(alpha=="suad")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ص";}
if(alpha=="sheen")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ش";}
if(alpha=="seen")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"س";}
if(alpha=="zhay")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ژ";}
if(alpha=="rahy")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ڑ";}
if(alpha=="pbuh")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ﷺ";}
if(alpha=="Allah")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"لله";}
if(alpha=="bariya")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ے";}
if(alpha=="yamada")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ئ";}
if(alpha=="ya")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ی";}
if(alpha=="dochachmihay")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ھ";}
if(alpha=="hay")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ہ";}
if(alpha=="hamza")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ء";}
if(alpha=="wowmada")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ؤ";}
if(alpha=="wow")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"و";}
if(alpha=="gunah")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ں";}
if(alpha=="noon")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ن";}
if(alpha=="mim")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"م";}
if(alpha=="lam")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"ل";}
if(alpha=="space")
{document.getElementById('txt2').value=document.getElementById('txt2').value+" ";}
if(alpha=="entr")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\r";}
if(alpha=="bspace")
{varbk=document.getElementById('txt2').value;varbk=varbk.substring(0,varbk.length-1);document.getElementById('txt2').value=varbk;}
if(alpha=="dash")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"۔";}
if(alpha=="salam")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rاسلام علیکم";}
if(alpha=="دل کی گہرائیوں سے دلی عید مبارک")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rدل کی گہرائیوں سے دلی عید مبارک۔";}
if(alpha=="ہم سب کی طرف سے دلی عید مبارک")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rہم سب کی طرف سے دلی عید مبارک۔";}
if(alpha=="آپ کو نیک دعاؤں اور تمناؤں کے ساتھ عید مبارک")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rآپ کو نیک دعاؤں اور تمناؤں کے ساتھ عید مبارک۔";}
if(alpha=="آپ کو خوشیوں سے بھرپور عید مبارک ہو")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rآپ کو خوشیوں سے بھرپور عید مبارک ہو۔";}
if(alpha=="رحمتوں اور برکتوں والا مہینہ مبارک ہو")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rرحمتوں اور برکتوں والا مہینہ مبارک ہو۔";}
if(alpha=="مغفرتوں والا مہینہ مبارک ہو")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rمغفرتوں والا مہینہ مبارک ہو۔";}
if(alpha=="اﷲ آپ کو اس مہینے میں ہزاروں خوشیاں عطا فرمائے")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rاﷲ آپ کو اس مہینے میں ہزاروں خوشیاں عطا فرمائے۔";}
if(alpha=="اﷲ آپ کو اس مہینے میں ہزاروں برکتیں و نعمتیں عطا فرمائے")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rاﷲ آپ کو اس مہینے میں ہزاروں برکتیں و نعمتیں عطا فرمائے۔";}
if(alpha=="سالگرہ مبارک")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rسالگرہ مبارک";}
if(alpha=="آپ کو سالگرہ کا دن مبارک ہو")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rآپ کو سالگرہ کا دن مبارک ہو";}
if(alpha=="میری دعا ہے کہ آپ کو ہزاروں سالگرہ نصیب ہوں")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rمیری دعا ہے کہ آپ کو ہزاروں سالگرہ نصیب ہوں";}
if(alpha=="مجھے امید ہے آپ کی زندگی ہمیشہ خوشیوں سے بھری ہوگی")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rمجھے امید ہے آپ کی زندگی ہمیشہ خوشیوں سے بھری ہوگی";}
if(alpha=="کاش آپ ابھی میری زندگی میں آجاؤ")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rکاش آپ ابھی میری زندگی میں آجاؤ";}
if(alpha=="آپ کی یاد دل کو تڑپا رہی ہے")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rآپ کی یاد دل کو تڑپا رہی ہے";}
if(alpha=="آدھے آدھے تھے ہم دونوں مل جاتے تو پورے ہوتے")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rآدھے آدھے تھے ہم دونوں\rمل جاتے تو پورے ہوتے";}
if(alpha=="آپ کی نظرِ کرم کا شکریہ")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rآپ کی نظرِ کرم کا شکریہ";}
if(alpha=="ہمیں یاد کرنے پر دل و جان سے آپ کا شکریہ")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rہمیں یاد کرنے پر دل و جان سے آپ کا شکریہ";}
if(alpha=="میں بہت خوش قسمت ہوں کہ مجھے آپ جیسا بہترین دوست ملا")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rمیں بہت خوش قسمت ہوں کہ مجھے آپ جیسا بہترین دوست ملا";}
if(alpha=="میں اﷲ سے دعا کرتا ہوں کہ میری اور آپ کی دوستی ہمیشہ سلامت رہے")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rمیں اﷲ سے دعا کرتا ہوں کہ میری اور آپ کی دوستی ہمیشہ سلامت رہے";}
if(alpha=="خدا کرے میری اور آپ کی دوستی کو کسی کی نظر نہ لگے")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rخدا کرے میری اور آپ کی دوستی کو کسی کی نظر نہ لگے";}
if(alpha=="آپ کو یہ کامیابی مبارک ہو")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rآپ کو یہ کامیابی مبارک ہو";}
if(alpha=="اﷲ آپ کو ایسی ہزار کامیابیاں عطا فرمائے")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rاﷲ آپ کو ایسی ہزار کامیابیاں عطا فرمائے";}
if(alpha=="جانتا ہوں آپ کا دل بہت بڑا ہے اس لیے آپ میری خطا کو نظر انداز کر کے مجھے معاف کر دیں گے")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rجانتا ہوں آپ کا دل بہت بڑا ہے اس لیے آپ میری خطا کو نظر انداز کر کے مجھے معاف کر دیں گے";}
if(alpha=="آپ بہت اچھے ہیں آپ سے معافی کی امید رکھتا ہوں")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rآپ بہت اچھے ہیں آپ سے معافی کی امید رکھتا ہوں";}
if(alpha=="میں اپنی خطا مانتے ہوئے آپ سے معافی کا طلبگار ہوں")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rمیں اپنی خطا مانتے ہوئے آپ سے معافی کا طلبگار ہوں";}
if(alpha=="میں دعا گو ہوں کہ آپ ہمیشہ مسکراہٹوں کے موتی بکھیرتے رہیں")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rمیں دعا گو ہوں کہ آپ ہمیشہ مسکراہٹوں کے موتی بکھیرتے رہیں";}
if(alpha=="زندگی ہمیشہ آپ کی مسکراتے ہوئے گزرے")
{document.getElementById('txt2').value=document.getElementById('txt2').value+"\rزندگی ہمیشہ آپ کی مسکراتے ہوئے گزرے";}
if(alpha=="ہم سب کی طرف سے آپکو عید مبارک")
{document.getElementById('txt2').value="ہم سب کی طرف سے آپکو عید مبارک";}
if(alpha=="ہم سب کی طرف سے آپکو عید مبارک")
{document.getElementById('txt2').value="ہم سب کی طرف سے آپکو عید مبارک";}
if(alpha=="ہم سب کی طرف سے آپکو عید مبارک")
{document.getElementById('txt2').value="ہم سب کی طرف سے آپکو عید مبارک";}
if(alpha=="ہم سب کی طرف سے آپکو عید مبارک")
{document.getElementById('txt2').value="ہم سب کی طرف سے آپکو عید مبارک";}
if(alpha=="دل کی گہرائیوں سے عید مبارک")
{document.getElementById('txt2').value="دل کی گہرائیوں سے عید مبارک";}
if(alpha=="ہم سب کی طرف سے دلی عید مبارک")
{document.getElementById('txt2').value="ہم سب کی طرف سے دلی عید مبارک";}
if(alpha=="نیک تمناؤں کے ساتھ عید مبارک")
{document.getElementById('txt2').value="نیک تمناؤں کے ساتھ عید مبارک";}
if(alpha=="آپ کو خوشیوں بھری عید مبارک ہو")
{document.getElementById('txt2').value="آپ کو خوشیوں بھری عید مبارک ہو";}}