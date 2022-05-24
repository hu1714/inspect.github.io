'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6fcea35dd769d79cd16bfed37ce217b8",
"index.html": "19acc97b64776b73d07f9a88171df333",
"/": "19acc97b64776b73d07f9a88171df333",
"main.dart.js": "cf89bc1d414653353e52b3bbdd82ccd1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "97eb8cab4665e83e3c54dc4f9f252044",
"assets/AssetManifest.json": "817d6cced554d281c97aea107b53f27f",
"assets/NOTICES": "47dd9e8e04f1ea796d1056886d369cfc",
"assets/FontManifest.json": "839c292ae6826c5d6efe39a6a48155cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/amap_flutter_map/res/ROSE.png": "1c32db436412e4e463f3ecfc8c1245ba",
"assets/packages/amap_flutter_map/res/marker_default.png": "34ffade2bcf349528719f6ee5aad4724",
"assets/packages/amap_flutter_map/res/YELLOW.png": "7245d4b0fe80afca8ef5026d1138b193",
"assets/packages/amap_flutter_map/res/BLUE.png": "e4e1c0d01086c98f041252afa61144b5",
"assets/packages/amap_flutter_map/res/ORANGE.png": "953ef3de716248388d9980d1ce1d90e7",
"assets/packages/amap_flutter_map/res/VIOLET.png": "97396431f761557e7a562dd73867d455",
"assets/packages/amap_flutter_map/res/GREEN.png": "b9c5159081f9435eb9aa53b21e6216ff",
"assets/packages/amap_flutter_map/res/CYAN.png": "b5953dd3d2b1ef0c655c98b0629ea20d",
"assets/packages/amap_flutter_map/res/AZURE.png": "4ab4e349eeab00e6377d39210838cd6d",
"assets/packages/amap_flutter_map/res/MAGENTA.png": "5bdfd50e0870fc5ffed74619f75d08ce",
"assets/packages/amap_flutter_map/res/RED.png": "d8b223653f2518241a44349fd7fc4a7e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/add.png": "318d75edc1da88aafd45de8fb6f7b890",
"assets/assets/images/user_set_icon.png": "dcef7e6db49f7f0cdf102bc2d71f8454",
"assets/assets/images/null_promote_icon.png": "34f5a2fc32b242133fb0b51611ceb322",
"assets/assets/images/merchants1_icon.png": "f2478a4b852e7a1da6e53d2d78be73d3",
"assets/assets/images/plan_radiobtn_select.png": "8ed00a3f2f7bcf3ee5d152a3c81f0226",
"assets/assets/images/closs_eye_icon.png": "d6cf22f2cb96be32f17eb146cf518b44",
"assets/assets/images/user_bg_icon.png": "569d9ecfe1c0113a0ce9e657365e4143",
"assets/assets/images/user_head_icon.png": "75d1db48a402790b7ac7a4cc904cec9e",
"assets/assets/images/mer_phone2_icon.png": "5dfb0a08aa889700346cc8875cffd96e",
"assets/assets/images/downarrow_icon.png": "531403937b72afd76cc359df1404f7a4",
"assets/assets/images/rebate_icon.png": "248abbb9f391a6334f4f068ed909c25e",
"assets/assets/images/idcart1_icon.png": "67a0e40d450556ee48f77cb95beaffc9",
"assets/assets/images/mer_goods_icon.png": "14aa68293479e5525deae268d5d11278",
"assets/assets/images/tabbar_server_unselect_icon.png": "849c5c9b8eeb07db619ea34cd832759f",
"assets/assets/images/sub.png": "9652efe7d41abf7a09b32352d02d2f2b",
"assets/assets/images/addbank_icon.png": "1cf016ccac4a8826400006382a7148ce",
"assets/assets/images/cart.png": "1b5f4c12bbc975a771530a05351fc1cc",
"assets/assets/images/address_eidt_icon.png": "2ff53b096cb9c2a6591718cde425b175",
"assets/assets/images/sort2_icon.png": "0e1b80263e1143a1134fed5f1ff5f3ea",
"assets/assets/images/mer_buy_icon.png": "c97d8d36cac9255ea82b314b7344f705",
"assets/assets/images/agree_unselect_icon.png": "30b5aa8a9bdf06b929363781fe378463",
"assets/assets/images/user_server_icon.png": "d08fac53b027217bb6a3c4fd4181ca2d",
"assets/assets/images/tabbar_server_select_icon.png": "186a7715705b014fa521f8a7b6509db7",
"assets/assets/images/promote_icon.png": "61a6ea4ce03e2d07c7571f573ef64307",
"assets/assets/images/landscape.png": "d21e4e89b46a12629ddc64e0c2c18596",
"assets/assets/images/row_icon.png": "a5bb27098bb1aef667e0b899bda33888",
"assets/assets/images/tabbar_user_select_icon.png": "b160185192fa4a0ebf1245c7784402df",
"assets/assets/images/package_icon.png": "e0ee49ed45e0c37a2f503b0db709c9c5",
"assets/assets/images/null_shopcart_icon.png": "c7e30d63f3684207b1e2238bde63cf49",
"assets/assets/images/guide_bg_icon.png": "265e6043aeeee1584addaa0d52148ad3",
"assets/assets/images/sort_icon.png": "1c7226025298cf7171251877b6ec37fb",
"assets/assets/images/other1.png": "e62a4368187207199f1c94e6b2f65110",
"assets/assets/images/withdrawal_icon.png": "f59a5fcb1daad58e7ca03210a19f2f49",
"assets/assets/images/address_icon.png": "c03be227dd91cc946923333ac86bc61c",
"assets/assets/images/order_no_icon.png": "5048ce17385bf00d5749df4336992c4d",
"assets/assets/images/user_code_icon.png": "d875d6419885affdf24a59145c37f237",
"assets/assets/images/reddel.png": "20e911a71c496d27ab0cab96f2f80360",
"assets/assets/images/seckill.png": "e1a38fb93ec582ce08b3f56c9f05beb1",
"assets/assets/images/share_icon.png": "c80235e086c6a27d2415e42cd7fa3e40",
"assets/assets/images/mer_shop_icon.png": "22072708445a3457e059884e417a7df7",
"assets/assets/images/but_bg_icon.png": "2ad8fdcc1edec7d5734d1a6018a35f31",
"assets/assets/images/other2.png": "106ba381227158f06853ae25e2b53cdf",
"assets/assets/images/mei_info_icon.png": "830f95502b03402554587f86fcff1396",
"assets/assets/images/other3.png": "1006c6b590950d13903523854ea2707f",
"assets/assets/images/alluser.png": "96ff395a0a0ce82318e713af55342095",
"assets/assets/images/user_scan_icon.png": "175a4a2accb705c3fcb7579bed7a4dc7",
"assets/assets/images/alipay_icon.png": "d70292b6d7ca0d716afb52ba05b2fa9b",
"assets/assets/images/user.png": "148c9ede3a75fc0c178c5d71fd307f47",
"assets/assets/images/guide_title1_icon.png": "c7d620251b0fc918089de7dbbe5291e2",
"assets/assets/images/other6.png": "db4ea40b0bbde36db457050c14376dac",
"assets/assets/images/mer_server_icon.png": "9ee5e9446cc3bf1be8f8401910c6390c",
"assets/assets/images/arrow3.png": "beadd0b1addb6ba07c93f12b3a54cbbb",
"assets/assets/images/tabbar_cart_unselect_icon.png": "6d394454d01bfcc1116b68d99ecf03b2",
"assets/assets/images/user_partner_icon.png": "534b8da1751106e245d3eae65697a8b4",
"assets/assets/images/arraw_icon.png": "faad84972ca5259381cbd1ea29443146",
"assets/assets/images/other4.png": "c3a85069a89605b205990cea83bee913",
"assets/assets/images/record_icon.png": "a2ce58f07f788981ff6ec388590026b5",
"assets/assets/images/mer_pub_icon.png": "43c04d49daecc8b8b47977f6ae93927a",
"assets/assets/images/other5.png": "7c66d070a2eae937e3118ced17de3900",
"assets/assets/images/message_icon.png": "73b7c3969801401de7ee11b7951a4849",
"assets/assets/images/del_icon.png": "56f0894b2f4046a6df84e5ff2216b3be",
"assets/assets/images/mer_phone_icon.png": "29e9f38c5d1ba34adb7c71cc82547ab8",
"assets/assets/images/guide_cont1_icon.png": "50acc9c73f17f2fba6b66d3272a4e849",
"assets/assets/images/agree_select_icon.png": "224513f87d3e59d932da31aa77262629",
"assets/assets/images/top.png": "66705bab04efdc6747711c01283c6208",
"assets/assets/images/logo1.png": "701e2bf4fa1a714461452c82de243a68",
"assets/assets/images/wx_icon.png": "6320fc3d30e8d86ca93b24d5f7f810a7",
"assets/assets/images/tabbar_home_unselect_icon.png": "10ca6bfc441221e90c61fd988598daa0",
"assets/assets/images/tabbar_user_unselect_icon.png": "a88d945f35ec520fddbdfe9d6e408e79",
"assets/assets/images/guide_bg1_icon.png": "e87fe92ad5a34c6fcf76e37b8d89ad08",
"assets/assets/images/home_search_icon.png": "673676b923ce81c1851dc750ea2cdc74",
"assets/assets/images/sort1_icon.png": "e6727d04ddd00b4ed1b8bb72e774c3ac",
"assets/assets/images/user_promote_icon.png": "c964306091eafa19d89e5a02d8091e3e",
"assets/assets/images/successfull_icon.png": "ba218a72310e31afc63ddcd61dce2dc7",
"assets/assets/images/add2.png": "2ab567371582e70d9e47a6c23c622636",
"assets/assets/images/mer_time_icon.png": "b0abe330a524a1843e52ea2027381cdb",
"assets/assets/images/column_icom.png": "6a0129e0ba060f40634604da83e4592c",
"assets/assets/images/idcart3_icon.png": "e6018f1e7e2098427fd02955b3213852",
"assets/assets/images/idcart2_icon.png": "8f80e7a6db048ffb753d8d094b6a0b3f",
"assets/assets/images/tabbar_cart_select_icon.png": "c06d4ad8c7b427aef98ab0f134979a0d",
"assets/assets/images/merchants2_icon.png": "b5e4161edec87e7b70b5346efadad9b6",
"assets/assets/images/tabbar_class_select_icon.png": "959b995187e659b6b5a6b021ffd475ac",
"assets/assets/images/user_wallet_icon.png": "fc0ff362f4ef2266833d091d139e591d",
"assets/assets/images/noaddress_icon.png": "ebf857b5fa88bcf22eb7506066f5ade0",
"assets/assets/images/collection_icon.png": "b967305e7e8e73b83dc418d6a5c7bada",
"assets/assets/images/global_larrow_icon2.png": "13d981e5badc60a7d239aaa7c26b4ba8",
"assets/assets/images/guide_cont_icon.png": "5a96605dd87de627362792537b458d85",
"assets/assets/images/wxchat_icon.png": "ee7b0ca907893c957d61a704fc6579a1",
"assets/assets/images/shopcart_icon.png": "9cee53cfd3b7634800387167413f1cd6",
"assets/assets/images/mer_location2_icon.png": "58161c74c02abf7a545066dfe09ad03b",
"assets/assets/images/icon.jpeg": "98a9e97616ca006ccbc84d504d7c9736",
"assets/assets/images/guide_title_icon.png": "3664d21d900ef2ad63d67603d70f9192",
"assets/assets/images/home_shopbg_icon.png": "d809970ce92eb67e222377484641bcd6",
"assets/assets/images/tabbar_class_unselect_icon.png": "3e2f26d3bba57ea598874b24f446fd7f",
"assets/assets/images/idcart4_icon.png": "cf19b4c58cc587d1b8344c8274d16180",
"assets/assets/images/idcart5_icon.png": "c681d8756025efa277e3cfde9a34bdd4",
"assets/assets/images/plan_radiobtn_default.png": "869c902bb9f03478eca1d73d260759e0",
"assets/assets/images/share_wx_icon.png": "c0548c0ae559ad08bb7b881e88e9d0f7",
"assets/assets/images/global_larrow_icon.png": "4933a77cd33e825c883648b7180f0483",
"assets/assets/images/user_arrow_icon.png": "62a68dba24c4e3aa3eb356b708732e8c",
"assets/assets/images/coupon.png": "aaf1ebaf9641173db90c6bc61f1cba17",
"assets/assets/images/save_icon.png": "22259867076e231ca71ed5a8867af819",
"assets/assets/images/tabbar_home_select_icon.png": "0480fe6ec63557cd9c8de8f830527a5b",
"assets/assets/images/user_order_icon.png": "eb480db67d5cc892f12cbf945a7dccd2",
"assets/assets/images/close_icon.png": "4c78442f4dde3e32ae44eb45274af853",
"assets/assets/images/optimization_icon.png": "e95e09e5e190b9dfc95f4e739c80a40e",
"assets/assets/images/share_bg_icon.png": "9b1edcadb4b41cddfdefdc450d08f212",
"assets/assets/images/open_eye_icon.png": "e8cbefcad982e97d7b38c046c9c353c7",
"assets/assets/images/shopcart_del_icon.png": "34366b8c9faf61ae62172c698b248851",
"assets/assets/images/user_scan2_icon.png": "2132656ceba9b74fd81aa515456c2d30",
"assets/assets/images/mer_location_icon.png": "4edb126245ac55a17d7c7f80ea8a197a",
"assets/assets/images/user_coupons_icon.png": "7d6c71e0fe1e88d8b4f2973fe943dbf7",
"assets/assets/images/share_title_icon.png": "b8ecd7e0ca1745ff2dc8912d501045a8",
"assets/assets/icons/iconfont.ttf": "9a4d20ac12c41dd22806f0d495932ca6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
