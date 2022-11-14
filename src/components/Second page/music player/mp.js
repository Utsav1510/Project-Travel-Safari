import React from 'react'

export default function Mp() {
    function show() {
        var x = document.getElementById("aside-section");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
  return (
    <div >
  {/*################ HEADER ########################  */}

  <audio className="video" loop unmuted autoPlay poster=''>
            <source src={require('./Yummy.mp3')}  type="audio/mp3"></source>
        </audio>
  <div className="header-container display-flex" style={require('./majorProject.css')}>
    
  
    <div className="header-logo-container display-flex">
      <span className="logo-conatiner"><i className="fas fa-compact-disc" /></span>
      <div className="header-music-player">
        &nbsp;Music<br />
        <span><b>&nbsp;Player</b></span><br />
      </div>
    </div>
    <span id="favourites"><a href="#Favourites">Favourites</a></span>
    {/* ######################## LINKS ##################### */}
    <div id="links" className="links display-flex" style={{}}>
      <marquee scrollamount={10}>
        <ul className="ul-header-links">
          <li>
            <a href="#music-genres">Music Genres</a>
          </li>
          <li>
            <a href="#popular-releases-container">Popular Releases</a>
          </li>
          <li>
            <a href="#stations">Stations</a>
          </li>
          <li>
            <a href="#music-types">Music Type</a>
          </li>
          <li>
            <a href="#latest-releases-container">Latest Releases</a>
          </li>
        </ul>
      </marquee>
    </div>
    {/* ######################### Header-right ########################## */}
    <div className="header-right display-flex">
      <div className="search-bar display-inline-block">
        <form className="display-flex">
          <div>
            <a href="#toBeDone"><i className="fas fa-search" /></a>
          </div>
          <div><input type="search" placeholder="Search" /></div>
          <div className="microphone"><a href="#toBeDone"><i className="fas fa-microphone" /></a></div>	
        </form>
      </div>
      <div className="notification-bell display-inline-block">
        <a href="#toBeDone">	<i className="fas fa-bell" /></a>
      </div>
      <div className="login-image border-radius-50">
        <a href="#toBeDone">
          <img src="https://i.pinimg.com/736x/09/11/1c/09111cf6a51270513234dca08a30a6b9.jpg" />
        </a>
      </div>
    </div>
  </div>
  <div className="mainBody-and-Aside display-flex">
    {/* ################ Main-Body ################  */}
    <div className="main-body">
      {/*########## Different music genres########### */}
      <div id="music-genres" className="display-flex">
        <div className="title">
          <h2>
            <i className="fas fa-music" /> 
            Music Genres 
          </h2>
        </div>
        <div className="genre-image">
          <a href="#toBeDone"><img className="image-hover" id="genre-img-1" src="https://i.pinimg.com/564x/7f/0d/6d/7f0d6d07c9a95d4839310d690af37e2a.jpg" /><div id="play-hover">
              <i className="fas fa-play" />
            </div></a>
        </div>
        <div className="genre-image ">
          <a href="#toBeDone"><img className="image-hover" id="genre-img-2" src="https://i.pinimg.com/originals/1f/9c/b7/1f9cb7cf2ebcbd8d9f0d546d4bf389bb.jpg" /><div id="play-hover">
              <i className="fas fa-play" />
            </div></a>
        </div>
        <div className="genre-image">
          <a href="#toBeDone"><img className="image-hover" id="genre-img-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86S3ZvqyEYQ3XcDL8Hag8YnrWKvsVTp-7Qg&usqp=CAU" /><div id="play-hover">
              <i className="fas fa-play" />
            </div></a>
        </div>
        <div className="genre-image">
          <a href="#toBeDone"><img className="image-hover" id="genre-img-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQezY-KRQfOnGH9bMQZg81l9lZsCbLZOBsdEg&usqp=CAU" /><div id="play-hover">
              <i className="fas fa-play" />
            </div></a>
        </div>
        <div className="genre-image">
          <a href="#toBeDone"><img className="image-hover" id="genre-img-5" src="https://i.pinimg.com/474x/8b/92/f2/8b92f2d01539b34bb2ffde603ddb4b80.jpg" /><div id="play-hover">
              <i className="fas fa-play" />
            </div></a>
        </div>
      </div>
      {/*############# POPULAR RELEASES ################## */}
      <div id="popular-releases-container" className="display-flex">
        <div className="title">
          <h2><i className="fas fa-music" /> Popular Releases</h2>
        </div>
        <div className="popular-releases-sub-container display-flex">
          <div className="popular-releases">
            <a href="#toBeDone"><img id="popular-img-release-1" className="image-hover" src="https://i.pinimg.com/originals/5d/a3/c1/5da3c18a6a710237be5ee94288809a25.jpg" />
              <div id="play-hover">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
          <div className="release-details">
            What Makes You Beautiful
            <br />
            <br />
            One Direction
            <br />
            <br />
            <br />
          </div>	
          <div className="duration">
            <div className="menu-popular-releases">
              <a href="#toBeDone"><i className="fas fa-ellipsis-h" />
              </a>
              <br />
              <br />
              <div className="menu-popular-releases-content">
                <ul className="ul-menu-popular-releases">
                  <a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container">
                        <i className="fas fa-play" />
                      </span>
                      Play Now 
                    </li>
                  </a><a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container">
                        <i className="fas fa-plus" />
                      </span>
                      Add To Queue
                    </li>
                  </a>
                  <a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container heart">
                        <i className="fas fa-heart" />
                      </span>
                      Add To Favourites
                    </li>
                  </a>
                  <a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container ">
                        <i className="fas fa-info-circle" />
                      </span>
                      Get Info
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            4:00
            <br />	
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="popular-releases-sub-container display-flex">
          <div className="popular-releases">
            <a href="#toBeDone"><img id="popular-img-release-1" className="image-hover" src="https://i.pinimg.com/564x/e7/5e/d3/e75ed3db0db7f67b40108f3d823f6988.jpg" />
              <div id="play-hover">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
          <div className="release-details">
            Wham!
            <br />
            <br />
            George Michael
            <br />
            <br />
            <br />
          </div>	
          <div className="duration">
            <div className="menu-popular-releases">
              <a href="#toBeDone"><i className="fas fa-ellipsis-h" />
              </a>
              <br />
              <br />
              <div className="menu-popular-releases-content">
                <ul className="ul-menu-popular-releases">
                  <a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container">
                        <i className="fas fa-play" />
                      </span>
                      Play Now 
                    </li>
                  </a><a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container">
                        <i className="fas fa-plus" />
                      </span>
                      Add To Queue
                    </li>
                  </a>
                  <a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container heart">
                        <i className="fas fa-heart" />
                      </span>
                      Add To Favourites
                    </li>
                  </a>
                  <a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container ">
                        <i className="fas fa-info-circle" />
                      </span>
                      Get Info
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            4:00
            <br />	
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="popular-releases-sub-container display-flex">
          <div className="popular-releases">
            <a href="#toBeDone"><img id="popular-img-release-1" className="image-hover" src="https://headlineplanet.com/home/wp-content/uploads/2020/08/BTS-Dynamite-Group-1-scaled-e1597245051898-758x983.jpg" />
              <div id="play-hover">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
          <div className="release-details">
            Dynamite
            <br />
            <br />
            BTS
            <br />
            <br />
            <br />
          </div>	
          <div className="duration">
            <div className="menu-popular-releases">
              <a href="#toBeDone"><i className="fas fa-ellipsis-h" />
              </a>
              <br />
              <br />
              <div className="menu-popular-releases-content">
                <ul className="ul-menu-popular-releases">
                  <a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container">
                        <i className="fas fa-play" />
                      </span>
                      Play Now 
                    </li>
                  </a><a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container">
                        <i className="fas fa-plus" />
                      </span>
                      Add To Queue
                    </li>
                  </a>
                  <a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container heart">
                        <i className="fas fa-heart" />
                      </span>
                      Add To Favourites
                    </li>
                  </a>
                  <a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container ">
                        <i className="fas fa-info-circle" />
                      </span>
                      Get Info
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            4:00
            <br />	
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="popular-releases-sub-container display-flex">
          <div className="popular-releases">
            <a href="#toBeDone"><img id="popular-img-release-1" className="image-hover" src={require("./Images/blackpink___how_you_like_that.jpg" )}/>
              <div id="play-hover">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
          <div className="release-details">
            How You Like That
            <br />
            <br />
            Blackpink
            <br />
            <br />
            <br />
          </div>	
          <div className="duration">
            <div className="menu-popular-releases">
              <a href="#toBeDone"><i className="fas fa-ellipsis-h" />
              </a>
              <br />
              <br />
              <div className="menu-popular-releases-content">
                <ul className="ul-menu-popular-releases">
                  <a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container">
                        <i className="fas fa-play" />
                      </span>
                      Play Now 
                    </li>
                  </a><a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container">
                        <i className="fas fa-plus" />
                      </span>
                      Add To Queue
                    </li>
                  </a>
                  <a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container heart">
                        <i className="fas fa-heart" />
                      </span>
                      Add To Favourites
                    </li>
                  </a>
                  <a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container ">
                        <i className="fas fa-info-circle" />
                      </span>
                      Get Info
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            4:00
            <br />	
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="popular-releases-sub-container display-flex">
          <div className="popular-releases">
            <a href="#toBeDone"><img id="popular-img-release-1" className="image-hover" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/24kGoldn_-_Mood_Remix.png/220px-24kGoldn_-_Mood_Remix.png" />
              <div id="play-hover">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
          <div className="release-details">
            Mood
            <br />
            <br />
            24kGoldn
            <br />
            <br />
            <br />
          </div>	
          <div className="duration">
            <div className="menu-popular-releases">
              <a href="#toBeDone"><i className="fas fa-ellipsis-h" />
              </a>
              <br />
              <br />
              <div className="menu-popular-releases-content">
                <ul className="ul-menu-popular-releases">
                  <a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container">
                        <i className="fas fa-play" />
                      </span>
                      Play Now 
                    </li>
                  </a><a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container">
                        <i className="fas fa-plus" />
                      </span>
                      Add To Queue
                    </li>
                  </a>
                  <a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container heart">
                        <i className="fas fa-heart" />
                      </span>
                      Add To Favourites
                    </li>
                  </a>
                  <a href="#toBeDone">
                    <li>
                      <span className="ul-logo-container ">
                        <i className="fas fa-info-circle" />
                      </span>
                      Get Info
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            4:00
            <br />	
            <br />
            <br />
            <br />
          </div>
        </div>
        {/* ################ ARTISTS #######################3 */}
        <div id="artists" className="display-flex">
          <div className="title">
            <h2><i className="fas fa-music" /> Popular Artists</h2>
          </div>
          <div className="artist-image image-container ">
            <figure>
              <a target="_blank" href="SINGLE PLAYLIST SCREENS-popular artist onclick htmls/popular-artist-onlick-justin-bieber.html"><img className="image-hover" id="artist-img-1" src={require('./Images/justin bieber.png')}/>
                <div id="play-hover">
                  <i className="fas fa-play" />
                </div>	
              </a>
              <figcaption>Jusitn Bieber</figcaption>
            </figure>
          </div>
          <div className="artist-image image-container ">
            <figure>
              <a target="_blank" href="SINGLE PLAYLIST SCREENS-popular artist onclick htmls/popular-artist-onlick-ed-sheeran.html"><img className="image-hover" id="artist-img-1" src={require('./Images/ed sheeran.jpg')}/>
                <div id="play-hover">
                  <i className="fas fa-play" />
                </div>	
              </a>
              <figcaption>Ed Sheeran</figcaption>
            </figure>
          </div>



          {/* <div className="artist-image image-container ">
            <figure>
              <a target="_blank" href="SINGLE PLAYLIST SCREENS-popular artist onclick htmls/popular-artist-onlick-ed-sheeran.html" src={require('./Images/ed sheeran.jpg')}>
                <div id="play-hover">
                  <i className="fas fa-play" />
                </div>	
              </a>
              <figcaption>Ed Sheeran</figcaption>
            </figure>
          </div> */}
          <div className="artist-image image-container ">
            <figure>
              <a target="_blank" href="SINGLE PLAYLIST SCREENS-popular artist onclick htmls/popular-artist-onlick-shawn-mendes.html"><img className="image-hover" id="artist-img-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0K1gYWZ6sn5CeBj6XjI3AWGra327CiCzAwA&usqp=CAU" />
                <div id="play-hover">
                  <i className="fas fa-play" />
                </div>	
              </a>
              <figcaption>Shawn Mendes</figcaption>
            </figure>
          </div>
          <div className="artist-image image-container ">
            <figure>
              <a target="_blank" href="SINGLE PLAYLIST SCREENS-popular artist onclick htmls/popular-artist-onlick-bruno-mars.html"><img className="image-hover" id="artist-img-4" src={require('./Images/brunoMars.jpg')} />
                <div id="play-hover">
                  <i className="fas fa-play" />
                </div>	
              </a>
              <figcaption>Bruno Mars</figcaption>
            </figure>
          </div>
          <div className="artist-image image-container ">
            <figure>
              <a target="_blank" href="SINGLE PLAYLIST SCREENS-popular artist onclick htmls/popular-artist-onlick-selena-gomez.html"><img className="image-hover" id="artist-img-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjaa4LKxAQMwhJPU_M5VDmOJiqvLd2XAiAg&usqp=CAU" />
                <div id="play-hover">
                  <i className="fas fa-play" />
                </div>	
              </a>
              <figcaption align="right">Selena Gomez</figcaption>
            </figure>
          </div>
        </div>
        {/* ############## STATIONS ############## */}
        <div id="stations" className="display-flex">
          <div className="title">
            <h2><i className="fas fa-music" /> Stations</h2>
          </div>
          <div>
            <a href="#toBeDone">
              <img src={require("./Images/red-butterfly.png")} className="border-radius -50 image-hover" />
              <div id="play-hover">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
          <div>
            <a href="#toBeDone">
              <img src={require("./Images/retro.png")} className="border-radius -50 image-hover" />
              <div id="play-hover">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
          <div>
            <a href="#toBeDone">
              <img src={require("./Images/chill.png")} className="border-radius -50 image-hover" />
              <div id="play-hover">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
          <div>
            <a href="#toBeDone">
              <img src={require("./Images/Rock.png")} className="border-radius -50 image-hover" />
              <div id="play-hover">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
          <div>
            <a href="#toBeDone">
              <img src={require("./Images/selena gomez.png")} className="border-radius -50 image-hover" />
              <div id="play-hover">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
        </div>
        {/* ###################### music-types ####################### */}
        <div id="music-types" className="display-flex">
          <div className="title">
            <h2><i className="fas fa-music" /> Music Type</h2>
          </div>
          <div className="music-type-image-container">
            <a href="#toBeDone">
              <img className=" image-hover music-type-image" src={require("./Images/PARTY.png")} />
              <div id="play-hover">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
          <div className="music-type-image-container">
            <a href="#toBeDone">
              <img className="image-hover music-type-image" src={require("./Images/electronic-music.png")} />
              <div id="play-hover">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
          <div className="music-type-image-container">
            <a href="#toBeDone">
              <img className="image-hover music-type-image" src={require("./Images/road-trip.png")} />
              <div id="play-hover">
                <i className="fas fa-play" />
              </div>
            </a>
          </div>
        </div>
        {/* ################  Latest Releases################### */}
        <div id="latest-releases-container" className="display-flex">
          <div className="title">
            <h2><i className="fas fa-music" /> Latest Releases</h2>
          </div>
          <div className="latest-releases">
            <figure>
              <a href="#toBeDone"><img className="image-hover" src="https://direct.rhapsody.com/imageserver/images/alb.463170373/500x500.jpg" />
                <div id="play-hover">
                  <i className="fas fa-play" />
                </div>
              </a>
              <figcaption>
                Headlocc<br />
                20 Aug,2020
              </figcaption>
            </figure>				</div>
          <div className="latest-releases">
            <figure>
              <a href="#toBeDone"><img className="image-hover" src="https://pbs.twimg.com/media/EicBdpBU4AIB0Qv?format=jpg&name=900x900" />
                <div id="play-hover">
                  <i className="fas fa-play" />
                </div>
              </a>
              <figcaption>
                Holy<br />
                20 Aug,2020
              </figcaption>
            </figure>				</div>
          <div className="latest-releases">
            <figure>
              <a href="#toBeDone">
                <img className="image-hover" src="https://i.pinimg.com/736x/75/d6/e5/75d6e50718ff034f8c6457d078cb1f61.jpg" />
                <div id="play-hover">
                  <i className="fas fa-play" />
                </div>
              </a>
              <figcaption>
                Wonder<br />
                20 oct,2020
              </figcaption>
            </figure>
          </div>
          <div className="latest-releases">
            <figure>
              <a href="#toBeDone">
                <img className="image-hover" src={require("./Images/becky-hill.jpg")} />
                <div id="play-hover">
                  <i className="fas fa-play" />
                </div>
              </a>
              <figcaption>
                Space<br />
                2 Apr,2020
              </figcaption>
            </figure>
          </div>
          <div className="latest-releases">
            <figure>
              <a href="#toBeDone">
                <img className="image-hover" src={require("./Images/i am on top.jpg")} />
                <div id="play-hover">
                  <i className="fas fa-play" />
                </div>
              </a>
              <figcaption>
                I Am on Top<br />
                7 July,2020
              </figcaption>
            </figure>
          </div>
          <div className='space'>

</div>
        </div>
        <div className="music-player-space">
        </div>
      </div>
      {/* #################### ASIDE SECTION ############################## */}
      {/* #####################  ASIDE SECTION BUTTON ####################### */}
      <div id="aside-section-button-container">
        <button type="button" onClick={show}id="aside-section-button">Queue&nbsp;<i className="fas fa-chevron-down">
          </i></button>
      </div>
      <div id="aside-section">
        {/* #################### ASIDE HEADER ############################# */}
        <div className="aside-header border-bottom">
          <h1 className="Queue-header"> 
            <span>
              Queue 
              <i className="fas fa-chevron-down">
              </i>
              <div className="queue-Drop-Down-content">
                <ul className="queue-ul">
                  <li>
                    <span className="ul-logo-container ">
                      <i className="fas fa-bars" />
                    </span>
                    Playlists
                  </li>
                  <li>
                    <span className="ul-logo-container heart">
                      <i className="fas fa-heart" />
                    </span>
                    Favoutrite Songs
                  </li>
                </ul>
              </div>	
            </span>
          </h1>
        </div>
        {/* ####################### ASIDE-MAIN-BODY ############################ */}
        <div className="aside-main-body">
          <div className="queue-song-container">
            <div className="serial-no-1">
              01
            </div>
            <div className="queue-song-img-container">
              <img src={require("./Images/sunflower.jpg")} />
            </div>
            <div className="queue-song-name">
              Sunflower<br />
              <span className="queue-singer-name">
                Post Malone</span>	
            </div>
            <div className="playBtn-in-queue">
              <i className="fas fa-play" />
            </div>
            <div className="fav-heart">
              <i className="far fa-heart" />
            </div>
          </div>
          <div className="queue-song-container">
            <div className="serial-no-2">
              02
            </div>
            <div className="queue-song-img-container">
              <img src={require("./Images/purpose.jpg")} />
            </div>
            <div className="queue-song-name">
              What Do You Mean ?<br />
              <span className="queue-singer-name">
                Justin Bieber</span>	
            </div>
            <div className="playBtn-in-queue">
              <i className="fas fa-play" />
            </div>
            <div className="fav-heart">
              <i className="far fa-heart" />
            </div>
          </div>
          <div className="queue-song-container">
            <div className="serial-no-3">
              03
            </div>
            <div className="queue-song-img-container">
              <img src={require("./Images/voicenotes.jpg")} />
            </div>
            <div className="queue-song-name">
              Boy<br />
              <span className="queue-singer-name">
                Charlie Puth</span>	
            </div>
            <div className="playBtn-in-queue">
              <i className="fas fa-play" />
            </div>
            <div className="fav-heart">
              <i className="far fa-heart" />
            </div>
          </div>
          <div className="queue-song-container">
            <div className="serial-no-4">
              04
            </div>
            <div className="queue-song-img-container">
              <img src={require("./Images/illuminate.jpg")} />
            </div>
            <div className="queue-song-name">
              Treat You Better<br />
              <span className="queue-singer-name">
                Shawn Mendes</span>	
            </div>
            <div className="playBtn-in-queue">
              <i className="fas fa-play" />
            </div>
            <div className="fav-heart">
              <i className="far fa-heart" />
            </div>
          </div>
          <div className="queue-song-container">
            <div className="serial-no-5">
              05
            </div>
            <div className="queue-song-img-container">
              <img src={require("./Images/maroon5.jpg")}/>
            </div>
            <div className="queue-song-name">
              Sugar<br />
              <span className="queue-singer-name">
                Maroon 5</span>	
            </div>
            <div className="playBtn-in-queue">
              <i className="fas fa-play" />
            </div>
            <div className="fav-heart">
              <i className="far fa-heart" />
            </div>
          </div>
          <div className="queue-song-container">
            <div className="serial-no-6">
              06
            </div>
            <div className="queue-song-img-container">
              <img src={require("./Images/alan-walker.jpg")} />
            </div>
            <div className="queue-song-name">
              Alone<br />
              <span className="queue-singer-name">
                Alan Walker</span>	
            </div>
            <div className="playBtn-in-queue">
              <i className="fas fa-play" />
            </div>
            <div className="fav-heart">
              <i className="far fa-heart" />
            </div>
          </div>
          <div className="queue-song-container">
            <div className="serial-no-7">
              07
            </div>
            <div className="queue-song-img-container">
              <img src={require("./Images/Alan-walker-SingMeToSleep.jpg")} />
            </div>
            <div className="queue-song-name">
              Sing Me To Sleep<br />
              <span className="queue-singer-name">
                Alan Walker</span>	
            </div>
            <div className="playBtn-in-queue">
              <i className="fas fa-play" />
            </div>
            <div className="fav-heart">
              <i className="far fa-heart" />
            </div>
          </div>
          <div className="queue-song-container">
            <div className="serial-no-8">
              08
            </div>
            <div className="queue-song-img-container">
              <img src={require("./Images/selena-feel-me.jpg")} />
            </div>
            <div className="queue-song-name">
              Feel Me<br />
              <span className="queue-singer-name">
                Selena Gomez </span>	
            </div>
            <div className="playBtn-in-queue">
              <i className="fas fa-play" />
            </div>
            <div className="fav-heart">
              <i className="far fa-heart" />
            </div>
          </div>
          <div className="queue-song-container">
            <div className="serial-no-9">
              09
            </div>
            <div className="queue-song-img-container">
              <img src={require("./Images/taylor-swift-me.jpg")} />
            </div>
            <div className="queue-song-name">
              Me<br />
              <span className="queue-singer-name">
                Taylor Swift</span>	
            </div>
            {/* <div class="playBtn-in-queue">
						<i class="fas fa-play"></i>
					</div> */}
            <div className="pause-Btn-in-queue">
              <i className="fas fa-pause" />
            </div>
            <div className="fav-heart">
              <i className="far fa-heart" />
            </div>
          </div>
          <div className="queue-song-container">
            <div className="serial-no-10">
              10
            </div>
            <div className="queue-song-img-container">
              <img src={require("./Images/one direction.jpg")} />
            </div>
            <div className="queue-song-name">
              One Way or Another<br />
              <span className="queue-singer-name">
                One Direction</span>	
            </div>
            <div className="playBtn-in-queue">
              <i className="fas fa-play" />
            </div>
            <div className="fav-heart">
              <i className="far fa-heart" />
            </div>
          </div>
          <div className="queue-song-container">
            <div className="serial-no-11">
              11
            </div>
            <div className="queue-song-img-container">
              <img src={require("./Images/bts-DNA.jpg")} />
            </div>
            <div className="queue-song-name">
              DNA<br />
              <span className="queue-singer-name">
                BTS
              </span>	
            </div>
            <div className="playBtn-in-queue">
              <i className="fas fa-play" />
            </div>
            <div className="fav-heart">
              <i className="far fa-heart" />
            </div>
          </div>
        </div>
      </div>
    </div>


                


    {/* ####################################### MUSIC PLAYER ############################################ */}
    <div className="music-player-space">
    </div>
    <div className="music-player">
      <figure>
        <img className="music-img" src={require("./Images/taylor-swift-me.jpg")} />  
      </figure>
      <div className="song-name"> 
        <i className="fas fa-music" /> Me : &nbsp;  Taylor Swift
      </div>
      <div className="sub-container-player div-inline-block">
        <span className="time-start">
          1:30
        </span>
        <div className="bar-container div-inline-block">
          <div id="music-bar" className="display-flex">
            <div className="circular-dragger ">
            </div>
          </div>
        </div>
        <span className="time-start">
          3:00
        </span>
        <div id="music-button" className="div-inline-block">
          <br />
          <i className="fas fa-step-backward" />
          <i className="fas fa-pause" />
          <i className="fas fa-step-forward ste[" />
        </div>
        <div className="music-options div-inline-block">
          <i className="fas fa-random" />
          <i className="fas fa-redo" />
          <i className="fas fa-volume-up" />
          <i className="fas fa-bars" />
        </div>
      </div>
    </div>
   
  </div></div>

  )
}
