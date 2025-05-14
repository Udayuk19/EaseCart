const products = [
  // Electronics
  { id: 1, category: 'Electronics', name: 'Laptop', desc: 'Powerful laptop with 16GB RAM', price: 50000, img: 'https://p2-ofp.static.pub/fes/cms/2022/09/26/i6zlcap44kafmcywlh54d9rd1wieh1215035.png' },
  { id: 2, category: 'Electronics', name: 'Headphones', desc: 'Noise cancelling over-ear', price: 2999, img: 'https://tse2.mm.bing.net/th?id=OIP.Jz2fznMEo0bMfLbAlSiJCAHaHa&cb=iwp1&rs=1&pid=ImgDetMain.png' },
  { id: 3, category: 'Electronics', name: 'Smartwatch', desc: 'Fitness & style', price: 2549, img: 'https://media.assettype.com/outlookindia/import/uploadimage/library/16_9/16_9_5/IMAGE_1694495713.webp' },
  { id: 4, category: 'Electronics', name: 'Camera', desc: 'DSLR 24MP', price: 34499, img: 'https://th.bing.com/th/id/OIP.hRc4895BZxqwlc1r5btHmwHaEK?cb=iwp1&rs=1&pid=ImgDetMain.png' },
  { id: 5, category: 'Electronics', name: 'Tablet', desc: '10.5" display', price: 17999, img: 'https://cpimg.tistatic.com/07651276/b/4/M10-Lenovo-Tablets.jpg' },
  { id: 6, category: 'Electronics', name: 'Speaker', desc: 'Bluetooth portable', price: 1499, img: 'https://th.bing.com/th/id/OIP.de6kPXqTpoLvD_xim3LOkgAAAA?cb=iwp1&rs=1&pid=ImgDetMain.jpg' },
  { id: 7, category: 'Electronics', name: 'Monitor', desc: '24" Full HD', price: 6999, img: 'https://th.bing.com/th/id/OIP.QZjf9KkZPo9frzFjARN43wHaHa?cb=iwp1&rs=1&pid=ImgDetMain.jpg' },
  { id: 8, category: 'Electronics', name: 'Keyboard', desc: 'Mechanical RGB', price: 2199, img: 'https://m.media-amazon.com/images/I/71y73nqoHqL._AC_SL1500_.jpg' },
  { id: 9, category: 'Electronics', name: 'Mouse', desc: 'Wireless ergonomic', price: 999, img: 'https://th.bing.com/th/id/OIP.Mn2d5k9UO88wp9VNbfQcxQHaHa?cb=iwp1&rs=1&pid=ImgDetMain.png' },
  { id: 10, category: 'Electronics', name: 'Charger', desc: 'Fast USB-C', price: 799, img: 'https://rukminim1.flixcart.com/image/612/612/km9ht3k0/battery-charger/d/n/o/flash-charger-with-type-c-cable-roxxy-original-imagf6y4ehrydjgb.jpeg?q=70' },

  // Mobiles
  { id: 11, category: 'Mobiles', name: 'Smartphone A', desc: 'Fast processor', price: 14999, img: 'https://th.bing.com/th/id/OIP.LCOPYrfuEFZVZwVTo1uw8wHaFl?cb=iwp1&w=1920&h=1447&rs=1&pid=ImgDetMain.png' },
  { id: 12, category: 'Mobiles', name: 'Smartphone B', desc: 'Great camera', price: 17999, img: 'https://rukminim2.flixcart.com/image/440/440/xif0q/mobile/h/i/r/t3-lite-5g-v2356-vivo-original-imah27wmfgkergtx.jpeg?q=60' },
  { id: 13, category: 'Mobiles', name: 'Smartphone C', desc: '5G support', price: 22499, img: 'https://th.bing.com/th/id/OIP.m58byxw0My2mN3CXMuc1MAHaHx?cb=iwp1&w=600&h=630&rs=1&pid=ImgDetMain.png' },
  { id: 14, category: 'Mobiles', name: 'iPhone', desc: 'Latest iOS device', price: 69000, img: 'https://img3.exportersindia.com/product_images/bc-full/2022/9/8289627/-1663244807-6541121.jpeg' },
  { id: 15, category: 'Mobiles', name: 'Foldable Phone', desc: 'New-gen design', price: 98000, img: 'https://thegadgetflow.com/wp-content/uploads/2018/11/Royole-FlexPai-Commercial-Foldable-Smartphone-01.jpg' },
  { id: 16, category: 'Mobiles', name: 'Budget Phone', desc: 'Affordable and reliable', price: 9049, img: 'https://www.androidsis.com/wp-content/uploads/2018/08/Realme-2-2.jpg' },
  { id: 17, category: 'Mobiles', name: 'Gaming Phone', desc: 'High refresh rate', price: 31499, img: 'https://happycredit.in/cloudinary_opt/blog/iqoo-neo-7-5g-interstellar-black-8gb-ram-128gb-ltmkai.webp' },
  { id: 18, category: 'Mobiles', name: 'Phone with Stylus', desc: 'Note-taking device', price: 44999, img: 'https://th.bing.com/th/id/OIP.Qkbk5-RXUTywR-I6zeCzVAHaF-?cb=iwp1&w=1500&h=1211&rs=1&pid=ImgDetMain.png' },
  { id: 19, category: 'Mobiles', name: 'Compact Phone', desc: 'Small size, big power', price: 11999, img: 'https://th.bing.com/th/id/OIP.XCFEEOGB8bNZH9K8G-Z9ugAAAA?cb=iwp1&w=454&h=526&rs=1&pid=ImgDetMain.png' },
  { id: 20, category: 'Mobiles', name: 'Business Phone', desc: 'Secure and professional', price: 39999, img: 'https://www.fanvil.com/upload/images/20230621/16104x46n4.png' },

  // Fashion
  { id: 21, category: 'Fashion', name: 'T-shirt', desc: 'Cotton comfort', price: 499, img: 'https://cdn.shopify.com/s/files/1/0263/8433/4930/products/c_252F2_252Fd_252F8_252Fc2d8b10c495c0a91650628683d83d1a3082744ac_tnxCTeFAe86P_1_203_c1b0fb8b-8944-4478-8002-efc8d6df3b9d.png?v=1599707504.png' },
  { id: 22, category: 'Fashion', name: 'Jeans', desc: 'Stylish denim', price: 1199, img: 'https://5.imimg.com/data5/ANDROID/Default/2024/4/411511411/ET/BF/CD/110588626/product-jpeg-1000x1000.jpeg' },
  { id: 23, category: 'Fashion', name: 'Sneakers', desc: 'Trendy shoes', price: 2499, img: 'https://assets.adidas.com/images/w_940,f_auto,q_auto/71988f64480640b48f2baf3500c2c3ef_9366/HP5775_02_standard_hover.jpg' },
  { id: 24, category: 'Fashion', name: 'Shirt', desc: 'Casual wear', price: 1499, img: 'https://m.media-amazon.com/images/I/61LYRZ-uH6L._UL1500_.jpg' },
  { id: 25, category: 'Fashion', name: 'Hoodie', desc: 'Winter special', price: 1449, img: 'https://cdna.lystit.com/photos/207c-2014/02/27/river-island-black-black-zip-through-hoodie-product-1-18049645-2-724883503-normal.jpeg' },
  { id: 26, category: 'Fashion', name: 'Cap', desc: 'Casual style', price: 399, img: 'https://www.headstore.cz/getmetafile/8a398a47-c0d9-4014-9b42-9342efe29742/287019_nv.aspx.png' },
  { id: 27, category: 'Fashion', name: 'Sunglasses', desc: 'UV protection', price: 1199, img: 'https://th.bing.com/th/id/OIP.8_TuxPQnizmcYPqSXIcPpgHaHa?cb=iwp1&rs=1&pid=ImgDetMain.png' },
  { id: 28, category: 'Fashion', name: 'Jacket', desc: 'Cool and cozy', price: 2249, img: 'https://images-na.ssl-images-amazon.com/images/I/51PVPprttVL.jpg' },
  { id: 29, category: 'Fashion', name: 'Watch', desc: 'Classic leather strap', price: 1299, img: 'https://th.bing.com/th/id/OIP.U4DHRRfrrjAogDrp1gggPAHaHa?cb=iwp1&rs=1&pid=ImgDetMain.png' },
  { id: 30, category: 'Fashion', name: 'Backpack', desc: 'Spacious & trendy', price: 1109, img: 'https://m.media-amazon.com/images/I/81J2NmYVEzL._AC_UY1100_FMwebp_.jpg' },

  // Sports
  { id: 31, category: 'Sports', name: 'Football', desc: 'FIFA approved', price: 749, img: 'https://tse2.mm.bing.net/th?id=OIP.fkVDJlZ8ZcyVq54yttaGEAHaEK&cb=iwp1&rs=1&pid=ImgDetMain.png' },
  { id: 32, category: 'Sports', name: 'Cricket Bat', desc: 'Willow wood', price: 1499, img: 'https://cricketwarehouse.com.au/cdn/shop/files/mrf-genius-grand-graphite-senior-bat-413430.jpg?v=1724062928&width=1200.jpg' },
  { id: 33, category: 'Sports', name: 'Tennis Racket', desc: 'Pro edition', price: 3500, img: 'https://contents.mediadecathlon.com/p1282434/k$d012280bca8c76aa7bc45f21d189f911/tennis-racket-artengo-tr160-lite-blue-artengo-8489539.jpg' },
  { id: 34, category: 'Sports', name: 'Basketball', desc: 'Indoor/outdoor use', price: 999, img: 'https://th.bing.com/th/id/OIP.kNcT8LSScOzmBa3K1-4uJgHaHa?cb=iwp1&rs=1&pid=ImgDetMain.png' },
  { id: 35, category: 'Sports', name: 'Running Shoes', desc: 'Cushioned sole', price: 2799, img: 'https://tse3.mm.bing.net/th?id=OIP.Kyyt3mqTttGPI4LL3bsevAHaHa&cb=iwp1&rs=1&pid=ImgDetMain.png' },
  { id: 36, category: 'Sports', name: 'Yoga Mat', desc: 'Non-slip surface', price: 599, img: 'https://m.media-amazon.com/images/I/61e-TD7KPhL._SL1500_.jpg' },
  { id: 37, category: 'Sports', name: 'Dumbbells', desc: 'Set of 2', price: 1199, img: 'https://tse4.mm.bing.net/th?id=OIP.l2sztHaKCDoBK6oO6Do9uAHaIQ&cb=iwp1&rs=1&pid=ImgDetMain.png' },
  { id: 38, category: 'Sports', name: 'Cycling Helmet', desc: 'Lightweight & safe', price: 1399, img: 'https://tse3.mm.bing.net/th?id=OIP.dfhB6V7GKe1t7GV0xajcJQHaHa&cb=iwp1&rs=1&pid=ImgDetMain.png' },
  { id: 39, category: 'Sports', name: 'Skipping Rope', desc: 'For cardio', price: 399, img: 'https://i5.walmartimages.com/asr/4938efd7-4402-4464-a775-d4b374f0a465.d97b7df42ecbf735b625271c92a64d2f.jpeg' },
  { id: 40, category: 'Sports', name: 'Sports Jersey', desc: 'Team spirit', price: 1799, img: 'https://m.media-amazon.com/images/I/51w-5EnpdnL._SY445_SX342_QL70_ML2_.jpg' },

  // Books
  { id: 41, category: 'Books', name: 'The Alchemist', desc: 'By Paulo Coelho', price: 299, img: 'https://5.imimg.com/data5/WA/IN/MY-11183377/the-alchemist-500x500.png' },
  { id: 42, category: 'Books', name: 'Atomic Habits', desc: 'By James Clear', price: 349, img: 'https://jamesclear.com/wp-content/uploads/2019/04/Atomic-Habits-image-e1556227442177.jpg' },
  { id: 43, category: 'Books', name: 'Rich Dad Poor Dad', desc: 'By Robert Kiyosaki', price: 399, img: 'https://investarbd.azurewebsites.net/wp-content/uploads/2023/07/Book-Summary-22Rich-Dad-Poor-Dad22-by-Robert-Kiyosaki.png' },
  { id: 44, category: 'Books', name: 'Harry Potter', desc: 'Fantasy series', price: 499, img: 'https://cdn.vox-cdn.com/thumbor/NRR_-KgHhH4FGBzUHdCQc4Vt-XE=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19289131/harry_potter.jpg' },
  { id: 45, category: 'Books', name: 'Wings of Fire', desc: 'By A.P.J. Abdul Kalam', price: 349, img: 'https://m.media-amazon.com/images/I/91jib9oFZDL._SL1500_.jpg' },
  { id: 46, category: 'Books', name: 'Sapiens', desc: 'By Yuval Noah Harari', price: 449, img: 'https://th.bing.com/th/id/OIP.Wdw8knp_mCAsj_Y4hZ4MQwHaLX?w=156&h=199&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3.png' },
  { id: 47, category: 'Books', name: '1984', desc: 'By George Orwell', price: 299, img: 'https://th.bing.com/th/id/OIP.8bTpGDLEYVpDlV8tD10XlQAAAA?w=186&h=304&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3.png' },
  { id: 48, category: 'Books', name: 'To Kill a Mockingbird', desc: 'By Harper Lee', price: 399, img: 'https://th.bing.com/th/id/OIP.IhacTUeOpyDBs3EnB_rZNAEsHk?w=186&h=301&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3.png' },
  { id: 49, category: 'Books', name: 'Think & Grow Rich', desc: 'Success guide', price: 249, img: 'https://th.bing.com/th/id/R.2af6ff0177ca383125d12235edf2d312?rik=0UYhPN3yQfuIyQ&riu=http%3a%2f%2fwww.horizonspeakers.com%2fwp-content%2fuploads%2f2011%2f05%2fhorizon_e-book__think%26growRich___render.png&ehk=X9grzz6raa4%2b9MrRUrx2EDRTD5jVyhiZE4DNnQ13lZs%3d&risl=&pid=ImgRaw&r=0.png' },
  { id: 50, category: 'Books', name: 'Start With Why', desc: 'By Simon Sinek', price: 319, img: 'https://theinvisiblementor.com/wp-content/uploads/2017/06/Start-With-Why.png' },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = cart.length);
}

