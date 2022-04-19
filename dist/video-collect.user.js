// ==UserScript==
// @name        🔥🔥🔥视频搬运辅助工具🔥🔥🔥
// @description 可以直接下载抖音和知乎的视频，其它视频可以记录当前要搬运的网址到后台服务器中，由后台服务器进行下载
// @namespace   http://payback.bwaq.cn
// @icon        http://payback.bwaq.cn/logo.png
// @author      星星龙♪(･ω･)ﾉ
// @version     1.0.0
// @include     *://*youtube.com/watch*
// @include     *://*facebook.com/*
// @include     *://zhihu.com/*
// @include     *://*zhihu.com/*
// @include     *://v.vzuu.com/video/*
// @include     *://*bilibili.com/*
// @include     *://*kuaishou.com/*
// @include     *://*iesdouyin.com/*
// @include     *://*tiktok.com/*
// @include     *://*acfun.com/*
// @include     *://twitter.com/*
// @include     *://mobile.twitter.com/*
// @connect     *
// @license     MIT License
// @run-at      document-start
// @require     https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js
// @require     https://cdn.bootcdn.net/ajax/libs/toastr.js/2.1.3/toastr.min.js
// @require     https://greasyfork.org/scripts/415581-jquery%E5%BA%93/code/jquery%E5%BA%93.js?version=866373
// @require     https://greasyfork.org/scripts/419065-jquerytouchactionex/code/jQueryTouchActionEx.js?version=894972
// @resource    toastr_css https://cdn.bootcdn.net/ajax/libs/toastr.js/2.1.3/toastr.min.css
// @grant       GM_log
// @grant       GM.info
// @grant       GM_info
// @grant       GM_addStyle
// @grant       GM_download
// @grant       GM.getValue
// @grant       GM_getValue
// @grant       GM.setValue
// @grant       GM_setValue
// @grant       unsafeWindow
// @grant       GM.openInTab
// @grant       GM_openInTab
// @grant       GM.listValues
// @grant       GM_listValues
// @grant       GM.deleteValue
// @grant       GM_deleteValue
// @grant       GM.notification
// @grant       GM.xmlHttpRequest
// @grant       GM_xmlhttpRequest
// @grant       GM.getResourceUrl
// @grant       GM_getResourceURL
// @grant       GM_getResourceText
// @grant       GM_registerMenuCommand
// @grant       GM_unregisterMenuCommand
// ==/UserScript==
(function () {
    'use strict';

    function styleInject(css, ref) {
        if ( ref === void 0 ) ref = {};
        var insertAt = ref.insertAt;

        if (!css || typeof document === 'undefined') { return; }

        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';

        if (insertAt === 'top') {
            if (head.firstChild) {
                head.insertBefore(style, head.firstChild);
            } else {
                head.appendChild(style);
            }
        } else {
            head.appendChild(style);
        }

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }

    var css_248z = "html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased}body .maga-side-collect-url{font-family:Helvetica Neue,Helvetica,Microsoft YaHei,Arial,sans-serif;margin:0;font-size:1.6rem;color:#4e546b}.maga-side-collect-url{position:fixed;top:350px;width:260px;height:260px;-webkit-filter:url(#goo);filter:url(#goo);-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none;opacity:.75;z-index:20180817}.maga-side-collect-url.no-filter{-webkit-filter:none;filter:none}.maga-side-collect-url .maga-side-menu{width:70px;height:70px;background:#f34444;line-height:70px;font-size:20px;z-index:1;cursor:move}.maga-side-collect-url .maga-side-menu,.maga-side-collect-url .menu-item{position:absolute;-webkit-border-radius:50%;border-radius:50%;left:0;top:0;right:0;bottom:0;margin:auto;text-align:center;color:#fff}.maga-side-collect-url .menu-item{width:60px;height:60px;background-color:#ff7676;line-height:60px;text-decoration:none;-webkit-transition:background .5s,-webkit-transform .6s;transition:background .5s,-webkit-transform .6s;-moz-transition:transform .6s,background .5s,-moz-transform .6s;transition:transform .6s,background .5s;transition:transform .6s,background .5s,-webkit-transform .6s,-moz-transform .6s;font-size:14px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.maga-side-collect-url .menu-item:hover{background:#a9c734}.maga-side-collect-url .menu-line{line-height:20px;padding-top:10px}.maga-side-collect-url:hover{opacity:1}.maga-side-collect-url:hover .maga-side-menu{-webkit-animation:jello 1s;-moz-animation:jello 1s;animation:jello 1s}.maga-side-collect-url:hover .menu-first{-webkit-transform:translate3d(0,-135%,0);-moz-transform:translate3d(0,-135%,0);transform:translate3d(0,-135%,0)}.maga-side-collect-url:hover .menu-second{-webkit-transform:translate3d(120%,-70%,0);-moz-transform:translate3d(120%,-70%,0);transform:translate3d(120%,-70%,0)}.maga-side-collect-url:hover .menu-third{-webkit-transform:translate3d(120%,70%,0);-moz-transform:translate3d(120%,70%,0);transform:translate3d(120%,70%,0)}.maga-side-collect-url:hover .menu-fourth{-webkit-transform:translate3d(0,135%,0);-moz-transform:translate3d(0,135%,0);transform:translate3d(0,135%,0)}@-webkit-keyframes jello{0%,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@-moz-keyframes jello{0%,11.1%,to{-moz-transform:none;transform:none}22.2%{-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-moz-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello{0%,11.1%,to{-webkit-transform:none;-moz-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);-moz-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.animated{-webkit-animation-duration:1s;-moz-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-moz-keyframes bounceInUp{0%,60%,75%,90%,to{-moz-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-moz-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);-moz-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,800px,0);-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translateZ(0);-moz-transform:translateZ(0);transform:translateZ(0)}}.bounceInUp{-webkit-animation-name:bounceInUp;-moz-animation-name:bounceInUp;animation-name:bounceInUp;-webkit-animation-delay:1s;-moz-animation-delay:1s;animation-delay:1s}@media screen and (min-width:641px) and (max-width:1367px){.maga-side-collect-url{top:50px}}";
    styleInject(css_248z);

    var Utils = {
        inIframe: function () {
            return self.frameElement && 'IFRAME' == self.frameElement.tagName
                || !(window.frames.length == parent.frames.length && self == top)
        },
    };

    let KEY_BUTTON_TOP = 'maga-tag-collect-url-button-top';
    let KEY_BUTTON_LEFT = 'maga-tag-collect-url-button-left';

    const website$2 = {
        init: function ($j) {
            if (location.href.indexOf('youtube.com') !== -1 ||

                location.href.indexOf('facebook.com') !== -1 ||

                location.href.indexOf('zhihu.com/zvideo') !== -1 ||

                location.href.indexOf('bilibili.com') !== -1 ||

                location.href.indexOf('kuaishou.com') !== -1 ||

                location.href.indexOf('tiktok.com') !== -1 ||

                location.href.indexOf('acfun.cn') !== -1) {

                if (Utils.inIframe()) {
                    return
                }

                if ($j('#maga-collect-url').length > 0) {
                    return
                }
                let menus;
                if (location.href.indexOf('youtube.com') !== -1
                    || location.href.indexOf('facebook.com') !== -1
                    || location.href.indexOf('bilibili.com') !== -1
                    || location.href.indexOf('kuaishou.com') !== -1
                    || location.href.indexOf('iesdouyin.com') !== -1
                    || location.href.indexOf('tiktok.com') !== -1
                    || location.href.indexOf('acfun.com') !== -1
                ) {
                    menus = [
                        {title: '视频下载', show: '视频<br>下载', type: 'download'},
                        {title: '视频添加', show: '视频<br>添加', type: 'add'},
                        {title: '视频删除', show: '视频<br>删除', type: 'delete'},
                    ];
                } else {
                    menus = [
                        {title: '视频添加', show: '视频<br>添加', type: 'add'},
                        {title: '视频删除', show: '视频<br>删除', type: 'delete'},
                    ];
                }

                setTimeout(function () {
                    // 提示模块的CSS
                    GM_addStyle(GM_getResourceText('toastr_css'));

                    initMenu($j, menus, function () {
                        $j('body').on('click', '[data-cat=add]', function () {//视频添加
                            postUrl('addTargetUrl');
                        });
                        $j('body').on('click', '[data-cat=delete]', function () {//视频删除
                            postUrl('removeTargetUrl');
                        });
                        $j('body').on('click', '[data-cat=download]', function () {//视频下载
                            let encodeUrl = encodeURIComponent(window.location.href);

                            if (location.href.indexOf('youtube.com') !== -1) {
                                GM_openInTab('https://yt1s.com/en260?q=' + encodeUrl);
                            } else if (location.href.indexOf('facebook.com') !== -1) {
                                GM_openInTab('https://yt1s.com/facebook-downloader/en2');
                            } else if (location.href.indexOf('bilibili.com') !== -1
                                || location.href.indexOf('kuaishou.com') !== -1
                                || location.href.indexOf('iesdouyin.com') !== -1
                                || location.href.indexOf('tiktok.com') !== -1
                                || location.href.indexOf('acfun.com') !== -1) {
                                let requestUrl = 'https://tenapi.cn/video/?url=' + encodeUrl;
                                toastr.success('正在获取视频地址中，稍后会下载，请勿重复点击！');
                                GM.xmlHttpRequest({
                                    method: 'GET',
                                    url: requestUrl,
                                    onload: function onload(response) {
                                        let data = response.response;
                                        if (typeof data === 'string') {
                                            data = JSON.parse(data);
                                        }
                                        GM_log("==============>" + data);
                                        if (data.code == 200) {
                                            GM_log("==============>下载视频");
                                            GM_download({url: data.url, name: data.title});
                                        } else {
                                            toastr.error('下载视频失败！');
                                            GM_log("==============>下载视频失败：" + data.code);
                                        }
                                    }
                                });
                            }
                        });
                    });
                }, 400);

                GM_registerMenuCommand('更改资源采集人员的名称', function () {
                    let nowCollectorName = GM_getValue('maga-collect-url-collector', 'Jack');
                    let name = prompt('请输入资源采集人员的名称，后台管理系统用以区分采集人员的内容。当前值为：',
                        `${nowCollectorName}`);
                    if (name && name.length > 0) {
                        try {
                            GM_setValue('maga-collect-url-collector', name || 'Jack');
                        } catch (e) {
                            alert('解析输入出错');
                        }
                    }
                });

                GM_registerMenuCommand('复位工具按钮位置', function () {
                    GM_deleteValue(KEY_BUTTON_TOP);
                    GM_deleteValue(KEY_BUTTON_LEFT);

                    let mainMenu = $j('#maga-collect-url')[0];
                    mainMenu.style.top = 350;
                    mainMenu.style.left = 0;
                });
            }

            function initMenu($j, obj, event) {
                let menusClass = ['first', 'second', 'third', 'fourth', 'fifth'];
                let menu = '';
                $j.each(obj, function (i, item) {
                    menu = menu + `
                                <a href="javascript:void(0)" title="${item.title}" 
                                    data-cat="${item.type}" class="menu-item menu-line menu-${menusClass[i]}">
                                    ${item.show}
                                </a>`;
                });

                let sideNavigator = `
                                <div class="maga-side-collect-url bounceInUp animated" id="maga-collect-url">
                                    <label for="" class="maga-side-menu" title="按住拖动">采集</label>${menu}
                                </div>`;
                $j('body').append(sideNavigator);

                let mainMenu = $j('#maga-collect-url')[0];
                if (mainMenu) {
                    mainMenu.style.top = GM_getValue(KEY_BUTTON_TOP, mainMenu.style.top);
                    mainMenu.style.left = GM_getValue(KEY_BUTTON_LEFT, mainMenu.style.left);

                    let drags = {down: false, x: 0, y: 0, clientX: 0, clientY: 0};

                    $j('body').on('mousedown', '#maga-collect-url', function (a) {
                        drags.down = true;
                        drags.clientX = a.clientX;
                        drags.clientY = a.clientY;
                        drags.x = getCss(this, 'left');
                        drags.y = getCss(this, 'top');
                        $j(document).on('mousemove', function (a) {
                            let xMove = a.clientX - drags.clientX;
                            let yMove = a.clientY - drags.clientY;
                            mainMenu.style.top = parseInt(drags.y) + yMove + 'px';
                            mainMenu.style.left = parseInt(drags.x) + xMove + 'px';

                            GM_setValue(KEY_BUTTON_TOP, mainMenu.style.top);
                            GM_setValue(KEY_BUTTON_LEFT, mainMenu.style.left);
                        });
                    }).on('mouseup', '#maga-collect-url', function () {
                        drags.down = false;
                        $j(document).off('mousemove');
                    });
                    event();
                }
            }

            let getCss = function (element, properties) {
                return document.defaultView.getComputedStyle(element, null)[properties]
            };

            function postUrl(path) {
                let encodeUrl = encodeURIComponent(window.location.href);
                let nowCollectorName = GM_getValue('maga-collect-url-collector', 'Jack');
                GM_log(encodeUrl);
                GM_log(nowCollectorName);
                GM.xmlHttpRequest({
                    method: 'POST',
                    data: 'collector=' + nowCollectorName + '&targetUrl=' + encodeUrl,
                    url: 'http://servervideo.bwaq.cn/api/collectUrl/' + path,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    onload: function (response) {
                        let data = response.response;
                        if (typeof data === 'string') {
                            data = JSON.parse(data);
                        }
                        GM_log("==============>" + data);

                        if (data.code === 10) {
                            if ('addTargetUrl' === path) {
                                toastr.success('添加成功！');
                            } else {
                                toastr.success('删除成功！');
                            }
                        } else {
                            toastr.error('请求失败！');
                        }
                    }
                });
            }

        }
    };

    const website$1 = {
        regexp: /zhihu/,
        init: function ($j) {
            getStart$1();
        }
    };

    /**
     * 备注：
     * 此部分代码来自于王超先生的知乎视频下载脚本代码，开源协议为MIT协议，故加入到本插件中，感谢大佬的开源、共享精神！
     *
     * 原作者：王超， 脚本链接：https://greasyfork.org/zh-CN/scripts/39206
     * 版权归原作者所有
     */
    async function getStart$1(image, index) {
        if (window.location.host == 'www.zhihu.com') return

        console.log('知乎视频下载:');

        const playlistBaseUrl = 'https://lens.zhihu.com/api/v4/videos/';
        const videoId = window.location.pathname.split('/').pop(); // 视频id
        const menuStyle = 'transform:none !important; left:auto !important; right:-0.5em !important;';
        const playerId = 'player';
        const svgDownload = '<path d="M9.5,4 H14.5 V10 H17.8 L12,15.8 L6.2,10 H9.5 Z M6.2,18 H17.8 V20 H6.2 Z"></path>';
        const player = document.getElementById(playerId);
        const resolutions = [
            { ename: 'ld', cname: '普清' },
            { ename: 'sd', cname: '标清' },
            { ename: 'hd', cname: '高清' },
            { ename: 'fhd', cname: '超清' }
        ];
        let videos = []; // 存储各分辨率的视频信息

        function fetchRetry(url, options = {}, times = 1, delay = 1000, checkStatus = true) {
            return new Promise((resolve, reject) => {
                // fetch 成功处理函数
                function success(res) {
                    if (checkStatus && !res.ok) {
                        failure(res);
                    } else {
                        resolve(res);
                    }
                }

                // 单次失败处理函数
                function failure(error) {
                    if (--times) {
                        setTimeout(fetchUrl, delay);
                    } else {
                        reject(error);
                    }
                }

                // 总体失败处理函数
                function finalHandler(error) {
                    throw error
                }

                function fetchUrl() {
                    return fetch(url, options)
                        .then(success)
                        .catch(failure)
                        .catch(finalHandler)
                }

                fetchUrl();
            })
        }

        // 下载指定url的资源
        async function downloadUrl(url, name = (new Date()).valueOf() + '.mp4') {
            // Greasemonkey 需要把 url 转为 blobUrl
            if (GM_info.scriptHandler === 'Greasemonkey') {
                const res = await fetchRetry(url);
                const blob = await res.blob();
                url = URL.createObjectURL(blob);
            }

            // Chrome 可以使用 Tampermonkey 的 GM_download 函数绕过 CSP(Content Security Policy) 的限制
            if (window.GM_download) {
                GM_download({ url, name });
            } else {
                // firefox 需要禁用 CSP, about:config -> security.csp.enable => false
                let a = document.createElement('a');
                a.href = url;
                a.download = name;
                a.style.display = 'none';
                // a.target = '_blank';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);

                setTimeout(() => URL.revokeObjectURL(url), 100);
            }
        }

        // 格式化文件大小
        function humanSize(size) {
            let n = Math.log(size) / Math.log(1024) | 0;
            return (size / Math.pow(1024, n)).toFixed(0) + ' ' + (n ? 'KMGTPEZY'[--n] + 'B' : 'Bytes')
        }

        if (!player) return

        // 获取视频信息
        const res = await fetchRetry(playlistBaseUrl + videoId, {
            headers: {
                'referer': 'refererBaseUrl + videoId',
                'authorization': 'oauth c3cef7c66a1843f8b3a9e6a1e3160e20' // in zplayer.min.js of zhihu
            }
        }, 3);
        const videoInfo = await res.json();

        // 获取不同分辨率视频的信息
        for (const [key, video] of Object.entries(videoInfo.playlist)) {
            video.name = key.toLowerCase();
            video.cname = resolutions.find(v => v.ename === video.name)?.cname;
            if (!videos.find(v => v.size === video.size)) {
                videos.push(video);
            }
        }

        // 按格式大小排序
        videos = videos.sort(function (v1, v2) {
            const v1Index = resolutions.findIndex(v => v.ename === v1.name);
            const v2Index = resolutions.findIndex(v => v.ename === v2.name);

            return v1Index === v2Index ? 0 : (v1Index > v2Index ? 1 : -1)
            // return v1.size === v2.size ? 0 : (v1.size > v2.size ? 1 : -1);
        }).reverse();

        document.addEventListener('DOMNodeInserted', (evt) => {
            const domControlBar = evt.relatedNode.querySelector(':scope > div:last-child > div:first-child > div:nth-of-type(2)');
            if (!domControlBar || domControlBar.querySelector('.download')) return

            const domButtonsBar = domControlBar.querySelector(':scope > div:last-child');
            const domFullScreenBtn = domButtonsBar.querySelector(':scope > div:nth-last-of-type(2)');
            const domResolutionBtn = Array.from(domButtonsBar.querySelectorAll(':scope > div')).filter(el => el.innerText.substr(1, 1) === '清')[0];
            let domDownloadBtn, buttons;
            if (!domFullScreenBtn || !domFullScreenBtn.querySelector('button')) return

            // 克隆分辨率菜单或全屏按钮为下载按钮
            domDownloadBtn = (domResolutionBtn && (domResolutionBtn.className === domFullScreenBtn.className))
                ? domResolutionBtn.cloneNode(true)
                : domFullScreenBtn.cloneNode(true);

            domDownloadBtn.querySelector('button').innerText;

            // 生成下载按钮图标
            domDownloadBtn.querySelector('button:first-child').outerHTML = domFullScreenBtn.cloneNode(true).querySelector('button').outerHTML;
            domDownloadBtn.querySelector('svg').innerHTML = svgDownload;
            domDownloadBtn.className = domDownloadBtn.className + ' download';

            buttons = domDownloadBtn.querySelectorAll('button');

            // button 元素添加对应的下载地址属性
            buttons.forEach(dom => {
                const video = videos.find(v => v.cname === dom.innerText) || videos[videos.length - 1];

                dom.dataset.video = video.play_url;
                if (dom.innerText) {
                    (dom.innerText = `${dom.innerText} (${humanSize(video.size)})`);
                } else if (buttons.length == 1) {
                    let domText = dom.nextSibling.querySelector('div');
                    if (domText) {
                        domText.innerText = humanSize(video.size);
                    }
                }
            });

            // 鼠标事件 - 显示菜单
            domDownloadBtn.addEventListener('pointerenter', () => {
                const domMenu = domDownloadBtn.querySelector('div:nth-of-type(1)');
                if (domMenu) {
                    domMenu.style.cssText = menuStyle + 'opacity:1 !important; visibility:visible !important';
                }
            });

            // 鼠标事件 - 隐藏菜单
            domDownloadBtn.addEventListener('pointerleave', () => {
                const domMenu = domDownloadBtn.querySelector('div:nth-of-type(1)');
                if (domMenu) {
                    domMenu.style.cssText = menuStyle;
                }
            });

            // 鼠标事件 - 选择菜单项
            domDownloadBtn.addEventListener('pointerup', event => {
                let e = event.srcElement || event.target;

                while (e.tagName !== 'BUTTON') {
                    e = e.parentNode;
                }

                downloadUrl(e.dataset.video);
            });

            // 显示下载按钮
            domButtonsBar.appendChild(domDownloadBtn);
        });
    }

    const filename = 'twitter_{user-name}(@{user-id})_{date-time}_{status-id}_{file-type}';

    const language = {
        en: {
            download: 'Download',
            completed: 'Download Completed',
            settings: 'Settings',
            dialog: {
                title: 'Download Settings',
                save: 'Save',
                record: 'Remember Download History',
                clear: '(Clear)',
                confirm: 'Clear download history?',
                pattern: 'File Name Pattern'
            }
        },
        ja: {
            download: 'ダウンロード',
            completed: 'ダウンロード完了',
            settings: '設定',
            dialog: {
                title: 'ダウンロード設定',
                save: '保存',
                record: 'ダウンロード履歴を保存する',
                clear: '(クリア)',
                confirm: 'ダウンロード履歴を削除する？',
                pattern: 'ファイル名パターン'
            }
        },
        zh: {
            download: '下载',
            completed: '下载完成',
            settings: '设置',
            dialog: {title: '下载设置', save: '保存', record: '保存下载记录', clear: '(清除)', confirm: '确认要清除下载记录？', pattern: '文件名格式'}
        },
        'zh-Hant': {
            download: '下載',
            completed: '下載完成',
            settings: '設置',
            dialog: {title: '下載設置', save: '保存', record: '保存下載記錄', clear: '(清除)', confirm: '確認要清除下載記錄？', pattern: '文件名規則'}
        },
    };

    const svg = `
<g class="download"><path d="M3,14 v5 q0,2 2,2 h14 q2,0 2,-2 v-5 M7,10 l4,4 q1,1 2,0 l4,-4 M12,3 v11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></g>
<g class="completed"><path d="M3,14 v5 q0,2 2,2 h14 q2,0 2,-2 v-5 M7,10 l3,4 q1,1 2,0 l8,-11" fill="none" stroke="#1DA1F2" stroke-width="2" stroke-linecap="round" /></g>
<g class="loading"><circle cx="12" cy="12" r="10" fill="none" stroke="#1DA1F2" stroke-width="4" opacity="0.4" /><path d="M12,2 a10,10 0 0 1 10,10" fill="none" stroke="#1DA1F2" stroke-width="4" stroke-linecap="round" /></g>
<g class="failed"><circle cx="12" cy="12" r="11" fill="#f33" stroke="currentColor" stroke-width="2" opacity="0.8" /><path d="M14,5 a1,1 0 0 0 -4,0 l0.5,9.5 a1.5,1.5 0 0 0 3,0 z M12,17 a2,2 0 0 0 0,4 a2,2 0 0 0 0,-4" fill="#fff" stroke="none" /></g>
`;

    const css = `
.tmd-down > div > div > div:nth-child(2) {display: none}
.tmd-down:hover > div > div {color: rgba(29, 161, 242, 1.0);}
.tmd-down:hover > div > div > div > div {background-color: rgba(29, 161, 242, 0.1);}
.tmd-down:active > div > div > div > div {background-color: rgba(29, 161, 242, 0.2);}
.tmd-down g {display: none;}
.tmd-down.download g.download, .tmd-down.completed g.completed, .tmd-down.loading g.loading,.tmd-down.failed g.failed {display: unset;}
.tmd-down.loading svg {animation: spin 1s linear infinite;}
@keyframes spin {0% {transform: rotate(0deg);} 100% {transform: rotate(360deg);}}
.tmd-btn {display: inline-block; background-color: #1DA1F2; color: #FFFFFF; padding: 0 20px; border-radius: 99px;}
.tmd-tag {display: inline-block; background-color: #FFFFFF; color: #1DA1F2; padding: 0 10px; border-radius: 10px; border: 1px solid #1DA1F2;  font-weight: bold; margin: 5px;}
.tmd-btn:hover {background-color: rgba(29, 161, 242, 0.9);}
.tmd-tag:hover {background-color: rgba(29, 161, 242, 0.1);}
.tmd-notifier {display: none; position: fixed; left: 16px; bottom: 16px; background: #fff; border: 1px solid #ccc; border-radius: 8px; padding: 4px;}
.tmd-notifier.running {display: flex; align-items: center;}
.tmd-notifier label {display: inline-flex; align-items: center; margin: 0 8px;}
.tmd-notifier label:before {content: " "; width: 32px; height: 16px; background-position: center; background-repeat: no-repeat;}
.tmd-notifier label:nth-child(1):before {background-image:url("data:image/svg+xml;charset=utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22><path d=%22M3,14 v5 q0,2 2,2 h14 q2,0 2,-2 v-5 M7,10 l4,4 q1,1 2,0 l4,-4 M12,3 v11%22 fill=%22none%22 stroke=%22%23666%22 stroke-width=%222%22 stroke-linecap=%22round%22 /></svg>");}
.tmd-notifier label:nth-child(2):before {background-image:url("data:image/svg+xml;charset=utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22><path d=%22M12,2 a1,1 0 0 1 0,20 a1,1 0 0 1 0,-20 M12,5 v7 h6%22 fill=%22none%22 stroke=%22%23999%22 stroke-width=%222%22 stroke-linejoin=%22round%22 stroke-linecap=%22round%22 /></svg>");}
.tmd-notifier label:nth-child(3):before {background-image:url("data:image/svg+xml;charset=utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22><path d=%22M12,0 a2,2 0 0 0 0,24 a2,2 0 0 0 0,-24%22 fill=%22%23f66%22 stroke=%22none%22 /><path d=%22M14.5,5 a1,1 0 0 0 -5,0 l0.5,9 a1,1 0 0 0 4,0 z M12,17 a2,2 0 0 0 0,5 a2,2 0 0 0 0,-5%22 fill=%22%23fff%22 stroke=%22none%22 /></svg>");}
`;

    const TMD = (function () {
        let lang, history;
        return {
            init: function () {
                GM_registerMenuCommand((language[navigator.language] || language.en).settings, this.settings);
                document.head.insertAdjacentHTML('beforeend', '<style>' + css + '</style>');
                lang = language[document.querySelector('html').lang] || language.en;
                history = this.storage('history');
            },
            inject: function (article) {
                let media_selector = [
                    'a[href*="/photo/1"]',
                    'div[role="progressbar"]',
                    'div[data-testid="playButton"]',
                    'a[href="/settings/safety"]'
                ];
                let media = article.querySelector(media_selector.join(','));
                if (media) {
                    let status_id = article.querySelector('a[href*="/status/"]').href.split('/status/').pop().split('/').shift();
                    let btn_group = article.querySelector('div[role="group"]');
                    let btn_share = Array.from(btn_group.querySelectorAll(':scope>div>div')).pop().parentNode;
                    let btn_down = btn_share.cloneNode(true);
                    btn_down.querySelector('svg').innerHTML = svg;
                    let is_exist = history.indexOf(status_id) !== -1;
                    this.status(btn_down, 'tmd-down');
                    this.status(btn_down, is_exist ? 'completed' : 'download', is_exist ? lang.completed : lang.download);
                    btn_group.insertBefore(btn_down, btn_share.nextSibling);
                    btn_down.onclick = () => this.click(btn_down, status_id, is_exist);
                    article.dataset.injected = 'true';
                }
            },
            click: async function (btn, status_id, is_exist) {
                if (btn.classList.contains('loading')) return;
                this.status(btn, 'loading');
                let out = (await GM_getValue('filename', filename)).split('\n').join('');
                let record = await GM_getValue('record', true);
                let json = await this.fetchJson(status_id);
                let tweet = json.globalObjects.tweets[status_id];
                let user = json.globalObjects.users[tweet.user_id_str];
                let invalid_chars = {
                    '\\': '＼',
                    '\/': '／',
                    '\|': '｜',
                    '<': '＜',
                    '>': '＞',
                    ':': '：',
                    '*': '＊',
                    '?': '？',
                    '"': '＂',
                    '🔞': ''
                };
                let datetime = out.match(/{date-time(-local)?:[^{}]+}/) ? out.match(/{date-time(?:-local)?:([^{}]+)}/)[1].replace(/[\\\/\|<>\*\?:"]/g, v => invalid_chars[v]) : 'YYYYMMDD-hhmmss';
                let info = {};
                info['status-id'] = status_id;
                info['user-name'] = user.name.replace(/([\\\/\|\*\?:"]|🔞)/g, v => invalid_chars[v]);
                info['user-id'] = user.screen_name;
                info['date-time'] = this.formatDate(tweet.created_at, datetime);
                info['date-time-local'] = this.formatDate(tweet.created_at, datetime, true);
                info['full-text'] = tweet.full_text.split('\n').join(' ').replace(/\s*https:\/\/t\.co\/\w+/g, '').replace(/[\\\/\|<>\*\?:"]/g, v => invalid_chars[v]);
                let medias = tweet.extended_entities && tweet.extended_entities.media;
                if (medias.length > 0) {
                    let tasks = medias.length;
                    let tasks_result = [];
                    medias.forEach((media, i) => {
                        info.url = media.type == 'photo' ? media.media_url + ':orig' : media.video_info.variants.filter(n => n.content_type == 'video/mp4').sort((a, b) => b.bitrate - a.bitrate)[0].url;
                        info.file = info.url.split('/').pop().split(/[:?]/).shift();
                        info['file-name'] = info.file.split('.').shift();
                        info['file-ext'] = info.file.split('.').pop();
                        info['file-type'] = media.type.replace('animated_', '');
                        info.out = (out.replace(/\.?{file-ext}/, '') + (medias.length > 1 && !out.match('{file-name}') ? '-' + i : '') + '.{file-ext}').replace(/{([^{}:]+)(:[^{}]+)?}/g, (match, name) => info[name]);
                        this.downloader.add({
                            url: info.url,
                            name: info.out,
                            onload: () => {
                                tasks -= 1;
                                tasks_result.push((medias.length > 1 ? i + 1 + ': ' : '') + lang.completed);
                                this.status(btn, null, tasks_result.sort().join('\n'));
                                if (tasks === 0) {
                                    this.status(btn, 'completed', lang.completed);
                                    if (record && !is_exist) {
                                        history.push(status_id);
                                        this.storage('history', status_id);
                                    }
                                }
                            },
                            onerror: result => {
                                tasks = -1;
                                tasks_result.push((medias.length > 1 ? i + 1 + ': ' : '') + result.details.current);
                                this.status(btn, 'failed', tasks_result.sort().join('\n'));
                            }
                        });
                    });
                } else {
                    this.status(btn, 'failed', 'MEDIA_NOT_FOUND');
                }
            },
            status: function (btn, css, title, style) {
                if (css) {
                    btn.classList.remove('download', 'completed', 'loading', 'failed');
                    btn.classList.add(css);
                }
                if (title) btn.title = title;
                if (style) btn.style.cssText = style;
            },
            settings: async function () {
                const $element = (parent, tag, style, content, css) => {
                    let el = document.createElement(tag);
                    if (style) el.style.cssText = style;
                    if (typeof content !== 'undefined') {
                        if (tag == 'input') {
                            if (content == 'checkbox') el.type = content;
                            else el.value = content;
                        } else el.innerHTML = content;
                    }
                    if (css) css.split(' ').forEach(c => el.classList.add(c));
                    parent.appendChild(el);
                    return el;
                };
                let wapper = $element(document.body, 'div', 'position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; background-color: #0009; z-index: 10;');
                let wapper_close;
                wapper.onmousedown = e => {
                    wapper_close = e.target == wapper;
                };
                wapper.onmouseup = e => {
                    if (wapper_close && e.target == wapper) wapper.remove();
                };
                let dialog = $element(wapper, 'div', 'position: absolute; left: 50%; top: 50%; transform: translateX(-50%) translateY(-50%); width: fit-content; width: -moz-fit-content; background-color: #f3f3f3; border: 1px solid #ccc; border-radius: 10px;');
                let title = $element(dialog, 'h3', 'margin: 10px 20px;', lang.dialog.title);
                let options = $element(dialog, 'div', 'margin: 10px; border: 1px solid #ccc; border-radius: 5px;');
                let record_label = $element(options, 'label', 'display: block; margin: 10px;', lang.dialog.record);
                let record_input = $element(record_label, 'input', 'float: left;', 'checkbox');
                record_input.checked = await GM_getValue('history', true);
                record_input.onchange = () => GM_setValue('history', record_input.checked);
                let record_clear = $element(record_label, 'label', 'margin: 10px; color: blue;', lang.dialog.clear);
                record_clear.onclick = () => {
                    if (confirm(lang.dialog.confirm)) {
                        history = [];
                        localStorage.removeItem('history');
                    }
                };
                let filename_div = $element(dialog, 'div', 'margin: 10px; border: 1px solid #ccc; border-radius: 5px;');
                let filename_label = $element(filename_div, 'label', 'display: block; margin: 10px 15px;', lang.dialog.pattern);
                let filename_input = $element(filename_label, 'textarea', 'display: block; min-width: 500px; max-width: 500px; min-height: 100px; font-size: inherit;', await GM_getValue('filename', filename));
                let filename_tags = $element(filename_div, 'label', 'display: table; margin: 10px;', `
<span class="tmd-tag" title="user name">{user-name}</span>
<span class="tmd-tag" title="The user name after @ sign.">{user-id}</span>
<span class="tmd-tag" title="example: 1234567890987654321">{status-id}</span>
<span class="tmd-tag" title="{date-time} : Posted time in UTC.\n{date-time-local} : Your local time zone.\n\nDefault:\nYYYYMMDD-hhmmss => 20201231-235959\n\nExample of custom:\n{date-time:DD-MMM-YY hh.mm} => 31-DEC-21 23.59">{date-time}</span><br>
<span class="tmd-tag" title="Text content in tweet.">{full-text}</span>
<span class="tmd-tag" title="Type of &#34;video&#34; or &#34;photo&#34; or &#34;gif&#34;.">{file-type}</span>
<span class="tmd-tag" title="Original filename from URL.">{file-name}</span>
`);
                filename_input.selectionStart = filename_input.value.length;
                filename_tags.querySelectorAll('.tmd-tag').forEach(tag => {
                    tag.onclick = () => {
                        let ss = filename_input.selectionStart;
                        let se = filename_input.selectionEnd;
                        filename_input.value = filename_input.value.substring(0, ss) + tag.innerText + filename_input.value.substring(se);
                        filename_input.selectionStart = ss + tag.innerText.length;
                        filename_input.selectionEnd = ss + tag.innerText.length;
                        filename_input.focus();
                    };
                });
                let btn_save = $element(title, 'label', 'float: right;', lang.dialog.save, 'tmd-btn');
                btn_save.onclick = async () => {
                    await GM_setValue('filename', filename_input.value);
                    wapper.remove();
                };
            },
            fetchJson: async function (status_id) {
                let url = 'https://twitter.com/i/api/2/timeline/conversation/' + status_id + '.json?tweet_mode=extended&include_entities=false&include_user_entities=false';
                let cookies = this.getCookie();
                let headers = {
                    'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
                    'x-twitter-active-user': 'yes',
                    'x-twitter-client-language': cookies.lang,
                    'x-csrf-token': cookies.ct0
                };
                if (cookies.ct0.length == 32) headers['x-guest-token'] = cookies.gt;
                return await fetch(url, {headers: headers}).then(result => result.json());
            },
            getCookie: function (name) {
                let cookies = {};
                document.cookie.split(';').filter(n => n.indexOf('=') !== -1).forEach(n => {
                    n.replace(/^([^=]+)=(.+)$/, (match, name, value) => {
                        cookies[name.trim()] = value.trim();
                    });
                });
                return name ? cookies[name] : cookies;
            },
            storage: function (name, value) {
                let data = JSON.parse(localStorage.getItem(name) || '[]');
                if (value) data.push(value);
                else return data;
                localStorage.setItem(name, JSON.stringify(data));
            },
            formatDate: function (i, o, tz) {
                let d = new Date(i);
                if (tz) d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
                let m = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
                let v = {
                    YYYY: d.getUTCFullYear().toString(),
                    YY: d.getUTCFullYear().toString(),
                    MM: d.getUTCMonth() + 1,
                    MMM: m[d.getUTCMonth()],
                    DD: d.getUTCDate(),
                    hh: d.getUTCHours(),
                    mm: d.getUTCMinutes(),
                    ss: d.getUTCSeconds(),
                    h2: d.getUTCHours() % 12,
                    ap: d.getUTCHours() < 12 ? 'AM' : 'PM'
                };
                return o.replace(/(YY(YY)?|MMM?|DD|hh|mm|ss|h2|ap)/g, n => ('0' + v[n]).substr(-n.length));
            },
            downloader: (function () {
                let tasks = [], thread = 0, max_thread = 2, retry = 0, max_retry = 2, failed = 0, notifier,
                    has_failed = false;
                return {
                    add: function (task) {
                        tasks.push(task);
                        if (thread < max_thread) {
                            thread += 1;
                            this.next();
                        } else this.update();
                    },
                    next: async function () {
                        let task = tasks.shift();
                        await this.start(task);
                        if (tasks.length > 0 && thread <= max_thread) this.next();
                        else thread -= 1;
                        this.update();
                    },
                    start: function (task) {
                        this.update();
                        return new Promise(resolve => {
                            GM_download({
                                url: task.url,
                                name: task.name,
                                onload: result => {
                                    task.onload();
                                    resolve();
                                },
                                onerror: result => {
                                    this.retry(task, result);
                                    resolve();
                                },
                                ontimeout: result => {
                                    this.retry(task, result);
                                    resolve();
                                }
                            });
                        });
                    },
                    retry: function (task, result) {
                        retry += 1;
                        if (retry == 3) max_thread = 1;
                        if (task.retry && task.retry >= max_retry ||
                            result.details && result.details.current == 'USER_CANCELED') {
                            task.onerror(result);
                            failed += 1;
                        } else {
                            if (max_thread == 1) task.retry = (task.retry || 0) + 1;
                            this.add(task);
                        }
                    },
                    update: function () {
                        if (!notifier) {
                            notifier = document.createElement('div');
                            notifier.title = 'Twitter Media Downloader';
                            notifier.classList.add('tmd-notifier');
                            notifier.innerHTML = '<label>0</label>|<label>0</label>';
                            document.body.appendChild(notifier);
                        }
                        if (failed > 0 && !has_failed) {
                            has_failed = true;
                            notifier.innerHTML += '|';
                            let clear = document.createElement('label');
                            notifier.appendChild(clear);
                            clear.onclick = () => {
                                notifier.innerHTML = '<label>0</label>|<label>0</label>';
                                failed = 0;
                                has_failed = false;
                                this.update();
                            };
                        }
                        notifier.firstChild.innerText = thread;
                        notifier.firstChild.nextElementSibling.innerText = tasks.length;
                        if (failed > 0) notifier.lastChild.innerText = failed;
                        if (thread > 0 || tasks.length > 0 || failed > 0) notifier.classList.add('running');
                        else notifier.classList.remove('running');
                    }
                };
            })()
        };
    })();

    function getStart() {
        TMD.init();
        new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(node => {
            let article = node.tagName == 'DIV' && (node.querySelector('article') || node.closest('article'));
            if (article && !article.dataset.injected) TMD.inject(article);
        }))).observe(document.body, {childList: true, subtree: true});
    }const website = {
        regexp: /twitter/,
        init: function ($j) {
            getStart();
        }
    };

    const modules = [website$2, website$1,website];

    const prepare = {
        init: function ($j) {
            modules.forEach(module => {
                if (module.regexp && module.regexp.length > 0) {
                    if (!module.regexp.test(window.location.href)) {
                        return
                    }
                }
                module.init($j);
            });
        }
    };

    (function () {
        var jq = jQuery.noConflict();
        prepare.init(jq);
    })();

})();
