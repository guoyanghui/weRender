(function(root,factory,plug){
    factory.call(root,root.jQuery,root.Swiper,plug);
})(window,function($,Swiper,plug){
    /*属性*/
    var __PROPERTY__ = {
        type:"goods_list",
        frameworkData:{

        },
        methods:{},
        headerTemp:{
            frameworkData:{
                type:"head",
                title:"页面标题",
                description:"页面描述",
                background:"#e0e0e0"
            },
            temp:"<div class='wr-wrap'><div class='wr-head'>" +
            "<button class='wr-head-back'></button>" +
            "<h4>{title}</h4>" +
            "<button class='wr-head-share'></button>" +
            "</div></div>"
        },
        /*商品*/
        goodsTemp:{
            frameworkData:{
                type: "goods",  //模版类型
                size: "2",    //一级   0,1,2,3
                sizeType: "0",  //二级 0,1,2,3
                buyBtn: "T",   //是否有按钮
                buyBtnType: "1",  //按钮类型    1,2,3,4
                showTitlelFlag: "T",  //是否显示商品名称
                showDetialFlag: "T",   //是否显示商品描述
                showPriceFlag: "T",  //是否显示商品价格
                appPagerModuleGoodList:[
                    {
                        goodId: 1,
                        name: "商品一",
                        retailPrice: 111,
                        goodDesc: "这是商品一的描述",
                        goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/69b0970572eb1ff21f919d265f4d1312.jpg",
                        salePrice:11,
                        goodLink:"javascript:void(0)"
                    },
                    {
                        goodId: 2,
                        name: "商品二",
                        retailPrice: 222,
                        goodDesc: "这是商品二的描述",
                        goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/86551866bfc73cd54d4036f2248d3b06.jpg",
                        salePrice:22,
                        goodLink:"javascript:void(0)"
                    },
                    {
                        goodId: 3,
                        name: "商品三",
                        retailPrice: 333,
                        goodDesc: "这是商品三的描述",
                        goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/2811e55fde033b2f87294b2b9f92080c.jpg",
                        salePrice:33,
                        goodLink:"javascript:void(0)"
                    },
                    {
                        goodId: 4,
                        name: "商品四",
                        retailPrice: 444,
                        goodDesc: "这是商品四的描述",
                        goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/2093f717f75f617bf551b63dd8bd4339.jpg",
                        salePrice:44,
                        goodLink:"javascript:void(0)"
                    },
                    {
                        goodId: 5,
                        name: "商品五",
                        retailPrice: 555,
                        goodDesc: "这是商品五的描述",
                        goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/2093f717f75f617bf551b63dd8bd4339.jpg",
                        salePrice:55,
                        goodLink:"javascript:void(0)"
                    },
                ]

            },
            wrap:"<div class='wr-wrap bgGrey'><ul class='wr-goods-list clearfix'></ul></div>",
            itemTemp:"<li>\n" +
            "   <div class=\"link clearfix\">\n" +
            "       <a href=\"{goodLink}\" class=\"photo-block\">\n" +
            "           <img class=\"goods-photo\" src={goodsImage}>\n" +
            "           <div data-goodModel='0' class=\"goodModel0 hide\">\n" +
            "               <div class=\"good-info\">\n" +
            "                   <p class='goods-title'>{name}</p>\n" +
            "                   <span class='goods-price'>原价：￥{retailPrice}</span>\n" +
            "               </div>\n" +
            "           </div>\n" +
            "       </a>\n" +
            "       <div data-goodModel='1' class=\"goodModel1 clearfix hide\">\n" +
            "          <div class='goods-price-wrap pull-left'>" +
            "               <p class='salePrice'>￥{salePrice}</p>" +
            "               <p class='retailPrice'>原价：{retailPrice}</p>" +
            "          </div>" +
            "          <a href='{goodLink}' class='presaleBtn pull-right'>" +
            "             我要<br>抢购" +
            "          </a>" +
            "       </div>\n" +
            "       <div data-goodModel='2' class=\"goodInfo-card hide\">\n" +
            "           <div class=\"info clearfix\">\n" +
            "               <p class=\"goods-title\">{name}</p>\n" +
            "               <p class=\"goods-desc\">{goodDesc}</p>\n" +
            "               <p class=\"goods-price pull-left\">￥{retailPrice}</p>\n" +
            "           </div>\n" +
            "       </div>\n" +
            "   </div>\n" +
            "   <button data-goodId='{goodId}' data-goodBtn='true' class='btn hide'></button>" +
            "</li>\n",
        },
        /*商品分组*/
        tagListTemp:{
            frameworkData:{
                type: "tag_list",  //模版类型
                goodsGroup:"tag_list",  //tag_list:左侧菜单    tags:顶部菜单
                size: "2",    //一级
                sizeType: "0",  //二级
                buyBtn: "T",   //是否有按钮
                buyBtnType: "1",  //按钮类型
                showTitlelFlag: "T",  //是否显示商品名称
                showDetialFlag: "T",   //是否显示商品描述
                showPriceFlag: "T",  //是否显示商品价格
                appModuleExtraList:[
                    {
                        classifyId:"",  //分类Id
                        classifyName:"分类一",  //分类名称
                        appPagerModuleGoodList:[
                            {
                                goodId: 1,
                                name: "分类一商品一",
                                retailPrice: 111,
                                goodDesc: "这是商品一的描述",
                                goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/69b0970572eb1ff21f919d265f4d1312.jpg",
                                goodLink:"javascript:void(0)", //商品链接
                                salePrice:55,
                            },
                            {
                                goodId: 2,
                                name: "分类一商品二",
                                retailPrice: 222,
                                goodDesc: "这是商品二的描述",
                                goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/86551866bfc73cd54d4036f2248d3b06.jpg",
                                goodLink:"javascript:void(0)", //商品链接
                                salePrice:55,
                            },
                            {
                                goodId: 3,
                                name: "分类一商品三",
                                retailPrice: 333,
                                goodDesc: "这是商品三的描述",
                                goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/2811e55fde033b2f87294b2b9f92080c.jpg",
                                goodLink:"javascript:void(0)", //商品链接
                                salePrice:55,
                            },
                            {
                                goodId: 4,
                                name: "分类一商品四",
                                retailPrice: 444,
                                goodDesc: "这是商品四的描述",
                                goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/2093f717f75f617bf551b63dd8bd4339.jpg",
                                goodLink:"javascript:void(0)", //商品链接
                                salePrice:55,
                            },
                            {
                                goodId: 5,
                                name: "分类一商品五",
                                retailPrice: 555,
                                goodDesc: "这是商品五的描述",
                                goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/2093f717f75f617bf551b63dd8bd4339.jpg",
                                goodLink:"javascript:void(0)", //商品链接
                                salePrice:55,
                            },
                            {
                                goodId: 6,
                                name: "分类一商品五",
                                retailPrice: 666,
                                goodDesc: "这是商品六的描述",
                                goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/2093f717f75f617bf551b63dd8bd4339.jpg",
                                goodLink:"javascript:void(0)", //商品链接
                                salePrice:55,
                            },
                            {
                                goodId: 7,
                                name: "分类一商品五",
                                retailPrice: 777,
                                goodDesc: "这是商品七的描述",
                                goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/2093f717f75f617bf551b63dd8bd4339.jpg",
                                goodLink:"javascript:void(0)", //商品链接
                                salePrice:55,
                            },

                        ]
                    },
                    {
                        classifyId:"",
                        classifyName:"分类二",
                        appPagerModuleGoodList:[
                            {
                                goodId: 1,
                                name: "分类二商品一",
                                retailPrice: 111,
                                goodDesc: "这是商品一的描述",
                                goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/69b0970572eb1ff21f919d265f4d1312.jpg",
                                goodLink:"javascript:void(0)", //商品链接
                                salePrice:55,
                            },
                            {
                                goodId: 2,
                                name: "分类二商品二",
                                retailPrice: 222,
                                goodDesc: "这是商品二的描述",
                                goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/86551866bfc73cd54d4036f2248d3b06.jpg",
                                goodLink:"javascript:void(0)", //商品链接
                                salePrice:55,
                            },
                            {
                                goodId: 3,
                                name: "分类二商品三",
                                retailPrice: 333,
                                goodDesc: "这是商品三的描述",
                                goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/2811e55fde033b2f87294b2b9f92080c.jpg",
                                goodLink:"javascript:void(0)", //商品链接
                                salePrice:55,
                            },
                            {
                                goodId: 4,
                                name: "分类二商品四",
                                retailPrice: 444,
                                goodDesc: "这是商品四的描述",
                                goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/2093f717f75f617bf551b63dd8bd4339.jpg",
                                goodLink:"javascript:void(0)", //商品链接
                                salePrice:55,
                            },
                            {
                                goodId: 5,
                                name: "分类二商品五",
                                retailPrice: 555,
                                goodDesc: "这是商品五的描述",
                                goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/2093f717f75f617bf551b63dd8bd4339.jpg",
                                goodLink:"javascript:void(0)", //商品链接
                                salePrice:55,
                            },

                        ]
                    },
                    {
                        classifyId:"",
                        classifyName:"分类三",
                        appPagerModuleGoodList:[
                            {
                                goodId: 1,
                                name: "分类三商品一",
                                retailPrice: 111,
                                goodDesc: "这是商品一的描述",
                                goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/69b0970572eb1ff21f919d265f4d1312.jpg",
                                goodLink:"javascript:void(0)", //商品链接
                                salePrice:55,
                            },
                            {
                                goodId: 2,
                                name: "分类三商品二",
                                retailPrice: 222,
                                goodDesc: "这是商品二的描述",
                                goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/86551866bfc73cd54d4036f2248d3b06.jpg",
                                goodLink:"javascript:void(0)", //商品链接
                                salePrice:55,
                            },
                            {
                                goodId: 3,
                                name: "分类三商品三",
                                retailPrice: 333,
                                goodDesc: "这是商品三的描述",
                                goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/2811e55fde033b2f87294b2b9f92080c.jpg",
                                goodLink:"javascript:void(0)", //商品链接
                                salePrice:55,
                            },
                            {
                                goodId: 4,
                                name: "分类三商品四",
                                retailPrice: 444,
                                goodDesc: "这是商品四的描述",
                                goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/2093f717f75f617bf551b63dd8bd4339.jpg",
                                goodLink:"javascript:void(0)", //商品链接
                                salePrice:55,
                            },
                            {
                                goodId: 5,
                                name: "分类三商品五",
                                retailPrice: 555,
                                goodDesc: "这是商品五的描述",
                                goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/2093f717f75f617bf551b63dd8bd4339.jpg",
                                goodLink:"javascript:void(0)", //商品链接
                                salePrice:55,
                            },

                        ]
                    },
                ]

            },
            wrap:"<div class='wr-wrap'><div class='wr-tagList'></div></div>",
            asideNavWrap:"<ul class='wr-aside-navWrap'></ul>",
            asideNavList:"<li data-nav-classify='{classifyName}'>{classifyName}</li>",
            asideListGroup:"<div class='wr-listWrap-group'></div>",
            asideListWrap:"<ul class='wr-aside-listWrap hide' data-list-classify='{classifyName}'></ul>",
            asideList:"<li><div class='wr-aside-listInfo'>" +
            "<a href='{goodLink}'><img src='{goodsImage}' class='goodImg'></a>" +
            "<div class='goodInfo'>" +
            "<h4>{name}</h4>" +
            "<p>￥{retailPrice}</p>" +
            "<i data-goodId='{goodId}' class='goodBtn'></i>" +
            "</div>" +
            "</div></li>",
            topNavWrap:"<ul class='wr-top-navWrap'></ul>",
            topNavList:"<li data-nav-classify='{classifyName}'>{classifyName}</li>",
            topListGroup:"<div class='wr-topList-group'></div>",
            topListWrap:"<ul class='wr-goods-list clearfix hide' data-list-classify='{classifyName}'></ul>",
            topList:"<li>\n" +
            "   <div class=\"link clearfix\">\n" +
            "       <a href=\"{goodLink}\" class=\"photo-block\">\n" +
            "           <img class=\"goods-photo\" src={goodsImage}>\n" +
            "           <div data-goodModel='0' class=\"goodModel0 hide\">\n" +
            "               <div class=\"good-info\">\n" +
            "                   <p class='goods-title'>{name}</p>\n" +
            "                   <span class='goods-price'>￥{retailPrice}</span>\n" +
            "               </div>\n" +
            "           </div>\n" +
            "       </a>\n" +
            "       <div data-goodModel='1' class=\"goodModel1 clearfix hide\">\n" +
            "          <div class='goods-price-wrap pull-left'>" +
            "               <p style='line-height: 42px' class='salePrice'>￥{retailPrice}</p>" +
            "          </div>" +
            "          <a href='{goodLink}' class='presaleBtn pull-right'>" +
            "             我要<br>抢购" +
            "          </a>" +
            "       </div>\n" +
            "       <div data-goodModel='2' class=\"goodInfo-card hide\">\n" +
            "           <div class=\"info clearfix\">\n" +
            "               <p class=\"goods-title\">{name}</p>\n" +
            "               <p class=\"goods-desc\">{goodDesc}</p>\n" +
            "               <p class=\"goods-price pull-left\">￥{retailPrice}</p>\n" +
            "           </div>\n" +
            "       </div>\n" +
            "   </div>\n" +
            "   <button data-goodId='{goodId}' data-goodBtn='true' class='btn hide'></button>" +
            "</li>\n",
        },

        /*商品列表模版*/
        goodsListTemp:{
            frameworkData:{
                type: "goods_list",  //模版类型
                size: "1",    //一级
                sizeType: "0",  //二级
                buyBtn: "T",   //是否有按钮
                buyBtnType: "1",  //按钮类型
                showTitlelFlag: "T",  //是否显示商品名称
                showDetialFlag: "T",   //是否显示商品描述
                showPriceFlag: "T",  //是否显示商品价格
                appModuleExtraList:[
                    {
                        goodId:"1",   //商品ID
                        name: "商品一", //商品名称
                        retailPrice: 111,  //原价
                        goodDesc: "这是商品一的描述",
                        goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/69b0970572eb1ff21f919d265f4d1312.jpg",
                        salePrice:11,   //活动价格
                        goodLink:"javascript:void(0)",  //商品跳转地址
                    },
                    {
                        goodId:"1",
                        name: "商品二",
                        retailPrice: 222,
                        goodDesc: "这是商品二的描述",
                        goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/86551866bfc73cd54d4036f2248d3b06.jpg",
                        salePrice:22,
                        goodLink:"",  //商品跳转地址
                    },
                    {
                        goodId:"1",
                        name: "商品三",
                        retailPrice: 333,
                        goodDesc: "这是商品三的描述",
                        goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/2811e55fde033b2f87294b2b9f92080c.jpg",
                        salePrice:33,
                        goodLink:"",  //商品跳转地址
                    },
                    {
                        goodId:"1",
                        name: "商品四",
                        retailPrice: 444,
                        goodDesc: "这是商品四的描述",
                        goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/2093f717f75f617bf551b63dd8bd4339.jpg",
                        salePrice:44,
                        goodLink:"",  //商品跳转地址
                    },
                    {
                        goodId:"1",   //商品ID
                        name: "商品五",   //商品名称
                        retailPrice: 555,
                        goodDesc: "这是商品五的描述",
                        goodsImage: "https://img.yzcdn.cn/public_files/2015/10/28/2093f717f75f617bf551b63dd8bd4339.jpg",
                        salePrice:55,
                        goodLink:"",  //商品跳转地址
                    },
                ]

            },
            wrap:"<div class='wr-wrap bgGrey'><ul class='wr-goods-list clearfix'></ul></div>",
            itemTemp:"<li>\n" +
            "   <div class=\"link clearfix\">\n" +
            "       <a href=\"{goodLink}\" class=\"photo-block\">\n" +
            "           <img class=\"goods-photo\" src={goodsImage}>\n" +
            "           <div data-goodModel='0' class=\"goodModel0 hide\">\n" +
            "               <div class=\"good-info\">\n" +
            "                   <p class='goods-title'>{name}</p>\n" +
            "                   <span class='goods-price'>原价：{retailPrice}</span>\n" +
            "               </div>\n" +
            "           </div>\n" +
            "       </a>\n" +
            "       <div data-goodModel='1' class=\"goodModel1 clearfix hide\">\n" +
            "          <div class='goods-price-wrap pull-left'>" +
            "               <p class='salePrice'>￥{retailPrice}</p>" +
            "               <p class='retailPrice'>原价：{retailPrice}</p>" +
            "          </div>" +
            "          <a href='{goodLink}' class='presaleBtn pull-right'>" +
            "             我要<br>抢购" +
            "          </a>" +
            "       </div>\n" +
            "       <div data-goodModel='2' class=\"goodInfo-card hide\">\n" +
            "           <div class=\"info clearfix\">\n" +
            "               <p class=\"goods-title\">{name}</p>\n" +
            "               <p class=\"goods-desc\">{goodDesc}</p>\n" +
            "               <p class=\"goods-price pull-left\">￥{retailPrice}</p>\n" +
            "           </div>\n" +
            "       </div>\n" +
            "   </div>\n" +
            "   <button data-goodId='{goodId}' data-goodBtn='true' class='btn hide'></button>" +
            "</li>\n",
        },

        /*搜索框*/
        searchTemp:{
            frameworkData:{
                background:"#fff",
                type:"search",
                getUrl:"www.baidu.com",  //跳转的地址
                name:"keywords"      //携带的参数名
            },
            wrap:"<div class='wr-wrap'><div class='wr-search'></div></div>",
            temp:"<div class=\"custom-search\" style=\"background-color: {background}\">\n" +
            "        <form action=\"{getUrl}\" method=\"GET\">\n" +
            "            <input name='{name}' type=\"text\" class=\"custom-search-input\" placeholder=\"搜索商品\">\n" +
            "            <button type=\"submit\" class=\"custom-search-button\">搜索</button>\n" +
            "        </form>\n" +
            "    </div>"
        },
        /*富文本*/
        richTxtTemp:{
            frameworkData:{
                type:"rich_text",
                content:"编辑富文本的内容",   //文本内容
                background:"#e0e0e0",  //背景颜色
                fullScreen:"T",  //是否全屏
            },
            wrap:"<div class='wr-wrap'><div class='wr-richTxt'></div></div>",
            temp:"<div class='richTxtContent' style=\"background: {background}\">{content}</div>"
        },
        /*图片广告*/
        imageAdTemp:{
            frameworkData:{
                type:"image_ad",
                height:"100px",  //轮播高度
                showMethod:"1",//1:折叠轮播  2:分开显示
                showMethodSize:"2",//1:大图  2:小图
                appModuleExtraList:[   //动态数据 数据结构
                    {
                        imgDesc:"广告一",
                        linkUrl:"javascript:void(0)",
                        imageUrl:"https://img.yzcdn.cn/public_files/2015/10/28/69b0970572eb1ff21f919d265f4d1312.jpg",
                    },
                    {
                        imgDesc:"广告二",
                        linkUrl:"javascript:void(0)",
                        imageUrl:"https://img.yzcdn.cn/public_files/2015/10/28/86551866bfc73cd54d4036f2248d3b06.jpg",
                    },
                    {
                        imgDesc:"广告三",
                        linkUrl:"javascript:void(0)",
                        imageUrl:"https://img.yzcdn.cn/public_files/2015/10/28/2811e55fde033b2f87294b2b9f92080c.jpg",
                    },
                ]

            },
            wrap:"<div class='wr-wrap'><div class='wr-imageAd'></div></div>",
            tempSwiperWrap:"<div style='height: {height};' class=\"swiper-container\">\n" +
            "    <div class=\"swiper-wrapper\">\n" +
            "    </div>\n" +
            "    <div class=\"swiper-pagination\"></div>\n" +
            "</div>",
            tempSwiperItem: "<div class=\"swiper-slide\">" +
            "<a href=\"{linkUrl}\">" +
            "<img src=\"{imageUrl}\" alt=\"{imgDesc}\">" +
            "</a>" +
            "</div>\n",
            tempDefaultWrap:"<ul class='clearfix imgAdWrap'></ul>",
            tempDefaultItem:"<li>" +
            "<a href=\"{linkUrl}\">" +
            "<img src=\"{imageUrl}\" alt=\"{imgDesc}\">" +
            "</a>" +
            "</li>",
        },
        /*标题*/
        titleTemp:{
            frameworkData:{
                type:"title",
                title:"标题",
                titleTemplate:"1", //传统样式
                subTitle:"副标题",
                showMethod:"1",  //1.居左  2.居中  3.居右
                background:"#fff",   //背景颜色
                wxTitleDate:1508119896014,  //日期
                wxTitleAuthor:"作者",//作者
                linkName:"连接标题",//链接标题
                linkUrl:"javascript:void(0)",  //连接地址

            },
            wrap:"<div class='wr-wrap'><div class='wr-title'></div></div>",
            tempDefaultWrap:"<div class='title-default' style='background: {background}'>" +
            "<div class='titleD-header'>" +
            "<span class='titleD-title'>{title}</span>" +
            "<span class='titleD-link'>\&nbsp;\&nbsp;-&nbsp;&nbsp;<a href=\"{linkUrl}\">{linkName}</a></span>" +
            "</div>" +
            "<div class='titleD-body'>{subTitle}</div>" +
            "</div>",
            tempWx:"<div class='title-wx'>" +
            "<div class='titleWx-header'>{title}</div>" +
            "<div class='titleWx-body'>" +
            "<span class='titleWx-Date'>{wxTitleDate}</span>" +
            "<span class='titleWx-Author'>{wxTitleAuthor}</span>" +
            "<a href=\"{linkUrl}\" class='titleWx-link'>{linkName}</a>" +
            "</div>" +
            "</div>",
        },
        /*文本导航*/
        textNavTemp: {
            frameworkData:{
                type:"text_nav",
                appModuleExtraList:[
                    {
                        linkName: "文本导航一", //(链接名称)
                        linkUrl:"javascript:void(0)",   //链接地址
                    },
                    {
                        linkName: "文本导航二",
                        linkUrl:"javascript:void(0)",
                    },
                    {
                        linkName: "文本导航三",
                        linkUrl:"javascript:void(0)",
                    },
                ],
            },
            wrap:"<div class='wr-wrap'><div class='wr-textNav'></div></div>",
            listWrap: "<ul class='wr-textNavList'></ul>",
            itemActive: "<li><a href='{linkUrl}'>{linkName}</a></li>",
        },
        /*图片导航*/
        navTemp:{
            frameworkData:{
                type:"nav",
                appModuleExtraList:[
                    {
                        imageUrl:"https://img.yzcdn.cn/public_files/2015/10/28/69b0970572eb1ff21f919d265f4d1312.jpg",
                        linkName:"链接一",//(链接名称)
                        linkUrl:"javascript:void(0)",
                        imgDesc:"",
                    },
                    {
                        imageUrl:"https://img.yzcdn.cn/public_files/2015/10/28/86551866bfc73cd54d4036f2248d3b06.jpg",
                        linkName:"链接二",//(链接名称)
                        linkUrl:"javascript:void(0)",
                        imgDesc:"",
                    },
                    {
                        imageUrl:"https://img.yzcdn.cn/public_files/2015/10/28/2811e55fde033b2f87294b2b9f92080c.jpg",
                        linkName:"链接三",//(链接名称)
                        linkUrl:"javascript:void(0)",
                        imgDesc:"",
                    },
                    {
                        imageUrl:"https://img.yzcdn.cn/public_files/2015/10/28/2093f717f75f617bf551b63dd8bd4339.jpg", //图片地址
                        linkName:"链接四",  //导航名称
                        linkUrl:"javascript:void(0)",   //链接地址
                        imgDesc:"",       //图片描述
                    },

                ]
            },
            wrap:"<div class='wr-wrap'><div class='wr-imgNav'></div></div>",
            listWrap: "<ul class='wr-imgNavList'></ul>",
            itemActive: "<li><a href='{linkUrl}'>" +
            "<img src=\"{imageUrl}\" alt='{imgDesc}'>" +
            "<p>{linkName}</p>" +
            "</a></li>",
        },
        /*关联连接*/
        linkTemp:{
            frameworkData:{
                type:"link",
                appModuleExtraList:[
                    {
                        title:"最热分类",
                        linkUrl:"javascript:void(0)",
                    },
                    {
                        title:"分分钟",
                        linkUrl:"javascript:void(0)",
                    },

                ]
            },
            wrap:"<div class='wr-wrap'><div class='wr-link'></div></div>",
            listWrap: "<ul class='wr-linkList'></ul>",
            itemActive: "<li><a href='{linkUrl}'>{title}</a></li>",
        },
        /*橱窗*/
        showcaseTemp:{
            frameworkData:{
                type:'showcase',
                title:"橱窗标题名",
                showMethod: 1,    //0:默认1：3列
                withoutSpace:0,   //0：保留1：消除
                bodyTitle:"内容区标题",     //（内容区标题）
	            bodyDesc:"内容区说明",   //（内容区说明）
	            appModuleExtraList:[
                    {
                        imgDesc:"",
                        imageUrl:"https://img.yzcdn.cn/public_files/2015/10/28/69b0970572eb1ff21f919d265f4d1312.jpg",
                        linkUrl:"javascript:void(0)",
                    },
                    {
                        imgDesc:"",
                        imageUrl:"https://img.yzcdn.cn/public_files/2015/10/28/86551866bfc73cd54d4036f2248d3b06.jpg",
                        linkUrl:"javascript:void(0)",
                    },
                    {
                        imgDesc:"",
                        imageUrl:"https://img.yzcdn.cn/public_files/2015/10/28/2811e55fde033b2f87294b2b9f92080c.jpg",
                        linkUrl:"javascript:void(0)",
                    },
                ]
            },
            wrap:"<div class='wr-wrap'><div class='wr-showcase'></div></div>",
            listWrap:"<h4 class='showcaseHeader'>{title}</h4>" +
            "<ul class='wr-showcaseList clearfix'></ul>" +
            "<div class='wr-showcase-footer'>" +
            "<h5>{bodyTitle}</h5>" +
            "<p>{bodyDesc}</p>" +
            "</div>",
            itemActive:"<li><a href='{linkUrl}'>" +
            "<img src='{imageUrl}' alt='{imgDesc}'>" +
            "</a></li>"
        },
        /*辅助线*/
        lineTemp:{
            frameworkData:{
                type:"line",
                hasPadding:"on",  //左右留白
                lineType:"solid",  //实线solid  虚线dashed 点线dotted
                background:"rgb(255,136,0)",
            },
            wrap:"<div class='wr-wrap'><div class='wr-line'></div></div>",
            itemActive:"<div style='border-top-color:{background};border-top-style: {lineType};' class='wr-line-content'></div>"
        },
        /*辅助空白*/
        whiteTemp:{
            frameworkData:{
                "whiteHeight":"56px",
                "type":"white"
            },
            wrap:"<div class='wr-wrap'><div class='wr-white'></div></div>",
            itemActive:"<div style='height: {whiteHeight}'></div>"
        },
        /*语音*/
        audioTemp:{
            frameworkData:{
                type:"audio",
                imgInfo:"https://img.yzcdn.cn/public_files/2015/10/28/2811e55fde033b2f87294b2b9f92080c.jpg",
                audioInfo:"http://img.youchalian.com/张芸京 - 偏爱.mp3",
                style:0,
                bubble:"left",
                title:"音频名称",
                loops:"T",  //是否循环播放
                reload:1, //1.暂停后再恢复播放时，从暂停位置开始  //0.暂停后再恢复播放时，从头开始
            },
            wrap:"<div class='wr-wrap'><div class='wr-audio'></div></div>",
            wxTempWrap:"<div class='wr-audio-wxTemp'></div>",
            wxTempItem:"<div class='wr-audio'>" +
            "<audio [data-audio]='true' src='{audioInfo}'></audio>" +
            "<img class='wx-audio-icon' src=\"{imgInfo}\">" +
            "<span class='wx-audio-play'>" +
            "<div class='wx-audio-play-gif'></div>" +
            "<i class='wr-play-static'></i>" +
            "</span>" +
            "</div>",
            simpleTempWrap:"<div class='wr-audio-simpleTemp'></div>",
            simpleTempItem:"<div class='wr-audio-box'>" +
            "<audio [data-audio]='true' src='{audioInfo}'></audio>" +
            "<div class='wr-audio-icon'>" +
            "<i class='wr-audio-play'></i>" +
            "<i class='wr-audio-pause hide'></i>" +
            "</div>" +
            "<span class='wr-audio-title'>{title}</span>" +
            "</div>"
        },
        /*公告*/
        noticeTemp:{
            frameworkData:{
                type:"notice",
                content:"请填写内容，如果过长，将会在手机上滚动显示，只有超过手机宽度才会滚动"
            },
            wrap:"<div class='wr-wrap'><div class='wr-notice'></div></div>",
            tempItem:"<div class='wr-notice-content'>" +
            "<div class='wr-notice-scroll clearfix'>" +
            "<span class='pull-left'>{content}</span>" +
            "<span class='pull-left'>{content}</span>" +
            "<span class='pull-left'>{content}</span>" +
            "</div>" +
            "</div>"
        },
        /*营销活动*/
        activityTemp:{
            frameworkData:{
                type:"ump_activity",
                appPagerModuleGoodList:[
                    {
                        goodId:1,
                        goodsImage:"https://img.yzcdn.cn/public_files/2015/10/28/2811e55fde033b2f87294b2b9f92080c.jpg",
                        name:"产品名称",
                        retailPrice:200,
                        activityPrice:100,
                        goodLink:"javascript:void(0)",
                        activityName:"活动名称",
                        activityOvertime:1518241966244,  //活动结束时间
                        tag:"5折",     //活动标签
                    },
                    {
                        goodId:2,
                        goodsImage:"https://img.yzcdn.cn/public_files/2015/10/28/2811e55fde033b2f87294b2b9f92080c.jpg",
                        name:"产品名称",
                        retailPrice:200,
                        activityPrice:160,
                        goodLink:"javascript:void(0)",
                        activityName:"活动名称",
                        activityOvertime:1516241966244,  //活动结束时间
                        tag:"8折",     //活动标签
                    }
                ]
            },
            wrap:"<div class='wr-wrap'><div class='wr-activity'></div></div>",
            listWrap:"<ul class='wr-activity-ul'></ul>",
            listItem:"<li class='wr-activity-li' data-goodId='{goodId}'>" +
            "<div class='wr-activity-header'>" +
            "<img src='{goodsImage}'>" +
            "<div class='wr-header-info'>" +
            "<div class='wr-headerInfo-name'>" +
            "<span>{activityName}</span>" +
            "</div>" +
            "<div class='wr-headerInfo-time'>" +
            "<span class='wr-headerInfo-txt'>距离活动结束还剩</span>" +
            "<div class='wr-headerTime'>" +
            "<span data-overTime-day='true'>D</span>:" +
            "<span data-overTime-hours='true'>H</span>:" +
            "<span data-overTime-minus='true'>M</span>:" +
            "<span data-overTime-second='true'>S</span>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<div class='wr-activity-body'>" +
            "<i>{tag}</i>" +
            "<span>{name}</span>" +
            "</div>" +
            "<div class='wr-activity-footer'>" +
            "<div class='wr-activity-price'>" +
            "<span class='wr-activityPrice'>￥{activityPrice}</span>" +
            "<span class='wr-retailPrice'>￥{retailPrice}</span>" +
            "</div>" +
            "<a href='{goodLink}' class='wr-activity-btn'>立即查看</a>" +
            "</div>" +
            "</li>"
        }


    };



    /*方法*/
    var __OPTIONS__ = {
        init:function(){
            this.html("");
            this.attr("data-weRender",true);
            this.framework();  //确认框架数据
            this.activeTemp(); //确认展示的模版
            console.log(this.frameworkData);
        },
        /*确认框架相关的数据*/
        framework:function(){

            switch (this.type.toString()){
                case "head":  //头部
                    this.changeFramework(this.headerTemp.frameworkData);
                    this.frameworkData = this.headerTemp.frameworkData;
                    break;
                case "goods":   //商品
                    this.changeFramework(this.goodsTemp.frameworkData);
                    this.frameworkData = this.goodsTemp.frameworkData;
                    break;
                case "tag_list":  //商品分组
                    this.changeFramework(this.tagListTemp.frameworkData);
                    this.frameworkData = this.tagListTemp.frameworkData;
                    break;
                case "goods_list":  //商品列表
                    this.changeFramework(this.goodsListTemp.frameworkData);
                    this.frameworkData = this.goodsListTemp.frameworkData;
                    break;
                case "search":   //搜索
                    this.changeFramework(this.searchTemp.frameworkData);
                    this.frameworkData = this.searchTemp.frameworkData;
                    break;
                case "rich_text":    //富文本
                    this.changeFramework(this.richTxtTemp.frameworkData);
                    this.frameworkData = this.richTxtTemp.frameworkData;
                    break;
                case "image_ad":    //图片广告
                    this.changeFramework(this.imageAdTemp.frameworkData);
                    this.frameworkData = this.imageAdTemp.frameworkData;
                    break;
                case "title":    //标题
                    this.changeFramework(this.titleTemp.frameworkData);
                    this.frameworkData = this.titleTemp.frameworkData;
                    break;
                case "text_nav":  //文本导航
                    this.changeFramework(this.textNavTemp.frameworkData);
                    this.frameworkData = this.textNavTemp.frameworkData;
                    break;
                case "nav":  //图片导航
                    this.changeFramework(this.navTemp.frameworkData);
                    this.frameworkData = this.navTemp.frameworkData;
                    break;
                case "link":
                    this.changeFramework(this.linkTemp.frameworkData);
                    this.frameworkData = this.linkTemp.frameworkData;
                    break;
                case "showcase":
                    this.changeFramework(this.showcaseTemp.frameworkData);
                    this.frameworkData = this.showcaseTemp.frameworkData;
                    break;
                case "line":
                    this.changeFramework(this.lineTemp.frameworkData);
                    this.frameworkData = this.lineTemp.frameworkData;
                    break;
                case "white":
                    this.changeFramework(this.whiteTemp.frameworkData);
                    this.frameworkData = this.whiteTemp.frameworkData;
                    break;
                case "audio":
                    this.changeFramework(this.audioTemp.frameworkData);
                    this.frameworkData = this.audioTemp.frameworkData;
                    break;
                case "notice":
                    this.changeFramework(this.noticeTemp.frameworkData);
                    this.frameworkData = this.noticeTemp.frameworkData;
                    break;
                default:
                    this.changeFramework(this.activityTemp.frameworkData);
                    this.frameworkData = this.activityTemp.frameworkData;
                    break;
            }
        },
        /*根据传入的frameworkData的值，改变内置frameworkData的值*/
        changeFramework:function(innerArr){
            for(var innerKey in innerArr){
                for(var outKey in this.frameworkData){
                    if(innerKey == outKey){
                        innerArr[innerKey] = this.frameworkData[outKey]
                    }
                }
            }
        },
        /*确认基础模版*/
        activeTemp:function(){
            var self = this;
            /*判断模版类型*/
            switch (this.frameworkData.type.toString()){
                case "head":  //头部
                    this.html(self.renderItem(this.frameworkData,self.headerTemp.temp));
                    $("body").css("background",this.frameworkData.background);
                    $("body").attr("title",this.frameworkData.title);
                    break;
                case "goods":   //商品
                    this.html(this.goodsListTemp.wrap);
                    self.renderDynamic(".wr-goods-list",self.frameworkData.appPagerModuleGoodList,this.goodsListTemp.itemTemp);
                    self.tempStyle();
                    break;
                case "tag_list":  //商品分组
                    this.html(this.tagListTemp.wrap);
                    switch (this.frameworkData.goodsGroup.toString()){
                        case "tag_list": //左侧菜单
                            this.find(".wr-tagList").append(this.tagListTemp.asideNavWrap); //添加侧边导航
                            self.renderDynamic(".wr-aside-navWrap",self.frameworkData.appModuleExtraList,this.tagListTemp.asideNavList);

                            this.find(".wr-tagList").append(this.tagListTemp.asideListGroup);  //添加商品列表外层结构
                            $.each(self.frameworkData.appModuleExtraList,function(index,item){
                                self.find(".wr-listWrap-group").append(self.renderItem(item,self.tagListTemp.asideListWrap));
                                self.renderDynamic(".wr-aside-listWrap:eq("+index+")",item.appPagerModuleGoodList,self.tagListTemp.asideList);
                            });
                            /*初始化状态*/
                            self.find(".wr-aside-navWrap li").eq(0).addClass("current");
                            self.find(".wr-aside-listWrap").eq(0).removeClass("hide");
                            /*侧边导航点击事件*/
                            self.find("[data-nav-classify]").on("click",function(){
                                $(this).addClass("current").siblings().removeClass("current");
                                self.find("[data-list-classify]").eq($(this).index()).removeClass("hide").siblings().addClass("hide");
                            });
                            break;
                        default://顶部菜单
                            this.find(".wr-tagList").append(this.tagListTemp.topNavWrap);  //添加顶部导航
                            self.renderDynamic(".wr-top-navWrap",self.frameworkData.appModuleExtraList,this.tagListTemp.topNavList);//渲染顶部导航

                            this.find(".wr-tagList").append(this.tagListTemp.topListGroup);//添加内容区域
                            $.each(self.frameworkData.appModuleExtraList,function(index,item){
                                self.find(".wr-topList-group").append(self.renderItem(item,self.tagListTemp.topListWrap));
                                self.renderDynamic(".wr-goods-list:eq("+index+")",item.appPagerModuleGoodList,self.tagListTemp.topList);
                            });
                            self.tempStyle();

                            /*初始化状态*/
                            self.find(".wr-top-navWrap li").eq(0).addClass("current");
                            self.find(".wr-goods-list").eq(0).removeClass("hide");
                            /*顶部导航点击事件*/
                            self.find("[data-nav-classify]").on("click",function(){
                                $(this).addClass("current").siblings().removeClass("current");
                                self.find(".wr-goods-list").eq($(this).index()).removeClass("hide").siblings().addClass("hide");
                            });
                            break;
                    }
                    break;
                case "goods_list":
                    this.html(this.goodsListTemp.wrap);
                    self.renderDynamic(".wr-goods-list",self.frameworkData.appModuleExtraList,this.goodsListTemp.itemTemp);
                    self.tempStyle();
                    break;
                case "search":   //搜索
                    this.html(this.searchTemp.wrap);
                    this.find(".wr-search").append( self.renderItem(this.frameworkData,this.searchTemp.temp) );
                    break;
                case "rich_text":  //富文本
                    this.html(this.richTxtTemp.wrap);
                    this.find(".wr-richTxt").append(self.renderItem(this.frameworkData,this.richTxtTemp.temp));
                    if(this.frameworkData.fullScreen == "T"){
                        this.find(".richTxtContent").addClass("richPadding");
                    }
                    break;
                case "image_ad":   //图片广告
                    this.html(this.imageAdTemp.wrap);
                    this.adWrap = this.find(".wr-imageAd");
                    switch (this.frameworkData.showMethod.toString()){
                        case "2":
                            this.adWrap.html(this.imageAdTemp.tempDefaultWrap);
                            self.renderDynamic(".imgAdWrap",self.frameworkData.appModuleExtraList,self.imageAdTemp.tempDefaultItem);
                            if(this.frameworkData.showMethodSize == "2"){
                                self.find(".imgAdWrap").addClass("small-pic");
                            }
                            break;
                        default:  //轮播
                            this.adWrap.html(this.renderItem(this.frameworkData,this.imageAdTemp.tempSwiperWrap));
                            self.renderDynamic(".swiper-wrapper",self.frameworkData.appModuleExtraList,self.imageAdTemp.tempSwiperItem);
                            new Swiper(this.find(".swiper-container"),{
                                autoplay : 3000,
                                loop:true,
                                pagination : '.swiper-pagination',
                                effect : 'fade',
                                autoplayDisableOnInteraction : false,
                                fade: {
                                    crossFade: true
                                }
                            });
                            break;
                    };
                    break;
                case "title":   //标题
                    this.html(this.titleTemp.wrap);
                    switch (this.frameworkData.titleTemplate.toString()){
                        case "1":
                            this.find(".wr-title").html(this.renderItem(this.frameworkData,this.titleTemp.tempDefaultWrap));
                            switch (this.frameworkData.showMethod.toString()){
                                case "1":
                                    this.find(".title-default").addClass("text-left");
                                    break;
                                case "2":
                                    this.find(".title-default").addClass("text-center");
                                    break;
                                default:
                                    this.find(".title-default").addClass("text-right");
                                    break;
                            }
                            break;
                        default:
                            this.find(".wr-title").html(self.renderItem(self.frameworkData,self.titleTemp.tempWx));
                            break;
                    }
                    break;
                case "text_nav":   //文本导航
                    this.html(this.textNavTemp.wrap);
                    this.find(".wr-textNav").append(this.textNavTemp.listWrap);
                    self.renderDynamic(".wr-textNavList",self.frameworkData.appModuleExtraList,self.textNavTemp.itemActive);
                    break;
                case "nav":   //导航
                    this.html(this.navTemp.wrap);
                    this.find(".wr-imgNav").append(this.navTemp.listWrap);
                    self.renderDynamic(".wr-imgNavList",self.frameworkData.appModuleExtraList,self.navTemp.itemActive);
                    break;
                case "link":  //关联链接
                    this.html(this.linkTemp.wrap);
                    this.find(".wr-link").append(this.linkTemp.listWrap);
                    $.each(self.frameworkData.appModuleExtraList,function(index,item){
                        for(var j=0;j<parseInt(item.number);j++){
                            self.find(".wr-linkList").append(self.renderItem(item,self.linkTemp.itemActive));
                        }
                    });
                    break;
                case "showcase":   //橱窗
                    this.html(this.showcaseTemp.wrap);
                    this.find(".wr-showcase").append(this.renderItem(this.frameworkData,self.showcaseTemp.listWrap));
                    this.renderDynamic(".wr-showcaseList",self.frameworkData.appModuleExtraList,self.showcaseTemp.itemActive);
                    switch (this.frameworkData.showMethod.toString()){
                        case "0":
                            this.find(".wr-showcaseList").addClass("wr-showcase-position");
                            switch (this.frameworkData.withoutSpace.toString()){
                                case "0":
                                    this.find(".wr-showcase-position li").eq(0).addClass("borderR");
                                    this.find(".wr-showcase-position li").eq(1).addClass("borderB");
                                    break;
                            }
                            break;
                        default:
                            this.find(".wr-showcaseList").addClass("wr-showcase-flex");
                            switch (this.frameworkData.withoutSpace.toString()){
                                case "0":
                                    this.find(".wr-showcase-flex li").addClass("isPadding");
                                    break;
                            }
                            break;
                    }
                    break;
                case "line":    //辅助线
                    this.html(this.lineTemp.wrap);
                    this.find(".wr-line").append(self.renderItem(this.frameworkData,self.lineTemp.itemActive));
                    if(this.frameworkData.hasPadding == "on"){
                        this.find(".wr-line").addClass("isPadding");
                    }
                    break;
                case "white":  //辅助空白
                    this.html(this.whiteTemp.wrap);
                    this.find(".wr-white").append(self.renderItem(this.frameworkData,self.whiteTemp.itemActive));
                    break;
                case "audio":  //语音
                    this.html(this.audioTemp.wrap);
                    switch (this.frameworkData.style.toString()){
                        case "0":  //微信对话样式
                            this.find(".wr-audio").append(self.audioTemp.wxTempWrap);
                            this.find(".wr-audio-wxTemp").append(self.renderItem(this.frameworkData,self.audioTemp.wxTempItem));
                            switch (this.frameworkData.bubble.toString()){
                                case "left":   //居左
                                    this.find(".wr-audio").addClass("wr-audio-left");
                                    break;
                                default:    //居右
                                    this.find(".wr-audio").addClass("wr-audio-right");
                                    break;
                            }
                            if(this.frameworkData.loops == "T"){
                                self.find("audio").attr("loop","true");
                            }
                            this.find(".wx-audio-play").on("click",function(){
                                if(self.find("audio")[0].paused){
                                    self.find(".wr-play-static").addClass("hide");
                                    self.find("audio")[0].play();
                                    if(self.frameworkData.reload == "0"){  //从头开始
                                        self.find("audio")[0].currentTime = 0.0;
                                    }
                                }else{
                                    self.find(".wr-play-static").removeClass("hide");
                                    self.find("audio")[0].pause();
                                }

                            });
                            break;
                        default:  //普通模式
                            this.find(".wr-audio").append(this.audioTemp.simpleTempWrap);
                            this.find(".wr-audio-simpleTemp").append(self.renderItem(this.frameworkData,this.audioTemp.simpleTempItem));
                            if(this.frameworkData.loops == "T"){
                                self.find("audio").attr("loop","true");
                            }
                            this.find(".wr-audio-icon").on("click",function(){
                                if(self.find("audio")[0].paused){
                                    self.find(".wr-audio-pause").removeClass("hide");
                                    self.find(".wr-audio-play").addClass("hide");
                                    self.find("audio")[0].play();
                                    if(self.frameworkData.reload == "0"){  //从头开始
                                        self.find("audio")[0].currentTime = 0.0;
                                    }
                                }else{
                                    self.find(".wr-audio-pause").addClass("hide");
                                    self.find(".wr-audio-play").removeClass("hide");
                                    self.find("audio")[0].pause();
                                }
                            });
                            break;
                    }
                    break;
                case "notice":   //公告
                    this.html(this.noticeTemp.wrap);
                    this.find(".wr-notice").append(self.renderItem(self.frameworkData,self.noticeTemp.tempItem));
                    //获取每个SPAN的站位宽
                    var singleW = Number( this.find(".wr-notice-content span").outerWidth(true) );
                    console.log("span宽度：" + singleW);
                    /*屏幕宽度*/
                    var screenW = Number( this.find(".wr-notice").outerWidth(true) );
                    console.log("外层宽度" + screenW);
                    /*设定span的宽度*/
                    this.find(".wr-notice-scroll span").width( singleW > screenW ? singleW : screenW );
                    /*设定span父级的宽度*/
                    this.find(".wr-notice-scroll").width( singleW > screenW ? singleW*3 : screenW*3);
                    if(singleW > screenW){
                        var interval = setInterval(function(){
                            /*向左移动的距离*/
                            var scrollLeft = Number( self.find(".wr-notice-scroll").position().left );
                            var spanSingle = Number( self.find(".wr-notice-scroll span").outerWidth(true) );
                            self.find(".wr-notice-scroll").css({left:scrollLeft - 30});
                            /*如果第一个span超出显示范围  将第一个插入到最后一个span的后面*/
                            if(-scrollLeft >= spanSingle){
                                self.find(".wr-notice-scroll span").last().after(self.find(".wr-notice-scroll span").first());
                                self.find(".wr-notice-scroll").css({left:0});
                            }
                        },400);
                    }
                    break;
                default:
                    this.html(this.activityTemp.wrap);
                    this.find(".wr-activity").append(this.activityTemp.listWrap);
                    this.renderDynamic(".wr-activity-ul",self.frameworkData.appPagerModuleGoodList,this.activityTemp.listItem);
                    /*获取活动结束时间*/
                    $.each(this.frameworkData.appPagerModuleGoodList,function(index,item){
                        var activityOverTime = item.activityOvertime;
                        var timeWrap = self.find(".wr-headerTime");
                        var interval = setInterval(function(){
                            var nowTime = new Date().getTime();
                            var totalSecond = (activityOverTime - nowTime)/1000; //获取总秒数

                            var days = Math.floor( totalSecond/3600/24 );   //获取天数
                            var hours = Math.floor( (totalSecond - days*24*3600)/3600 );  //获取小时数
                            var minus = Math.floor( (totalSecond - days*24*3600 - hours*3600)/60 ); //获取分钟数
                            var seconds = Math.floor( totalSecond - days*24*3600 - hours*3600 - minus*60 ); //获取分钟
                            var daysStr = days.toString().length > 1 ? days : "0" + days;
                            var hoursStr = hours.toString().length > 1 ? hours : "0" + hours;
                            var minusStr = minus.toString().length > 1 ? minus : "0" + minus;
                            var secondsStr = seconds.toString().length > 1 ? seconds : "0" + seconds;

                            timeWrap.eq(index).find("[data-overtime-day]").html(daysStr);
                            timeWrap.eq(index).find("[data-overtime-hours]").html(hoursStr);
                            timeWrap.eq(index).find("[data-overtime-minus]").html(minusStr);
                            timeWrap.eq(index).find("[data-overtime-second]").html(secondsStr);
                        },1000);
                    });
                    break;

            }
        },

        /*确认模版对应显示的样式(商品  商品列表  商品分组)*/
        tempStyle:function(){
            this.find("li").removeClass("big-pic").removeClass("small-pic").removeClass("list-pic");
            switch (this.frameworkData.size.toString()){
                case "0":  //大图
                    this.find("li").addClass("big-pic");
                    /*卡片形式*/
                    if(this.frameworkData.sizeType == 0){
                        this.find("li").addClass("card");
                    }
                    this.btnJudge();
                    this.modelJudge(this.find("[data-goodModel=\"2\"]"));
                    break;
                case "1":  //小图
                    this.find("li").removeClass("big-pic").addClass("small-pic");
                    /*卡片模式*/
                    if(this.frameworkData.sizeType == 0 || this.frameworkData.sizeType == 1){
                        this.find("li").addClass("card");
                        this.btnJudge();
                        this.modelJudge(this.find("[data-goodModel=\"2\"]"));
                    }else if(this.frameworkData.sizeType == 2){
                        this.modelJudge(this.find("[data-goodModel=\"0\"]"));
                        /*是否显示商品名称*/
                        if( this.frameworkData.showTitlelFlag == "F" ){
                            this.find("[data-goodModel=\"0\"]").find(".goods-price").addClass("onlyPrice");
                            this.find("[data-goodModel=\"0\"]").find(".goods-title").addClass("hide");
                        }
                    }else if(this.frameworkData.sizeType == 3){
                        this.find("li").addClass("card");
                        this.find("li").addClass("sale");
                        this.find("[data-goodModel=\"1\"]").removeClass("hide");
                    }
                    break;
                case "2":   //一大两小
                    this.find("li").addClass("small-pic");
                    this.find("li:nth-of-type(3n+1)").addClass("big-pic").removeClass("small-pic");
                    if(this.frameworkData.sizeType == 0){
                        this.find("li").addClass("card");
                        this.btnJudge();
                        this.modelJudge(this.find("[data-goodModel=\"2\"]"));
                    }else{
                        this.modelJudge(this.find("[data-goodModel=\"0\"]"));
                        /*是否显示商品名称*/
                        if( this.frameworkData.showTitlelFlag == "F" ){
                            this.find("[data-goodModel=\"0\"]").find(".goods-price").addClass("onlyPrice");
                            this.find("[data-goodModel=\"0\"]").find(".goods-title").addClass("hide");
                        }
                    }
                    break;
                default:   //列表展示
                    this.find("li").addClass("list-pic");
                    /*卡片形式*/
                    if(this.frameworkData.sizeType == 0){
                        this.find("li").addClass("card");
                    }
                    this.btnJudge();
                    this.modelJudge(this.find("[data-goodModel=\"2\"]"));
                    this.find("[data-goodModel=\"0\"]").find(".goods-price").removeClass("hide");
                    this.find("[data-goodModel=\"0\"]").find(".goods-title").removeClass("hide");
                    this.find("[data-goodModel=\"0\"]").find(".goods-desc").removeClass("hide");
                    break;
            }

        },
        /*按钮逻辑*/
        btnJudge:function(){
             /*有按钮*/
             if(this.frameworkData.buyBtn == "T"){
                 this.find("[data-goodBtn]").removeClass("hide");
                 /*按钮样式*/
                 switch (this.frameworkData.buyBtnType.toString()){
                     case "2":
                         this.find("[data-goodBtn]").addClass("btn1");
                         break;
                     case "3":
                         this.find("[data-goodBtn]").addClass("btn2");
                         break;
                     case "4":
                         this.find("[data-goodBtn]").addClass("btn3");
                         break;
                 }
             }

        },
        /*model逻辑*/
        modelJudge:function(obj){
            obj.removeClass("hide");
            /*是否显示商品名称*/
            if(this.frameworkData.showTitlelFlag == "F" && obj.find(".goods-title")){
                obj.find(".goods-title").addClass("hide");
            }
            /*是否显示商品描述*/
            if(this.frameworkData.showDetialFlag == "F" && obj.find(".goods-desc")){
                obj.find(".goods-desc").addClass("hide");
            }
            /*是否显示商品价格*/
            if(this.frameworkData.showPriceFlag == "F" && obj.find(".goods-price")){
                obj.find(".goods-price").addClass("hide");
            }
        },

        /*商品列表   item数据渲染方法*/
        renderItem:function(data,temp){
            for(var prop in data){
                var re = new RegExp("{"+prop+"}","g");
                temp = temp.replace(re,data[prop]);
            }
            return temp;
        },

        /*渲染动态数据  插入特定位置*/
        renderDynamic:function(className,dataList,temp){
            var self = this;
            $.each(dataList,function(i,item){
                self.find(className).append( self.renderItem(item,temp) );
            });
        },

        /*页面点击事件*/
        extendClickFn:function(){
            var self = this;
            for(var temp in self.methods){
                self.methods[temp].bind(self)();
            }
        }

    };



    $.fn[plug] = function(options){
        $.extend(this,__PROPERTY__,__OPTIONS__,options);
        this.init();
        this.extendClickFn();
        return this;
    }
},"weRender");

