$(function () {
	/*================================================================
	情報
	================================================================*/
	var allList = [

		{
			id: "id004",
			name: "ピュリナワン",
			rank: "ranking-1",
			life: 1.6,
			list_price: "1880円",
			price: "1,489円&nbsp;<br class=\"spbr\"><span>20%OFF!</span>",
			warranty: "定期3回縛り（3回で解約可能）",
			title: "<a target=\"_blank\" href=\"https://px.a8.net/svt/ejp?a8mat=2ZPT47+6F07HU+357U+1BM18Z&a8ejpredirect=https%3A%2F%2Fshop.nestle.jp%2Ffront%2Fcontents%2FODC_teiki%2F%3Futm_source%3Da8net%26utm_medium%3Daffiliate%26utm_campaign%3Dpoc_affiliate_teiki_cat\">ピュリナワン</a>",
			star: "3.5",
			category: "キャットフード",
			nayami: "抜け毛",
			tag: [],
			description: "・元値が安いため、 定期3回購入しても4467円。<br>・送料も0円。 気軽にお試しできる。<br>・ 成長段階（ 子猫、 シニアetc） や室内用、 体重ケア用など猫ちゃんによって適切なフードを選べる ",
			link: "https://px.a8.net/svt/ejp?a8mat=2ZPT47+6F07HU+357U+1BM18Z&a8ejpredirect=https%3A%2F%2Fshop.nestle.jp%2Ffront%2Fcontents%2FODC_teiki%2F%3Futm_source%3Da8net%26utm_medium%3Daffiliate%26utm_campaign%3Dpoc_affiliate_teiki_cat",
			reviews: "【30代女性主婦コメント】<br>「風味が選べるのが気に入ってます」ピュリナワン・ キャットフードはラインナップがとても豊富なので、 さまざまな種類をローテーションさせて愛猫に与えています。 健康維持にもなるし、 風味も変わるため愛猫も喜んで食べてくれます。 "
		},
		{
			id: "id006",
			name: "ねこはぐ",
			rank: "ranking-2",
			life: 1.5,
			list_price: "6,980円",
			price: "3,980円&nbsp;<br class=\"spbr\"><span>43%OFF!</span>",
			warranty: "なし（解約可能）",
			title: "<a target=\"_blank\" href=\"http://pet-hug.com/nekohug_a14/\">ねこはぐ</a>",
			star: "4.5",
			category: "キャットフード",
			nayami: "頭頂部",
			tag: [],
			description: "・国際キャットフード人気No.1<br>・人でも食べられる健康食材<br>・いつでも解約できるので、気軽にお試し可能",
			reviews: "【40代女性コメント】<br>原材料なんかをみてもわかるとおり、 ねこはぐは安心して与えらるし、 すごい食いつきます！価格帯でちょっと高めですけど、 安全で安心です。国産にこだわるなら、 値段は仕方ないなと思ってます。 "
		},
		{
			id: "id008",
			name: "モグニャン",
			rank: "ranking-3",
			life: 1.5,
			list_price: "3,960円",
			price: "3,168円&nbsp;<br class=\"spbr\"><span>定期で最大20％OFF!</span>",
			warranty: "単品購入or定期縛りなし",
			title: "<a target=\"_blank\" href=\"https://h.accesstrade.net/sp/cc?rk=0100kqdl00i1f6\">モグニャン</a>",
			star: "5",
			category: "キャットフード",
			nayami: "ふけ・かゆみ",
			tag: [],
			description: "・定期で購入すると最大20％OFF（解約可能）<br>・93.9％ の継続率、 獣医師も推奨している健康フード<br>・ 白身魚、 フルーツなど食いつき良い食材を使用。<br>・ グレインフリー（ 穀類不使用） ",
			link: "https://h.accesstrade.net/sp/cc?rk=0100kqdl00i1f6",
			reviews: "【20代女性コメント】<br>賞味期限が、開封後約1カ月で、少し短いです。その代わり、 人口添加物不使用とあって、 安全で健康です。うちは子猫を飼っているのですが、 食いつきは間違いないです！ "
		},
		{
			id: "id005",
			name: "シンプリー",
			rank: "ranking-4",
			life: 1.5,
			list_price: "3,960円",
			price: "3,168円&nbsp;<br class=\"spbr\"><span>定期で最大20％OFF!</span>",
			warranty: "単品購入or定期縛りなし",
			title: "<a target=\"_blank\" href=\"https://h.accesstrade.net/sp/cc?rk=0100kmzl00i1f6\">シンプリー</a>",
			star: "4",
			category: "キャットフード",
			nayami: "抜け毛",
			tag: [],
			description: "・定期で購入すると最大20％ OFF（ 解約可能）<br>・動物栄養学者と作った子猫からシニアまで食べれる健康フード<br>・ フード用スクーププレゼント ",
			link: "https://h.accesstrade.net/sp/cc?rk=0100kmzl00i1f6",
			reviews: "【30代女性主婦コメント】<br>自然とうんちの状態がバナナくらいの良い硬さになってきたんです。開けた時の匂いにはびっくりしましたね、香料を使っているんじゃないかと思って調べてみたんですが無添加ということで安心しました。魚の割合が多いということでアイムスよりも良いフードみたいです。"
		},
		{
			id: "id003",
			name: "ジャガー",
			rank: "ranking-5",
			life: 1.5,
			list_price: "4,280円",
			price: "3,242円&nbsp;<br class=\"spbr\"><span>定期で最大20％OFF!</span>",
			warranty: "単品購入or定期縛りなし",
			title: "<a target=\"_blank\" href=\"https://h.accesstrade.net/sp/cc?rk=0100kn1e00i1f6\">ジャガー</a>",
			star: "3",
			category: "キャットフード",
			nayami: "M字型",
			tag: [],
			description: "・とにかく品質重視、上質な肉と新鮮な果物を使用(ヒューマングレード）<br>・安心のグレインフリー<br>・動物性たんぱく質80％以上のプレミア品 ",
			link: "https://h.accesstrade.net/sp/cc?rk=0100kn1e00i1f6",
			reviews: "【40代男性コメント】<br>今までのキャットフード史上、 最高の食いつきでした。うんちの匂いが消えました。うんちの色は黒くツヤツヤ、 よく見るとしっかり毛玉も排出できています。 "
		},

		{
			id: "id002",
			name: "カナガンキャットフード",
			rank: "ranking-6",
			life: 1.5,
			list_price: "3,960円",
			price: "3,168円&nbsp;<br class=\"spbr\"><span>定期で最大20％OFF!</span>",
			warranty: "単品購入or定期縛りなし",
			title: "<a target=\"_blank\" href=\"https://h.accesstrade.net/sp/cc?rk=0100kmyh00i1f6\">カナガンキャットフード</a>",
			star: "5",
			category: "キャットフード",
			nayami: "ふけ・かゆみ",
			tag: [],
			description: "・新鮮なイギリス産平飼いチキンを60%以上使用<br>・特に子猫の食いつきがよいと評判！<br>・ 缶詰での購入も可能。 ",
			link: "https://h.accesstrade.net/sp/cc?rk=0100kmyh00i1f6",
			reviews: "【40代女性コメント】<br>カナガンキャットフードにしてから、たまに起きていた皮膚炎にもならなくなり体調もいいです♪値段は以前あげていたキャットフードより高いですが、 病院通いよりはぜんぜん安上がり。 "
		},
		{
			id: "id001",
			name: "オリジンジャパン",
			rank: "ranking-7",
			life: '',
			list_price: "1,300円〜",
			price: "1,300円〜",
			warranty: "単品購入",
			title: "<a target=\"_blank\" href=\"https://px.a8.net/svt/ejp?a8mat=2ZPT48+5GH2EQ+43TO+BW8O2&a8ejpredirect=http%3A%2F%2Forijenjapan.com%2Flp%2F\">オリジンジャパン</a>",
			star: "4.5",
			category: "キャットフード",
			nayami: "抜け毛",
			tag: [],
			description: "・ペットフードのECサイト<br>・多種のキャットフードから猫ちゃんに合った商品を選べる<br>・全額返金キャンペーン中。 30 日以内であれば、 全額返金。 ",
			link: "https://px.a8.net/svt/ejp?a8mat=2ZPT48+5GH2EQ+43TO+BW8O2&a8ejpredirect=http%3A%2F%2Forijenjapan.com%2Flp%2F",
			reviews: "【20代女性コメント】<br>とにかく栄養素が高いから、仔猫や成長期の猫にはおすすめカロリーが高め＋ かなりの高たんぱくなので、中年～ シニア猫にはちょっと消化が大変かもしれない "
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
			_.each(list, function (line, i) {
				outputHtml += '<div class="product">';
				outputHtml += '	<div class="product-left"><div class="photo"><a target="_blank" href="' + line.link + '"><img src="images/' + line.id + '.jpg" alt="' + line.name + '" /></a><img class="rank-img" src="images/' + line.rank + '.png"></div>';
				outputHtml += '		<div class="tag-list-sp">';
				outputHtml += '			<ul class="tag">';
				_.each(line.tag, function (tag, i) {
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
				_.each(line.tag, function (tag, i) {
					outputHtml += '				<li><span>' + tag + '</span></li>';
				});
				outputHtml += '			</ul>';
				outputHtml += '		</div>';
				outputHtml += '		<div class="detail-list">';
				outputHtml += '			<table>';
				outputHtml += '				<tr><td class="amount">1袋容量</td><td>:' + line.life + 'kg</td></tr>';
				outputHtml += '				<tr><td class="warranty">定期縛り</td><td>:' + line.warranty + '</td></tr>';
				outputHtml += '				<tr><td class="list_price">定価</td><td>:' + line.list_price + '</td></tr>';
				outputHtml += '				<tr><td class="price">当サイト価格</td><td class="price">:' + line.price + '</td></tr>';
				outputHtml += '			</table>';
				outputHtml += '		</div>';
				outputHtml += '	</div><div class="clear"></div>';
				outputHtml += '<div class="description-box"><p class="description">' + line.description + '</p></div>';
				outputHtml += '<div class=""><a class="myButton hvr-grow-shadow" target="_blank" href="' + line.link + '">この商品の詳細を見る</a></div>';
				outputHtml += '<div id="accordion" role="tablist"><div class="card mt-2"><div class="btn btn-info p-3" role="tab" id="headingTwo"><h5 class="mb-0"><a class="collapsed text-white" data-toggle="collapse" href="#collapse' + i + '" aria-expanded="false"aria-controls="collapse' + i + '">口コミを見る</a></h5></div><div id="collapse' + i + '" class="collapse" role="tabpanel" aria-labelledby="headingTwo"><div class="card-body">' + line.reviews + '</div></div></div></div>';
				outputHtml += '<div class="clear"></div></div>';
				outputHtml += '<!--/.product--></div>';
			});
		} else {
			outputHtml += '<div class="noproduct"><p>条件に当てはまる商品を検索できませんでした。</p></div>';
		}

		//HTML出力（フェードインアニメーションつき）
		$('.productArea').html(outputHtml);
		$('.productArea .product').css({
			opacity: 0
		}).each(function (i) {
			$(this).delay(100 * i).animate({
				opacity: 1
			}, 300);
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
			function (list) {
				return filterByLife(list, $('.filter_life select').val());
			}
		);

		//セレクトボックスの値を引数に指定した関数filterByCategoryをfilterFuncs配列に格納
		filterFncs.push(
			function (list) {
				return filterByCategory(list, $('.filter_category select').val());
			}
		);

		//セレクトボックスの値を引数に指定した関数filterByNayamiをfilterFuncs配列に格納
		filterFncs.push(
			function (list) {
				return filterByNayami(list, $('.filter_nayami select').val());
			}
		);

		//チェックボックスの値を引数に指定した関数filterByTagをfilterFuncs配列に格納
		filterFncs.push(
			function (list) {
				return filterByTag(list, $('.filter_tag input:checked'));
			}
		);

		//キーワードの値を引数に指定した関数filterByKeywordをfilterFuncs配列に格納
		filterFncs.push(
			function (list) {
				return filterByKeyword(list, _.escape($('.filter_keyword input').val()));
			}
		);

		//FilterFuncs配列内の関数をバケツリレーみたいに1つずつ実行して結果をresult配列に格納
		result = _.reduce(filterFncs, function (list, fnc) {
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
		return _.filter(list, function (item) {
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
		return _.filter(list, function (item) {
			switch (value) {
				case '1':
					return item.category == "キャットフード";
				case '2':
					return item.category == "キャットフード";
			}
		});
	}

	function filterByNayami(list, value) {

		//絞り込み指定がない場合はリターン
		if (value == "") {
			return list;
		}

		//選択したセレクトボックスとnayamiがマッチするかでフィルタリング
		return _.filter(list, function (item) {
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
		return _.filter(list, function (item) {

			var isMatch = false;

			//配列同士の比較
			_.each(value, function (chkItem, i) {

				_.each(item.tag, function (tagItem, i) {
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
		return _.filter(list, function (item) {

			var isMatch = false;

			_.each(searchAry, function (data, i) {
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

$(function () {
	$('div[href^=#]').click(function () {
		// スクロールの速度
		var speed = 400; // ミリ秒
		// アンカーの値取得
		var href = $(this).attr("href");
		// 移動先を取得
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$('body,html').animate({
			scrollTop: position
		}, speed, 'swing');
		return false;
	});

	//ページ内ジャンプ
	// #で始まるアンカーをクリックした場合に処理
	$('button[href^=#]').click(function () {
		// スクロールの速度
		var speed = 400; // ミリ秒
		// アンカーの値取得
		var href = $(this).attr("href");
		// 移動先を取得
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$('body,html').animate({
			scrollTop: position
		}, speed, 'swing');
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
