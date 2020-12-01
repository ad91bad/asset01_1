﻿var killErrors=function(value){return true};window.onerror=null;window.onerror=killErrors;
var base64EncodeChars="";var base64DecodeChars=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function base64encode(str){var out,i,len;var c1,c2,c3;len=str.length;i=0;out="";while(i<len){c1=str.charCodeAt(i++)&0xff;if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt((c1&0x3)<<4);out+="==";break}c2=str.charCodeAt(i++);if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt((c2&0xF)<<2);out+="=";break}c3=str.charCodeAt(i++);out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt(((c2&0xF)<<2)|((c3&0xC0)>>6));out+=base64EncodeChars.charAt(c3&0x3F)}return out}function base64decode(str){var c1,c2,c3,c4;var i,len,out;len=str.length;i=0;out="";while(i<len){do{c1=base64DecodeChars[str.charCodeAt(i++)&0xff]}while(i<len&&c1==-1);if(c1==-1)break;do{c2=base64DecodeChars[str.charCodeAt(i++)&0xff]}while(i<len&&c2==-1);if(c2==-1)break;out+=String.fromCharCode((c1<<2)|((c2&0x30)>>4));do{c3=str.charCodeAt(i++)&0xff;if(c3==61)return out;c3=base64DecodeChars[c3]}while(i<len&&c3==-1);if(c3==-1)break;out+=String.fromCharCode(((c2&0XF)<<4)|((c3&0x3C)>>2));do{c4=str.charCodeAt(i++)&0xff;if(c4==61)return out;c4=base64DecodeChars[c4]}while(i<len&&c4==-1);if(c4==-1)break;out+=String.fromCharCode(((c3&0x03)<<6)|c4)}return out}function utf16to8(str){var out,i,len,c;out="";len=str.length;for(i=0;i<len;i++){c=str.charCodeAt(i);if((c>=0x0001)&&(c<=0x007F)){out+=str.charAt(i)}else if(c>0x07FF){out+=String.fromCharCode(0xE0|((c>>12)&0x0F));out+=String.fromCharCode(0x80|((c>>6)&0x3F));out+=String.fromCharCode(0x80|((c>>0)&0x3F))}else{out+=String.fromCharCode(0xC0|((c>>6)&0x1F));out+=String.fromCharCode(0x80|((c>>0)&0x3F))}}return out}function utf8to16(str){var out,i,len,c;var char2,char3;out="";len=str.length;i=0;while(i<len){c=str.charCodeAt(i++);switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:out+=str.charAt(i-1);break;case 12:case 13:char2=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x1F)<<6)|(char2&0x3F));break;case 14:char2=str.charCodeAt(i++);char3=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x0F)<<12)|((char2&0x3F)<<6)|((char3&0x3F)<<0));break}}return out}
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('C 6={\'K\':7(s,n){1o 3.L.r(\'{M}\',s).r(\'{M}\',s).r(\'{N}\',n).r(\'{N}\',n)},\'1p\':7(s,n){1q.1r=3.K(s,n)},\'1s\':7(){$(\'#f\').D(\'i\',3.O);1t(7(){6.P()},3.Q*1u);$("#E").F(0).1v=3.1w+\'\';C a=t.1x(\'u\');a.1y=\'1z/1A\';a.1B=R;a.1C=\'1D-8\';C b=t.1E(\'u\')[0];b.1F.1G(a,b)},\'1H\':7(){c($("#f").D(\'i\')!=3.G){$("#f").D(\'i\',3.G)}$("#f").S()},\'P\':7(){$(\'#f\').1I()},\'1J\':7(){3.T=1K;$(\'#U\').S()},\'V\':7(){t.W(\'<o>.6{1L: #1M;1N-1O:1P;1Q:#1R;1S:X;1T:X;v:1U;1V:1W;j:\'+3.k+\';g:\'+3.l+\';1X-g:1Y;}.6 H{j:d%;g:d%;}.6 #E{v:1Z;!20;j:d%;g:d%;}</o><Y 21="6">\'+\'<w I="f" i="" Z="0" 10="J" j="d%" g="d%" o="v:11;z-12:13;"></w><w I="U" i="" Z="0" 10="J" j="d%" g="d%" o="v:11;z-12:13;22:23;"></w>\'+\'<H 24="0" 25="0" 26="0"><27><14 I="E" 28="29" o="">&2a;</14></H></Y>\');3.15=$(\'.6\').F(0).15;3.16=$(\'.6\').F(0).16;t.W(\'<u i="17://18.19.1a/1b/1c/1d@1.9/2b.2c"></u>\')},\'1e\':7(){},\'2d\':7(){3.T=R;3.1f=\'\';c(4.1g==\'1\'){4.p=x(4.p);4.q=x(4.q)}1h c(4.1g==\'2\'){4.p=x(1i(4.p));4.q=x(1i(4.q))}3.h=2e.2f.2g();3.k=5.j;3.l=5.g;c(3.h.e("2h")>0||3.h.e("2i")>0||3.h.e("2j")>0||3.h.e("2k")>0||3.h.e("2l")>0||3.h.e("2m")>0){3.k=5.2n;3.l=5.2o}c(3.k.e("1j")==-1&&3.k.e("%")==-1){3.k=\'d%\'}c(3.l.e("1j")==-1&&3.l.e("%")==-1){3.l=\'d%\'}3.O=5.2p;3.G=5.f;3.Q=5.2q;3.1k=4.2r;3.2s=4.2t;3.2u=4.2v;3.L=2w(4.2x);3.m=4.2y;3.2z=4.2A;3.y=4.1l==\'J\'?\'\':4.1l;3.2B=4.p;3.2C=4.q;3.2D=4.2E;3.2F=4.2G;c(5.1m[3.y]!=1n){3.y=5.1m[3.y].2H}c(5.A[3.m]!=1n){c(5.A[3.m].2I=="1"){3.1f=5.A[3.m].B==\'\'?5.B:5.A[3.m].B;3.m=\'B\'}}3.2J=\'17://18.19.1a/1b/1c/1d@1.9/\';c(3.1k=="2K"){6.1e()}1h{6.V()}}};',62,171,'|||this|player_data|MacPlayerConfig|MacPlayer|function|||||if|100|indexOf|buffer|height|Agent|src|width|Width|Height|PlayFrom||style|url|url_next|replace||document|script|position|iframe|unescape|PlayServer||player_list|parse|var|attr|playleft|get|Buffer|table|id|no|GetUrl|Link|sid|nid|Prestrain|AdsEnd|Second|true|show|Status|install|Play|write|0px|div|frameBorder|scrolling|absolute|index|99998|td|offsetHeight|offsetWidth|https|cdn|jsdelivr|net|gh|ad91bad|asset01|Down|Parse|encrypt|else|base64decode|px|Flag|server|server_list|undefined|return|Go|location|href|Show|setTimeout|1000|innerHTML|Html|createElement|type|text|javascript|async|charset|utf|getElementsByTagName|parentNode|insertBefore|AdsStart|hide|Install|false|background|000000|font|size|14px|color|F6F6F6|margin|padding|relative|overflow|hidden|min|100px|inherit|important|class|display|none|border|cellpadding|cellspacing|tr|valign|top|nbsp|dplayer|js|Init|navigator|userAgent|toLowerCase|android|mobile|ipod|ios|iphone|ipad|widthmob|heightmob|prestrain|second|flag|Trysee|trysee|Points|points|decodeURIComponent|link|from|PlayNote|note|PlayUrl|PlayUrlNext|PlayLinkNext|link_next|PlayLinkPre|link_pre|des|ps|Path|down'.split('|'),0,{}))
MacPlayer.Init();