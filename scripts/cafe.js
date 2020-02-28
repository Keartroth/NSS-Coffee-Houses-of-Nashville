/**
 *  cafe which renders individual coffee shop objects as HTML
 */

const cafe = (locationObject) => {
    return `
      <div class="shop">
        <div class="shop__info">
          <h1 class="shop__name">${locationObject.shopName}</h1>
          <h4 class="shop__address">${locationObject.shopAddress}</h4>
          <h5 class="shop__phone">${locationObject.shopNumber}</h5>
        </div>
        <div class="shop__links">
          <a href="${locationObject.shopMenu}" class="shop__menu" target="_blank"><img src="https://www.pngkey.com/png/detail/683-6836645_restaurant-menu-icon.png" alt="menu" class="menu_icon" /></a>
          <a href="${locationObject.shopEmail}" class="shop__email" target="_blank"><img src="https://image.flaticon.com/icons/png/512/25/25377.png" alt="email" class="email_icon" /></a>
        </div>
      </div>`
    }

export default cafe;