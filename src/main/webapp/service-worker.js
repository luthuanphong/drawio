if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,a,s)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+r.slice(1)};return Promise.all(a.map((r=>{switch(r){case"exports":return i;case"module":return c;default:return e(r)}}))).then((e=>{const r=s(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-99ba3a23"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/extensions.min.js",revision:"3aca39653b85adf6b89ee4576e212b88"},{url:"js/orgchart.min.js",revision:"619d8c4dab47b81868916df31f55478b"},{url:"js/stencils.min.js",revision:"8646b74470b7ca20c96bd6a31823886f"},{url:"js/shapes-14-6-5.min.js",revision:"7ecb62c7c11f3ac8cabd8d5dfb612d17"},{url:"js/math-print.js",revision:"cf64f6a493a8cb5079f2b70813e478d7"},{url:"index.html",revision:"b1216d112fc58d95498162c738503924"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/fonts/ArchitectsDaughter-Regular.ttf",revision:"31c2153c0530e32553b31a49b3d70736"},{url:"styles/grapheditor.css",revision:"8a424e2b7d6054e0fe5657ebf7338948"},{url:"styles/atlas.css",revision:"d627cfef208f13a9cff1670f143c6348"},{url:"styles/dark.css",revision:"fd2878ff29a6b68cb8dbfab17e32d649"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"3c29b51d47f593b9079b286dc0415b7f"},{url:"connect/jira/editor-1-3-3.html",revision:"a583c5c1dac9945f6f4087c880e26854"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"801fc4ef821f5a3986902998da85b53a"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"b20590b5ba995880eb6778e092a3fd50"},{url:"connect/jira/viewerPanel.js",revision:"b70ea4d572fe9d07867d955c408f5c27"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"a109a49b6c8f23095fbc1a2a88912d3b"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"94804f65483a6e7eb51dee97d0ae9d88"},{url:"connect/jira/fullscreen-viewer.js",revision:"8eceb2fe587296dd11f9c8f6eae34c20"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"ee6764429bf47a8545aa1cedacee718e"},{url:"plugins/cConf-1-4-8.js",revision:"37a91b273d37d153949396832a6ef1c1"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"17120161d4c7d9e0fc3d9a88d77e0c05"},{url:"connect/new_common/cac.js",revision:"cf63bf9103bafb9f34cf3ff624b918e8"},{url:"connect/gdrive_common/gac.js",revision:"78f85e79f15f56b8b8d83c90f4a15679"},{url:"connect/onedrive_common/ac.js",revision:"d10d4603e86da7c9af277dac832e8e06"},{url:"connect/confluence/viewer-init.js",revision:"84b1f6758f3c1a723b019c58af377027"},{url:"connect/confluence/viewer.js",revision:"7683c80e847cf40da45d18573689c8c8"},{url:"connect/confluence/viewer-1-4-42.html",revision:"4a9a11f6de154cbd7a2df9e45790daf1"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"b2908e71f755a069fe6487e1e705736c"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"90d1612e10c3ed94f3b355fbaf262a95"},{url:"connect/confluence/includeDiagram.html",revision:"4df629a5bfba840368ab8185ce27f439"},{url:"connect/confluence/macro-editor.js",revision:"51e513c65251b215aa78420c84623a18"},{url:"math/es5/startup.js",revision:"dc7130cdc866593293dbb5dde11ceb40"},{url:"math/es5/core.js",revision:"f71bc0bfb7d2ac8261747f97a5d47dd4"},{url:"math/es5/ui/safe.js",revision:"8c1fcfee7c879588ad409edcdd9cce53"},{url:"math/es5/output/svg.js",revision:"4f55967d16197ebb01b86356d8ab179a"},{url:"math/es5/input/tex.js",revision:"5c4f470da2ccb1acf85041fcecd6fff6"},{url:"math/es5/input/asciimath.js",revision:"c2d4076dd8e26d509bfe3a378e71cfa7"},{url:"math/es5/output/svg/fonts/tex.js",revision:"6eab785a3788ea805bd2b552d1f0aab8"},{url:"resources/dia.txt",revision:"efdd56d093c74e8a638149098fbcd07a"},{url:"resources/dia_am.txt",revision:"883b5ebf86fed86514142c2ab6acb124"},{url:"resources/dia_ar.txt",revision:"bfdae5fe0ae72dfff7ed3fc39789634a"},{url:"resources/dia_bg.txt",revision:"05034749f1078abd0d0aa6674bd8f611"},{url:"resources/dia_bn.txt",revision:"4a63845daeb17e78c5447a6fbc3e8305"},{url:"resources/dia_bs.txt",revision:"9760503946dfa200b3b4db1159554f08"},{url:"resources/dia_ca.txt",revision:"d7ed188f50bf72539f46769acbbdbb9a"},{url:"resources/dia_cs.txt",revision:"cf21b6fd0797e025d345faff5ce00613"},{url:"resources/dia_da.txt",revision:"fd190642d9a9752624962793a934081d"},{url:"resources/dia_de.txt",revision:"54b9ed5747d7c87c4a086457e58da124"},{url:"resources/dia_el.txt",revision:"76918bc4394340cb33ef29bbedf41091"},{url:"resources/dia_eo.txt",revision:"575bd306f93150f78e07a63f36016ea8"},{url:"resources/dia_es.txt",revision:"2b7030aaf335fa6ffe969a2b4839f1da"},{url:"resources/dia_et.txt",revision:"4de52a7878163647b89990accb25c915"},{url:"resources/dia_eu.txt",revision:"4a174f142d4e017cbf18a13e36fd8c5a"},{url:"resources/dia_fa.txt",revision:"8235ff9f15e7e043a0fe2c3d8ceba7cf"},{url:"resources/dia_fi.txt",revision:"aa684b0af632115148380d3fd64ff976"},{url:"resources/dia_fil.txt",revision:"fb396bcc8e861ed2b3f5165a44e3a6f5"},{url:"resources/dia_fr.txt",revision:"6cede1354454ef0ef7bf74cc435bead1"},{url:"resources/dia_gl.txt",revision:"4cda41c19f177543bff407dd041e9a24"},{url:"resources/dia_gu.txt",revision:"8701d4634bfe6b972874c699b9107b7f"},{url:"resources/dia_he.txt",revision:"add9c2f9b9fc445232858c6293ed4d7c"},{url:"resources/dia_hi.txt",revision:"e7ed96a34a4fcbda0ca7c1372bac876a"},{url:"resources/dia_hr.txt",revision:"995869935fa7c72320b5c26986089068"},{url:"resources/dia_hu.txt",revision:"f633339186caeca795cf226f85812926"},{url:"resources/dia_id.txt",revision:"63880c8f5cf07705fbe9981285570936"},{url:"resources/dia_it.txt",revision:"dddc55064edbac2d674b66ee27e07775"},{url:"resources/dia_ja.txt",revision:"4ec251e87c0a34157f1b9de44258983e"},{url:"resources/dia_kn.txt",revision:"61f2d9d5e0c3c68b17bdcfe3b35915da"},{url:"resources/dia_ko.txt",revision:"5cab9179d56e11abddf45b55812e912e"},{url:"resources/dia_lt.txt",revision:"ed5bd3af30e74b73d0ba1711304f063d"},{url:"resources/dia_lv.txt",revision:"6fed595ecf0b079bab57227707b3e3ba"},{url:"resources/dia_ml.txt",revision:"e501b4ed0b9607694ee65bf32a0f77e5"},{url:"resources/dia_mr.txt",revision:"dd9b87b9741231828fc079309b312e29"},{url:"resources/dia_ms.txt",revision:"578445db6cc2fd69b7da7f7bb3228229"},{url:"resources/dia_my.txt",revision:"efdd56d093c74e8a638149098fbcd07a"},{url:"resources/dia_nl.txt",revision:"c103e769c159571ce589c93befb31d84"},{url:"resources/dia_no.txt",revision:"54c81b3c5e38a89ac024eb3d7f738a68"},{url:"resources/dia_pl.txt",revision:"5673b9c4a4e422b9930a40fa0470786a"},{url:"resources/dia_pt-br.txt",revision:"09aecfb65c28b7cf937dcfdda96b4b6b"},{url:"resources/dia_pt.txt",revision:"f5574e10705404c51738cbece9b044ef"},{url:"resources/dia_ro.txt",revision:"8e0260c5cf86115376b7a136a50cfab9"},{url:"resources/dia_ru.txt",revision:"873bfa0bf436f80df3d2a19227cdb119"},{url:"resources/dia_si.txt",revision:"efdd56d093c74e8a638149098fbcd07a"},{url:"resources/dia_sk.txt",revision:"baada182b0d9d746556d37f48ae79326"},{url:"resources/dia_sl.txt",revision:"a03bf10d16501b4852990f3e6b84d80a"},{url:"resources/dia_sr.txt",revision:"9e3dbae67bcb3afe6271038faddb5988"},{url:"resources/dia_sv.txt",revision:"264d05e384e88ffed2d9fb4d0e38b43b"},{url:"resources/dia_sw.txt",revision:"d2a26540711a846c564aebaf8f2f6481"},{url:"resources/dia_ta.txt",revision:"0076e4d387ae2494788ae2c52a0318a0"},{url:"resources/dia_te.txt",revision:"21e83d8e3c10cc98887fe1e7f923e117"},{url:"resources/dia_th.txt",revision:"41d7e781a28decf48222931860235f80"},{url:"resources/dia_tr.txt",revision:"bec1f9b4a1580cae36b18e4e72d9fb8b"},{url:"resources/dia_uk.txt",revision:"ba5309d3b53599b0b94340ad832ac91f"},{url:"resources/dia_vi.txt",revision:"e321e4b873b6ed10943be04588eca091"},{url:"resources/dia_zh-tw.txt",revision:"13ad50b03c91bc3101c7ec8649fa63ae"},{url:"resources/dia_zh.txt",revision:"d1dc3bae362a25fded18ca5b46f40a25"},{url:"favicon.ico",revision:"fab2d88b37c72d83607527573de45281"},{url:"images/manifest.json",revision:"389fa448cb99794bece27ffcb216abee"},{url:"images/logo.png",revision:"89630b64b911ebe0daa3dfe442087cfa"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"73da7989a23ce9a4be565ec65658a239"},{url:"images/favicon-16x16.png",revision:"1a79d5461a5d2bf21f6652e0ac20d6e5"},{url:"images/favicon-32x32.png",revision:"e3b92da2febe70bad5372f6f3474b034"},{url:"images/android-chrome-196x196.png",revision:"f8c045b2d7b1c719fda64edab04c415c"},{url:"images/android-chrome-512x512.png",revision:"959b5fac2453963ff6d60fb85e4b73fd"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"618b42f0bde0c7685e04811c25dc2b3e"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map
