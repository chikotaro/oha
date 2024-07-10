// jQuery("#js-drawer-icon").on("click", function(e) {
//   e.preventDefault();
//   jQuery("#js-drawer-icon").toggleClass("is-checked");
//   jQuery("#js-drawer-content").toggleClass("is-checked");
// });
//  how to write to jquery

// document.getElementById("js-drawer-icon").addEventListener("click", function(e) {
//   e.preventDefault();
//   document.getElementById("js-drawer-icon").classList.toggle("is-checked");
//   document.getElementById("js-drawer-content").classList.toggle("is-checked");
// });
// how to write to javasctipt の変数を宣言する前

const drawerIcon = document.getElementById("js-drawer-icon");
const drawerContent = document.getElementById("js-drawer-content");

if (drawerIcon) {
	drawerIcon.addEventListener("click", function (e) {
		e.preventDefault();
		drawerIcon.classList.toggle("is-checked");
		drawerContent.classList.toggle("is-checked");
	});
}

jQuery(".js-accordion").on("click", function (e) {
	e.preventDefault();

	if (jQuery(this).parent().hasClass("is-open")) {
		jQuery(this).parent().removeClass("is-open");
		jQuery(this).next().slideUp();
	} else {
		jQuery(this).parent().addClass("is-open");
		jQuery(this).next().slideDown();
	}
});

const swiper = new Swiper("#js-gallery-swiper", {
	/* swiperのクラス名を変えた方が良い。
    他のセクションでも使いたい時に名前がバッティングして動かなくなるため */
	// Optional parameters
	spaceBetween: 71,
	loop: true,

	// If we need pagination
	pagination: {
		el: "#js-gallery-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: "#js-gallery-next",
		prevEl: "#js-gallery-prev",
	},
});

/* dialogのjqueryの操作方法 */
// jQuery(".js-modal-open").on("click", function(e) {
//   e.preventDefault();

//   jQuery("#js-about-modal")[0].showModal();/* showModalの時に使えるスタイルがある */
// });

// jQuery(".js-close-modal").on("click", function(e) {
//   e.preventDefault();

//   jQuery("#js-about-modal")[0].close();
// });

const modalOpenItems = document.querySelectorAll(".js-modal-open");
const modalCloseItems = document.querySelectorAll(".js-close-modal");
const aboutModal = document.querySelector("#js-about-modal");

modalOpenItems.forEach(function (modalOpenItem) {
	modalOpenItem.addEventListener("click", function (e) {
		e.preventDefault();

		if (aboutModal) {
			aboutModal.showModal();
		}
	});
});

modalCloseItems.forEach(function (modalCloseItem) {
	modalCloseItem.addEventListener("click", function (e) {
		e.preventDefault();

		if (aboutModal) {
			aboutModal.close();
		}
	});
});

/* スクロールの設定 */
jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
	jQuery("#js-drawer-icon").removeClass("is-checked");
	jQuery("#js-drawer-content").removeClass("is-checked");
});

/* sp画面のメニュー時の操作 */
jQuery('a[href^="#"]').on("click", function (e) {
	const speed = 800;
	const id = jQuery(this).attr("href");
	const target = jQuery("#" == id ? "html" : id);
	const position = jQuery(target).offset().top;
	jQuery("html, body").animate(
		{
			scrollTop: position,
		},
		speed,
		"swing"
	);
});

/* ページトップの見栄え how to jquery */
// jQuery(window).on("scroll", function(e) {
//     if (100 < jQuery(window).scrollTop()){
//       jQuery("#pageTop").addClass("is-show");
//     } else {
//       jQuery("#pageTop").removeClass("is-show");
//     }
// });

/* ページトップの見栄え */
const pageTop = document.querySelector("#pageTop");
window.addEventListener("scroll", function () {
	if (100 < window.scrollY) {
		pageTop.classList.add("is-show");
	} else {
		pageTop.classList.remove("is-show");
	}
});

// ページのフワッと表示させるためのjs-----------------
const intersectionObserver = new IntersectionObserver(function (entries) {
	entries.forEach(function (entry) {
		if (entry.isIntersecting) {
			entry.target.classList.add("is-in-view");
		} else {
			// entry.target.classList.remove("is-in-view");
		}
	});
});

const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach(function (inViewItem) {
	intersectionObserver.observe(inViewItem);
});