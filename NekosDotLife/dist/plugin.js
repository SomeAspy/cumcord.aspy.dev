(function(){"use strict";var n={randomHentaiGif:"/img/Random_hentai_gif",pussy:"/img/pussy",nekoGif:"/img/nsfw_neko_gif",neko:"/img/lewd",lesbian:"/img/les",kuni:"/img/kuni",cumsluts:"/img/cum",classic:"/img/classic",boobs:"/img/boobs",bJ:"/img/bj",anal:"/img/anal",avatar:"/img/nsfw_avatar",yuri:"/img/yuri",trap:"/img/trap",tits:"/img/tits",girlSoloGif:"/img/solog",girlSolo:"/img/solo",pussyWankGif:"/img/pwankg",pussyArt:"/img/pussy_jpg",kemonomimi:"/img/lewdkemo",kitsune:"/img/lewdk",keta:"/img/keta",holo:"/img/hololewd",holoEro:"/img/holoero",hentai:"/img/hentai",futanari:"/img/futanari",femdom:"/img/femdom",feetGif:"/img/feetg",eroFeet:"/img/erofeet",feet:"/img/feet",ero:"/img/ero",eroKitsune:"/img/erok",eroKemonomimi:"/img/erokemo",eroNeko:"/img/eron",eroYuri:"/img/eroyuri",cumArts:"/img/cum_jpg",blowJob:"/img/blowjob",spank:"/img/spank",gasm:"/img/gasm"},l={tickle:"/img/tickle",slap:"/img/slap",poke:"/img/poke",pat:"/img/pat",neko:"/img/neko",meow:"/img/meow",lizard:"/img/lizard",kiss:"/img/kiss",hug:"/img/hug",foxGirl:"/img/fox_girl",feed:"/img/feed",cuddle:"/img/cuddle",why:"/why",catText:"/cat",OwOify:"/owoify",eightBall:"/8ball",fact:"/fact",nekoGif:"/img/ngif",kemonomimi:"/img/kemonomimi",holo:"/img/holo",smug:"/img/smug",baka:"/img/baka",woof:"/img/woof",spoiler:"/spoiler",wallpaper:"/img/wallpaper",goose:"/img/goose",gecg:"/img/gecg",avatar:"/img/avatar",waifu:"/img/waifu"},i={nsfw:n,sfw:l};async function o(e,m){return(await(await fetch(`https://nekos.life/api/v2/${m?i.nsfw[e]:i.sfw[e]}`)).json()).url}let a=[];var u=()=>({onLoad(){a.push(cumcord.commands.addCommand({name:"neko",description:"Send images from nekos.life",args:[{name:"endpoint",description:"The type of image to get",type:"string",required:!0,choices:[{name:"dog",value:"woof"},{name:"tickle",value:"tickle"},{name:"slap",value:"slap"},{name:"poke",value:"poke"},{name:"pat",value:"pat"},{name:"neko",value:"neko"},{name:"cat",value:"meow"},{name:"lizard",value:"lizard"},{name:"kiss",value:"kiss"},{name:"hug",value:"hug"},{name:"foxGirl",value:"fox_girl"},{name:"feed",value:"feed"},{name:"cuddle",value:"cuddle"},{name:"nekoGif",value:"ngif"},{name:"kemonomimi",value:"kemonomimi"},{name:"holo",value:"holo"},{name:"smug",value:"smug"},{name:"baka",value:"baka"},{name:"wallpaper",value:"wallpaper"},{name:"goose",value:"goose"},{name:"gecg",value:"gecg"},{name:"avatar",value:"avatar"},{name:"waifu",value:"waifu"}]}],handler:(e,m)=>o(e.args.endpoint,!1)})),a.push(cumcord.commands.addCommand({name:"nekoNsfw",description:"Send NSFW images from nekos.life",args:[{name:"endpoint",description:"The type of image to get",type:"string",required:!0,choices:[{name:"hentaiGif",value:"Random_hentai_gif"},{name:"pussy",value:"pussy"},{name:"nekoGif",value:"nsfw_neko_gif"},{name:"neko",value:"lewd"},{name:"lesbian",value:"les"},{name:"kuni",value:"kuni"},{name:"cumsluts",value:"cum"},{name:"classic",value:"classic"},{name:"boobs",value:"boobs"},{name:"bj",value:"bj"},{name:"anal",value:"anal"},{name:"avatar",value:"nsfw_avatar"},{name:"yuri",value:"yuri"},{name:"trap",value:"trap"},{name:"tits",value:"tits"},{name:"girlSoloGif",value:"solog"},{name:"girlSolo",value:"solo"},{name:"pussyWankGif",value:"pwankg"},{name:"pussyArt",value:"pussy_jpg"},{name:"kemonomimi",value:"lewdkemo"},{name:"kitsune",value:"lewdk"},{name:"keta",value:"keta"},{name:"holo",value:"hololewd"},{name:"holoEro",value:"holoero"},{name:"hentai",value:"hentai"},{name:"futanari",value:"futanari"},{name:"femdom",value:"femdom"},{name:"feetGif",value:"feetg"},{name:"eroFeet",value:"erofeet"},{name:"ero",value:"ero"},{name:"eroKitsune",value:"erok"},{name:"eroKemonomimi",value:"erokemo"},{name:"eroNeko",value:"eron"},{name:"eroYuri",value:"eroyuri"},{name:"cumArts",value:"cum_jpg"},{name:"Blowjob",value:"blowjob"},{name:"spank",value:"spank"},{name:"gasm",value:"gasm"}]}],handler:(e,m)=>o(e.args.endpoint,!0)}))},onUnload(){a.forEach(e=>e())}});return u})();
