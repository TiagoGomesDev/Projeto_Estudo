let filteredProducts = [...products];
// console.log(filteredProducts)
const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }
  // <a href = "${href}">
  // 
  //         </a>  
  productsContainer.innerHTML = filteredProducts
    .map((product) => {
      const { id, title, subtitle, text, image, price, href } = product;
      return `<article class="product" data-id="${id}">
            
          <footer>
            <h1 class="product-name">${title}</h1>
            </br>
            <img
              src="${image}"
              class="product-img img"
              alt=""
            />
            <h3 class="product-subtitle">${subtitle}</h3>
            <h4 class="product-text">${text}</h4>
            
            <p>Python é uma linguagem poderosa e divertida. Com ela você pode fazer diversas coisas como:</p>      
            
            <p>Construção de sistemas Web com Django, Flask, Pyramid, etc.</p> 
            
            <p>O que são VirtualEnvs ? O ideal para projetos Python é que você isole as bibliotecas que você usa, para 
            evitar conflitos entre projetos.Isso é uma boa prática e pode evitar dores de cabeça futuras.Dê uma lida 
            sobre antes de iniciar um projeto grande, ok ? </p>

            <p>Python é uma linguagem poderosa e divertida. Com ela você pode fazer diversas coisas como:</p>      

          </footer>
        </article>`;
    })
    .join('');
};

{/* <time datetime="2016-01-20">20 January 2016</time> */ }

{/* <address>
            <p>Chris Mills, Manchester, The Grim North, UK</p>
          </address>
          
          <address>
  <p>Page written by <a href="../authors/chris-mills/">Chris Mills</a>.</p>
</address> */}

//   <dl>
//   <dt>solilóquio</dt>
//   <dd>No drama, onde um personagem fala a si mesmo, representando seus pensamentos ou sentimentos internos e no processo, transmitindo-os ao público (mas não a outros personagens).</dd>
//   <dt>monólogo</dt>
//   <dd>No drama, onde um personagem fala seus pensamentos em voz alta para compartilhá-los com o público e com outros personagens presentes.</dd>
//   <dt>aparte</dt>
//   <dd>No drama, onde um personagem compartilha um comentário apenas com o público para efeito humorístico ou dramático. Isso geralmente é um sentimento, pensamento ou parte de informação de fundo adicional.</dd>
// </dl>


// productsContainer.innerHTML = filteredProducts
// .map((product) => {
//   const { id, title, image, price } = product;
//   return `<article class="product" data-id="${id}">
//       <img
//         src="${image}"
//         class="product-img img"
//         alt=""
//       />
//       <footer>
//         <h5 class="product-name">${title}</h5>
//         <span class="product-price">${price}</span>
//       </footer>
//     </article>`;
// })
// .join('');
// };

displayProducts();

// Text Filter

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

// console.log(
//   products.filter((product) => {
//     return product.title.toLowerCase().includes('');
//   })
// );

// Filter Buttons

const companiesDOM = document.querySelector('.companies');

const displayButtons = () => {
  const buttons = [
    'all',
    ...new Set(products.map((product) => product.company)),
  ];
  // console.log(buttons);
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button class='company-btn' data-id="${company}">${company}</button>`;
    })
    .join('');
};

displayButtons();

companiesDOM.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('company-btn')) {
    if (el.dataset.id === 'all') {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    searchInput.value = '';
    displayProducts();
  }
});
