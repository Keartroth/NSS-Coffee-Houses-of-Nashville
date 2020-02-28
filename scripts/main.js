const coffeList = [
  {
    shopName: "Cafe Ma'kai",
    shopAddress: "1210 Wedgewood Ave",
    shopNumber: "615.823.3292",
    shopMenu: "https://www.cafemakai.com/#breakfast-section",
    shopEmail: "https://www.cafemakai.com/#eventspace-section"
  },
  {
    shopName: "The Well",
    shopAddress: "147B 4th Ave N",
    shopNumber: "615.966.2633",
    shopMenu: "http://www.wellcoffeehouse.com/menu/",
    shopEmail: "http://www.wellcoffeehouse.com/contact/"
  },
  {
    shopName: "Red Bicycle",
    shopAddress: "1200 5th Ave N Suite 104",
    shopNumber: "615.516.1986",
    shopMenu: "https://redbicyclecoffee.com/germantown/menu-2/",
    shopEmail: "https://redbicyclecoffee.com/contact/"
  },
  {
    shopName: "Crema",
    shopAddress: "226 Duke St",
    shopNumber: "615.747.2001",
    shopMenu: "https://crema-coffee.com/menu",
    shopEmail: "mailto:hello@crema-coffee.com"
  },
  {
    shopName: "Frothy Monkey",
    shopAddress: "235 5th Ave N",
    shopNumber: "615.600.4756",
    shopMenu: "https://frothymonkey.com/menu/",
    shopEmail: "mailto:jbiorkman@frothymonkey.com"
  },
  {
    shopName: "8th &amp; Roast",
    shopAddress: "2108 8th Ave S",
    shopNumber: "615.730.8074",
    shopMenu: "https://www.8thandroast.com/menu",
    shopEmail: "https://www.8thandroast.com/contact"
  },
  {
    shopName: "Bongo Java",
    shopAddress: "119 3rd Ave S",
    shopNumber: "615.645.6358",
    shopMenu: "https://www.bongojava.com/bongo-java/menu/",
    shopEmail: "mailto:info@bongojava.com?subject=Bongo Java"
  },
  {
    shopName: "Flatrock",
    shopAddress: "2640 Nolensville Pike C",
    shopNumber: "615.678.6204",
    shopMenu: "http://www.flatrockcoffee.com/menu.html",
    shopEmail: "http://www.flatrockcoffee.com/contact-us.html"
  },
  {
    shopName: "Fido",
    shopAddress: "1812 21st Ave S",
    shopNumber: "615.777.3436",
    shopMenu: "https://www.bongojava.com/fido-cafe/menu/",
    shopEmail: "mailto:info@bongojava.com?subject=Fido"
  },
  {
    shopName: "Steadfast Coffee",
    shopAddress: "603 Taylor St",
    shopNumber: "615.891.7424",
    shopMenu: "https://steadfast.coffee/collections/all",
    shopEmail: "mailto:steadfastcoffeeroasting@gmail.com"
  },
  {
    shopName: "Dose Coffee",
    shopAddress: "3431 Murphy Rd",
    shopNumber: "615.457.1300",
    shopMenu: "http://dosenashville.com/menu",
    shopEmail: "http://dosenashville.com/about"
  },
  {
    shopName: "Sam &amp; Zoes",
    shopAddress: "525 Heather Pl",
    shopNumber: "615.385.2676",
    shopMenu: "http://www.samandzoes.com/menu-breakfast-and-lunch.html",
    shopEmail: "mailto:carmawoodard@gmail.com"
  },
  {
    shopName: "Slow Hand Coffee",
    shopAddress: "1010 Gallatin Ave",
    shopNumber: "615.730.8032",
    shopMenu: "https://www.allmenus.com/tn/nashville/495771-slow-hand-coffee/menu/",
    shopEmail: "mailto:example@example.com"
  },
  {
    shopName: "The Horn",
    shopAddress: "619 Murfreesboro Pike",
    shopNumber: "615.397.1977",
    shopMenu: "https://themenustar3.com/webspace/menus.php?code=orderthehorncoffee.com",
    shopEmail: "mailto:example@example.com"
  },
]


const populateCafe = () => {
  let coffeeHouses = ""

  for (let location of coffeList) {
    coffeeHouses += `
    <div class="shop">
      <div class="shop__info">
        <h1 class="shop__name">${location.shopName}</h1>
        <h4 class="shop__address">${location.shopAddress}</h4>
        <h5 class="shop__phone">${location.shopNumber}</h5>
      </div>
      <div class="shop__links">
        <a href="${location.shopMenu}" class="shop__menu" target="_blank"><img src="https://www.pngkey.com/png/detail/683-6836645_restaurant-menu-icon.png" alt="menu" class="menu_icon" /></a>
        <a href="${location.shopEmail}" class="shop__email" target="_blank"><img src="https://image.flaticon.com/icons/png/512/25/25377.png" alt="email" class="email_icon" /></a>
      </div>
    </div>`
  }

  document.getElementById("coffeeShop").innerHTML = coffeeHouses;

  const showHidden = () => {
    const element = document.getElementById("hidden");
    element.classList.remove("hide-me");
  }
  showHidden();
}

const clickEvent = () => {
  populateCafe();
  document.getElementById("see-places").classList.add("hide-me");
}