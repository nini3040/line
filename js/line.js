$(function(){
    /* ===========================================================
                언어상자 노출 스크립트 
    ===========================================================*/
    // 인풋, 화살표, 리스트 전체를 변수 지정 후
    var $input = $("input#lang"); //input 박스
    var $arrow = $(".opt span.arrow"); // 화살표
    var $langlist = $(".langlist"); // 리스트 전체 박스
    
    // 언어리스트의 a 선택 시 클릭한 텍스트로 내용 변경
    $langlist.find("a").on('click',function(){ // .find() - 앞에 선택한 요소 내에서 지정한 요소를 다시 찾아 선택
        $input.val($(this).text()); // 인풋 내에서 클릭한  텍스트로 변경
    // 클릭이 이루어진 a의 부모인 li에 on 클래스 생성해주고, 나머지 형제들은 on 삭제    
        $(this).parent().addClass("on").siblings().removeClass("on"); // .parent() -> a의 부모 li
    // 언어리스트 클릭 시 보기/가리기
        $langlist.toggle();
    });

    // 인풋 내에 화살표 추가, 이를 클릭 시 언어리스트 보이면 숨기고, 숨겨져 있으면 나타나도록 함
        $input.add($arrow).on("click",function(){
            $langlist.toggle();
    // 화살표 클릭 시 위를 향하는 화살표 클래스를 추가  
            $arrow.toggleClass("arrow-up");
        });

    // 마우스가 선택한 언어박스에서 나갔을 때 언어리스트 가려주고 위를 향하는 화샬표도 삭제
        $(".opt").on("mouseleave",function(){
            $langlist.hide();
            $arrow.removeClass("arrow-up");
        });

    // .text() - 텍스트를 불러오거나 바꿀 때 사용
    // .parent() - 부모 선택
    // .toggle() - 선택한 요소가 보이면 숨기고 숨겨져 있으면 나타나도록 함
    // .toggleClass() - 지정한 클래스가 없으면 생성, 있으면 없앰
    // .val() - 인풋 속성값 불러오거나 변경

    /* ===========================================================
                토글 버튼 클릭 시 메뉴 나타남
    ===========================================================*/
    var $btnGnb = $(".container>.btn-gnb");
    var $nav = $(".container>nav");
    $btnGnb.on("click",function(){
        $(this).toggleClass("close");
        $nav.toggle();
    });

    /* ===========================================================
                모바일 버전의 내용을 완전히 다른 내용으로 변경
    ===========================================================*/
    // 각 컨텐츠 영역의 제목 변수 지정
    var $msgH3 = $(".line_msg>div>.explain>h3");
    var $telH3 = $(".line_tel>div>.explain>h3");
    var $stickerH3 = $(".line_sticker>div>.explain>h3");
    var $shareH3 = $(".line_share>div>.explain>h3");
    var $couponH3 = $(".line_coupon>div>.explain>h3");    

    // pc버전의 메인 서비스 제목 불러오기
    var msgH3_PC = $msgH3.html();
    var telH3_PC = $telH3.html();
    var stickerH3_PC = $stickerH3.html();
    var shareH3_PC = $shareH3.html();
    var couponH3_PC = $couponH3.html();

    // .next() - 동생
    // mobile 버전의 h3 동생인 p 요소 불러오기
    var msgText_PC = $msgH3.next().html();
    var telText_PC = $telH3.next().html();
    var stickerText_PC = $stickerH3.next().html();
    var shareText_PC = $shareH3.next().html();
    var couponText_PC = $couponH3.next().html();

    // 변경될 내용 변수 지정 -h3
    var msgH3_MO ="무료 메세지";
    var telH3_MO ="LINE VOOM";
    var stickerH3_MO ="스티커로 더 즐거운 대화";
    var shareH3_MO ="무엇이든 공유";
    var couponH3_MO ="인기브랜드 쿠폰";

    // 변경될 내용 변수 지정 -p
    var msgText_MO ="1:1 대화는 물론, 그룹 대화까지 <br/>무제한 무료로 즐겨보세요."
    var telText_MO ="듣고싶은 목소리, 보고싶은 얼굴이 있다면 <br/>망설이지 마세요."
    var stickerText_MO ="10,000개가 넘는 스티커와 이모티콘으로 <br/>미묘한 감정까지 표현해보세요."
    var shareText_MO ="사진, 동영상은 물론 <br/>음성 메시지와 연락처, 위치정보까지 <br/>손쉽게 보낼 수 있습니다."
    var couponText_MO ="인기 아티스트, 브랜드의 최신 소식과 <br/>쿠폰이 기다리고 있습니다."

    var gapH =0;
    // 가로 폭에 따른 높이값 변수 지정 (초기화) / pc -> 70px, mobile -> 50px
    $(window).on("load resize",function(){
        if($(this).width() > 640) { // pc
            gapH = 70;
            $nav.show(); 
    
            $msgH3.html(msgH3_PC);
            $telH3.html(telH3_PC);
            $stickerH3.html(stickerH3_PC);
            $shareH3.html(shareH3_PC);
            $couponH3.html(couponH3_PC);
    
            $msgH3.next().html(msgText_PC);
            $telH3.next().html(telText_PC);
            $stickerH3.next().html(stickerText_PC);
            $shareH3.next().html(shareText_PC);
            $couponH3.next().html(couponText_PC);    
    
        }else { //  mobile
            gapH = 50;
            $btnGnb.removeClass("close").next().hide();
    
            $msgH3.html(msgH3_MO);
            $telH3.html(telH3_MO);
            $stickerH3.html(stickerH3_MO);
            $shareH3.html(shareH3_MO);
            $couponH3.html(couponH3_MO);
    
            $msgH3.next().html(msgText_MO);
            $telH3.next().html(telText_MO);
            $stickerH3.next().html(stickerText_MO);
            $shareH3.next().html(shareText_MO);
            $couponH3.next().html(couponText_MO);
        }
    });
    
    // .html() - 선택한 요소에 포함되는 하위 요소를 불러오거나 하위요소를  새 요소로 변경

    /* ===========================================================
                메뉴 클릭 시 색 변경, 위치 이동 
    ===========================================================*/
    var $topmenu = $(".gnb>li>a");
    var gapH =0;
    var arrContH = new Array(); // 빈 배열 선언
    // or var arrContH = [] : 배열을 선언하면서 값을 넣을 떄 씀

    // 스크롤 높이 값에 따른 메뉴의 색상 변화
    $(window).on("scroll",function(){
        var scrollH = $(this).scrollTop(); // 현재 스크롤 탑값
        for(var i=0; i < $topmenu.size(); i++){
            if (scrollH >= arrContH[i + 1] - gapH) {
                $topmenu.eq(i).parent().addClass("on").siblings().removeClass("on");
                // 해당 메뉴에 on 클래스 추가, 나머지는 삭제
            } else if (scrollH < arrContH[1] - gapH) {
                $topmenu.parent().removeClass("on");
            }
        }
    });

    // 메인 배너와 article의 top 값을 배열에 저장
    function setPosArticle() {
        arrContH = []; // 배열 비움
        arrContH.push($("header+hr+section").offset().top); // 메인 배너의 높이값 추가
        $("#mainsrv>article").each(function(){
            arrContH.push($(this).offset().top);
        });
    }
    setPosArticle(); // 함수호출

    // 메뉴 클릭 시 각 article 영역으로 애니메이션 되며 이동
    $topmenu.on("click",function(evt){
        var nowIdx = $topmenu.index($(this));
        $("html,body").stop().animate({
            scrollTop: arrContH[nowIdx + 1] - gapH + 1
        },400,"easeOutQuad");
        if($(window).width() <= 640) {
            $btnGnb.trigger("click");
        }
        evt.preventDefault(); //링크차단메서드
    });

    // 로고 클릭 시 최상단으로 이동
    $("h1").on("click",function(evt){
        $("html,body").stop().animate({
            scrollTop: 0
        },400,"easeOutQuad");
        evt.preventDefault(); //링크차단메서드
    });

    // .scrollTop() - 브라우저의 스크롤바가 수직/수평으로 이동한 위치값을 불러오거나 변경
    // .push() - 배열 객체 마지막 index에 새 데이터 삽입
    // .each() - 여러 개의 요소들에 순차적으로 하나씩 접근
    // .offset() - 문서를 기준으로 선택한 요소의 가로/세로의 떨어진 위치의 좌표값 변환 및 변경 시 사용
    // .trigger() - 강제로 특정 이벤트를 발생 시킴

    /* ===========================================================
                슬라이드, 인디케이터
    ===========================================================*/
    // var $mainbanrswipe = $("mainbanner-swipe"); => 기존방식
    // swipe.js를 쓰려면 순수 자바스크립트 방식으로 문법을 써줘야 함
    
    // swipe 영역 전체
    var $mainbanrSwipe = document.getElementById("mainbanner-swipe");

    // 인디케이터
    var $indicator = $("#mainbanner-swipe~.mainbanner-pagination>li>a")

    var nowIdx =0; //  Math.floor(Math.random()*4)
    var oldIdx = nowIdx;
    var intervalID = null;  // null은 변수에 지정된 데이터를 지우고자 할 때 사용
    var noEventTime =0; // 이벤트가 없는 시간(초)을 체크하는 변수
    var $btnAuto = $("#mainbanner-swipe~.btn_auto"); // 시작, 정지 버튼
    $btnAuto.data("state", "on");
    // 버튼에 내부 데이터 설정 - 재생중인 상태(on)와 정지(off) 상태

    // swipe 플러그인 사용 문법
    window.swipeArea = Swipe($mainbanrSwipe,{
        callback:function(idx){
            setIndicator(idx); // 인디케이터 활성화 함수 호출
        }
    });  

    // slide 애니메이션
    function move(){
        swipeArea.slide(nowIdx,400); // 슬라이드를 활용하여 배너 이동
        setIndicator(nowIdx); // 인디케이터 활성화 함수 호출
        oldIdx=nowIdx;
    }

    // 재생, 정지 함수
    function autoStop(){
        clearInterval(intervalID);
        $btnAuto.removeClass("pause").text("재생시작").data("state","off")
        // 버튼에 내부 데이터 설정 - 재생중인 상태(on)와 정지(off) 상태
    }

    // 자동재생 상태변환 함수
    function autoStateChange(){
        noEventTime = 0; // 이벤트 시간 체크 변수 초기화
        autoStop(); //자동재생 정지 함수 호출
    }

    // 인디케이터 활성화 표시
    function setIndicator(idx){
        $indicator.eq(idx).parent().addClass("on").siblings().removeClass("on");
    }
    /* setIndicator 로 함수 저장 - 인디케이터 자체인 a라는 태그로 변수 지정된 indicator의 부모인 li에 on클래스 삽입하고, 나머지는 on 삭제  */

    // 인디케이트 클릭 이벤트 설정 -> ●●●● 클릭 시 동작 시킴
    /* a 클릭시 function 안의 함수 실행 - 파라미터 자리에 들어간 함수를 콜백함수라고 한다.     
   클릭한 a는, 아래의 실행문 적용 - 인디케이터를 클릭한 요소에 순서값 가져옴 
   만약, oldIdx가 nowIdx와 다르면, 슬라이드를 실행시키고, 자동재생 상태변환 함수호출, 링크차단 함.    */
    $indicator.on("click",function(){
        nowIdx=$indicator.index($(this));
        if(oldIdx != nowIdx) {
            move(); // 슬라이드 함수 호출
        }
        autoStateChange(); // 자동재생 상태 변환 함수 호출
        evt.preventDefault();
    });

    // 자동재생 함수
    function autoPlay(){
        intervalID = setInterval(function(){
            swipeArea.slide(nextIdx(),400);
        },3000);
    }

    // 시간 체크 함수
    function  timeCheck(){
        setInterval(function(){
            noEventTime++; // & -> 그리고 / == -> 같다
            if(noEventTime>4&&$btnAuto.data("state")=="off") {
                $btnAuto.trigger("click");
            } 
        },1000);
    }

    $(window).on("load",function(){
        setIndicator(nowIdx); // 인디케이터 활성화 표시 함수 호출
        swipeArea.slide(nowIdx,400);
        autoPlay();
        timeCheck(); // 시간 체크 함수
    });

    // 일체형 재생, 정지 버튼에 대한 클릭 이벤트 설정
    $btnAuto.on("click",function(evt){
        var stateVal = null;
        if($(this).data("state")=="on"){
            $(this).removeClass("pause").text("재생시작"); // .pause 클래스 삭제
            stateVal="off"; // 내부 데이터 값 : off로 함
            autoStop(); // 자동재생 정지
            noEventTime=0;
        } else {
            $(this).addClass("pause").text("일시정지"); // .pause 클래스 추가
            stateVal="on" // 내부 데이터 값 : on으로 함
            autoPlay(); //자동재생 함수 호출
        }
        $(this).data("state",stateVal);
        evt.preventDefault();
    });

    // 이전, 다음 버튼

    // 이전 인덱스 번호 설정 함수
    function prevIdx(){
        if(nowIdx<1){
            nowIdx=$indicator.size()-1;
        } else {
            nowIdx--;
        }
    }

    // 다음 인덱스 번호 설정 함수
    function nextIdx(){
        if(nowIdx>=$indicator.size()-1){
            nowIdx=0;
        } else {
            nowIdx++;
        }
        return nowIdx;
    }

    // 이전 버튼 클릭 이벤트 설정
    $(".mainbanner-prev").on("click",function(evt){
        autoStateChange();
        prevIdx();
        move();
        autoStop();
        $btnAuto.data("state","on").trigger("click");
        evt.preventDefault();
    });

    // 다음 버튼 클릭 이벤트 설정
    $(".mainbanner-next").on("click",function(evt){
        autoStateChange();
        nextIdx();
        move();
        autoStop();
        $btnAuto.data("state","on").trigger("click");
        evt.preventDefault();
    });

    //Math.floor(num) : 소수점에서 무조건 내림
    // Math.random(num) : 0~1 사이 난수 발생 
    // .trigger() - 강제로 특정 이벤트를 발생 시킴
});