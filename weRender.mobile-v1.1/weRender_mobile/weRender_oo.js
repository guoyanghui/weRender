var WeRender = (function($,Swiper){
    /*创建Goods类*/
    var Goods = function(ele,options){
        this.$rootEle = ele;   //根节点
        this.temps = {    //模版
            wrap:"<div class='wr-wrap'><ul class='wr-goods-list clearfix'></ul></div>",
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
        }
        this.defaults = {  //默认参数
            size: "2",    //一级   0,1,2,3
            sizeType: "0",  //二级 0,1,2,3
            buyBtn: "T",   //是否有按钮
            buyBtnType: "1",  //按钮类型    1,2,3,4
            showTitlelFlag: "T",  //是否显示商品名称
            showDetialFlag: "T",   //是否显示商品描述
            showPriceFlag: "T",  //是否显示商品价格
            dataList:[
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
        };
        this.options = $.extend({},this.defaults,options);
        this.init();
    }

    Goods.prototype = {
        init:function(){
            this.$rootEle.html(this.temps.wrap);
            this.renderArray(".wr-goods-list",this.temps.itemTemp);
            this.frameStatus();
        },
        renderJson:function(data,temp){   //渲染JSON数据
            for(var prop in data){
                var re = new RegExp("{"+prop+"}","g");
                temp = temp.replace(re,data[prop])
            }
            return temp;
        },
        renderArray:function(className,temp){    //渲染Array数据
            var self = this;
            $.each(self.options.dataList,function(index,item){
                self.$rootEle.find(className).append( self.renderJson(item,temp) )
            })
        },
        /*确认模版对应显示的样式(商品  商品列表  商品分组)*/
        frameStatus:function(){
            this.$rootEle.find("li").removeClass("big-pic").removeClass("small-pic").removeClass("list-pic");
            switch (this.options.size.toString()){
                case "0":  //大图
                    this.$rootEle.find("li").addClass("big-pic");
                    /*卡片形式*/
                    if(this.options.sizeType == 0){
                        this.$rootEle.find("li").addClass("card");
                    }
                    this.btnJudge();
                    this.modelJudge(this.$rootEle.find("[data-goodModel=\"2\"]"));
                    break;
                case "1":  //小图
                    this.$rootEle.find("li").removeClass("big-pic").addClass("small-pic");
                    /*卡片模式*/
                    if(this.options.sizeType == 0 || this.options.sizeType == 1){
                        this.$rootEle.find("li").addClass("card");
                        this.btnJudge();
                        this.modelJudge(this.$rootEle.find("[data-goodModel=\"2\"]"));
                    }else if(this.options.sizeType == 2){
                        this.modelJudge(this.$rootEle.find("[data-goodModel=\"0\"]"));
                        /*是否显示商品名称*/
                        if( this.options.showTitlelFlag == "F" ){
                            this.$rootEle.find("[data-goodModel=\"0\"]").find(".goods-price").addClass("onlyPrice");
                            this.$rootEle.find("[data-goodModel=\"0\"]").find(".goods-title").addClass("hide");
                        }
                    }else if(this.options.sizeType == 3){
                        this.$rootEle.find("li").addClass("card");
                        this.$rootEle.find("li").addClass("sale");
                        this.$rootEle.find("[data-goodModel=\"1\"]").removeClass("hide");
                    }
                    break;
                case "2":   //一大两小
                    this.$rootEle.find("li").addClass("small-pic");
                    this.$rootEle.find("li:nth-of-type(3n+1)").addClass("big-pic").removeClass("small-pic");
                    if(this.options.sizeType == 0){
                        this.$rootEle.find("li").addClass("card");
                        this.btnJudge();
                        this.modelJudge(this.$rootEle.find("[data-goodModel=\"2\"]"));
                    }else{
                        this.modelJudge(this.$rootEle.find("[data-goodModel=\"0\"]"));
                        /*是否显示商品名称*/
                        if( this.options.showTitlelFlag == "F" ){
                            this.$rootEle.find("[data-goodModel=\"0\"]").find(".goods-price").addClass("onlyPrice");
                            this.$rootEle.find("[data-goodModel=\"0\"]").find(".goods-title").addClass("hide");
                        }
                    }
                    break;
                default:   //列表展示
                    this.$rootEle.find("li").addClass("list-pic");
                    /*卡片形式*/
                    if(this.options.sizeType == 0){
                        this.$rootEle.find("li").addClass("card");
                    }
                    this.btnJudge();
                    this.modelJudge(this.$rootEle.find("[data-goodModel=\"2\"]"));
                    this.$rootEle.find("[data-goodModel=\"0\"]").find(".goods-price").removeClass("hide");
                    this.$rootEle.find("[data-goodModel=\"0\"]").find(".goods-title").removeClass("hide");
                    this.$rootEle.find("[data-goodModel=\"0\"]").find(".goods-desc").removeClass("hide");
                    break;
            }

        },
        /*model逻辑*/
        modelJudge:function(obj){
            obj.removeClass("hide");
            /*是否显示商品名称*/
            if(this.options.showTitlelFlag == "F" && obj.find(".goods-title")){
                obj.find(".goods-title").addClass("hide");
            }
            /*是否显示商品描述*/
            if(this.options.showDetialFlag == "F" && obj.find(".goods-desc")){
                obj.find(".goods-desc").addClass("hide");
            }
            /*是否显示商品价格*/
            if(this.options.showPriceFlag == "F" && obj.find(".goods-price")){
                obj.find(".goods-price").addClass("hide");
            }
        },
        /*按钮逻辑*/
        btnJudge:function(){
            /*有按钮*/
            if(this.options.buyBtn == "T"){
                this.$rootEle.find("[data-goodBtn]").removeClass("hide");
                /*按钮样式*/
                switch (this.options.buyBtnType.toString()){
                    case "2":
                        this.$rootEle.find("[data-goodBtn]").addClass("btn1");
                        break;
                    case "3":
                        this.$rootEle.find("[data-goodBtn]").addClass("btn2");
                        break;
                    case "4":
                        this.$rootEle.find("[data-goodBtn]").addClass("btn3");
                        break;
                }
            }

        },
    }

    /*创建Goods类 ending======*/


    /*创建header类======starting========*/
    var Header = function(ele,options){
        this.$rootEle = ele;
        this.temp = "<div class='wr-wrap'><div class='wr-head'>" +
            "<button class='wr-head-back'></button>" +
            "<h4>{title}</h4>" +
            "<button class='wr-head-share'></button>" +
            "</div></div>";
        this.defaults = {
            type:"head",
            title:"页面标题",
            description:"页面描述",
            background:"#e0e0e0"
        };
        this.options = $.extend({},this.defaults,options);
        this.init();
    }

    Header.prototype = {
        init:function(){
            this.$rootEle.html(this.renderJson(this.options,this.temp));
        },
        renderJson:function(data,temp){   //渲染JSON数据
            for(var prop in data){
                var re = new RegExp("{"+prop+"}","g");
                temp = temp.replace(re,data[prop])
            }
            return temp;
        }

    }
    /*创建Header类 =======ending========*/

    /*创建Search类  ========starting=========*/
    var Search = function(ele,options){
        this.$rootEle = ele;
        this.temp = "<div class='wr-wrap'><div class='wr-search'>" +
            "<div class=\"custom-search\" style=\"background-color: {background}\">\n" +
            "        <form action=\"{getUrl}\" method=\"GET\">\n" +
            "            <input name='{name}' type=\"text\" class=\"custom-search-input\" placeholder=\"搜索商品\">\n" +
            "            <button type=\"submit\" class=\"custom-search-button\">搜索</button>\n" +
            "        </form>\n" +
            "    </div>" +
            "</div></div>";
        this.defaults = {
            background:"#fff",
            type:"search",
            getUrl:"www.baidu.com",  //跳转的地址
            name:"keywords"      //携带的参数名
        }
        this.options = $.extend({},this.defaults,options);
        this.init();
    }

    Search.prototype = {
        init:function(){
            this.$rootEle.html(this.renderJson(this.options,this.temp))
        },
        renderJson:function(data,temp){   //渲染JSON数据
            for(var prop in data){
                var re = new RegExp("{"+prop+"}","g");
                temp = temp.replace(re,data[prop])
            }
            return temp;
        },
    }

    /*创建Search类  ========starting=========*/

    /*创建RichTxt类  ==============starting=============*/
    var RichTxt = function(ele,options){
        this.$rootEle = ele;
        this.temp = "<div class='wr-wrap'><div class='wr-richTxt'>" +
            "<div class='richTxtContent' style=\"background: {background};font-size: {fontSize}\">{content}</div>" +
            "</div></div>";
        this.defaults = {
            type:"rich_text",
            content:"编辑富文本的内容",   //文本内容
            background:"#e0e0e0",  //背景颜色
            fullScreen:"T",  //是否全屏
            fontSize:"16px"
        };
        this.options = $.extend({},this.defaults,options);
        this.init();
    }

    RichTxt.prototype = {
        init:function(){
            this.$rootEle.html(this.renderJson(this.options,this.temp));
            this.frameStatus();
        },
        renderJson:function(data,temp){   //渲染JSON数据
            for(var prop in data){
                var re = new RegExp("{"+prop+"}","g");
                temp = temp.replace(re,data[prop])
            }
            return temp;
        },
        frameStatus:function(){
            if(this.options.fullScreen == "T"){
                this.$rootEle.find(".richTxtContent").addClass("richPadding");
            }
        }
    }

    /*创建RichTxt类  ==============ending=============*/

    /*创建ImgAd类  starting====================*/

    var ImgAd = function(ele,options){
        this.$rootEle = ele;
        this.temp = {
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
        };
        this.defaults = {
            type:"image_ad",
            swiperTime:3000,
            height:"10rem",  //轮播高度
            showMethod:"1",//1:折叠轮播  2:分开显示
            showMethodSize:"2",//1:大图  2:小图
            dataList:[   //动态数据 数据结构
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
        };
        this.options = $.extend({},this.defaults,options);
        this.init();
    };

    ImgAd.prototype = {
        init:function(){
            this.$rootEle.html(this.temp.wrap);
            this.frameStatus();
        },
        renderJson:function(data,temp){   //渲染JSON数据
            for(var prop in data){
                var re = new RegExp("{"+prop+"}","g");
                temp = temp.replace(re,data[prop])
            }
            return temp;
        },
        renderArray:function(className,temp){    //渲染Array数据
            var self = this;
            $.each(self.options.dataList,function(index,item){
                self.$rootEle.find(className).append( self.renderJson(item,temp) )
            })
        },
        frameStatus:function(){
            var self = this;
            if(this.options.showMethod && this.options.showMethod != null && this.options.showMethod != ""){
                switch (this.options.showMethod.toString()){
                    case "1":
                        this.$rootEle.find(".wr-imageAd").html(this.temp.tempSwiperWrap);
                        this.renderArray(".swiper-wrapper",this.temp.tempSwiperItem);
                        new Swiper(this.$rootEle.find(".swiper-container"),{
                            autoplay : self.options.swiperTime,
                            loop:true,
                            pagination : '.swiper-pagination',
                            effect : 'fade',
                            autoplayDisableOnInteraction : false,
                            fade: {
                                crossFade: true
                            }
                        });
                        break;
                    default:
                        this.$rootEle.find(".wr-imageAd").html(this.temp.tempDefaultWrap);
                        this.renderArray(".imgAdWrap",this.temp.tempDefaultItem);
                        if(this.options.showMethodSize == "2"){
                            this.$rootEle.find(".imgAdWrap").addClass("small-pic");
                        }
                        break;

                }
            }else{
                alert("轮播的初始化状态showMethod不能为空")
            }

        }
    }


    /*创建ImgAd类  ending====================*/


    /*创建textNav类  starting==================*/
    var TextNav = function(ele,options){
        this.$rootEle = ele;
        this.temp = {
            wrap:"<div class='wr-wrap'><div class='wr-textNav'></div></div>",
            listWrap: "<ul class='wr-textNavList' style='padding:{padding}'></ul>",
            itemActive: "<li><a href='{linkUrl}'>" +
            "<img src='{imageUrl}'>" +
            "<span>{linkName}</span>" +
            "</a></li>",
        };
        this.defaults = {
            padding:"0 0 0 0.2rem",
            iconWidth:"1.2rem",
            iconHeight:"1.2rem",
            fontSize:"16px",
            dataList:[
                {
                    imageUrl:"https://img.yzcdn.cn/public_files/2015/10/28/69b0970572eb1ff21f919d265f4d1312.jpg",
                    linkName: "文本导航一", //(链接名称)
                    linkUrl:"javascript:void(0)",   //链接地址
                },
                {
                    imageUrl:"https://img.yzcdn.cn/public_files/2015/10/28/86551866bfc73cd54d4036f2248d3b06.jpg",
                    linkName: "文本导航二",
                    linkUrl:"javascript:void(0)",
                },
                {
                    imageUrl:"https://img.yzcdn.cn/public_files/2015/10/28/2811e55fde033b2f87294b2b9f92080c.jpg",
                    linkName: "文本导航三",
                    linkUrl:"javascript:void(0)",
                },
            ]
        };

        this.options = $.extend({},this.defaults,options);
        this.init();

    };

    TextNav.prototype = {
        init:function(){
            this.$rootEle.html(this.temp.wrap);
            this.$rootEle.find(".wr-textNav").html(this.renderJson(this.options,this.temp.listWrap))
            this.renderArray(".wr-textNavList",this.temp.itemActive);
            this.$rootEle.find(".wr-textNavList li img").css({width:this.options.iconWidth,height:this.options.iconHeight});
            this.$rootEle.find(".wr-textNavList li span").css({fontSize:this.options.fontSize,lineHeight:this.options.iconHeight})
        },
        renderJson:function(data,temp){   //渲染JSON数据
            for(var prop in data){
                var re = new RegExp("{"+prop+"}","g");
                temp = temp.replace(re,data[prop])
            }
            return temp;
        },
        renderArray:function(className,temp){    //渲染Array数据
            var self = this;
            $.each(self.options.dataList,function(index,item){
                self.$rootEle.find(className).append( self.renderJson(item,temp) )
            })
        },
    }

    /*创建textNav类  ending==================*/

    /*创建语音类  starting=================*/
    var Audio = function(ele,options){
        this.$rootEle = ele;
        this.temp = {
            wrap:"<div class='wr-wrap'></div>",
            wxTempWrap:"<div class='wr-audio-wxTemp'>" +
            "<div class='wr-audio'>" +
            "<audio [data-audio]='true' src='{audioInfo}'></audio>" +
            "<img class='wx-audio-icon' src=\"{imgInfo}\">" +
            "<span class='wx-audio-play'>" +
            "<div class='wx-audio-play-gif'></div>" +
            "<i class='wr-play-static'></i>" +
            "</span>" +
            "</div>" +
            "</div>",
            simpleTempWrap:"<div class='wr-audio'><div class='wr-audio-simpleTemp'>" +
            "<div class='wr-audio-box'>" +
            "<audio [data-audio]='true' src='{audioInfo}'></audio>" +
            "<div class='wr-audio-icon'>" +
            "<i class='wr-audio-play'></i>" +
            "<i class='wr-audio-pause hide'></i>" +
            "</div>" +
            "<span class='wr-audio-title'>{title}</span>" +
            "</div>" +
            "</div></div>",
        };
        this.defaults = {
            imgInfo:"https://img.yzcdn.cn/public_files/2015/10/28/2811e55fde033b2f87294b2b9f92080c.jpg",
            audioInfo:"http://img.youchalian.com/张芸京 - 偏爱.mp3",
            style:2,
            bubble:"left",
            title:"音频名称",
            loops:"T",  //是否循环播放
            reload:1, //1.暂停后再恢复播放时，从暂停位置开始  //0.暂停后再恢复播放时，从头开始
        };
        this.options = $.extend({},this.defaults,options);
        this.init();
    }

    Audio.prototype = {
        init:function(){
            this.$rootEle.html(this.temp.wrap);
            this.frameStatus();
        },
        renderJson:function(data,temp){   //渲染JSON数据
            for(var prop in data){
                var re = new RegExp("{"+prop+"}","g");
                temp = temp.replace(re,data[prop])
            }
            return temp;
        },
        frameStatus:function(){
            console.log(this.options.style);
            if(this.options.style && this.options.style != "" && this.options.style != null){
                switch (this.options.style.toString()){
                    case "2":
                        this.$rootEle.find(".wr-wrap").html(this.renderJson(this.options,this.temp.simpleTempWrap));
                        if(this.options.loops == "T"){
                            this.$rootEle.find("audio").attr("loop","true");
                        }
                        this.defaultPlay();
                        break;
                    default:
                        this.$rootEle.find(".wr-wrap").html(this.renderJson(this.options,this.temp.wxTempWrap));
                        switch (this.options.bubble.toString()){
                            case "left":   //居左
                                this.$rootEle.find(".wr-audio").addClass("wr-audio-left");
                                break;
                            default:    //居右
                                this.$rootEle.find(".wr-audio").addClass("wr-audio-right");
                                break;
                        }
                        this.wxPlay();
                        break;
                }
            }else{
                alert("音频中的style的字段不能为空！");
            }
        },
        wxPlay:function(){
            var self = this;
            this.$rootEle.find(".wx-audio-play").on("click",function(){
                if(self.$rootEle.find("audio")[0].paused){
                    self.$rootEle.find(".wr-play-static").addClass("hide");
                    self.$rootEle.find("audio")[0].play();
                    if(self.options.reload == "0"){  //从头开始
                        self.$rootEle.find("audio")[0].currentTime = 0.0;
                    }
                }else{
                    self.$rootEle.find(".wr-play-static").removeClass("hide");
                    self.$rootEle.find("audio")[0].pause();
                }

            });
        },
        defaultPlay:function(){
            var self = this;
            this.$rootEle.find(".wr-audio-icon").on("click",function(){
                if(self.$rootEle.find("audio")[0].paused){
                    self.$rootEle.find(".wr-audio-pause").removeClass("hide");
                    self.$rootEle.find(".wr-audio-play").addClass("hide");
                    self.$rootEle.find("audio")[0].play();
                    if(self.options.reload == "0"){  //从头开始
                        self.$rootEle.find("audio")[0].currentTime = 0.0;
                    }
                }else{
                    self.$rootEle.find(".wr-audio-pause").addClass("hide");
                    self.$rootEle.find(".wr-audio-play").removeClass("hide");
                    self.$rootEle.find("audio")[0].pause();
                }
            });
        }
    }

    /*创建语音类  ending=================*/

    /*创建公告类  starting=================*/
    var Notice = function(ele,options){
        this.$rootEle = ele;
        this.temp = "<div class='wr-wrap'><div class='wr-notice'>" +
            "<div class='wr-notice-content'>" +
            "<div class='wr-notice-scroll clearfix'>" +
            "<span class='pull-left'>{content}</span>" +
            "<span class='pull-left'>{content}</span>" +
            "<span class='pull-left'>{content}</span>" +
            "</div>" +
            "</div>" +
            "</div></div>";
        this.defaults = {
            content:"请填写内容，如果过长，将会在手机上滚动显示，只有超过手机宽度才会滚动"
        };
        this.options = $.extend({},this.defaults,options);
        this.init();
    }

    Notice.prototype = {
        init:function(){
            var self = this;
            this.$rootEle.append(self.renderJson(self.options,self.temp));
            //获取每个SPAN的站位宽
            var singleW = Number( this.$rootEle.find(".wr-notice-content span").outerWidth(true) );
            console.log("span宽度：" + singleW);
            /*屏幕宽度*/
            var screenW = Number( this.$rootEle.find(".wr-notice").outerWidth(true) );
            console.log("外层宽度" + screenW);
            /*设定span的宽度*/
            this.$rootEle.find(".wr-notice-scroll span").width( singleW > screenW ? singleW : screenW );
            /*设定span父级的宽度*/
            this.$rootEle.find(".wr-notice-scroll").width( singleW > screenW ? singleW*3 : screenW*3);
            if(singleW > screenW){
                var interval = setInterval(function(){
                    /*向左移动的距离*/
                    var scrollLeft = Number( self.$rootEle.find(".wr-notice-scroll").position().left );
                    var spanSingle = Number( self.$rootEle.find(".wr-notice-scroll span").outerWidth(true) );
                    self.$rootEle.find(".wr-notice-scroll").css({left:scrollLeft - 30});
                    /*如果第一个span超出显示范围  将第一个插入到最后一个span的后面*/
                    if(-scrollLeft >= spanSingle){
                        self.$rootEle.find(".wr-notice-scroll span").last().after(self.$rootEle.find(".wr-notice-scroll span").first());
                        self.$rootEle.find(".wr-notice-scroll").css({left:0});
                    }
                },400);
            }
        },
        renderJson:function(data,temp){   //渲染JSON数据
            for(var prop in data){
                var re = new RegExp("{"+prop+"}","g");
                temp = temp.replace(re,data[prop])
            }
            return temp;
        },
    }


    /*创建公告类  ending==================*/

    /*创建营销广告类  starting=================*/
    var ActivityAd = function(ele,options){
        this.$rootEle = ele;
        this.temp = {
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
        this.defaults = {
            dataList:[
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
        };
        this.options = $.extend({},this.defaults,options);
        this.init();
    }

    ActivityAd.prototype = {
        init:function(){
            var self = this;
            this.$rootEle.html(this.temp.wrap);
            this.$rootEle.find(".wr-activity").append(this.temp.listWrap);
            this.renderArray(".wr-activity-ul",this.temp.listItem);
            /*获取活动结束时间*/
            $.each(this.options.dataList,function(index,item){
                var activityOverTime = item.activityOvertime;
                var timeWrap = self.$rootEle.find(".wr-headerTime");
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
        },
        renderJson:function(data,temp){   //渲染JSON数据
            for(var prop in data){
                var re = new RegExp("{"+prop+"}","g");
                temp = temp.replace(re,data[prop])
            }
            return temp;
        },
        renderArray:function(className,temp){    //渲染Array数据
            var self = this;
            $.each(self.options.dataList,function(index,item){
                self.$rootEle.find(className).append( self.renderJson(item,temp) )
            })
        },
    }

    /*创建营销广告类  ending=================*/

    /*创建父类 ======starting========*/

    var WeRender = function(ele,model,options){
        this.$element = $(ele);
        this.defaults = {

        };
        this.options = $.extend({},this.defaults,options);
        this.init(model);
    }


    WeRender.prototype = {
        init:function(model){
            this.$element.html("<div data-weRender='true'></div>");
            this.rootDom = this.$element.find("[data-weRender]");
            switch (model){
                case "goods":
                    new Goods(this.rootDom,this.options);
                    break;
                case "header":
                    new Header(this.rootDom,this.options);
                    break;
                case "search":
                    new Search(this.rootDom,this.options);
                    break;
                case "richTxt":
                    new RichTxt(this.rootDom,this.options);
                    break;
                case "imgAd":
                    new ImgAd(this.rootDom,this.options);
                    break;
                case  "textNav":
                    new TextNav(this.rootDom,this.options);
                    break;
                case "audio":
                    new Audio(this.rootDom,this.options);
                    break;
                case "notice":
                    new Notice(this.rootDom,this.options);
                    break;
                case "activityAd":
                    new ActivityAd(this.rootDom,this.options);
                    break;
            }
        }
    }

    /*父类=====ending=====*/

    return WeRender;


})(jQuery,Swiper)
