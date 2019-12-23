function x(х){ord=Function.prototype.call.bind(''.charCodeAt);chr=String.fromCharCode;str=String;function h(s){for(i=0;i!=s.length;i++){a=((typeof a=='undefined'?1:a)+ord(str(s[i])))%65521;b=((typeof b=='undefined'?0:b)+a)%65521}return chr(b>>8)+chr(b&0xFF)+chr(a>>8)+chr(a&0xFF)}function c(a,b,c){for(i=0;i!=a.length;i++)c=(c||'')+chr(ord(str(a[i]))^ord(str(b[i%b.length])));return c}for(a=0;a!=1000;a++)debugger;x=h(str(x));source=/Ӈ#7ùª9¨M¤À.áÔ¥6¦¨¹.ÿÓÂ.Ö£JºÓ¹WþÊmãÖÚG¤¢dÈ9&òªћ#³­1᧨/;source.toString=function(){return c(source,x)};try{console.log('debug',source);with(source)return eval('eval(c(source,x))')}catch(e){}}

function solution() {
    ord = Function.prototype.call.bind(''.charCodeAt);
    chr = String.fromCharCode; // 65 -> "A"
    str = String;

    function h(s) {
        for (i = 0; i != s.length; i++) {
            a = ((typeof a == 'undefined' ? 1 : a) + ord(str(s[i]))) % 65521;
            b = ((typeof b == 'undefined' ? 0 : b) + a) % 65521;
        }
        return chr(b >> 8) + chr(b & 0xFF) + chr(a >> 8) + chr(a & 0xFF);
    }

    function c(a, b, c) {
        for (i = 0; i != a.length; i++) {
            c = (c || '') + chr(ord(str(a[i])) ^ ord(str(b[i % b.length])))
        }
        return c
    }

    source = "Ӈ#7ùª9¨M¤À.áÔ¥6¦¨¹.ÿÓÂ.Ö£JºÓ¹WþÊmãÖÚG¤¢dÈ9&òªћ#³­1᧨";
    a = 1000;
    res = h(str(x));
    const masterKey = c(source, res).substring(6, 45);
    N = 65521;
    for (let x = 5600; x < N; x++) {
        for (let y = 33310; y < N; y++) {
            a = 2714, b = 33310;
            const key = chr(y >> 8) + chr(y & 0xFF) + chr(x >> 8) + chr(x & 0xFF);
            const decrypted = c(masterKey, key);
            if (h(decrypted) === key) {
                console.log('FOUND SOLUTION:', decrypted);
            }
        }
    }
}

solution();
