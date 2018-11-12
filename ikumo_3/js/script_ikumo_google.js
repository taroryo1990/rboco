$(function() {
	/*================================================================
	情報
	================================================================*/
	var allList = [

		{
			id: "id004",
			name: "THE SCALP 5.0C",
			life: 140,
			list_price: "10,000円<br class=\"br-400px\">(税込)",
			price: "4,980円<br class=\"br-400px\">(税込)&nbsp;<br class=\"spbr\"><span>50%OFF!</span>",
			warranty: "あり",
			title: "<a target=\"_blank\" href=\"https://px.a8.net/svt/ejp?a8mat=2ZAWNH+7TM1WY+2TKE+1BNYOX\">THE SCALP 5.0C</a>",
			star: "3.5",
			category: "育毛トニック",
			nayami: "抜け毛",
			tag: ["育毛トニック","抜け毛"],
			description: "・3年連続モンドセレクション金賞<br>・通常定期10000円→定期初回半額4980円<br>・キャピキシル配合",
			link: "https://px.a8.net/svt/ejp?a8mat=2ZAWNH+7TM1WY+2TKE+1BNYOX"
		},
		{
			id: "id006",
			name: "ナノインパクト100",
			life: 240,
			list_price: "7,560円<br class=\"br-400px\">(税込)",
			price: "3,780円<br class=\"br-400px\">(税込)&nbsp;<br class=\"spbr\"><span>50%OFF!</span>",
			warranty: "あり",
			title: "<a target=\"_blank\" href=\"https://link-a.net/gate.php?guid=on&mcode=mxzaz4qn&acode=4brgdnzvyyw2&itemid=0\">ナノインパクト100</a>",
			star: "4.5",
			category: "育毛剤",
			nayami: "頭頂部",
			tag: ["育毛剤","頭頂部"],
			description: "・微細なナノ粒子で髪に必要な成分を届ける<br>・全額返金キャンペーン実施中",
			link: "https://link-a.net/gate.php?guid=on&mcode=mxzaz4qn&acode=4brgdnzvyyw2&itemid=0"
		},
		{
			id: "id008",
			name: "BOSTONスカルプエッセンス",
			life: 230,
			list_price: "9,800円<br class=\"br-400px\">(税抜)",
			price: "8,800円<br class=\"br-400px\">(税抜)&nbsp;<br class=\"spbr\"><span class=\"discount\">1000円OFF!</span>",
			warranty: "あり",
			title: "<a target=\"_blank\" href=\"https://px.a8.net/svt/ejp?a8mat=2ZAWNG+FG2VSI+1XEW+1NJRXE\">BOSTONスカルプエッセンス</a>",
			star: "5",
			category: "育毛トニック",
			nayami: "ふけ・かゆみ",
			tag: ["育毛トニック","ふけ・かゆみ"],
			description: "・「ISO認証取得済の国内工場で製造」<br>・「大満足レビュー続出」<br>・「返金保証付き」<br>・ノーベル賞受賞成分のフラーレン使用<br>・45日間全額返金保証",
			link: "https://px.a8.net/svt/ejp?a8mat=2ZAWNG+FG2VSI+1XEW+1NJRXE"
		},
		{
			id: "id005",
			name: "MONOVOヘアトニックグロウジェル",
			life: 70,
			list_price: "6,600円<br class=\"br-400px\">(税抜)",
			price: "6,200円<br class=\"br-400px\">(税抜)&nbsp;<br class=\"spbr\"><span>600円OFF！</span>",
			warranty: "あり",
			title: "<a target=\"_blank\" href=\"https://px.a8.net/svt/ejp?a8mat=2ZAUAS+2T7PMA+2UOE+1HL85U\">MONOVOヘアトニックグロウジェル</a>",
			star: "4",
			category: "育毛トニック",
			nayami: "抜け毛",
			tag: ["育毛トニック","抜け毛"],
			description: "・アンケート調査で実感満足度95％<br>・抜け毛予防<br>",
			link: "https://px.a8.net/svt/ejp?a8mat=2ZAUAS+2T7PMA+2UOE+1HL85U"
		},
		{
			id: "id003",
			name: "MSTT1",
			life: 160,
			list_price: "9,800円<br class=\"br-400px\">(税込)",
			price: "5,980円<br class=\"br-400px\">(税込)&nbsp;<br class=\"spbr\"><span>38%OFF!</span>",
			warranty: "あり",
			title: "<a target=\"_blank\" href=\"https://px.a8.net/svt/ejp?a8mat=2ZAWNG+F75DPU+1GVC+25DPHV&a8ejpredirect=http%3A%2F%2Fwww.danpatsuryoku.com%2Fa8\">MSTT1</a>",
			star: "3",
			category: "育毛剤",
			nayami: "M字型",
			tag: ["育毛剤","M字型"],
			description: "・頭頂部専用の男性用育毛剤",
			link: "https://px.a8.net/svt/ejp?a8mat=2ZAWNG+F75DPU+1GVC+25DPHV&a8ejpredirect=http%3A%2F%2Fwww.danpatsuryoku.com%2Fa8"
		},

		{
			id: "id002",
			name: "フィンジア",
			life: 210,
			list_price: "12,800円<br class=\"br-400px\">(税込)",
			price: "9,980円<br class=\"br-400px\">(税込)&nbsp;<br class=\"spbr\"><span>22%OFF!</span>",
			warranty: "あり",
			title: "<a target=\"_blank\" href=\"https://link-a.net/gate.php?guid=on&mcode=mxzaz4qn&acode=ujfzlcywjmbz&itemid=0\">フィンジア</a>",
			star: "5",
			category: "育毛トニック",
			nayami: "ふけ・かゆみ",
			tag: ["育毛トニック","ふけ・かゆみ"],
			description: "・スカルプケア商品支持率第1位<br>・友人におすすめしたいスカルプケア商品第1位<br>・全額返金制度あり",
			link: "https://link-a.net/gate.php?guid=on&mcode=mxzaz4qn&acode=ujfzlcywjmbz&itemid=0"
		},
		{
			id: "id001",
			name: "チャップアップ",
			life: 150,
			list_price: "13,360円<br class=\"br-400px\">(税込)",
			price: "9,090円<br class=\"br-400px\">(税込)&nbsp;<br class=\"spbr\"><span>31%OFF!</span>",
			warranty: "あり",
			title: "<a target=\"_blank\" href=\"https://px.a8.net/svt/ejp?a8mat=2ZAUAS+CCQTO2+2TZO+61RIB\">チャップアップ</a>",
			star: "4.5",
			category: "育毛剤",
			nayami: "抜け毛",
			tag: ["育毛剤","抜け毛"],
			description: "・50種類の育毛成分配合<br>・全額返金保証！保証書付き",
			link: "https://px.a8.net/svt/ejp?a8mat=2ZAUAS+CCQTO2+2TZO+61RIB"
		},
		{
			id: "id007",
			name: "リデン（REDEN)",
			life: 300,
			list_price: "12,800円<br class=\"br-400px\">(税込)",
			price: "9,800円<br class=\"br-400px\">(税込)&nbsp;<br class=\"spbr\"><span>23%OFF!</span>",
			warranty: "あり",
			title: "<a target=\"_blank\" href=\"https://link-a.net/gate.php?guid=on&mcode=mxzaz4qn&acode=9rwpvxihecjp&itemid=0\">リデン（REDEN)</a>",
			star: "5",
			category: "育毛剤",
			nayami: "抜け毛",
			tag: ["育毛剤","抜け毛"],
			description: "・新成分リデンシル配合<br>・通常価格12,800円（税抜）⇒【23％OFFの初回9,800円（税抜）】送料無料",
			link: "https://link-a.net/gate.php?guid=on&mcode=mxzaz4qn&acode=9rwpvxihecjp&itemid=0"
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
				outputHtml += '				<tr><td class="amount">容量</td><td>:' + line.life + 'ml</td></tr>';
				outputHtml += '				<tr><td class="warranty">返金保証</td><td>:' + line.warranty + '</td></tr>';
				outputHtml += '				<tr><td class="list_price">定価</td><td>:' + line.list_price + '</td></tr>';
				outputHtml += '				<tr><td class="price">価格</td><td class="price">:' + line.price + '</td></tr>';
				outputHtml += '			</table>';
				outputHtml += '		</div>';
				outputHtml += '	</div><div class="clear"></div>';
				outputHtml += '<div class="description-box"><p class="description">' + line.description + '</p></div>';
				outputHtml += '<div class="conversion"><a class="myButton hvr-grow-shadow" target="_blank" href="' + line.link + '">この商品の詳細を見る</a></div>';
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