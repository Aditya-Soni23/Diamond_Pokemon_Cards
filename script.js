// Sample card data
function tpsell() {
    window.location = "sell.html";
}

const cards = [
    {
        hollogram: "Golden Card",
        name: "OREO Mew Photocard",
        rarity: "Special-Edition",
        price: 300,
        robuxPrice: 500,
        image: "https://down-my.img.susercontent.com/file/my-11134207-7r992-lvhrc7oe8zgcfd"
    },
    {
        hollogram: "Holowgram",
        name: "Whimsicott V-Star",
        rarity: "V-Star",
        price: 200,
        robuxPrice: 450,
        image: "https://images.pokemoncard.io/images/swsh9/swsh9-65_hiresopt.jpg"
    },
    {   hollogram:"",
        name: "Whimsicott V-Star",
        rarity: "V-Star",
        price: 190,
        robuxPrice: 400,
        image: "https://images.pokemoncard.io/images/swsh9/swsh9-65_hiresopt.jpg"
    },
    {   
        hollogram:"Golden Card",
        name: "Charizard V-Max",
        rarity: "V-Max",
        price: 140,
        robuxPrice: 280,
        image: "data:image/jpeg;base64,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"
    },
    {   hollogram:"Silver Card ",
        name: "Chandelure V-Max",
        rarity: "V-Max",
        price: 130,
        robuxPrice: 250,
        image: "https://i.ebayimg.com/00/s/MTYwMFgxMjk0/z/kAkAAOSwYPRm8Zl~/$_57.JPG?set_id=880000500F"
    },
    {   hollogram:"Hologram",
        name: "Gyarados V-Max",
        rarity: "V-Max",
        price: 120,
        robuxPrice: 250,
        image: "https://www.pokemonwizard.com/uploads/images/cards/2848/246724-gyarados-vmax.jpg"
    },
    {   hollogram:"Hologram",
        name: "Boltund V-Max",
        rarity: "V-Max",
        price: 120,
        robuxPrice: 250,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH8/SWSH8_EN_104.png"
    },
    {   hollogram:"Hologram",
        name: "Pikachu V-Max",
        rarity: "V-Max",
        price: 120,
        robuxPrice: 250,
        image: "https://m.media-amazon.com/images/I/51Xs9ttQrRL._AC_UF1000,1000_QL80_.jpg"
    },
    {   hollogram:"",
        name: "Orbeetle V-Max",
        rarity: "V-Max",
        price: 115,
        robuxPrice: 245,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH11/SWSH11_EN_TG13.png"
    },
    {   hollogram:"",
        name: "Mimikyu V-Max",
        rarity: "V-Max",
        price: 115,
        robuxPrice: 245,
        image: "https://m.media-amazon.com/images/I/612d0h9Yf4L._AC_UF1000,1000_QL80_.jpg"
    },
    {   hollogram:"Hollogram",
        name: "Jolteon V-Max",
        rarity: "V-Max",
        price: 115,
        robuxPrice: 245,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH7/SWSH7_EN_51.png"
    },
    {   hollogram:"Hologram",
        name: "Entei V",
        rarity: "V",
        price: 100,
        robuxPrice: 180,
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH9/SWSH9_EN_22.png"
    },
    {   hollogram:"Hologram",
        name: "Zamazenta V",
        rarity: "V",
        price: 100,
        robuxPrice: 180,
        image: "https://images-cdn.ubuy.co.in/634d0244f2f28c3c2874bcc6-zamazenta-v-163-172-brilliant-stars.jpg"
    },
    {   hollogram:"Hologram",
        name: "Tyranitar V",
        rarity: "V",
        price: 100,
        robuxPrice: 180,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH8/SWSH8_EN_158.png"
    },
    {   hollogram:"Hologram",
        name: "Dracozolt V",
        rarity: "V",
        price: 100,
        robuxPrice: 180,
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH7/SWSH7_EN_178.png"
    },
    {   hollogram:"Hologram",
        name: "Rillaboom V",
        rarity: "V",
        price: 100,
        robuxPrice: 180,
        image: "https://images.pokemoncard.io/images/swsh8/swsh8-22_hiresopt.jpg"
    },
    {   hollogram:"Hologram",
        name: "Urshifu V",
        rarity: "V",
        price: 100,
        robuxPrice: 180,
        image: "https://images-cdn.ubuy.ae/6522b4acae93835e9061460a-pokemon-battle-styles-rapid-strike.jpg"
    },
    {   hollogram:"Hologram",
        name: "Granbull V",
        rarity: "V",
        price: 100,
        robuxPrice: 180,
        image: "https://http2.mlstatic.com/D_NQ_NP_966430-MLB69985823489_062023-O.webp"
    },
    {   hollogram:"Hologram",
        name: "Drapion V",
        rarity: "V",
        price: 95,
        robuxPrice: 170,
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH11/SWSH11_EN_118.png"
    },
    {   hollogram:"Hologram",
        name: "Dodrio V",
        rarity: "V",
        price: 95,
        robuxPrice: 170,
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH8/SWSH8_EN_201.png"
    },
    {   hollogram:"Hologram",
        name: "Milotic V",
        rarity: "V",
        price: 95,
        robuxPrice: 170,
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH2/SWSH2_EN_43.png"
    },
    {   hollogram:"Hologram",
        name: "Breloom V",
        rarity: "V",
        price: 95,
        robuxPrice: 170,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH8/SWSH8_EN_6.png"
    },
    {   hollogram:"Hologram",
        name: "Greedent V",
        rarity: "V",
        price: 95,
        robuxPrice: 170,
        image: "https://static.wixstatic.com/media/6989bb_25c2ce7a13ce4cc19839fd01af27b371~mv2.webp/v1/fill/w_560,h_778,al_c,lg_1,q_85,enc_avif,quality_auto/6989bb_25c2ce7a13ce4cc19839fd01af27b371~mv2.webp"
    },
    {   hollogram:"Hologram",
        name: "Greedent V",
        rarity: "V",
        price: 95,
        robuxPrice: 170,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH8/SWSH8_EN_256.png"
    },
    {   hollogram:"Hologram",
        name: "Trevenant V",
        rarity: "V",
        price: 95,
        robuxPrice: 170,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH7/SWSH7_EN_168.png"
    },
    {   hollogram:"Hologram",
        name: "Trevenant V",
        rarity: "V",
        price: 95,
        robuxPrice: 170,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH7/SWSH7_EN_168.png"
    },
    {   hollogram:"Hologram",
        name: "Dubwool V",
        rarity: "V",
        price: 95,
        robuxPrice: 170,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH2/SWSH2_EN_188.png"
    },
    {   hollogram:"Hologram",
        name: "Glaceon V",
        rarity: "V",
        price: 95,
        robuxPrice: 170,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZALJ25pq9g-fMMrQjm4qK_xkrDkwmPK_RVQ&s"
    },
    {   hollogram:"Hologram",
        name: "Pidgeot V",
        rarity: "V",
        price: 95,
        robuxPrice: 170,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH11/SWSH11_EN_188.png"
    },
    {   hollogram:"Hologram",
        name: "Chandelure V",
        rarity: "V",
        price: 100,
        robuxPrice: 175,
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH8/SWSH8_EN_39.png"
    },
    {   hollogram:"Hologram",
        name: "Lycanroc V",
        rarity: "V",
        price: 100,
        robuxPrice: 175,
        image: "https://m.media-amazon.com/images/I/61YI96zijlL._AC_UF894,1000_QL80_.jpg"
    },
    {   hollogram:"Hologram",
        name: "Tapu koko V",
        rarity: "V",
        price: 100,
        robuxPrice: 175,
        image: "https://m.media-amazon.com/images/I/51bwiZLJdYL._AC_UF1000,1000_QL80_.jpg"
    },
    {   hollogram:"Hologram",
        name: "Zapdos V",
        rarity: "V",
        price: 100,
        robuxPrice: 175,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH6/SWSH6_EN_80.png"
    },
    {   hollogram:"Hologram",
        name: "Sylveon V",
        rarity: "V",
        price: 100,
        robuxPrice: 175,
        image: "https://m.media-amazon.com/images/I/61+0La7DimL.jpg"
    },
    {   hollogram:"Hologram",
        name: "Slowking V",
        rarity: "V",
        price: 90,
        robuxPrice: 170,
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH6/SWSH6_EN_178.png"
    },
    {   hollogram:"Hologram",
        name: "Flapple V",
        rarity: "V",
        price: 90,
        robuxPrice: 170,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH5/SWSH5_EN_18.png"
    },
    {   hollogram:"Hologram",
        name: "Shaymin V",
        rarity: "V",
        price: 90,
        robuxPrice: 170,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH9/SWSH9_EN_13.png"
    },
    {   hollogram:"Hologram",
        name: "Falinks V",
        rarity: "V",
        price: 90,
        robuxPrice: 170,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH2/SWSH2_EN_185.png"
    },
    {   hollogram:"Trainer",
        name: "Luxray Ex",
        rarity: "Ex",
        price: 90,
        robuxPrice: 170,
        image: "https://i.pinimg.com/736x/5d/46/bb/5d46bbf830e24dcccc31b8eea94ad44d.jpg"
    },
    {   hollogram:"Hologram",
        name: "Kyogre primigenio Ex",
        rarity: "Ex",
        price: 80,
        robuxPrice: 130,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XY7/XY7_EN_96.png"
    },
    {   hollogram:"Hologram",
        name: "Groudon primigenio Ex",
        rarity: "Ex",
        price: 80,
        robuxPrice: 130,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNF2MpfEgJ1weMMT1H4R-_o4kcti_ZlmSgoVFLbNfiZ0SswHhaGCsdtPAk8oFJ1PrRcwQ&usqp=CAU"
    },
    {   hollogram:"Hologram",
        name: "Groudon primigenio Ex",
        rarity: "Ex",
        price: 80,
        robuxPrice: 130,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNF2MpfEgJ1weMMT1H4R-_o4kcti_ZlmSgoVFLbNfiZ0SswHhaGCsdtPAk8oFJ1PrRcwQ&usqp=CAU"
    },
    {   hollogram:"Hologram",
        name: "M rayquaza Ex",
        rarity: "Ex",
        price: 80,
        robuxPrice: 130,
        image: "https://m.media-amazon.com/images/I/81CvzLbZvKL.jpg"
    },
    {   hollogram:"Hologram",
        name: "M kangaskhan Ex",
        rarity: "Ex",
        price: 80,
        robuxPrice: 130,
        image: "https://i.ebayimg.com/images/g/zOkAAOSwQChlBooU/s-l1200.jpg"
    },
    {   hollogram:"Hologram",
        name: "M houndoom Ex",
        rarity: "Ex",
        price: 80,
        robuxPrice: 130,
        image: "https://i.pinimg.com/736x/d7/c5/77/d7c5772c5fb399d4e19d7ed1b5f366be.jpg"
    },
    {   hollogram:"Hologram",
        name: "M gallade Ex",
        rarity: "Ex",
        price: 80,
        robuxPrice: 130,
        image: "https://m.media-amazon.com/images/I/61VRHrEWYvL.jpg"
    },
    {   hollogram:"Hologram",
        name: "Ho-oh Ex",
        rarity: "Ex",
        price: 80,
        robuxPrice: 130,
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fcd59ac2-cba5-433a-affb-e6705ba09bd6/dbcnnun-bcd05347-2c7f-4f50-9ecb-707ba81fa34e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZjZDU5YWMyLWNiYTUtNDMzYS1hZmZiLWU2NzA1YmEwOWJkNlwvZGJjbm51bi1iY2QwNTM0Ny0yYzdmLTRmNTAtOWVjYi03MDdiYTgxZmEzNGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MQ9SAqpcEvAxcW7v0tUQgNLfKfEr2lEDnEIbzLJvCMM"
    },
    {   hollogram:"Hologram",
        name: "M mewtwo Ex",
        rarity: "Ex",
        price: 80,
        robuxPrice: 130,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQ65_7Own5ThF7dTcfDtmq7PwDbTYhNwymK3uJSRK5_M8Y6QUbi9rnjixZFI9tVV6kck&usqp=CAU"
    },
    {   hollogram:"Hologram",
        name: "Zekrom Ex",
        rarity: "Ex",
        price: 70,
        robuxPrice: 120,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHH6YeKzzPSDrBnZfTdkLNzERJGMKqWXW5tw&s"
    },
    {   hollogram:"Hologram",
        name: "Blastoise Ex",
        rarity: "Ex",
        price: 70,
        robuxPrice: 120,
        image: "https://images-cdn.ubuy.co.in/6380cf9b1af7c06ddc158ff3-pokemon-blastoise-ex-21-108-xy.jpg"
    },
    {   hollogram:"Hologram",
        name: "Kyogre Ex",
        rarity: "Ex",
        price: 70,
        robuxPrice: 120,
        image: "https://tcgplayer-cdn.tcgplayer.com/product/95952_in_200x200.jpg"
    },
    {   hollogram:"Hologram",
        name: "Kyogre Ex",
        rarity: "Ex",
        price: 70,
        robuxPrice: 120,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMqQkXCq3ueHCkRqWA8oIuArtXdfme3Zlcg&s"
    },
    {   hollogram:"Hologram",
        name: "Kyogre Ex",
        rarity: "Ex",
        price: 70,
        robuxPrice: 120,
        image: "https://tcgplayer-cdn.tcgplayer.com/product/95952_in_200x200.jpg"
    },
    {   hollogram:"Hologram",
        name: "Groudon Ex",
        rarity: "Ex",
        price: 70,
        robuxPrice: 120,
        image: "https://m.media-amazon.com/images/I/61en0NSnAVL.jpg"
    },
    {   hollogram:"Hologram",
        name: "Charizard Ex",
        rarity: "Ex",
        price: 70,
        robuxPrice: 120,
        image: "https://m.media-amazon.com/images/I/71yJDnHjgiL.jpg"
    },
    {   hollogram:"Hologram",
        name: "Lugia Ex",
        rarity: "Ex",
        price: 70,
        robuxPrice: 120,
        image: "https://rukminim2.flixcart.com/image/850/1000/card-game/5/f/j/pokemon-lugia-ex-fullrare8426-original-imaefqk4fzgry9xm.jpeg?q=90&crop=false"
    },
    {   hollogram:"Hologram",
        name: "Cobalion Ex",
        rarity: "Ex",
        price: 70,
        robuxPrice: 120,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/BW8/BW8_EN_93.png"
    },
    {   hollogram:"Hologram",
        name: "Heatran Ex",
        rarity: "Ex",
        price: 70,
        robuxPrice: 120,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/BW9/BW9_EN_109.png"
    },
    {   hollogram:"Hologram",
        name: "Dragonite Ex",
        rarity: "Ex",
        price: 70,
        robuxPrice: 120,
        image: "https://cdn.shopclues.com/images/thumbnails/63327/640/1/612bnw2HHL1490086971.jpg"
    },
    {   hollogram:"Hologram",
        name: "Dragonite Ex",
        rarity: "Ex",
        price: 70,
        robuxPrice: 120,
        image: "https://cdn.shopclues.com/images/thumbnails/63327/640/1/612bnw2HHL1490086971.jpg"
    },
    {   hollogram:"Hologram",
        name: "Palkia Ex",
        rarity: "Ex",
        price: 70,
        robuxPrice: 120,
        image: "https://ik.imagekit.io/91ubcvvnh3k/tr:w-500/https://cdn8.bigcommerce.com/s-0kvv9/images/stencil/1280x1280/products/79775/86771/pokemon-black-white-plasma-blast-single-card-rare-holo-ex-66-palkia-ex-10__40885.1461301116.jpg"
    },
    {   hollogram:"Hologram",
        name: "Xerneas Ex",
        rarity: "Ex",
        price: 60,
        robuxPrice: 110,
        image: "https://m.media-amazon.com/images/I/51rqb+auiXL.jpg"
    },
    {   hollogram:"Hologram",
        name: "Xerneas Ex",
        rarity: "Ex",
        price: 60,
        robuxPrice: 110,
        image: "https://m.media-amazon.com/images/I/51rqb+auiXL.jpg"
    },
    {   hollogram:"Hologram",
        name: "Xerneas Ex",
        rarity: "Ex",
        price: 60,
        robuxPrice: 110,
        image: "https://m.media-amazon.com/images/I/51rqb+auiXL.jpg"
    },
    {   hollogram:"Hologram",
        name: "Mewtwo Ex",
        rarity: "Ex",
        price: 60,
        robuxPrice: 110,
        image: "https://images-cdn.ubuy.co.in/63d516891659df1a11010273-pokemon-pokemon-mewtwo-ex-54-bw.jpg"
    },
    {   hollogram:"Hollogram",
        name: "Rayquaza Ex",
        rarity: "Ex",
        price: 60,
        robuxPrice: 110,
        image: "https://images-cdn.ubuy.co.in/6352e8afa00bab1f3c7f7ab2-pokemon-rayquaza-ex-85-bw-dragons.jpg"
    },
    {   hollogram:"Hologram",
        name: "Giratina Ex",
        rarity: "Ex",
        price: 60,
        robuxPrice: 110,
        image: "https://m.media-amazon.com/images/I/51UDeLXt9mL._AC_UF894,1000_QL80_.jpg"
    },
    {   hollogram:"Hologram",
        name: "Genesect Ex",
        rarity: "Ex",
        price: 60,
        robuxPrice: 110,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuq4mxJc1cLTS7UanqK0ixzFLt8Hvz7YWug&s"
    },
    {   hollogram:"Hologram",
        name: "Genesect Ex",
        rarity: "Ex",
        price: 60,
        robuxPrice: 110,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuq4mxJc1cLTS7UanqK0ixzFLt8Hvz7YWug&s"
    },
    {   hollogram:"Hologram",
        name: "Yveltal Ex",
        rarity: "Ex",
        price: 60,
        robuxPrice: 110,
        image: "https://rukminim2.flixcart.com/image/850/1000/card-game/g/r/z/pokemon-yveltal-ex-xyoil-2703-original-imaefqkasfzfgja9.jpeg?q=20&crop=false"
    },
    {   hollogram:"Hologram",
        name: "Articuno Ex",
        rarity: "Ex",
        price: 60,
        robuxPrice: 110,
        image: "https://m.media-amazon.com/images/I/61Vrm34DtUL._AC_UF1000,1000_QL80_.jpg"
    },
    {   hollogram:"Hologram",
        name: "Virizion Ex",
        rarity: "Ex",
        price: 60,
        robuxPrice: 110,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/BW10/BW10_EN_9.png"
    },
    {   hollogram:"",
        name: "Wailord Basic",
        rarity: "Basic",
        price: 50,
        robuxPrice: 80,
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH4/SWSH4_EN_32.png"
    },
    {   hollogram:"",
        name: "Wailord Basic",
        rarity: "Basic",
        price: 50,
        robuxPrice: 80,
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH4/SWSH4_EN_32.png"
    },
    {   hollogram:"",
        name: "Ampharos Basic",
        rarity: "Basic",
        price: 50,
        robuxPrice: 80,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/HGSS1/HGSS1_EN_14.png"
    },
    {   hollogram:"",
        name: "Krookodile  Basic",
        rarity: "Basic",
        price: 50,
        robuxPrice: 80,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8GALzds5bwZ7SEymw3_WppnCZDTedAmbnw&s"
    },
    {   hollogram:"",
        name: "Dustox Basic",
        rarity: "Basic",
        price: 50,
        robuxPrice: 80,
        image: "https://m.media-amazon.com/images/I/61Ofn6ZGGDL._AC_UF1000,1000_QL80_.jpg"
    },
    {   hollogram:"",
        name: "Slowbro Basic",
        rarity: "Basic",
        price: 50,
        robuxPrice: 80,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_9skxS6Tox3jv_TBLgxPlR30W_jZoqPBmQ&s"
    },
    {   hollogram:"",
        name: "Garbodor Basic",
        rarity: "Basic",
        price: 50,
        robuxPrice: 80,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH2/SWSH2_EN_118.png"
    },
    {   hollogram:"",
        name: "Mightyena Basic",
        rarity: "Basic",
        price: 50,
        robuxPrice: 80,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTd3h3cJNUmTijibavyS0dLSFYec7hf4sDob4_m6HC9uPSdR1zwiQIqJkKXte9A9qsCuA&usqp=CAU"
    },
    {   hollogram:"",
        name: "Seviper Basic",
        rarity: "Basic",
        price: 50,
        robuxPrice: 80,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhuxaDtu1QYqvgbStnIrO5mTie1xvUIB2fA&s"
    },
    {   hollogram:"",
        name: "Keldeo Basic",
        rarity: "Basic",
        price: 40,
        robuxPrice: 70,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6xQbBr2nKHqJL9oejfqie4t7gLAZMI-qgdg&s"
    },
    {   hollogram:"",
        name: "Dusclops Basic",
        rarity: "Basic",
        price: 40,
        robuxPrice: 70,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdGi5D0dTg7VhwFv7-ymvm3g6Jeybv7F6xA&s"
    },
    {   hollogram:"",
        name: "Diancie Basic",
        rarity: "Basic",
        price: 40,
        robuxPrice: 70,
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH4/SWSH4_EN_79.png"
    },
    {   hollogram:"",
        name: "Banette Basic",
        rarity: "Basic",
        price: 40,
        robuxPrice: 70,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQHdnRxM0q7oG-dFV0MpbBMc7hF-Vt86OelQ&s"
    },
    {   hollogram:"",
        name: "Kirlia Basic",
        rarity: "Basic",
        price: 40,
        robuxPrice: 70,
        image: "https://down-my.img.susercontent.com/file/my-11134207-7qukw-lf8310l3pv10bc"
    },
    {   hollogram:"",
        name: "Crabrawler Basic",
        rarity: "Basic",
        price: 40,
        robuxPrice: 70,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFmiWul1Szx0n7eqQTFePvTlZEKOn9aUs1FA&s"
    },
    {   hollogram:"",
        name: "Rhyhorn Basic",
        rarity: "Basic",
        price: 40,
        robuxPrice: 70,
        image: "https://m.media-amazon.com/images/I/51wikKn8gCL._AC_UF1000,1000_QL80_.jpg"
    },
    {   hollogram:"",
        name: "Smeargle Basic",
        rarity: "Basic",
        price: 40,
        robuxPrice: 70,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDzFeNJBn8w9oHDnv4ryvzYxYt_cfzkLphA&s"
    },
    {   hollogram:"",
        name: "Slugma Basic",
        rarity: "Basic",
        price: 40,
        robuxPrice: 70,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH8/SWSH8_EN_34.png"
    },
    {   hollogram:"",
        name: "Hawlucha Basic",
        rarity: "Basic",
        price: 40,
        robuxPrice: 70,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH9/SWSH9_EN_127.png"
    },
    {   hollogram:"",
        name: "Shaymin Basic",
        rarity: "Basic",
        price: 40,
        robuxPrice: 70,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH4/SWSH4_EN_15.png"
    },
    {   hollogram:"",
        name: "Shaymin Basic",
        rarity: "Basic",
        price: 40,
        robuxPrice: 70,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH4/SWSH4_EN_15.png"
    },
    {   hollogram:"",
        name: "Yamper Basic",
        rarity: "Basic",
        price: 40,
        robuxPrice: 70,
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH1/SWSH1_EN_74.png   "
    },
    {   hollogram:"",
        name: "Ponyta Basic",
        rarity: "Basic",
        price: 30,
        robuxPrice: 50,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HTfFoIToMDgg0EPZYrtpQ8wnPvbaQERJQg&s"
    },
    {   hollogram:"",
        name: "Trapinch Basic",
        rarity: "Basic",
        price: 30,
        robuxPrice: 50,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Zs_p8wGI3cM0zI7jKVrqjCQWSCaU22Xqfw&s"
    },
    {   hollogram:"",
        name: "Duskull Basic",
        rarity: "Basic",
        price: 30,
        robuxPrice: 50,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B4Zn4pMYXn6NQVHFUuUhLdCKyy2f6c9juQ&s"
    },
    {   hollogram:"",
        name: "Woobat Basic",
        rarity: "Basic",
        price: 30,
        robuxPrice: 50,
        image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH4/SWSH4_EN_73.png"
    },
    {   hollogram:"",
        name: "Coming Soon...",
        rarity: "V-Star",
        price: 0,
        robuxPrice: 0,
        image: "https://m.media-amazon.com/images/I/81bxESE-MgL.jpg"
    },
    {   hollogram:"",
        name: "Coming Soon...",
        rarity: "V-Star",
        price: 0,
        robuxPrice: 0,
        image: "https://m.media-amazon.com/images/I/81bxESE-MgL.jpg"
    },
    {   hollogram:"",
        name: "Coming Soon...",
        rarity: "V-Star",
        price: 0,
        robuxPrice: 0,
        image: "https://m.media-amazon.com/images/I/81bxESE-MgL.jpg"
    },
    {   hollogram:"",
        name: "Coming Soon...",
        rarity: "V-Star",
        price: 0,
        robuxPrice: 0,
        image: "https://m.media-amazon.com/images/I/81bxESE-MgL.jpg"
    },
    {   hollogram:"",
        name: "Coming Soon...",
        rarity: "Special-Edition",
        price: 0,
        robuxPrice: 0,
        image: "https://m.media-amazon.com/images/I/81bxESE-MgL.jpg"
    },
    {   hollogram:"",
        name: "Coming Soon...",
        rarity: "Special-Edition",
        price: 0,
        robuxPrice: 0,
        image: "https://m.media-amazon.com/images/I/81bxESE-MgL.jpg"
    },
    {   hollogram:"",
        name: "Coming Soon...",
        rarity: "Special-Edition",
        price: 0,
        robuxPrice: 0,
        image: "https://m.media-amazon.com/images/I/81bxESE-MgL.jpg"
    },
    {   hollogram:"",
        name: "Coming Soon...",
        rarity: "Special-Edition",
        price: 0,
        robuxPrice: 0,
        image: "https://m.media-amazon.com/images/I/81bxESE-MgL.jpg"
    },
    {   hollogram:"",
        name: "Coming Soon...",
        rarity: "Special-Edition",
        price: 0,
        robuxPrice: 0,
        image: "https://m.media-amazon.com/images/I/81bxESE-MgL.jpg"
    }
    
];

