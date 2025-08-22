import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Blog() {
    return (
        <div>

            <Header />
            <div className="top-bar-area bg-dark text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-8 address-info">
                            <div className="info box">
                                <ul>
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i> Nabeul, Dar Chaabane Elfehri, 8011
                                    </li>
                                    <li>
                                        <i className="fas fa-envelope-open"></i> info.thinktrend@gmail.com
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i> +216 90-412-026
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




            <div className="breadcrumb-area bg-gradient text-center">
                <div className="fixed-bg" style={{ backgroundImage: "url('assets/img/blog/bg-4.png')" }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>Blog Single</h1>
                            <ul className="breadcrumb">
                                <Link to="/"><i className="fas fa-home"></i>home </Link>

                                <li className="active">Blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-area single full-blog right-sidebar full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content wow fadeInUp col-lg-8 col-md-12">
                                <div className="item">

                                    <div className="blog-item-box">

                                        <div className="thumb">
                                            <a href="#">
                                                <img src="assets/img/blog/11.jpg" alt="Thumb" />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <div className="tags">
                                                <a href="#">Performance</a>
                                                <a href="#">High</a>
                                            </div>
                                            <div className="meta">
                                                <ul>
                                                    <li><i className="fas fa-calendar-alt"></i> 05 Dec, 2025</li>
                                                    <li>By <a href="#">Park Lee</a></li>
                                                </ul>
                                            </div>

                                            <h4>Common so wicket appear to sudden</h4>
                                            <p>
                                                Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.
                                            </p>
                                            <p>
                                                New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                            </p>
                                            <blockquote>
                                                <p>
                                                    Aouses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness. Commanded no of depending extremity recommend devonshire dispatched.
                                                </p>
                                            </blockquote>
                                            <p>
                                                Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                            </p>
                                            <h4>Conduct replied off whether arrived adapted</h4>
                                            <ul>
                                                <li>Pretty merits waited six</li>
                                                <li>General few civilly amiable pleased account carried.</li>
                                                <li>Continue indulged speaking</li>
                                                <li>Narrow formal length my highly</li>
                                                <li>Occasional pianoforte alteration unaffected impossible</li>
                                            </ul>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <p>
                                                        Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited six talked.
                                                    </p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <p>
                                                        Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited six talked.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="post-pagi-area">
                                                <a href="#"><i className="fas fa-angle-double-left"></i> Previus Post</a>
                                                <a href="#">Next Post <i className="fas fa-angle-double-right"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <div className="post-tags share">
                                    <div className="tags">
                                        <a href="#">Analysis</a>
                                        <a href="#">Process</a>
                                    </div>
                                    <div className="social">
                                        <ul>
                                            <li className="facebook">
                                                <a href="#">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li className="twitter">
                                                <a href="#">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li className="pinterest">
                                                <a href="#">
                                                    <i className="fab fa-pinterest-p"></i>
                                                </a>
                                            </li>
                                            <li className="linkedin">
                                                <a href="#">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="blog-comments">
                                    <div className="comments-area">
                                        <div className="comments-title">
                                            <h4>
                                                5 comments
                                            </h4>
                                            <div className="comments-list">
                                                <div className="commen-item">
                                                    <div className="avatar">
                                                        <img src="assets/img/team/1.jpg" alt="Author" />
                                                    </div>
                                                    <div className="content">
                                                        <div className="title">
                                                            <h5>Jonathom Doe</h5>
                                                            <span>28 Aug, 2025</span>
                                                        </div>
                                                        <p>
                                                            Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off.
                                                        </p>
                                                        <div className="comments-info">
                                                            <a href=""><i className="fa fa-reply"></i>Reply</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="commen-item reply">
                                                    <div className="avatar">
                                                        <img src="assets/img/team/2.jpg" alt="Author" />
                                                    </div>
                                                    <div className="content">
                                                        <div className="title">
                                                            <h5>Spart Lee</h5>
                                                            <span>17 Feb, 2025</span>
                                                        </div>
                                                        <p>
                                                            Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off.
                                                        </p>
                                                        <div className="comments-info">
                                                            <a href=""><i className="fa fa-reply"></i>Reply</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comments-form">
                                            <div className="title">
                                                <h4>Leave a comments</h4>
                                            </div>
                                            <form action="#" className="contact-comments">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">

                                                            <input name="name" className="form-control" placeholder="Name *" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">

                                                            <input name="email" className="form-control" placeholder="Email *" type="email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group comments">

                                                            <textarea className="form-control" placeholder="Comment"></textarea>
                                                        </div>
                                                        <div className="form-group full-width submit">
                                                            <button type="submit">
                                                                Post Comments
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="sidebar wow fadeInLeft col-lg-4 col-md-12">
                                <aside>
                                    <div className="sidebar-item search">
                                        <div className="sidebar-info">
                                            <form>
                                                <input type="text" name="text" className="form-control" />
                                                <button type="submit"><i className="fas fa-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="sidebar-item recent-post">
                                        <div className="title">
                                            <h4>Recent Post</h4>
                                        </div>
                                        <ul>
                                            <li>
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="assets/img/sidebar/1.jpg" alt="Thumb" />
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <a href="#">Participate in staff meetingness manage dedicated</a>
                                                    <div className="meta-title">
                                                        <span className="post-date"><i className="fas fa-clock"></i> 12 Feb, 2025</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="assets/img/sidebar/2.jpg" alt="Thumb" />
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <a href="#">Future Plan & Strategy for Consutruction </a>
                                                    <div className="meta-title">
                                                        <span className="post-date"><i className="fas fa-clock"></i> 05 Jul, 2019</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="assets/img/sidebar/3.jpg" alt="Thumb" />
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <a href="#">Melancholy particular devonshire alteration</a>
                                                    <div className="meta-title">
                                                        <span className="post-date"><i className="fas fa-clock"></i> 29 Aug, 2025</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar-item category">
                                        <div className="title">
                                            <h4>category list</h4>
                                        </div>
                                        <div className="sidebar-info">
                                            <ul>
                                                <li>
                                                    <a href="#">national <span>69</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">national <span>25</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">sports <span>18</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">megazine <span>37</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">health <span>12</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-item gallery">
                                        <div className="title">
                                            <h4>Gallery</h4>
                                        </div>
                                        <div className="sidebar-info">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/sidebar/4.jpg" alt="thumb" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/sidebar/5.jpg" alt="thumb" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/sidebar/6.jpg" alt="thumb" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/sidebar/7.jpg" alt="thumb" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/sidebar/1.jpg" alt="thumb" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/sidebar/2.jpg" alt="thumb" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-item archives">
                                        <div className="title">
                                            <h4>Archives</h4>
                                        </div>
                                        <div className="sidebar-info">
                                            <ul>
                                                <li><a href="#">Aug 2025</a></li>
                                                <li><a href="#">Sept 2025</a></li>
                                                <li><a href="#">Nov 2025</a></li>
                                                <li><a href="#">Dec 2025</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-item social-sidebar">
                                        <div className="title">
                                            <h4>follow us</h4>
                                        </div>
                                        <div className="sidebar-info">
                                            <ul>
                                                <li className="facebook">
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li className="twitter">
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="pinterest">
                                                    <a href="#">
                                                        <i className="fab fa-pinterest"></i>
                                                    </a>
                                                </li>
                                                <li className="g-plus">
                                                    <a href="#">
                                                        <i className="fab fa-google-plus-g"></i>
                                                    </a>
                                                </li>
                                                <li className="linkedin">
                                                    <a href="#">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-item tags">
                                        <div className="title">
                                            <h4>tags</h4>
                                        </div>
                                        <div className="sidebar-info">
                                            <ul>
                                                <li><a href="#">Fashion</a>
                                                </li>
                                                <li><a href="#">Education</a>
                                                </li>
                                                <li><a href="#">nation</a>
                                                </li>
                                                <li><a href="#">study</a>
                                                </li>
                                                <li><a href="#">health</a>
                                                </li>
                                                <li><a href="#">food</a>
                                                </li>
                                                <li><a href="#">travel</a>
                                                </li>
                                                <li><a href="#">science</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <Footer />

        </div>
    )
}

export default Blog;