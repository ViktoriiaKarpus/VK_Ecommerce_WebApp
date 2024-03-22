const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
      <div class="footer-content">
        <img src="img/logo-light-fashion.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li> <!-- ??? возможна ошибка -->
                <li><a href="#" class="footer-link">t-shirt</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="#" class="footer-link">t-shirt</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about the company</p>
    <p class="info">Fashion, a proud member of the global Inditex family,
        stands as a shining star in the world of international fashion.
        At Fashion, we're committed to providing an unparalleled customer experience that revolves around
        innovation,
        creativity, and inclusivity.
        Our Unique Business Model
        At the core of our success lies an exceptional business model that encompasses every facet of the fashion
        industry.
        From cutting-edge design and meticulous production to seamless distribution and personalized sales,
        we orchestrate it all. Our extensive retail network brings our creations closer to your wardrobe.
        Putting Our Customers First
        Fashion is all about you, our valued customers.
        We believe that every individual should have the opportunity to express their unique style,
        regardless of technology or ability. That's why we are devoted to making our website
        as accessible as possible to a diverse global audience.</p>
    <p class = "info">support emails - help@fashion.com,
        customersupport@fashion.com</p>
    <p class ="info">telephone - 472 251 251 251,  472 251 251 252</p>
    <div class = "footer-social-container">
        <div>
            <a href = "#" class = "social-link">terms & services</a>
            <a href = "#" class = "social-link">privacy page</a>
        </div>
        <div>
            <a href = "#" class = "social-link">instagram</a>
            <a href = "#" class = "social-link">facebook</a>
            <a href = "#" class = "social-link">twitter</a>
        </div>
    </div>
    <p class = "footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();