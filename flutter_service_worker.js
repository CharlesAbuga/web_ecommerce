'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f2776bb7204e9a0562dd988f37ad84b5",
"index.html": "1bee38fc4ad18a9cdcfd7e07140a9147",
"/": "1bee38fc4ad18a9cdcfd7e07140a9147",
"main.dart.js": "d93c4c9d287c79890c74b69a8dbb4ee3",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"README.md": "03ea4ce43afabd400765ffcf279d5025",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dd8ed880b6cfb669e618291d3019f25c",
".git/ORIG_HEAD": "b448d9095dd791da4c13e986fa769841",
".git/config": "63ea4ff4c65b1fb71a293fa823804903",
".git/objects/61/a3b84d5bb217a6c74e3ed206a92f4120c36b9b": "ed4387c5e1986e4b5cb5becfefc68572",
".git/objects/61/04d6a449185fab94509a5b9d36dfc9344a741b": "00986c893bf960b5342df3d6761a83de",
".git/objects/59/477ac44dd1edcb03bf7b23a5e2757d6eed2633": "11cecdd29b1948026e58668153014138",
".git/objects/92/a47c1d60b74832d96e48b7ffda6b945fc7ec6f": "e494475de3807167f9bf4c39086898f1",
".git/objects/0c/d84789e752094152547613e2dc48838f0bb7da": "f31989b9b5040c6b8544aa84f5be63d8",
".git/objects/0c/b8eb9b3c17566459cecfe4983136126afbf05a": "dec2271557b29146434b0423380e2511",
".git/objects/66/86a8bf5a1d190be2c7c7fb70f6cd2c1c291335": "b549985fcc9ac69645b35db3f9f2c4b8",
".git/objects/3e/f94c87d777b2f542f7788486b4496fc4596e9a": "39317368a2e1eac076a4e76fe4839b2e",
".git/objects/3e/8ab03b3f8353858c590e252075460d39aa314e": "0c01e2d9c8bef7cc673aaf220342e510",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/50/eeb52e24d0ccd71940a6ec9825dd75505ec355": "59fd5462f4f98b8d94c8abd7c7dddb8d",
".git/objects/68/6ebc8509e27005e31fb591656f8cbc6862eb35": "0a74b4468ae3d84221b4dbcf622b4fbc",
".git/objects/68/a18089c38a7667ee37caf4670a6e7c4d2e8c65": "1ba3ebe2c7c5ede3493c24b0104ceb66",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/cc5b7b356e8a5a62b3d5940735078783ce4a35": "ecc4f6e3f5a12430d8394d88a85f15ec",
".git/objects/04/92b96dadb2737447d82ef160bd0decaddcecae": "ebc735bb700ec133042b98c26af3b786",
".git/objects/35/b4e07128c3633701711274221611800d88355a": "36be95c2fb1859fd24904f62d68062dd",
".git/objects/69/6a2b84af02f5a7b158496c7e506f4fdd4207bf": "080088a34fe330dc1d96f06406c239be",
".git/objects/56/9bdd3d2636110c39a5f2bdae134b7017d6ef8c": "587d8b97a7c51b82f240336b8ee74112",
".git/objects/51/6036b9880ac9be7ded623fc86f8cd0e6d34a48": "da674c2ed61b751b47167d63f76df34a",
".git/objects/3d/efc18353da4cf9be2f0c009ce239a494286d80": "a4d6b6b574231948cc1aae3619f63777",
".git/objects/58/3f159009ee6ea88c3e2ba6eadb650409d35fc1": "280bbd62d0a490572e000650e95d6b6a",
".git/objects/93/ee82b97910184ce99b707f9164e9dfe0eb6555": "6751d8a1d9a37f554fb4eda614a46bbb",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/761fed92745e86eb5be581838785beb604c23b": "d0eceacd767ba12ca6c837c9c5c6f3fa",
".git/objects/0e/f8ebe0b161dfdd299efdcc7f779b16a2f7dd4e": "3066ccc4e634d68c8c19bf9b99580f4e",
".git/objects/0e/3f7727e440726ba3343f00b73bb838d80840a4": "761d32cf7877ce8025fb34b2f333b751",
".git/objects/60/379d6b2c058d3e3d99f081f19dc3b5f8a0e20a": "00411311ad48e0b372238eba7e0b2f35",
".git/objects/34/bfa764d2d67ccc306d581b9f810590137d43ba": "6a568bd39a24c8cd1b21fb20363d1959",
".git/objects/34/f929d67c39eff9788b3a0724e1b0267a143d5c": "e8da5da91f8bad3193c2083b959aa3ec",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/9d/893b05a48f4d67ae9d19bf5e965cdc64f7cd71": "28a8638a6986a2723368075ca311671b",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/d9/186a5088a2338198ce076a0353ab7d9b57d522": "2e5b34388512b442c9058f1300731009",
".git/objects/d9/d2ac1a5b5b3b491397a2a2f7b287b5794468f5": "f2846dd0599c148cb225771e897aff98",
".git/objects/ac/60ad5ef989b9d15c51f8e533ad4a96108e1308": "2e64e6e36edcb9b69dc76282e4ffbb5b",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/265bd2f752a3d88f497b91e678a13d74f138a7": "59a3f862b5073c2c9b8a479cd1a526c8",
".git/objects/d7/cb862bf34c2850e39f4cf52997522bfb2f607f": "3e88c573cf3775020197c932394315ef",
".git/objects/d7/69af74c8d20fed86a90ae95621449d45000f52": "cb3e58bb9f64f4e72f79ba9f9b6f9f04",
".git/objects/be/7da9319ab0d17363087e886d7ccfeb62a0973e": "6d389588317f07c599793522f244343c",
".git/objects/be/c72eba123b7ec47d9b8b601a58eaed35ad35fb": "0387ab04dfcd9de7c983d103d93e409f",
".git/objects/be/c6a445b91dbe63d04b5923379fa715d00e3294": "8d59462c772b1ff061714764e808cab4",
".git/objects/b3/15fa36c01788357f01cf27357792c49627d8ca": "51819379b062bd40df6eb026545c5981",
".git/objects/b3/63db8f92e69da0bfd1515374f3f76604de9696": "03816c71e1b2009819ba26c2f635077f",
".git/objects/b3/a307b2e29dc8b4fa542c554ac1ed080cf4c11f": "fd6a27182b31e1c67cc358e8f753cf20",
".git/objects/b4/ff743fd424ecc4fafbcc0b8d6016e090140da5": "4ad436aaf75eccec1b019e0be40068d1",
".git/objects/b4/da31fa2ea114ea1001fd2f5fa193260394d636": "ca5494b7c207e1f0facb7ae61af1d2f7",
".git/objects/a5/3d7ff9ddf94a2f0786ef0e80d837e062bb8fde": "d72d746f69c9e7f9fae68ef97edd92b1",
".git/objects/bd/e03f625f6ffe05a77f46e3107bcc356d9ed314": "1094cc87e546fe38355075c25403ef27",
".git/objects/d1/053c3e8a6281e332de334f9adeb49ce2dd9070": "2b6549700adf6c3218567ee63780d2ec",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d1be1195aeef8d64374e961f29ac26b7da2c75": "6f58888399885605c63cae31e579b85a",
".git/objects/ae/f6b80f68f160ca48863d478f34dbfbbf2a73c7": "bebaf0a555be7684fd8d74c38052eb21",
".git/objects/d8/41f559999cbbfdbef4a5f17eb0d8e83a8d9d24": "e4a68351ffbfc492e4bc089195b22331",
".git/objects/e5/4fc58f611cc7ca08e8bfa1806babac2faa6889": "3ec8ab1ad980fa0e4881458a782d8e23",
".git/objects/e2/7e5c66f06231629f1664dba141387f67674e5b": "fbc86c77aad3ab5abcd6c2d65b917d8a",
".git/objects/f4/cfd9a8da13c7022fdbc6afc715dace02a6cc16": "908463ed11cd82d58639d5768fd407ec",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/955b5a8a3278a02611d6cf8484fb4e908e71df": "41ac3f31c39d79e2ad6cf447112ae106",
".git/objects/c9/71e3e315fe1b5421a105fefe31c04907567a84": "e1aeaaac9a7aef6f4631a9e17f8e7b66",
".git/objects/fc/4843e1f30417822660f17dd2661e00b4632b3d": "5637341978008a4ae7801efb30549a01",
".git/objects/fd/af205def6261cc078881e34ad09727f3224f2d": "f3d92ecc3b4a93f437e987721e999464",
".git/objects/f2/32f5970bce30eb30c496c3305df4a7b5238c9a": "edb4d6be930b60bea5dbbc5ea4eaf758",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/ac46db3dfd4ff3ce22bd8d13c9552b5699eda5": "048f4e1b26095f4b87e7a9c4f8cea3fb",
".git/objects/f5/727d213537baac1f6a21982160ef8f35951a66": "fb0dc00f1aa840deca39fca552db97c0",
".git/objects/f5/d4f261a38c1650d17e6ba49a6e0757e3c3bd61": "a6849748c768f9b7642b8f68c3055385",
".git/objects/f5/b693c7aa9bf045fe6e1afb1f5df00ec86c874b": "d7f29d24d0840ad10b4dd0db96fc7904",
".git/objects/cf/6c808458da499ffae58dcb5e913fb177328f42": "12918b83ebbb5678717496ea65541839",
".git/objects/c8/89b124c47ebf2cd5fe4aaf6259db6f99b45779": "7050fb325358dea4b4a341a3c7e8a4c3",
".git/objects/c1/f53c9fc2c054b0294fb22e9ef9968f19bb5b33": "84db4449b6925fb6cac5d7d4329da2a2",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c6/1239d47599ec5b9a65593b8ad0fc511fc30816": "c56f6b5b064a3fb7e4f37083c7920c03",
".git/objects/ec/d25c725dfd394391080ebdb7ba0b77026c3bfb": "a3dcef7248f0a9ee36c08459d922a596",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/7c/8f43c2934f385bb77a4b19810759dc41fc360b": "e4c4a56f90479080a42bc776095e0fe3",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/21a824774ef77216322684dfd014c1492c0769": "8055b43194bfe9267d2d8501b0b5e03a",
".git/objects/42/534213ed2e83cafc18f4ffc69daa718ecdbae5": "9542fecb78d64d1dd2e653d5a17d3575",
".git/objects/1f/fe9ed30572ec4fca8c8a70937fda0040e267d0": "47927a3647215dd38dd6f326319a145e",
".git/objects/1f/b2235deb197cb9791e6fca56dc2fd5410a6587": "dad28d82c9b636113f52cd2d19d3c715",
".git/objects/1f/81321e443628acd5e69f9b8c8afb386440f419": "2789f21b300ae5a16dd8cb938bab6ad2",
".git/objects/1f/317ae9426dd14027734e8cf42ebbb43ed7b6ae": "f7760667fe0c9a206b270e5c6cf4b9dc",
".git/objects/73/71b6bd2a501ff709f79d2ebc4ae8c559031d33": "01d5082134461124143415cf5fae3471",
".git/objects/80/e785b0fde7232b8001507c306b24d945f5e6ee": "f6a8ea6a9c27023f1d7c26804ade1265",
".git/objects/74/d187305b2fb4e8fc579b09b6e62c85b7d32953": "1580de929a84e84c8bd289b6f44d923e",
".git/objects/28/6c3cb6b8cf87198546896ffe5ace6a42778ec0": "c6636d4aef48f417b161d4a61de8ab3f",
".git/objects/7b/d1f931912746e1e497e7174ba6fc75cb4895b4": "8c217900a86f05a4a8696f6d61b20cb7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/84b9a59b1437dca6ecf7fc21f4d218d5dc3a2b": "89af254d6414b9ab106d38a430504015",
".git/objects/19/8e185f808815259114212550529f1aed3b4c35": "04697a057b25d9ff97a1c2335cf4adad",
".git/objects/21/532f26d9a1903857444367a4298f1576ef7823": "cfa79c04f1bf37a0595398a6cae721a0",
".git/objects/75/2dd08f149452b071d1451dedc018cd4c8dfc9f": "a330b599ba687ac35b4c694cdb45fef1",
".git/objects/81/703f9f8095c8f7879c2ebc5461baa1f285b997": "9a17891a0366d50dfa3911a32ab1b933",
".git/objects/81/33de38348215a5a8ed64e5f2b625e9ddbd848f": "e304c35263ac037b4101dd0daf22cdc0",
".git/objects/86/e0c816ebced1f0214e54c3be807e98c0e96bc1": "19c89054f72768f4b7110cf1992ea956",
".git/objects/86/94e8a209cd9c3b02ce328eada99414aaf44884": "a6745f5819515113edb242e53e46280e",
".git/objects/72/3eda48d5bc9411c38c418506240885ebcf0615": "3d16fe45fa17729e4e1fe86ec7fc1bd3",
".git/objects/2f/9d666f5b5199f73e6c70049fae1a95e8b04037": "bc8777bf483d13b21dad5649c9d0ee58",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/07/7512663a0e9ba9517a8b518ae71295ba77da2c": "b652c4197b28fe5fa638f4b874b3a6cc",
".git/objects/38/b004a40a461ae4f30926c5ec30e5dfaf4d2f60": "6b8ed86d1b850df66d7aa7d508c946d5",
".git/objects/38/a3ff5ffe3f8285ea6da6a57ee38c841ba22b4f": "7d8a4f6ed90ddc186d506b1e8ac24f91",
".git/objects/38/fcbf633bb0f45b621bbed6ac79983e1f01a405": "fb5388ec1f7b5fb7fc4d98691c1e1236",
".git/objects/00/96dedd1a6034940ad2bb8c6ca97f31b9d51efc": "36d1884b09aeb1cafbaef928d4557c81",
".git/objects/6e/235d9b87d155ac707cd54eb6802883209415f6": "16cb519f8414b70ee0b08fe8f09a3413",
".git/objects/5c/6e84e6e34ba046bdd4ae2d43ca1c18af2ed016": "14f2681a40adf4ff871a795179a2258a",
".git/objects/31/7c64aedc144aded62fcca1393cb209597005b1": "c91c0e4fcf9cbb4bce2fb137daf3c7b5",
".git/objects/31/9110d432c3682cde956620470ab76f3b9f248a": "8286056e3a91993b3b161477ef8635df",
".git/objects/91/f31f6a98abab669ec55917636d820ef299a324": "627cd6b8a1b2723d44f62c6fcff76ad0",
".git/objects/65/c94fd7e3ccbd07e26c5b8d5192dd4cfd46f6e9": "c3627fe13bb429e711c39a69847254c7",
".git/objects/3a/50a68b2f51203cb68ec5df2cf25cc5736b2a3e": "f6e2ef884e9d7fb17b033ed757b672bd",
".git/objects/98/4c50d0addb452a54519edd5024286414b4101f": "ff66946813890a453eda9c7e50d18051",
".git/objects/53/7f68cbfe6a600f0740120ad0220a7faa0a74a7": "e3b54a583e581bd6ca3fd74bd8c8ab8e",
".git/objects/5e/a83788cf9650e6ef6c062537a774b0052f8ef5": "44c9d6277446bb8415d181ae17e7fe8a",
".git/objects/5b/3b8a30000b97f07a6c38f7d365f73bf3967f73": "820983627fbef051d9b1f7c2b1819d60",
".git/objects/37/74b2b06fe3a5615c3e286da6cada07b2c2bedd": "593508734dd31f0d071dd1c2dd91b7c4",
".git/objects/01/3db476a952a6ea149022ea1b5a261136b7e16e": "5d7e4f2542254530da953ac31739eb5a",
".git/objects/06/ff1d39b39e38267c0659609e1499be97a77c0f": "7f03b9a4d90a3c8498a51aec1a4bff86",
".git/objects/99/411d8a496b0719921d52317d255664400fed25": "c9f250aa4e89dad09c60ac50b53f554b",
".git/objects/52/25c779146418e76e5196097ace13fb94196f5b": "5b37133afd2c0948483ac4b2594f7fc9",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/97/ea9ce456addf070dc84a069cdd64ef09543117": "6c5b07ed972e5cd2fa8e3a3bade81245",
".git/objects/0a/6d711b58ccd9068f0553c1befa40267dd772d2": "1d65fbbf30b0b0edb65c264f2cf576f1",
".git/objects/64/57d737bb0cc4f438d76f162895b12e4a07a1f7": "f79c144869b166ab9073f40b4e60317b",
".git/objects/d3/d625b6c23604fdf214c4b9dee1a37a9f272f9f": "7fffc9366cc0532de83d764fc208a800",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/30418561b9d8418bdc60efe3f07705673a6c8c": "0f9d1b35a10083196207c6e19203bdea",
".git/objects/d4/cecc9980cc406b85d5a723ff354cc5cacbccdf": "07fe435fbe7b1b9f475ade0cd8d1cdf4",
".git/objects/a7/8709e7ba6e0cc53623a1be0795150abcdb1e64": "0d7b2de9bbc2ff2a6acca0579af3891e",
".git/objects/b8/5f943d94cae70e91843d9b7e9d2fa6118462b7": "e7cd216f6b312929fd4485fe90cb1686",
".git/objects/b1/20095357413aa07f61eb1d0747823ac8012787": "f65d94562b8d50ea972d3065263da582",
".git/objects/b1/a8b9448de3ce51cdbab0c1f2eae1494d77461d": "8b0cdac331bfdf627fb2f17f359152d7",
".git/objects/dd/fbe74a0442b78ce8d8a01a32e416aa2961f189": "9b1a85ec0e3fb4d908bd931c58d8055d",
".git/objects/b6/a14ce226e56d00236f9cac68f169926b8cb7df": "fde7b28d2b3f994302734472dd463a6e",
".git/objects/a9/aa6b4dc322d7a9a7efb97431241c57dedf0144": "4736d7ba9f4f98e5f0cb7e670579b70f",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d2/8029fb0ee1519e637d5aa1e6974e56f63d70e6": "5510ad57225277d3cfd199a6266f3424",
".git/objects/d2/477a1c0d12f4566218048ee2a09e02b957e04d": "2ece3cb03efa761b079b95638b2c33d7",
".git/objects/aa/2810f2860961cd6305997ac77d04eb1f691b18": "0edc297a614ef79475275a60e4e10c82",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/0c20fe32d37096e4c017b6778f07957bdb34fc": "21d63805e2d5453c041119df78779475",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/6157d093ab9ba8a7894e34f8a3031237a21663": "821fc36a65e6603d2ca2b5085ef05694",
".git/objects/b0/c5737736297523f86b5ece940aba4e7588e188": "5339eddb8fcf1f1bd8ae6bbcfaa0a714",
".git/objects/a6/587e1992abac43fa91499f7fd38dde4fd2e75c": "23dd93a65ea3f00fed867b8da2a935c3",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/a6/3e134553113ee1a4974232616fd9ea8b73999e": "f74923ba2ff772a5f1a3b11b678780e9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/74a76afe483dc3d43edbdc3ea95cc9345ca58e": "9f4f7e669625867b2c18455051f3d844",
".git/objects/c3/b37fc2ad3fb9fa1caa6e54e73d3b6d7b2c7a8c": "e599e54022e9ae04011dbc623a251b0f",
".git/objects/c3/88db4a7ea884d64c22c2daa29afab00825da26": "13d4161e950b10b7f15a7e95a9353b4f",
".git/objects/e1/7827a13c01e1e8f7d9dfe92d6b0ae62dd3cc0d": "c2954bef96768225e3e36875fee2b71a",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e1/e5cc63b1c127642c51f64cc4888542b25d38cc": "b216be7fe059fe059603e4db01d59969",
".git/objects/cc/978b8b90813a08ca8ea40401717ca101c5a1a1": "820dd43179acfb85511f9e4bd44592cc",
".git/objects/e6/2e38e99645bd490238993524ee2dcbe1f63952": "d87c1d1028113d92842fab1cfbb88f28",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f0/4bdfeabd7531429da4c134132a5b2574b9452b": "57e86e0e6acf677a5417459bc634ca31",
".git/objects/f7/140d69194655a1207659de973f9f889905d30d": "fd0225c02cf506999a00d94d4edc465d",
".git/objects/f7/616f22fbf268698c6d6c6bd5149bb414335fa8": "b0dcf4eeed6f2607c65098b17f727ec6",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/bdd918588df32f31adc52762466ed4d5da258b": "9562f8ac203a0e892a05ad4c7fdff430",
".git/objects/fa/7f3b594d824fc36a3d194f4219a941b265b8cc": "7619cb316e1c5c28143e16ddd7becd24",
".git/objects/fa/62bd360151ed8137a3a55cb083bba041b981c5": "f3d844dd5608c02fbdf8a3974d789d4d",
".git/objects/fa/4cff505eb671d6258554f5d71e873f686a6098": "35a07c049c2e378a6b66a63bd0b61194",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c5/2269d50e5832f1074b1a962498d25bfbd72db6": "1032702bd000c4a18516f7051283f13c",
".git/objects/c2/7000e596670edfda1a8db00adeec841bffad30": "724235a37f2f1ab80ea1980128946378",
".git/objects/f6/2eaf1fef4113e63d1bf83ed56d6b587d8a581b": "dc2fa6642d627f9e0143f6140888ee17",
".git/objects/f6/6173f482dfa2fc8ff746de3fcd510e11d6f3f8": "eefbbfb95d4d2de84d6afaa8e3a74d18",
".git/objects/e9/c64214e865402c70727b1c1a771de9d487c57d": "0e3c9050097579bfe654d71fe236a381",
".git/objects/e9/36f98acfcbcda8d90db5a307474fd6dd04b806": "d9f608b7966d57e53d94c0af9655d0a8",
".git/objects/e9/6057167f0158321b71fde0708ec69ca805bb22": "016fed2d5f721644263d4f63dde8e3ff",
".git/objects/e7/205a6173797db2c6ea1f1ed86e4d490885e5c1": "f62d6d52289e1a93ae72ded301d60c33",
".git/objects/cb/af59a63db2b6dc535ca547cec1a4ee9e156848": "1a724cccd9b08c1a0ac0c7de8ee2e7b5",
".git/objects/f8/e13da9585d2cff8fb16b7d5487f34ffe59fbb2": "f26ec9a9bd35204839f90a3d1bc370ec",
".git/objects/ce/1d75d0273e226ad195db822fbd2d0c4c8d7bf5": "158cc932a0b1a77cf5c8728b85890640",
".git/objects/79/3cac51b2f7e3d2d32f16bb5c0d92d6b1862327": "281667723d49dc443e7fa284184044c5",
".git/objects/2d/75be42513670d92af001ef1ffdfd072bf0ee02": "844b774271fbe28c1bf0dbbaeae0ad1a",
".git/objects/41/8f9c0ce017282c893a096f5398a50897d931e2": "57fe1c4f476dfca03996d8346dd86284",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/83/4d726ef5491be541d954b4ff71f5e2a3f03c76": "57456a7108f38ca1eec87b678b23c139",
".git/objects/4a/51d8513336b60fca8e5188036fe51a6511bfa4": "5f07e68e996cb254961eea6010dfce41",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/24/792c812971af375e12fc4e7c2effefd1c368ca": "a1bef1bf5fedfe39b45c390e69dfb2f0",
".git/objects/4f/2319a4908a9b8f162531566a0283ba74404033": "f2008baaee64a4a65fd2e8902b1879c5",
".git/objects/4f/fc5b331d32f23fe2a0821013b01958cf1a182a": "15eabdf1057aeb6d2204b8e23f52bc19",
".git/objects/8d/05badaf4ea466e096e05ea48a5a563ee485aa3": "7e0c3a42ca8afe7cc2b4bc4aaab3d7a4",
".git/objects/15/dc75705f6f34b3e84ae4558c58ae3ff2e46be2": "280f5bd6fb3597c9cdf68287c7d3796e",
".git/objects/12/3cf0a4c0dbeb5f96ef67fd5b6c6b9ad195a9d2": "7f1ee876a38b756a65e4587f839bfc9f",
".git/objects/12/82c0dd8b90ac45a54f3f53907da0db2e6b99ae": "e7f4cb2dcd770787b28495e002381210",
".git/objects/12/28ca083a3433fd6cdf68cfbf3d031e1839c2d8": "d84d5c9e3bdc1ce861affb3b2a4e2385",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/1d/41eaafe761032a393438e6302fc672a4ee0a67": "86de079f3e4c23d48f69a3876126ad1a",
".git/objects/71/df4295bd8f36b8f6a15e07fbab937a511abcdd": "e243b1d46ff61efc8898210f641d21ba",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/01e109a1309085e8860ed3d4a3ae97a7bccf0e": "b779c4c665b70399152f5829d9d280b4",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/1c/8fe48ad3b8e15c262ec02eb9debc5ed091cddf": "8da5d05019a314ea2e64b31ca4c11145",
".git/objects/1c/b03fae5e6bc18af8b0b6d1b54e5608ac5adf04": "8d6272c94743fd01810b478f4e045add",
".git/objects/78/8913f3c13b3111443021ee1582b41206f60f04": "08b6b7beadc121db0653081ab4417542",
".git/objects/78/9037423b7511ebe7f48ed20e21800d5bccea7b": "7c5cda6f55dded055d3ef4b27a62dad3",
".git/objects/7f/752a73355e1259e48ffc090ca63ff7ad25ca58": "b6ed8e0d473e7239e24328c24ab7d501",
".git/objects/7a/71fc99ca5026bf5bd873004acbd309d35ce5d4": "f8b98f75d5666915dd79d318bb1e540b",
".git/objects/7a/f0a1272853f64426e8029ecfe69517fbc169aa": "b8003a15841a3e90bc719b269051a695",
".git/objects/8e/8af87f7533d036e68bb079f40551609b514134": "de263692fc1df5ebcc11e1dd4f356a21",
".git/objects/22/4311e61a42d1a0c96c9c533c3ab8c5df95bfeb": "55f41c76a3837704056e52823245dcd0",
".git/objects/25/b743eb79e37f12165bab7ac720030dde3136b1": "66e20516f15212ab7202ae013d87ad5c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bbcc4b76a8a287fadddee220447f2913",
".git/logs/refs/heads/main": "bbcc4b76a8a287fadddee220447f2913",
".git/logs/refs/remotes/origin/main": "0e9f6dc76f2689bea9e045373d12b500",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "01fac95b85f20110fbfbff1d8f649cf7",
".git/refs/remotes/origin/main": "01fac95b85f20110fbfbff1d8f649cf7",
".git/index": "f2e127cc7cd965decbf2e05556aa430f",
".git/COMMIT_EDITMSG": "6ca3e1b80ec42876ecbdbb43c76dd818",
".git/FETCH_HEAD": "d1e96c3c4db469996e98f6f0ab2fa9b4",
"assets/AssetManifest.json": "415369f7858f8ecb779f0d5bbfa38b9e",
"assets/NOTICES": "c22443ff423ecd3d22143cb11de9b8af",
"assets/FontManifest.json": "2d0d3dee3680b1ec5f4ccdd863f520a8",
"assets/AssetManifest.bin.json": "91dfac28707c14d338ada971e4fba6d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d5021b11f499931b0d3b78043a90ad86",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/jeans2.jpg": "df0fabf064c1da7a41c9117105e9d1da",
"assets/assets/images/shoe-with-high-heel-shoe-heel-svgrepo-com.svg": "bd22ef8592d0d2233c00320139b8c843",
"assets/assets/images/baby-boy-clothes-with-anchor-svgrepo-com.svg": "a014a438c2482399117731d26951510f",
"assets/assets/images/necklace-svgrepo-com.svg": "e05f6a6520e6502f8d10644747c499fe",
"assets/assets/images/jeans.jpeg": "959c729b77f585db14a2b15a7a44a9b0",
"assets/assets/images/pexels-melvin-buezo-2529148.jpg": "ac9fd92dc257c6d2c4dcfef02bf60fa3",
"assets/assets/images/account.png": "5467e5bc66c560f03d579ddf7916b75f",
"assets/assets/images/jean3.jpg": "4ce480db38f4124cea26f2ba74b50351",
"assets/assets/images/ladyshoe1.svg": "5c544878cfb3241e535b2fb59a84d40a",
"assets/assets/images/shirt1.svg": "6db76491f873a3297a4723518231978b",
"assets/assets/images/shoe-1-svgrepo-com.svg": "e2ac03e0534d22222ecfd0624287fa54",
"assets/assets/images/reshot-icon-sneaker-J7B6NWRTXQ.svg": "714f564c297886a694041e32a81ba8b6",
"assets/assets/images/shopping_bag3.svg": "307ce8203f578834cdfd595cb6c69c5c",
"assets/assets/images/baby-shoes-svgrepo-com.svg": "1a4f730f8cd7f40355545d326f14660a",
"assets/assets/images/shopping_bag1.svg": "b8ff7c6ba415ec4466bf6dd87053da4a",
"assets/assets/images/dress-4-svgrepo-com.svg": "4dda8bc65e30d51423ca224b6dc14dd1",
"assets/assets/images/still-life-spring-wardrobe-switch.jpg": "a407e8bb6f645098e350907abbf61c01",
"assets/assets/images/play-time-baby-toy-svgrepo-com.svg": "1b4d404b28da26f38ff7517f1a7f9aae",
"assets/assets/images/reshot-icon-jeans-XLD58F3HEU.svg": "99ac49fb0601b5822cd495a599bc718d",
"assets/assets/images/belt-svgrepo-com.svg": "30e67065dcc6dd2428105efce64b0027",
"assets/assets/images/reusable-shopping-bags-svgrepo-com.svg": "de642aa969ea33bc66845675e5ac9d52",
"assets/assets/fonts/NotoSans-Regular.ttf": "c8e58befd2433eb89589dd1d23225c4e",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
