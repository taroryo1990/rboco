$(function() {
	/*================================================================
	情報
	================================================================*/
	var allList = [



		{
			id: "wkwkmail2",
			name: "わくわくメール",
			life: "パパ活におすすめ",
			price: "登録無料",
			warranty: "大手運営",
			title: "<a target=\"_blank\" href=\"https://mobee2.jp/ad/p/r?medium=3856&ad=608&suid=\">1位:わくわくメール</a>",
			star: "4.5",
			category: "育毛トニック",
			nayami: "抜け毛",
			tag: ["安全","人気"],
			description: "・デートに対してお金の交渉も！<br>・ご飯デート機能（おねだり機能）でおごってくれる方を探せる<br>・国内最大級の会員数！",
			link: "https://mobee2.jp/ad/p/r?medium=3856&ad=608&suid="
		},
		{
			id: "telejob2",
			name: "テレジョブ",
			life: "安全",
			price: "電話でバイト",
			warranty: "会わないから安全",
			title: "<a target=\"_blank\" href=\"https://track.bannerbridge.net/click.php?APID=64308&affID=92390&siteID=180164\">2位:テレジョブ</a>",
			star: "4",
			category: "育毛剤",
			nayami: "頭頂部",
			tag: ["電話","安全"],
			description: "・今だけ！登録お祝い金最大10万円贈呈<br>・電話するだけ、時給3000円以上<br>・未経験歓迎！",
			link: "https://track.bannerbridge.net/click.php?APID=64308&affID=92390&siteID=180164"
		},


		{
			id: "vivo",
			name: "VIVO",
			life: "安全",
			price: "バイトで兄活",
			warranty: "会わないから安全",
			title: "<a target=\"_blank\" href=\"https://track.bannerbridge.net/click.php?APID=136100&affID=92390&siteID=180164\">3位:メールレディVI-VO</a>",
			star: "4",
			category: "育毛剤",
			nayami: "頭頂部",
			tag: ["登録ボーナス","安全"],
			description: "・お兄さんたちとチャットや電話でお話するお仕事<br>・登録ボーナスで8000円もらえる<br>・通話15秒ごとにお金が稼げるお仕事",
			link: "https://track.bannerbridge.net/click.php?APID=136100&affID=92390&siteID=180164"
		},
		{
			id: "wink2",
			name: "ウィンク",
			life: "安全",
			price: "お金持ちと出会いたい方",
			warranty: "大手運営",
			title: "<a target=\"_blank\" href=\"https://track.bannerbridge.net/click.php?APID=160290&affID=92390&siteID=181045\">4位:出会えるし稼げるウィンク</a>",
			star: "4",
			category: "育毛剤",
			nayami: "頭頂部",
			tag: ["熟女","人気"],
			description: "・メールするごとにポイントが溜まって換金できる！<br>・モテるし、稼げるサイト<br>・30代以上なので、お金持ちの男性が多い",
			link: "https://track.bannerbridge.net/click.php?APID=160290&affID=92390&siteID=181045"
		},
		{
			id: "fanza",
			name: "FANZA",
			life: "安全",
			price: "スマホ副業",
			warranty: "会わないから安全",
			title: "<a target=\"_blank\" href=\"https://track.bannerbridge.net/click.php?APID=139593&affID=92390&siteID=180164\">5位:アダルト無し 安心のFANZA</a>",
			star: "4",
			category: "育毛剤",
			nayami: "頭頂部",
			tag: ["まじめ","安全"],
			description: "・初心者でも時給7500円以上可能<br>・未経験歓迎、ノルマ無し<br>・ノンアダルトの在宅チャット",
			link: "https://track.bannerbridge.net/click.php?APID=139593&affID=92390&siteID=180164"
		},


		{
			id: "pocketwork3",
			name: "ポケットワーク",
			life: "安全",
			price: "チャットでバイト",
			warranty: "会わないから安全",
			title: "<a target=\"_blank\" href=\"https://track.bannerbridge.net/click.php?APID=60192&affID=92390&siteID=180164\">6位:在宅可ポケットワーク</a>",
			star: "4",
			category: "育毛剤",
			nayami: "頭頂部",
			tag: ["メール","通勤も可"],
			description: "・時給4000~30000円超えも！<br>・月間最高報酬150万超え<br>・今なら特別報酬キャンペーンも！",
			link: "https://track.bannerbridge.net/click.php?APID=60192&affID=92390&siteID=180164"
		},


		{
			id: "bump",
			name: "バンプ",
			life: "パパ活専用",
			price: "お金持ちのみ登録",
			warranty: "大手運営",
			title: "<a target=\"_blank\" href=\"https://track.bannerbridge.net/click.php?APID=161991&affID=92390&siteID=181045\">7位:BUMP</a>",
			star: "4",
			category: "育毛剤",
			nayami: "頭頂部",
			tag: ["まじめ","安全"],
			description: "・経営者、医者、弁護士などお金持ちが登録<br>・大人の男性とデートしてお金をもらう！<br>・男性に対して厳しい審査も行っているので安心",
			link: "https://track.bannerbridge.net/click.php?APID=160290&affID=92390&siteID=181045"
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