/*
* frameworkData   相关字段
*
* 商品列表：
* "goodsNumberType": "2", //显示个数
  "size": "0",    //一级
  "sizeType": "0",  //二级
  "buyBtn": "1",   //是否有按钮
  "buyBtnType": "1",  //按钮类型
  "showTitlelFlag": "0",  //是否显示商品名称
  "showDetialFlag": "2",   //是否显示商品描述
  "showPriceFlag": "1",  //是否显示商品价格
  "tagGroup": "267364093959684096",  //商品来源
  "type": "goods_list"  //模版类型
  "":[]

  搜索框：
  background:"black",
  type:"search"

  富文本：
  type:"rich_text",
  content:""   //文本内容
  background:""  //背景颜色
  fullScreen:""  //是否全屏

  轮播：
  type:"image_ad"
  showMethod  1:折叠轮播  2:分开显示
  showMethodSize 1:大图  2:小图
  appModuleExtraList:[  数据：
  {
    title:
    linkUrl:
    imageUrl:
    imageid:
    linkType:
    linkId:
  }]

  标题:
  type:"title"
  title:"",
  titleTemplate:1 传统样式
        subTitle:副标题
        showMethod:"1"  //1.居左  2.居中  3.居右
        background:""   //背景颜色
  titleTemplate:2 模仿微信
        wxTitleDate：""  日期
        wxTitleAuthor:""作者
        wxTitleLink：链接标题
  appModuleExtraList:[{   //链接信息
        linkName:"",
        linkUrl:"",
        linkType:"",
        linkId:"",
  }]
*
*
* */