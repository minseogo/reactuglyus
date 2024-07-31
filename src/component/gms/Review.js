import React, {Fragment, useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import '../../css/gms.module.css'
import '../../css/common.module.css'

import datareview from '../../data/reviewdata.json'

function Review() {
  const [slider, setSlider] = useState(0);

  const { naver, twitter, instagram, naverBlog, youtube } = datareview;

  useEffect(() => {
    const swiperWrapper = document.querySelector('#review_gms .swiper-wrapper');
    const slides = document.querySelectorAll('#review_gms .swiper-slide');
    if (slides.length > 0 && swiperWrapper.children.length === slides.length) {
        slides.forEach(slide => {
            // const clone = slide.cloneNode(true);
            // swiperWrapper.appendChild(clone);
        });
    }
  }, []);
 
    return(
        
        <section id="review_gms">
            <span className="review_background"></span>
  
            <div className="text-center d-flex justify-content-center align-items-center flex-column">
              <h2 className = "font_con_title_e mt-0 mb-5">Review</h2>
              <p className = "font_leadcopy mt-0 mb-5">구매자 분들의 진심을 담은 실제 후기 입니다.</p>
          </div>
                <div className="container">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    //   autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    //   }}
                    centeredSlides={true}
                    modules={[Autoplay]}
                    loop={true}     
                    className='Swiper w-100 pt-4'
                    breakpoints={{
                      1440:{
                        slidesPerView: 4,
                        spaceBetween: 0,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                      },
                      576: {
                        slidesPerView: 1.5,
                        spaceBetween: 0,
                      },
                      310:{
                        slidesPerView: 1,
                        spaceBetween: 0,
                      }
                    }
                      
                    }
                 >
                  <SwiperSlide className='usernaver d-flex justify-content-center align-items-center text-center'>
                    <div className="reviewbox bg-white">
                      <div className="usernaver_topmenu review_text w-100 d-flex justify-content-between align-items-center align-content-center">
                        <p className="bg_light col-4">상세정보</p>
                        <p className="bg_dark col-4">리뷰 { naver.reviewCount }</p>
                        <p className="bg_light col-4">Q&A { naver['Q&A']}</p>
                      </div>
                      <div>
                        <div className="usernaver_rating review_text d-flex border-bottom">
                          <div className="col-6 border-end">
                            <p className="user_score">사용자 총 평점</p>
                            <p className=" user_score_count_size fw-bold f_30">{naver.totalScore}</p>
                            <p className=" user_score_star">{naver.userScore}</p>
                          </div>
                          <div className="col-6 px-3">
                            <p className="rating">평점 비율</p>
                            <ul className="user_score_count_margin d-flex justify-content-between">
                              <li className="d-flex flex-column-reverse">
                                <span className="letter f_11">5점</span>
                                <span className="user_score_count_bar ml-1">
                                  <span className="user_score_highcount_colour d-inline-block w-100"></span>
                                </span>
                              </li>
                              <li className="d-flex flex-column-reverse">
                                <span className="letter f_11">4점</span>
                                <span className="user_score_count_bar ml-1">
                                  <span className="user_score_lowcount_colour w-100 d-flex"></span>
                                </span>
                              </li>
                              <li className="d-flex flex-column-reverse">
                                <span className="letter f_11">3점</span>
                                <span className="user_score_count_bar ml-1">
                                  <span className="user_score_lowcount_colour w-100 d-flex"></span>
                                </span>
                              </li>
                              <li className="d-flex flex-column-reverse">
                                <span className="letter f_11">2점</span>
                                <span className="user_score_count_bar ml-1">
                                  <span className="user_score_lowcount_colour w-100 d-flex"></span>
                                </span>
                              </li>
                              <li className="d-flex flex-column-reverse">
                                <span className="letter f_11">1점</span>
                                <span className="user_score_count_bar ml-1">
                                  <span className="user_score_lowcount_colour w-100 d-flex"></span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                        <div className="usernaver_review_article mt-2">
                          <div className="text-start mx-2">
                            <p className="usernaver_reivew_title">스토어 PICK</p>
                            <p className="usernaver_review_subtitle fw-lighter">판매자가 직접 선정한 베스트 리뷰입니다.</p>
                          </div>
                          <div className="d-flex justify-content-between mt-2">
                            <div className="usernaver_review_small_left rounded-0 box_color"></div>
                            <div className="usernaver_review_small_main rounded-0 box_color">
                              <div className="naver_review_userphoto">
                                <div className="d-flex align-items-center ms-2 mt-2">
                                  <img className="usernaver_profile" src={naver.profileimageUrl} alt="" />
                                  <div className="d-flex flex-column align-items-start ms-2">
                                    <p className="reviewbox_user_score fw-bold f_13">{naver.userScore}
                                      <span className="reviewbox_user_score_number ml-1 f_13">{naver.userNumber}</span>
                                    </p>
                                    <p className="reviewbox_user_id f_13">{naver.userName}
                                      <span className="reviewbox_user_date f_13">{naver.creationDate}</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-evenly mt-3">
                                  <p className="reviewbox_user_review text-start">
                                  {naver.post.split("|").map((v, i)=>(
                                              <Fragment key={i}>
                                              { i > 0 && <br /> }
                                              {v}
                                              </Fragment>
                                            ))}
                                    </p>
                                    <img className="reviewbox_user_reviewphoto" src={naver.articleimageUrl} alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="usernaver_review_small_right rounded-0 box_color"></div>
                          </div>
                        </div>
                      <div className="d-flex align-items-center justify-content-evenly mt-4">
                        <div className="favorit_iconbox d-flex align-items-center justify-content-center">
                          <i className="bi bi-heart favorit_icon"></i>
                        </div>
                        <div className="comment_iconbox d-flex align-items-center justify-content-center">
                          <i className="bi bi-chat-dots comment_icon"></i>
                        </div>
                        <div className="present_box d-flex justify-content-evenly align-items-center">
                          <i className="bi bi-gift"></i>
                          <p className="usernaver_box_text fw-medium">선물하기</p>
                        </div>
                        <div className="buy_box d-flex justify-content-evenly align-items-center">
                          <img className="naver_circle_icon" src="/img/img_gms/review/naver_icon-circle_gms.png" alt="" />
                          <p className="usernaver_box_text fw-medium">구매하기</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='twitter d-flex justify-content-center align-items-center text-center'>
                    <div className="reviewbox review_text bg-white">
                      <div className="d-flex justify-content-between align-items-center px-2 pt-2">
                        <p className="twitter_profile fw-lighter rounded-circle d-flex justify-content-center align-items-center text-white f_13  mt-0 ms-0">민서</p>
                        <img className="twitter_logo" src="/img/img_gms/review/icon-twitter_gms.png" alt="" />
                        <i className="bi bi-gear twitter_setting "></i>
                      </div>
                      <div className="twitter_top_text d-flex border-bottom">
                        <p className="col-6">For you</p>
                        <p className="col-6">following</p>
                      </div>
                      <div className="d-flex align-items-center twitter_reviewbox_user_info ms-2">
                        <img className="twitter_review_profile" src={twitter.profileimageUrl} alt="" />
                        <div className="m-2">
                            <div className=" d-flex">
                              <p className="twitter_reviewbox_user_id f_11">{twitter.userName}
                                <span className="twitter_reviewbox_user_nikname f_11 mx-0 ms-2">{twitter.twitterName}</span>  
                              </p>
                            </div>
                            <div className="twitter_reviewbox_review_text f_11">
                              <span>{twitter.post}</span>
                            </div>  
                        </div>            
                      </div>
                      <div className="py-1">
                          <img className="twitter_rieveiwbox_reviewphoto rounded " src={twitter.articleimageUrl} alt="" />
                      </div>
                      <div className="twitter_bottomicon border-top">
                        <div className="py-2 px-3 d-flex align-items-center justify-content-between ">
                          <i className="bi bi-house-door-fill"></i>
                          <i className="bi bi-search"></i>
                          <img className="twitter_followingicon" src="/img/img_gms/review/following_gms.png"alt="" />
                          <i className="bi bi-bell-fill"></i>
                          <i className="bi bi-envelope"></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='instagram d-flex justify-content-center align-items-center text-center'>
                  <div className="reviewbox review_text bg-white fw-500">
                    <div className="insta_reviewbox_user_info d-flex justify-content-between align-items-center mt-1 mx-1">
                      <img className="insta_profilephoto" src={instagram.profileimageUrl} alt="" />
                      <div className="d-flex">
                        <div>
                          <p className="insta_reviewbox_user_id d-flex flex-column align-items-baseline">{instagram.userName}
                            <span className="insta_reviewbox_user_country">{instagram.location}</span> 
                          </p>
                        </div>
                          <i className="bi bi-three-dots-vertical"></i>
                      </div>
                  </div>

                    <div>
                      <img className="insta_reviewbox_photo" src={instagram.articleimageUrl} alt="" />
                      <div className="insta_reiviewbox_icon d-flex">
                        <i className="bi bi-heart-fill ms-1"></i>
                        <i className="bi bi-chat ms-3"></i>
                        <img className="insta_icon_send ms-3" src="/img/img_gms/review/send_gms.svg" alt="" />            
                      </div>
                    </div>
                    
                    <div className="insta_follwing_photo d-flex ms-1">
                      <img src={instagram.followerimageUrlF} alt="" />
                      <img className="insta_follwing_photo_s" src={instagram.followerimageUrlS} alt="" />
                      <img className="insta_follwing_photo_t" src={instagram.followerimageUrlT} alt="" />
                    </div>
                    <div className="insta_reviewbox_article position-relative">
                      <p className="insta_reviewbox_article_f">{instagram.followerimageUrlFname}<span className="fw-bold">{instagram.likes}</span>이 좋아합니다</p>
                      <p className="insta_reviewbox_article_s"><span className="fw-bold f_11">{instagram.userName}</span>{instagram.post}</p>              
                      <p className="insta_reviewbox_article_t">{instagram.hashTag}</p>
                    </div>
                </div>
                  </SwiperSlide>
                  <SwiperSlide className='youtube d-flex justify-content-center align-items-center text-center'>
                  <div className="reviewbox review_text bg-white">
                              <div className="d-flex align-items-center justify-content-between youtube_icon mt-1 mx-2">
                                <div>
                                  <img className="youtube_logo" src="/img/img_gms/review/youtube.logo_gms.png" alt="" />
                                </div>
                                <div>
                                  <i className="bi bi-cast me-3"></i>
                                  <i className="bi bi-bell me-3"></i>
                                  <i className="bi bi-search"></i>
                                </div>

                              </div>
                              <div className="youtube_reviewbox_photos mt-2">
                                <div>
                                  <img className="youtube_reviewbox_photo w-100" src={youtube.articleimageUrl}alt="" />
                                  <p className="youtube_reviewbox_title">{youtube.postTitle}</p>
                                </div>
                                <div>
                                  <p className="youtube_reviewbox_article_f">조회수 {youtube.watched}
                                    <span className="youtube_reviewbox_article_s">{youtube.postDate}</span>
                                    <span className="youtube_reviewbox_article_t fw-bold">더보기</span>
                                  </p>
                                </div>
                              <div className="d-flex align-items-center my-3">
                                <img className="youtube_reviewbox_profile ms-2" src={youtube.profileimageUrl} alt="" />
                                <p className="youtube_reviewbox_article_four fw-bold ms-2">{youtube.channelName}
                                  <span className="youtube_reviewbox_article_five ms-2">{youtube.followersCount}</span>
                                </p>
                              </div>
                              </div>
                                <div className=" youtube_bottom_icon mt-5 d-flex align-items-center justify-content-around">
                                  <i className="bi bi-house-door-fill"></i>
                                  <img className="youtube_bottom_icon_s" src="/img/img_gms/review/youtube_shorts_logo_gms.jpg" alt="" />
                                  <i className="bi bi-plus-circle"></i>
                                  <i className="bi bi-collection-play"></i>
                                  <span className="youtube_profile fw-lighter rounded-circle f_11 justify-content-center align-items-center text-white">{youtube.profileName}</span>
                              </div>
                            </div>
                  </SwiperSlide>
                <SwiperSlide className='naverblog d-flex justify-content-center align-items-center text-center'>
                  <div className="reviewbox review_text bg-white">
                    <div className="d-flex align-items-center justify-content-around naverblog_top_icon">
                      <img className="naverblog_logo" src="/img/img_gms/review/naverblog_gms.png" alt="" />
                      <i className="bi bi-card-list"></i>
                      <p className="naverblog_top_title f_13">{naverBlog.blogName}</p>
                      <i className="bi bi-search"></i>
                      <i className="bi bi-list"></i>
                    </div>
                    <hr className="naverblog_border_divider_horizontal position-relative divider_color"></hr>
                    <div>
                      <div className="d-flex flex-column align-items-center naverblog_review_text">
                        <p className="naverblog_review_text_f">{naverBlog.content}</p>
                        <p className="naverblog_review_text_s">
                        {naverBlog.postTitle.split("|").map((v, i)=>(
                          <Fragment key={i}>
                            { i > 0 && <br /> }
                            {v}
                          </Fragment>
                        ))}
                        </p>
                      </div>
                      <div className="naverblog_review_profile">
                        <img className="naverblog_review_profile_img" src={naverBlog.profileimageUrl} alt="" />
                        <p className="naverblog_review_profile_text_f">{naverBlog.userName}</p>
                        <p className="naverblog_review_profile_text_s fw-lighter">{naverBlog.postDate}</p>
                      </div>
                      <div className="d-flex justify-content-center align-items-cente">
                        <p className="naverblog_addfriends fw-lighter f_11"><i className="bi bi-plus"></i>이웃추가</p>
                      </div>
                    </div>
                    <div className="naverblog_review_article border-top my-2">
                      <img className="naverblog_review_article_photo py-2" src={naverBlog.articleimageUrl} alt="" />
                      <p className="naverblog_review_article_post lh-sm">
                      {naverBlog.post.split("|").map((v, i)=>(
                        <Fragment key={i}>
                          { i > 0 && <br /> }
                          {v}
                        </Fragment>
                      ))}
                      </p>
                    </div>    
                    <div className="naverblog_bottom_icon d-flex align-items-center justify-content-around border-top">
                      <img className="naverblog_bottom_naverlogo " src="/img/img_gms/review/icon-naver_gms.png" alt="" />
                      <i className="bi bi-arrow-left-short f_30"></i>
                      <i className="bi bi-arrow-right-short f_30"></i>
                      <i className="bi bi-arrow-clockwise"></i>
                      <img className="naverblog_bottom_ano_arrow" src="/img/img_gms/review/arrow-right_gms.png" alt="" />
                      <i className="bi bi-list"></i>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='usernaver d-flex justify-content-center align-items-center text-center'>
                    <div className="reviewbox bg-white">
                      <div className="usernaver_topmenu review_text w-100 d-flex justify-content-between align-items-center align-content-center">
                        <p className="bg_light col-4">상세정보</p>
                        <p className="bg_dark col-4">리뷰 { naver.reviewCount }</p>
                        <p className="bg_light col-4">Q&A { naver['Q&A']}</p>
                      </div>
                      <div>
                        <div className="usernaver_rating review_text d-flex border-bottom">
                          <div className="col-6 border-end">
                            <p className="user_score">사용자 총 평점</p>
                            <p className=" user_score_count_size fw-bold f_30">{naver.totalScore}</p>
                            <p className=" user_score_star">{naver.userScore}</p>
                          </div>
                          <div className="col-6 px-3">
                            <p className="rating">평점 비율</p>
                            <ul className="user_score_count_margin d-flex justify-content-between">
                              <li className="d-flex flex-column-reverse">
                                <span className="letter f_11">5점</span>
                                <span className="user_score_count_bar ml-1">
                                  <span className="user_score_highcount_colour d-inline-block w-100"></span>
                                </span>
                              </li>
                              <li className="d-flex flex-column-reverse">
                                <span className="letter f_11">4점</span>
                                <span className="user_score_count_bar ml-1">
                                  <span className="user_score_lowcount_colour w-100 d-flex"></span>
                                </span>
                              </li>
                              <li className="d-flex flex-column-reverse">
                                <span className="letter f_11">3점</span>
                                <span className="user_score_count_bar ml-1">
                                  <span className="user_score_lowcount_colour w-100 d-flex"></span>
                                </span>
                              </li>
                              <li className="d-flex flex-column-reverse">
                                <span className="letter f_11">2점</span>
                                <span className="user_score_count_bar ml-1">
                                  <span className="user_score_lowcount_colour w-100 d-flex"></span>
                                </span>
                              </li>
                              <li className="d-flex flex-column-reverse">
                                <span className="letter f_11">1점</span>
                                <span className="user_score_count_bar ml-1">
                                  <span className="user_score_lowcount_colour w-100 d-flex"></span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                        <div className="usernaver_review_article mt-2">
                          <div className="text-start mx-2">
                            <p className="usernaver_reivew_title">스토어 PICK</p>
                            <p className="usernaver_review_subtitle fw-lighter">판매자가 직접 선정한 베스트 리뷰입니다.</p>
                          </div>
                          <div className="d-flex justify-content-between mt-2">
                            <div className="usernaver_review_small_left rounded-0 box_color"></div>
                            <div className="usernaver_review_small_main rounded-0 box_color">
                              <div className="naver_review_userphoto">
                                <div className="d-flex align-items-center ms-2 mt-2">
                                  <img className="usernaver_profile" src={naver.profileimageUrl} alt="" />
                                  <div className="d-flex flex-column align-items-start ms-2">
                                    <p className="reviewbox_user_score fw-bold f_13">{naver.userScore}
                                      <span className="reviewbox_user_score_number ml-1 f_13">{naver.userNumber}</span>
                                    </p>
                                    <p className="reviewbox_user_id f_13">{naver.userName}
                                      <span className="reviewbox_user_date f_13">{naver.creationDate}</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-evenly mt-3">
                                  <p className="reviewbox_user_review text-start">
                                  {naver.post.split("|").map((v, i)=>(
                                              <Fragment key={i}>
                                              { i > 0 && <br /> }
                                              {v}
                                              </Fragment>
                                            ))}
                                    </p>
                                    <img className="reviewbox_user_reviewphoto" src={naver.articleimageUrl} alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="usernaver_review_small_right rounded-0 box_color"></div>
                          </div>
                        </div>
                      <div className="d-flex align-items-center justify-content-evenly mt-4">
                        <div className="favorit_iconbox d-flex align-items-center justify-content-center">
                          <i className="bi bi-heart favorit_icon"></i>
                        </div>
                        <div className="comment_iconbox d-flex align-items-center justify-content-center">
                          <i className="bi bi-chat-dots comment_icon"></i>
                        </div>
                        <div className="present_box d-flex justify-content-evenly align-items-center">
                          <i className="bi bi-gift"></i>
                          <p className="usernaver_box_text fw-medium">선물하기</p>
                        </div>
                        <div className="buy_box d-flex justify-content-evenly align-items-center">
                          <img className="naver_circle_icon" src="/img/img_gms/review/naver_icon-circle_gms.png" alt="" />
                          <p className="usernaver_box_text fw-medium">구매하기</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='twitter d-flex justify-content-center align-items-center text-center'>
                    <div className="reviewbox review_text bg-white">
                      <div className="d-flex justify-content-between align-items-center px-2 pt-2">
                        <p className="twitter_profile fw-lighter rounded-circle d-flex justify-content-center align-items-center text-white f_13  mt-0 ms-0">민서</p>
                        <img className="twitter_logo" src="/img/img_gms/review/icon-twitter_gms.png" alt="" />
                        <i className="bi bi-gear twitter_setting "></i>
                      </div>
                      <div className="twitter_top_text d-flex border-bottom">
                        <p className="col-6">For you</p>
                        <p className="col-6">following</p>
                      </div>
                      <div className="d-flex align-items-center twitter_reviewbox_user_info ms-2">
                        <img className="twitter_review_profile" src={twitter.profileimageUrl} alt="" />
                        <div className="m-2">
                            <div className=" d-flex">
                              <p className="twitter_reviewbox_user_id f_11">{twitter.userName}
                                <span className="twitter_reviewbox_user_nikname f_11 mx-0 ms-2">{twitter.twitterName}</span>  
                              </p>
                            </div>
                            <div className="twitter_reviewbox_review_text f_11">
                              <span>{twitter.post}</span>
                            </div>  
                        </div>            
                      </div>
                      <div className="py-1">
                          <img className="twitter_rieveiwbox_reviewphoto rounded " src={twitter.articleimageUrl} alt="" />
                      </div>
                      <div className="twitter_bottomicon border-top">
                        <div className="py-2 px-3 d-flex align-items-center justify-content-between ">
                          <i className="bi bi-house-door-fill"></i>
                          <i className="bi bi-search"></i>
                          <img className="twitter_followingicon" src="/img/img_gms/review/following_gms.png"alt="" />
                          <i className="bi bi-bell-fill"></i>
                          <i className="bi bi-envelope"></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='instagram d-flex justify-content-center align-items-center text-center'>
                  <div className="reviewbox review_text bg-white fw-500">
                    <div className="insta_reviewbox_user_info d-flex justify-content-between align-items-center mt-1 mx-1">
                      <img className="insta_profilephoto" src={instagram.profileimageUrl} alt="" />
                      <div className="d-flex">
                        <div>
                          <p className="insta_reviewbox_user_id d-flex flex-column align-items-baseline">{instagram.userName}
                            <span className="insta_reviewbox_user_country">{instagram.location}</span> 
                          </p>
                        </div>
                          <i className="bi bi-three-dots-vertical"></i>
                      </div>
                  </div>

                    <div>
                      <img className="insta_reviewbox_photo" src={instagram.articleimageUrl} alt="" />
                      <div className="insta_reiviewbox_icon d-flex">
                        <i className="bi bi-heart-fill ms-1"></i>
                        <i className="bi bi-chat ms-3"></i>
                        <img className="insta_icon_send ms-3" src="/img/img_gms/review/send_gms.svg" alt="" />            
                      </div>
                    </div>
                    
                    <div className="insta_follwing_photo d-flex ms-1">
                      <img src={instagram.followerimageUrlF} alt="" />
                      <img className="insta_follwing_photo_s" src={instagram.followerimageUrlS} alt="" />
                      <img className="insta_follwing_photo_t" src={instagram.followerimageUrlT} alt="" />
                    </div>
                    <div className="insta_reviewbox_article position-relative">
                      <p className="insta_reviewbox_article_f">{instagram.followerimageUrlFname}<span className="fw-bold">{instagram.likes}</span>이 좋아합니다</p>
                      <p className="insta_reviewbox_article_s"><span className="fw-bold f_11">{instagram.userName}</span>{instagram.post}</p>              
                      <p className="insta_reviewbox_article_t">{instagram.hashTag}</p>
                    </div>
                </div>
                  </SwiperSlide>
                  <SwiperSlide className='youtube d-flex justify-content-center align-items-center text-center'>
                  <div className="reviewbox review_text bg-white">
                              <div className="d-flex align-items-center justify-content-between youtube_icon mt-1 mx-2">
                                <div>
                                  <img className="youtube_logo" src="/img/img_gms/review/youtube.logo_gms.png" alt="" />
                                </div>
                                <div>
                                  <i className="bi bi-cast me-3"></i>
                                  <i className="bi bi-bell me-3"></i>
                                  <i className="bi bi-search"></i>
                                </div>

                              </div>
                              <div className="youtube_reviewbox_photos mt-2">
                                <div>
                                  <img className="youtube_reviewbox_photo w-100" src={youtube.articleimageUrl}alt="" />
                                  <p className="youtube_reviewbox_title">{youtube.postTitle}</p>
                                </div>
                                <div>
                                  <p className="youtube_reviewbox_article_f">조회수 {youtube.watched}
                                    <span className="youtube_reviewbox_article_s">{youtube.postDate}</span>
                                    <span className="youtube_reviewbox_article_t fw-bold">더보기</span>
                                  </p>
                                </div>
                              <div className="d-flex align-items-center my-3">
                                <img className="youtube_reviewbox_profile ms-2" src={youtube.profileimageUrl} alt="" />
                                <p className="youtube_reviewbox_article_four fw-bold ms-2">{youtube.channelName}
                                  <span className="youtube_reviewbox_article_five ms-2">{youtube.followersCount}</span>
                                </p>
                              </div>
                              </div>
                                <div className=" youtube_bottom_icon mt-5 d-flex align-items-center justify-content-around">
                                  <i className="bi bi-house-door-fill"></i>
                                  <img className="youtube_bottom_icon_s" src="/img/img_gms/review/youtube_shorts_logo_gms.jpg" alt="" />
                                  <i className="bi bi-plus-circle"></i>
                                  <i className="bi bi-collection-play"></i>
                                  <span className="youtube_profile fw-lighter rounded-circle f_11 justify-content-center align-items-center text-white">{youtube.profileName}</span>
                              </div>
                            </div>
                  </SwiperSlide>
                <SwiperSlide className='naverblog d-flex justify-content-center align-items-center text-center'>
                  <div className="reviewbox review_text bg-white">
                    <div className="d-flex align-items-center justify-content-around naverblog_top_icon">
                      <img className="naverblog_logo" src="/img/img_gms/review/naverblog_gms.png" alt="" />
                      <i className="bi bi-card-list"></i>
                      <p className="naverblog_top_title f_13">{naverBlog.blogName}</p>
                      <i className="bi bi-search"></i>
                      <i className="bi bi-list"></i>
                    </div>
                    <hr className="naverblog_border_divider_horizontal position-relative divider_color"></hr>
                    <div>
                      <div className="d-flex flex-column align-items-center naverblog_review_text">
                        <p className="naverblog_review_text_f">{naverBlog.content}</p>
                        <p className="naverblog_review_text_s">
                        {naverBlog.postTitle.split("|").map((v, i)=>(
                          <Fragment key={i}>
                            { i > 0 && <br /> }
                            {v}
                          </Fragment>
                        ))}
                        </p>
                      </div>
                      <div className="naverblog_review_profile">
                        <img className="naverblog_review_profile_img" src={naverBlog.profileimageUrl} alt="" />
                        <p className="naverblog_review_profile_text_f">{naverBlog.userName}</p>
                        <p className="naverblog_review_profile_text_s fw-lighter">{naverBlog.postDate}</p>
                      </div>
                      <div className="d-flex justify-content-center align-items-cente">
                        <p className="naverblog_addfriends fw-lighter f_11"><i className="bi bi-plus"></i>이웃추가</p>
                      </div>
                    </div>
                    <div className="naverblog_review_article border-top my-2">
                      <img className="naverblog_review_article_photo py-2" src={naverBlog.articleimageUrl} alt="" />
                      <p className="naverblog_review_article_post lh-sm">
                      {naverBlog.post.split("|").map((v, i)=>(
                        <Fragment key={i}>
                          { i > 0 && <br /> }
                          {v}
                        </Fragment>
                      ))}
                      </p>
                    </div>    
                    <div className="naverblog_bottom_icon d-flex align-items-center justify-content-around border-top">
                      <img className="naverblog_bottom_naverlogo " src="/img/img_gms/review/icon-naver_gms.png" alt="" />
                      <i className="bi bi-arrow-left-short f_30"></i>
                      <i className="bi bi-arrow-right-short f_30"></i>
                      <i className="bi bi-arrow-clockwise"></i>
                      <img className="naverblog_bottom_ano_arrow" src="/img/img_gms/review/arrow-right_gms.png" alt="" />
                      <i className="bi bi-list"></i>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
  </div>
  <div className="section_blank d-flex justify-content-center flex-column align-items-center">
    <button className="btn_gms rounded-pill border-0 text-white text-center p-0 m-0 font_button">더보기</button>
  </div>
        </section>  
    );
  }


  export default Review;