// Function to render cards based on filter
function renderCards(filter = "all") {
    const cardList = document.querySelector('.card-list');
    cardList.innerHTML = ""; // Clear existing cards

    const filtered = filter === "all"
        ? cards
        : cards.filter(card => card.rarity.toLowerCase() === filter.toLowerCase());

    filtered.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card-item');
        
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.name}">
            <div class="info">
                <h5 class="holo">${card.hollogram}</h5>
                <h3>${card.name}</h3>
                <p>Rarity: ${card.rarity}</p>
                <p>Price: ₹${card.price} / ${card.robuxPrice} Robux</p>
                <button class="buy-btn" data-name="${card.name}" data-price="${card.price}" data-robux="${card.robuxPrice}" data-image="${card.image}">Buy</button>
            </div>
        `;
        
        cardList.appendChild(cardElement);
    });
}

// Initial load
renderCards();
// Delegate buy button clicks to update the form
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("buy-btn")) {
        const name = e.target.getAttribute("data-name");
        const price = e.target.getAttribute("data-price");
        const robux = e.target.getAttribute("data-robux");

        document.getElementById("proname").value = "Product Name: " + name;
        document.getElementById("proamount").value = "Product Amount: ₹" + price + " | " + robux + " robux";

        // Optional: scroll to the form
        document.querySelector("form").scrollIntoView({ behavior: "smooth" });
    }
});

// Filter buttons logic
const filterButtons = document.querySelectorAll(".filters button");
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        renderCards(button.dataset.filter);
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const packs = [
      {
        name: "Diamond Pack 10% Off",
        pprice: 450,
        rprice: 900,
        cards: [
          {
            hologram: "Hologram",
            name: "Whimsicott",
            rarity: "V-Star",
            image: "https://images.pokemoncard.io/images/swsh9/swsh9-65_hiresopt.jpg"
          },
          {
            hologram: "Hologram",
            name: "Entei",
            rarity: "V",
            image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH9/SWSH9_EN_22.png"
          },
          {
            hologram: "Hologram",
            name: "Zamzenta",
            rarity: "V",
            image: "https://images-cdn.ubuy.co.in/634d0244f2f28c3c2874bcc6-zamazenta-v-163-172-brilliant-stars.jpg"
          },
          {
            hologram: "Hologram",
            name: "Urshifu",
            rarity: "V",
            image: "https://images-cdn.ubuy.ae/6522b4acae93835e9061460a-pokemon-battle-styles-rapid-strike.jpg"
          }
        ]
      },
      {
        name: "Gold Pack 12% Off",
        pprice: 660,
        rprice: 1145,
        cards: [
            {
              hologram: "Golden Card",
              name: "Charizard",
              rarity: "V-Max",
              image: "data:image/jpeg;base64,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"
            },
            {
              hologram: "Golden Card",
              name: "OREO Mew Photocard",
              rarity: "Special-Edition",
              image: "https://down-my.img.susercontent.com/file/my-11134207-7r992-lvhrc7oe8zgcfd"
            },
            {
              hologram: "Hologram",
              name: "Whimsicott",
              rarity: "V-Star",
              image: "https://images.pokemoncard.io/images/swsh9/swsh9-65_hiresopt.jpg"
            },
            {
              hologram: "Hologram",
              name: "Pikachu",
              rarity: "V-Max",
              image: "https://m.media-amazon.com/images/I/51Xs9ttQrRL._AC_UF1000,1000_QL80_.jpg"
            }
          ]
      },
      {
        name: "Platinum Pack 12% Off",
        pprice: 300,
        rprice: 545,
        cards: [
            {
              hologram: "Silver Card",
              name: "Chandelure",
              rarity: "V-Max",
              image: "https://i.ebayimg.com/00/s/MTYwMFgxMjk0/z/kAkAAOSwYPRm8Zl~/$_57.JPG?set_id=880000500Ftps://images.pokemoncard.io/images/swsh9/swsh9-65_hiresopt.jpg"
            },
            {
              hologram: "Hologram",
              name: "Sylveon",
              rarity: "V",
              image: "https://m.media-amazon.com/images/I/61+0La7DimL.jpg"
            },
            {
              hologram: "Hologram",
              name: "Kyogre",
              rarity: "Ex",
              image: "https://tcgplayer-cdn.tcgplayer.com/product/95952_in_200x200.jpg"
            },
            {
              hologram: "",
              name: "Diancie",
              rarity: "Basic",
              image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH4/SWSH4_EN_79.png"
            }
          ]
      },
      {
        name: "Emerald Pack 15% Off",
        pprice: 335,
        rprice: 595,
        cards: [
            {
              hologram: "Hologram",
              name: "Rillaboom",
              rarity: "V",
              image: "https://images.pokemoncard.io/images/swsh8/swsh8-22_hiresopt.jpg"
            },
            {
              hologram: "Hologram",
              name: "Zapdos",
              rarity: "V",
              image: "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH6/SWSH6_EN_80.png"
            },
            {
              hologram: "Trainer",
              name: "Luxray",
              rarity: "Ex",
              image: "https://i.pinimg.com/736x/5d/46/bb/5d46bbf830e24dcccc31b8eea94ad44d.jpg"
            },
            {
              hologram: "Hologram",
              name: "Tapu Koko",
              rarity: "V",
              image: "https://m.media-amazon.com/images/I/51bwiZLJdYL._AC_UF1000,1000_QL80_.jpg"
            }
          ]
      }
    ];
    const container = document.getElementById("premium-container");

    packs.forEach((pack) => {
      const packDiv = document.createElement("div");
      packDiv.className = "premium-pack";
  
      const title = document.createElement("h2");
      title.className = "premium-pack-title";
      title.innerHTML = `${pack.name} <span class="premium-pack-price"> ₹${pack.pprice} / ${pack.rprice} Robux</span>`;
  
      const cardList = document.createElement("div");
      cardList.className = "premium-card-list";
  
      pack.cards.forEach((cardData) => {
        const card = document.createElement("div");
        card.className = "premium-card";
  
        card.innerHTML = `
          <div class="card-hologram">${cardData.hologram}</div>
          <img src="${cardData.image}" alt="${cardData.name}" class="card-image">
          <div class="card-name">${cardData.name}</div>
          <div class="card-rarity">${cardData.rarity}</div>
        `;
  
        cardList.appendChild(card);
      });
  
      const buyBtn = document.createElement("button");
      buyBtn.className = "premium-buy-btn";
      buyBtn.textContent = "Buy Now";
      buyBtn.setAttribute("data-name", pack.name);
      buyBtn.setAttribute("data-price", pack.pprice);
      buyBtn.setAttribute("data-robux", pack.rprice);
  
      packDiv.appendChild(title);
      packDiv.appendChild(cardList);
      packDiv.appendChild(buyBtn);
      container.appendChild(packDiv);
    });
  });
  
  document.addEventListener("click", function(e) {
    if (e.target.classList.contains("premium-buy-btn")) {
      const name = e.target.getAttribute("data-name");
      const price = e.target.getAttribute("data-price");
      const robux = e.target.getAttribute("data-robux");
  
      document.getElementById("proname").value = "Product Name: " + name;
      document.getElementById("proamount").value = "Product Amount: ₹" + price + " | " + robux + " robux";
  
      document.querySelector("form").scrollIntoView({ behavior: "smooth" });
    }
  });