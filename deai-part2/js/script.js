$(function() {
	/*================================================================
	情報
	================================================================*/
	var allList = [

		{
			id: "asobo",
			name: "ASOBO",
			life: "20代女性が多数",
			price: "美人OL系が多い",
			warranty: "迷惑メールなし",
			title: "<a target=\"_blank\" href=\"http://aso-bo.com/index.php?1415\">ASOBO</a>",
			star: "5",
			category: "育毛トニック",
			nayami: "抜け毛",
			tag: ["安全匿名制","20代女性多数"],
			description: "・ノリの良い女性が多いと口コミ<br>・掲示板が無料、0円で会える！<br>・合コンオフ会掲示板で多くの人に会える",
			link: "http://aso-bo.com/index.php?1415"
		},
		{
			id: "happymail",
			name: "ハッピーメール",
			life: "20代OLが多数",
			price: "清楚系と会える",
			warranty: "大手会社が運営",
			title: "<a target=\"_blank\" href=\"https://preaf.jp/pa.do?s=v01326&o=38443&guid=ON\">ハッピーメール</a>",
			star: "5",
			category: "育毛剤",
			nayami: "ふけ・かゆみ",
			tag: ["サクラなし","20代女性多数"],
			description: "・出会える率がとても高い<br>・若くてきれい系な女性が多いと話題<br>・SNS登録なしでもOK、匿名制",
			link: "https://preaf.jp/pa.do?s=v01326&o=38443&guid=ON0"
		},
		{
			id: "wkwkmail",
			name: "わくわくメール",
			life: "おしゃれなお嬢様",
			price: "健全な女性が多い",
			warranty: "サクラ0運営",
			title: "<a target=\"_blank\" href=\"https://mobee2.jp/ad/p/r?medium=2579&ad=608\">わくわくメール</a>",
			star: "4.5",
			category: "育毛トニック",
			nayami: "抜け毛",
			tag: ["清楚系","匿名制"],
			description: "・見た目は黒髪美人が多い<br>・国内最大級の会員数！<br>・メールは24通無料！無料で会えることも！",
			link: "https://mobee2.jp/ad/p/r?medium=2579&ad=608X"
		},
		{
			id: "mintjc",
			name: "Jメール",
			life: "女子大生",
			price: "匿名で安全、SNS登録不要",
			warranty: "あり",
			title: "<a target=\"_blank\" href=\"https://preaf.jp/pa.do?s=v01326&o=40569&guid=ON\">Jメール</a>",
			star: "4",
			category: "育毛剤",
			nayami: "M字型",
			tag: ["女子大生","匿名制"],
			description: "・女子大生から20代前半が登録<br>・ニックネーム制で本名不要<br>・メール無料などの特典がよくある",
			link: "https://preaf.jp/pa.do?s=v01326&o=40569&guid=ON"
		},
		{
			id: "ikukuru",
			name: "イククル",
			life:  "ギャル系",
			price: "ギャル、ギャル男中心",
			warranty: "あり",
			title: "<a target=\"_blank\" href=\"https://preaf.jp/pa.do?s=v01326&o=39402&guid=ON\">イククル</a>",
			star: "4",
			category: "育毛トニック",
			nayami: "ふけ・かゆみ",
			tag: ["ギャル系","18歳~20代前半"],
			description: "・18歳～20歳や20代も多い<br>・掲示板で相手が事前に知れる<br>・出会い800万人突破の実績あり",
			link: "https://preaf.jp/pa.do?s=v01326&o=39402&guid=ON"
		},
		{
			id: "yyc",
			name: "mixiのＹＹＣ",
			life: "真面目な女性が多い",
			price: "健全な出会いを求める方向け",
			warranty: "mixi運営",
			title: "<a target=\"_blank\" href=\"https://mobee2.jp/ad/p/r?medium=2809&ad=145\">mixiのＹＹＣ</a>",
			star: "4",
			category: "育毛剤",
			nayami: "頭頂部",
			tag: ["まじめ","安全"],
			description: "・途中まで無料でメールできる<br>・mixiグループ運営で安全<br>・つぶやき、コミュニティなど無料で交流可能",
			link: "https://mobee2.jp/ad/p/r?medium=2809&ad=145"
		},
		{
			id: "hananokai",
			name: "中高年向け華の会メール",
			life: "真面目で大人な女性",
			price: "30代以上の出会いサイト",
			warranty: "非常に高い",
			title: "<a target=\"_blank\" href=\"https://px.a8.net/svt/ejp?a8mat=2ZIWSG+70FU1M+1T5K+1BV91E\">中高年向け華の会メール</a>",
			star: "3.5",
			category: "育毛剤",
			nayami: "抜け毛",
			tag: ["大人女性","真剣度"],
			description: "・30歳から75歳までユーザー<br>・大人向サイトで真剣な人多数<br>・Tポイントがたまる制度あり",
			link: "https://px.a8.net/svt/ejp?a8mat=2ZIWSG+70FU1M+1T5K+1BV91E"
		},
		{
			id: "pcmax",
			name: "PC MAX",
			life: 300,
			price: "出会いマッチングに最適",
			warranty: "高い",
			title: "<a target=\"_blank\" href=\"https://track.bannerbridge.net/click.php?APID=54850&affID=92390&siteID=181045\">PC MAX</a>",
			star: "3.5",
			category: "育毛剤",
			nayami: "抜け毛",
			tag: ["匿名制","無料"],
			description: "・登録している女性が多数と有名！<br>・フリーメール・匿名での登録OK<br>・年会費なし・無料 ※年齢認証が必須",
			link: "https://track.bannerbridge.net/click.php?APID=54850&affID=92390&siteID=181045"
		}
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