function showPopup(msg) {
  const popup = document.getElementById('popup');
  popup.textContent = msg;
  popup.style.display = 'block';
  setTimeout(() => popup.style.display = 'none', 2500);
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  showPopup('Item added to cart!');
}


function addToCartFromHome(productName, productPrice) {
  // Add the product to the cart array
  cart.push({ name: productName, price: productPrice });

  // Update the cart count in the header
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;

  // Show a popup message
  const popup = document.getElementById('popup');
  popup.textContent = `${productName} added to cart!`;
  popup.style.display = 'block';

  // Hide the popup after 2 seconds
  setTimeout(() => {
    popup.style.display = 'none';
  }, 2000);
}



function loadProducts() {
  const section = document.getElementById('product-section');
  if (!section) return;
  const categories = [...new Set(products.map(p => p.category))];
  categories.forEach(cat => {
    const filtered = products.filter(p => p.category === cat);
    const block = document.createElement('div');
    block.innerHTML = `<h2 id="${cat}">${cat}</h2><div class="product-grid"></div>`;
    const grid = block.querySelector('.product-grid');
    filtered.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.img}" width="100%" />
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <p><b>₹${p.price}</b></p>
        <button onclick='addToCart(${p.id})'>Add to Cart</button>
      `;
      grid.appendChild(card);
    });
    section.appendChild(block);
  });
}

function loadCart() {
  const list = document.querySelector('.cart-list');
  const total = document.getElementById('total-price');
  if (!list || !total) return;
  list.innerHTML = '';
  let sum = 0;
  cart.forEach((item, index) => {
    sum += item.price;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.img}" width="100%" />
      <h3>${item.name}</h3>
      <p><b>₹${item.price}</b></p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    list.appendChild(div);
  });
  total.textContent = sum;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  loadCart();
  showPopup('Item removed from cart!');
}

function checkout() {
  localStorage.removeItem('cart');
  cart = [];
  updateCartCount();
  loadCart();
  alert('Thank you for shopping with us!');
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  loadProducts();
  loadCart();
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Hide the form
  document.getElementById("contactForm").style.display = "none";

  // Show thank you message
  document.getElementById("thankYouMessage").style.display = "block";
});
function renderProducts(filteredProducts, selectedCategory) {
  const heading = document.getElementById('category-heading');
  const grid = document.getElementById('product-grid');

  heading.textContent = selectedCategory === 'all' 
    ? 'All Products' 
    : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);

  grid.innerHTML = '';

  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

function filterProducts() {
  const selected = document.getElementById('categoryFilter').value;
  const filtered = selected === 'all' 
    ? products 
    : products.filter(p => p.category.toLowerCase() === selected.toLowerCase());

  renderProducts(filtered, selected);
}

window.onload = () => {
  updateCartCount();
  renderProducts(products, 'all');
};

window.onload = () => {
  updateCartCount();
  renderProducts(products);
};

// Initialize AOS animations
AOS.init({
  duration: 1200, // Adjust animation duration in milliseconds
  easing: 'ease-in-out', // Adjust easing function
  once: true, // Animation will occur only once when scrolling down
  mirror: true, // Animations will trigger when scrolling back up
  offset: 200, // Offset in pixels before animation triggers
});