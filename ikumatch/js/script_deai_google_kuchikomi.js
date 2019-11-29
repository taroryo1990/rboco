$(function () {
	/*================================================================
	情報
	================================================================*/
	var allList = [
		{
			id: "happymail2",
			name: "ハッピーメール",
			life: "安全",
			price: "ピュア掲示板がおすすめ",
			warranty: "大手運営",
			title: "<a target=\"_blank\" href=\"http://www.medipartner.jp/click.php?APID=22428&affID=0004571\">1位:ハッピーメール</a>",
			star: "5",
			category: "育毛剤",
			nayami: "頭頂部",
			tag: ["女性若い","人気"],
			description: "・「今すぐ遊ぼ」ボタンでワンナ◯ト可能<br>・プロフィール検索が細かい、目的別に検索可能<br>・20代女性中心で若い方が多い",
			link: "http://www.medipartner.jp/click.php?APID=22428&affID=0004571",
			reviews: "【20代男性コメント】<br> ワンナイトができたwwハッピーメールというドラマの影響か登録者がとても多い！ただ、おごり目的の人もいたから見極め大事"
		},
		{
			id: "mintjc",
			name: "Jメール",
			life: "安全",
			price: "ワンナイト目的のアダ◯ト掲示板",
			warranty: "大手運営",
			title: "<a target=\"_blank\" href=\"https://track.bannerbridge.net/click.php?APID=152699&affID=92390&siteID=181045\">2位:ミントC-Jメール</a>",
			star: "4.5",
			category: "育毛剤",
			nayami: "頭頂部",
			tag: ["ワン◯イト","人気"],
			description: "・アダルト掲示板で女性が多い<br>・ニックネーム制で本名不要<br>・会ってヤレルと口コミ",
			link: "https://track.bannerbridge.net/click.php?APID=152699&affID=92390&siteID=181045",
			reviews: "【30代性別不明コメント】<br>アダルト掲示板がよい！すぐ会える人が募集できるから割と簡単にあえる "
		},
		{
			id: "wkwkmail2",
			name: "わくわくメール",
			life: "女性が多い",
			price: "登録無料",
			warranty: "大手運営",
			title: "<a target=\"_blank\" href=\"https://track.bannerbridge.net/click.php?APID=160234&affID=92390&siteID=181045\">3位:わくわくメール</a>",
			star: "4.5",
			category: "育毛トニック",
			nayami: "抜け毛",
			tag: ["安全","人気"],
			description: "ご飯デート機能（おねだり機能）で女性と会える<br>体相手してくれる目的の女性多いのでサクラが少ない！",
			link: "https://track.bannerbridge.net/click.php?APID=160234&affID=92390&siteID=181045",
			reviews: "【20代男性コメント】<br>ごはんおごってもらいたいだけの子もいるから男の腕次第かな！ "
		},
		{
			id: "merupara2",
			name: "ワンナイトのメルパラ",
			life: "出会いやすさは過去1",
			price: "課金が大事",
			warranty: "大手運営",
			title: "<a target=\"_blank\" href=\"https://track.bannerbridge.net/click.php?APID=147545&affID=92390&siteID=181045\">4位:セフレできるメルパラ</a>",
			star: "5",
			category: "キャットフード",
			nayami: "値段・健康",
			tag: [],
			description: "・遊び目的にとてもおすすめ<br>・とにかくきれいな女性が多いと話題<br>・誰にもばれずに出会える ",
			link: "https://track.bannerbridge.net/click.php?APID=147545&affID=92390&siteID=181045",
			reviews: "【30代男性コメント】<br>既婚ですがセフレ作れた！課金で出会いやすいと思う。おすすめかも "
		},
		{
			id: "hananokai2",
			name: "華の会メール",
			life: "安全な",
			price: "30代以上メイン",
			warranty: "非常に高い",
			title: "<a target=\"_blank\" href=\"http://www.rentracks.jp/adx/r.html?idx=0.30992.247010.1461.3360&dna=52754\">5位:華の会メール</a>",
			star: "4",
			category: "育毛剤",
			nayami: "抜け毛",
			tag: ["大人女性","真剣度"],
			description: "・30歳以上限定サイト<br>・男性の年齢が高いため、ハイスペック男性探しに最適<br>・Tポイントがたまる制度あり",
			link: "http://www.rentracks.jp/adx/r.html?idx=0.30992.247010.1461.3360&dna=52754",
			reviews: "【40代男性コメント】<br>真面目系な人がおおいから、交際目的にはよさげ！ "
		},

		{
			id: "pcmax2",
			name: "PCMAX",
			life: "安全な",
			price: "遊び目的",
			warranty: "非常に高い",
			title: "<a target=\"_blank\" href=\"https://mobee2.jp/ad/p/r?medium=2579&ad=141&creative=205&suid=\">6位:PCMAX</a>",
			star: "4",
			category: "育毛剤",
			nayami: "抜け毛",
			tag: ["大人女性","真剣度"],
			description: "・セフレをつくりやすいと話題<br>・ハイスペック女性探しに最適<br>・美人が多くて、会いやすいと話題",
			link: "https://mobee2.jp/ad/p/r?medium=2579&ad=141&creative=205&suid=",
			reviews: "【20代女性コメント】<br>やりもくばっかｗ！ "
		},
		{
			id: "asobo",
			name: "ASOBO",
			life: "安全な",
			price: "遊び目的",
			warranty: "非常に高い",
			title: "<a target=\"_blank\" href=\"https://track.bannerbridge.net/click.php?APID=114735&affID=92390&siteID=181045\">7位:アプリASOBO</a>",
			star: "4",
			category: "育毛剤",
			nayami: "抜け毛",
			tag: ["大人女性","真剣度"],
			description: "・セフレをつくりやすいアプリ<br>・ギャル系が多い<br>・若い人と遊びやすいアプリと話題",
			link: "https://track.bannerbridge.net/click.php?APID=114735&affID=92390&siteID=181045",
			reviews: "【20代女性コメント】<br>やりもくばっかｗ！ "
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
				outputHtml += '				<tr><td class="warranty">運営レベル</td><td>:' + line.warranty + '</td></tr>';
				outputHtml += '				<tr><td class="price">ポイント</td><td class="price">:' + line.price + '</td></tr>';
				outputHtml += '			</table>';
				outputHtml += '		</div>';
				outputHtml += '	</div><div class="clear"></div>';
				outputHtml += '<div class="description-box"><p class="description">' + line.description + '</p></div>';
				outputHtml += '<div class=""><a class="myButton hvr-grow-shadow" target="_blank" href="' + line.link + '">無料登録はこちら</a></div>';
				outputHtml += '<div id="accordion" role="tablist"><div class="card mt-2"><div class="btn btn-info p-3" role="tab" id="headingTwo"><h5 class="mb-0"><a class="collapsed text-white" data-toggle="collapse" href="#collapse' + i + '" aria-expanded="false"aria-controls="collapse' + i + '">Twitter口コミ</a></h5></div><div id="collapse' + i + '" class="collapse" role="tabpanel" aria-labelledby="headingTwo"><div class="card-body">' + line.reviews + '</div></div></div></div>';
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
					return item.nayami == "食いつき";
				case '2':
					return item.nayami == "値段・健康";
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
