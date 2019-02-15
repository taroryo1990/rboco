$(function() {
	/*================================================================
	情報
	================================================================*/
	var allList = [
		{
			id: "happymail2",
			name: "ハッピーメール",
			life: "安全",
			price: "20代女性と会いたい方",
			warranty: "大手運営",
			title: "<a target=\"_blank\" href=\"http://www.medipartner.jp/click.php?APID=22428&affID=0004571\">1位:ハッピーメール</a>",
			star: "5",
			category: "育毛剤",
			nayami: "頭頂部",
			tag: ["女性若い","人気"],
			description: "プロフィール検索が細かい、目的別に検索可能<br>・SNS連携なしで匿名で遊べる<br>・20代女性中心で若い方が多い",
			link: "http://www.medipartner.jp/click.php?APID=22428&affID=0004571"
		},

		{
			id: "merupara2",
			name: "メルパラ",
			life: "安全",
			price: "セ◯レを探したい方向け",
			warranty: "大手運営",
			title: "<a target=\"_blank\" href=\"https://track.bannerbridge.net/click.php?APID=159209&affID=92390&siteID=181045\">2位:メルパラ</a>",
			star: "5",
			category: "育毛剤",
			nayami: "頭頂部",
			tag: ["セ◯レ","人気"],
			description: "・ア◯ルト掲示板があり、ワンナイトも可能<br>・人妻に会いたい人などオトナ向け<br>・掲示板で簡単にお相手を探せる",
			link: "https://track.bannerbridge.net/click.php?APID=159209&affID=92390&siteID=181045"
		},
		{
			id: "mintjc",
			name: "Jメール",
			life: "安全",
			price: "ワンナイト目的も可能",
			warranty: "大手運営",
			title: "<a target=\"_blank\" href=\"https://track.bannerbridge.net/click.php?APID=152699&affID=92390&siteID=181045\">3位:ミントC-Jメール</a>",
			star: "4.5",
			category: "育毛剤",
			nayami: "頭頂部",
			tag: ["ワン◯イト","人気"],
			description: "・看護師、保育士、OLが多い<br>・ニックネーム制で本名不要<br>・黒髪清楚な方が多いと口コミ",
			link: "https://track.bannerbridge.net/click.php?APID=152699&affID=92390&siteID=181045"
		},

		{
			id: "wkwkmail2",
			name: "わくわくメール",
			life: "出会いにおすすめ",
			price: "登録無料",
			warranty: "大手運営",
			title: "<a target=\"_blank\" href=\"https://mobee2.jp/ad/p/r?medium=3856&ad=608&suid=\">4位:わくわくメール</a>",
			star: "4.5",
			category: "育毛トニック",
			nayami: "抜け毛",
			tag: ["安全","人気"],
			description: "ご飯デート機能（おねだり機能）でおごってくれる方を探せる<br>お金持ちの男性・女性が多いので、おごってもらうことが多いとの口コミ！",
			link: "https://mobee2.jp/ad/p/r?medium=3856&ad=608&suid="
		},
		{
			id: "hananokai2",
			name: "華の会メール",
			life: "安全な",
			price: "30代以上メイン",
			warranty: "非常に高い",
			title: "<a target=\"_blank\" href=\"https://px.a8.net/svt/ejp?a8mat=2ZIWSG+70FU1M+1T5K+1CGWCX\">5位:華の会メール</a>",
			star: "4",
			category: "育毛剤",
			nayami: "抜け毛",
			tag: ["大人女性","真剣度"],
			description: "・30歳以上限定サイト<br>・男性の年齢が高いため、ハイスペック男性探しに最適<br>・Tポイントがたまる制度あり",
			link: "https://px.a8.net/svt/ejp?a8mat=2ZIWSG+70FU1M+1T5K+1CGWCX"
		},

		{
			id: "wink2",
			name: "ウィンク",
			life: "安全",
			price: "愛人・人妻と出会いたい方",
			warranty: "大手運営",
			title: "<a target=\"_blank\" href=\"https://track.bannerbridge.net/click.php?APID=156116&affID=92390&siteID=18104\">6位:ウィンク</a>",
			star: "4",
			category: "育毛剤",
			nayami: "頭頂部",
			tag: ["熟女","人気"],
			description: "・30代以上の熟女が中心<br>・女性は登録無料で遊べる<br>・30代以上なので、お金持ちの女性が多い",
			link: "https://track.bannerbridge.net/click.php?APID=156116&affID=92390&siteID=18104"
		},

		{
			id: "ikukuru2",
			name: "イククル",
			life: "安全",
			price: "完全匿名",
			warranty: "大手運営",
			title: "<a target=\"_blank\" href=\"https://track.bannerbridge.net/click.php?APID=19628&affID=92390&siteID=181045\">7位:イククル</a>",
			star: "3.5",
			category: "育毛剤",
			nayami: "頭頂部",
			tag: ["稼げる","人気"],
			description: "・「匿名」で秘密の出会いができる<br>・オトナ専用の有料コミュニティサイト<br>・お金持ちの男性が多いのでオススメ",
			link: "https://track.bannerbridge.net/click.php?APID=19628&affID=92390&siteID=181045"
		},

			];

	/*================================================================
	スクリプトはじまり
	================================================================*/
	function init() {

		//イベント登録
		$(".filter_life select").on("change", onFilterChange);
		$(".filter_category select").on("change", onFilterChange);
		$(".filter_nayami select").on("change", onFilterChange);
		$(".filter_tag input").on("change", onFilterChange);
		$(".filter_keyword button").on("click", onFilterChange);


		//最初は全て出力
		refleshHtml(allList);
	}

	/*================================================================
	HTML出力
	================================================================*/
	function refleshHtml(list) {

		var outputHtml = '';

		//出力する内容をoutputHtmlに格納
		if (list.length > 0) {
			_.each(list, function(line, i) {
				outputHtml += '<div class="product">';
				outputHtml += '	<div class="product-left"><div class="photo"><a target="_blank" href="' + line.link + '"><img src="images/' + line.id + '.jpg" alt="' + line.name + '" /></a></div>';
				outputHtml += '		<div class="tag-list-sp">';
				outputHtml += '			<ul class="tag">';
				_.each(line.tag, function(tag, i){
				outputHtml += '				<li><span>' + tag + '</span></li>';
				});
				outputHtml += '			</ul>';
				outputHtml += '		</div>';
				outputHtml += '	</div>';
				outputHtml += '	<div class="info">';
				outputHtml += '		<h3 class="productTitle">' + line.title + '</h3>';
				outputHtml += '		<p class="product-star">評価　<img class="star-img" src="images/star-' + line.star + '.png"></p>';
				outputHtml += '		<div class="tag-list">';
				outputHtml += '			<ul class="tag">';
				_.each(line.tag, function(tag, i){
				outputHtml += '				<li><span>' + tag + '</span></li>';
				});
				outputHtml += '			</ul>';
				outputHtml += '		</div>';
				outputHtml += '		<div class="detail-list">';
				outputHtml += '			<table>';
				outputHtml += '				<tr><td class="amount">女性</td><td>:' + line.life + '</td></tr>';
				outputHtml += '				<tr><td class="warranty">安全性</td><td>:' + line.warranty + '</td></tr>';
				outputHtml += '				<tr><td class="price">特徴</td><td class="price">:' + line.price + '</td></tr>';
				outputHtml += '			</table>';
				outputHtml += '		</div>';
				outputHtml += '	</div><div class="clear"></div>';
				outputHtml += '<div class="description-box"><p class="description">' + line.description + '</p></div>';
				outputHtml += '<div class="conversion"><a class="myButton hvr-grow-shadow" target="_blank" href="' + line.link + '">詳細はこちら</a></div>';
				outputHtml += '<div class="clear"></div></div>';
				outputHtml += '<!--/.product--></div>';
			});
		} else {
			outputHtml += '<div class="noproduct"><p>条件に当てはまる商品を検索できませんでした。</p></div>';
		}

		//HTML出力（フェードインアニメーションつき）
		$('.productArea').html(outputHtml);
		$('.productArea .product').css({opacity: 0}).each(function(i){$(this).delay(100 * i).animate({opacity:1}, 300);
		});

		//検索件数表示
		$('.productCntArea').html('<p id="serch-result">' + allList.length + '件中' + list.length + '件を表示しています。</p>');
	}

	/*================================================================
	絞り込み条件を変更した時
	================================================================*/
	function onFilterChange(e) {

		var filterFncs = [];
		var result = [];

		//セレクトボックスの値を引数に指定した関数filterByLifeをfilterFuncs配列に格納
		filterFncs.push(
			function(list) {
				return filterByLife(list, $('.filter_life select').val());
			}
		);

		//セレクトボックスの値を引数に指定した関数filterByCategoryをfilterFuncs配列に格納
		filterFncs.push(
			function(list) {
				return filterByCategory(list, $('.filter_category select').val());
			}
		);

		//セレクトボックスの値を引数に指定した関数filterByNayamiをfilterFuncs配列に格納
		filterFncs.push(
			function(list) {
				return filterByNayami(list, $('.filter_nayami select').val());
			}
		);

		//チェックボックスの値を引数に指定した関数filterByTagをfilterFuncs配列に格納
		filterFncs.push(
			function(list) {
				return filterByTag(list, $('.filter_tag input:checked'));
			}
		);

		//キーワードの値を引数に指定した関数filterByKeywordをfilterFuncs配列に格納
		filterFncs.push(
			function(list) {
				return filterByKeyword(list, _.escape($('.filter_keyword input').val()));
			}
		);

		//FilterFuncs配列内の関数をバケツリレーみたいに1つずつ実行して結果をresult配列に格納
		result = _.reduce(filterFncs, function(list, fnc) {
			return fnc(list);
		}, allList);

		//絞り込んだ結果を出力
		refleshHtml(result);
	}

	/*================================================================
	絞り込み[1] セレクトボックス絞り込み関数
	================================================================*/
	function filterByLife(list, value) {

		//絞り込み指定がない場合はリターン
		if (value == "") {
			return list;
		}

		//選択したセレクトボックスとlifeがマッチするかでフィルタリング
		return _.filter(list, function(item) {
			switch (value) {
				case '1':
					return item.life <= 100;
				case '2':
					return 100 < item.life && item.life <= 150;
				case '3':
					return 150 < item.life && item.life <= 200;
				case '4':
					return 200 < item.life;
			}
		});
	}

	function filterByCategory(list, value) {

		//絞り込み指定がない場合はリターン
		if (value == "") {
			return list;
		}

		//選択したセレクトボックスとcategoryがマッチするかでフィルタリング
		return _.filter(list, function(item) {
			switch (value) {
				case '1':
					return item.category == "育毛剤";
				case '2':
					return item.category == "育毛トニック";
			}
		});
	}

	function filterByNayami(list, value) {

		//絞り込み指定がない場合はリターン
		if (value == "") {
			return list;
		}

		//選択したセレクトボックスとnayamiがマッチするかでフィルタリング
		return _.filter(list, function(item) {
			switch (value) {
				case '1':
					return item.nayami == "抜け毛";
				case '2':
					return item.nayami == "ふけ・かゆみ";
				case '3':
					return item.nayami == "頭頂部";
				case '4':
					return item.nayami == "M字型";
			}
		});
	}

	/*================================================================
	絞り込み[2] チェックボックス絞り込み関数
	================================================================*/
	function filterByTag(list, value) {

		//絞り込み指定がない場合はリターン
		if (value.length == 0) {
			return list;
		}

		//選択した属性（チェックボックス）とtagがマッチするかでフィルタリング
		return _.filter(list, function(item) {

			var isMatch = false;

			//配列同士の比較
			_.each(value, function(chkItem, i) {

				_.each(item.tag, function(tagItem, i) {
					if (tagItem === $(chkItem).val()) {
						isMatch = true;
					}
				});

			});

			return isMatch;
		});
	}

	/*================================================================
	絞り込み[3] テキストボックス絞り込み関数
	================================================================*/
	function filterByKeyword(list, value) {

		//絞り込み指定がない場合はリターン
		if (value == "") {
			return list;
		}

		//検索キーワードを配列に格納（スペースがある場合は複数格納）
		var freeAry = [];　
		var val = value.replace(/　/g, " ");
		searchAry = val.split(" ");

		//入力したキーワードがtitleもしくはdescriptionにマッチするかでフィルタリング
		return _.filter(list, function(item) {

			var isMatch = false;

			_.each(searchAry, function(data, i) {
				if (item.title.indexOf(data) != -1 || item.category.indexOf(data) != -1 || item.nayami.indexOf(data) != -1 || item.description.indexOf(data) != -1) {
					isMatch = true;
				}
			});

			return isMatch;

		});

	}

	/*================================================================
	スクリプトはじめ
	================================================================*/
	init();

});


/*================================================================
クリックでスクロール
================================================================*/

$(function() {
  $('div[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });

    //ページ内ジャンプ
    // #で始まるアンカーをクリックした場合に処理
   $('button[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });

   	 //トップへ戻る
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

});
