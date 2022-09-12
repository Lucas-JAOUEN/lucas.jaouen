<template>
  <main class="yellow">
    <div className="demo-sticker" title="Swich Light">
      <a href="/home-light">
        <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
      </a>
    </div>
    <div class="selectWrapper-switch-lang">
      <select class="selectBox" name="lang" v-model="lang">
      <option value="en">English</option>
      <option value="fr">French</option>
    </select>
    </div>
    
    <!-- <h1> {{translate('Home')}}</h1> -->
    <!-- End Sticker -->

    <header class="header">
      <ul
        class="nav nav-tabs icon-menu d-lg-block revealator-slideup revealator-once revealator-delay1"
        id="myTab"
        role="tablist"
      >
        <li class="icon-box" role="presentation">
          <button class="active" data-bs-toggle="tab" data-bs-target="#home">
            <i class="fa fa-home"></i>
            <h2>{{translate('home')}}</h2>
          </button>
        </li>
        <!-- End icon-box -->

        <li class="icon-box" role="presentation">
          <button data-bs-toggle="tab" data-bs-target="#about">
            <i class="fa fa-user"></i>
            <h2>{{translate('about')}}</h2>
          </button>
        </li>
        <!-- End icon-box -->

        <li class="icon-box" role="presentation">
          <button data-bs-toggle="tab" data-bs-target="#portfolio">
            <i class="fa fa-briefcase"></i>
            <h2>Portfolio</h2>
          </button>
        </li>
        <!-- End icon-box -->

        <li class="icon-box" role="presentation">
          <button data-bs-toggle="tab" data-bs-target="#contact">
            <i class="fa fa-envelope-open"></i>
            <h2>Contact</h2>
          </button>
        </li>
        <!-- End icon-box -->

        <li class="icon-box" role="presentation">
          <button data-bs-toggle="tab" data-bs-target="#blog">
            <i class="fa fa-comments"></i>
            <h2>Blog</h2>
          </button>
        </li>
        <!-- End icon-box -->
      </ul>
    </header>
    <!-- End header -->

    <div class="tab-content tab-panel_list home" id="myTabContent">
      <!-- Start Hero content tabs -->
      <div class="tab-pane home fade show active" id="home">
        <div class="container-fluid main-container container-home p-0">
          <div class="color-block d-none d-lg-block"></div>
            <!-- Start Hero Banner -->
            <div class="row home-details-container align-items-center">
    <div
      class="col-lg-4 bg position-fixed d-none d-lg-block hero-img"
      :style="{ backgroundImage: 'url(' + heroContent.heroImage + ')' }"
    ></div>
    <div
      class="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start"
    >
      <div>
        <img
          :src="heroContent.heroMobileImage"
          class="img-fluid main-img-mobile d-sm-block d-lg-none"
          alt="hero man"
        />
        <h1 class="text-uppercase poppins-font">
          {{translate('name')}}
          <span>{{translate('metier')}}</span>
        </h1>
        <p class="open-sans-font">{{translate('bio')}}</p>
        <button
          class="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <span class="button-text">{{translate('labelBtn')}}</span>
          <span class="button-icon fa fa-arrow-right"></span>
        </button>
      </div>
    </div>
  </div>
  <!-- {/* End home-details-container */} -->

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
    >
      <div class="modal-content dark">
        <button class="close-modal" data-bs-dismiss="modal" aria-label="Close">
          <img src="../assets/images/cancel.svg" alt="close image" />
        </button>
        <div class="modal-body">
          <div class="box_inner about">
            <div class="title-section text-left text-sm-center">
              <h1>{{translate('apropos')}} <span>{{translate('moi')}}</span></h1>
              <span class="title-bg">Resume</span>
            </div>
            <!-- {/* End title */} -->
            <!-- Start IndexMain -->
            <section class="main-content">
    <div class="container">
      <div class="row">
        <!-- {/* Personal Info Starts */} -->

        <div class="col-xl-6 col-lg-5 col-12">
          <div class="row">
            <div class="col-12">
              <h3 class="text-uppercase custom-title mb-0 ft-wt-600">
                {{ translate('infoPersTitle')}}
              </h3>

              <!-- <h3 class="text-uppercase custom-title mb-0 ft-wt-600" style="text-align: center">
                personal infos
              </h3> -->
            </div>
            <!-- {/* End .col */} -->

            <div class="col-12 d-block d-sm-none">
              <img
                :src="imgMobile"
                class="img-fluid main-img-mobile"
                alt="about avatar"
              />
            </div>
            <!-- {/* image for mobile menu */} -->

            <div class="col-12">
              <!-- Start Personnal info -->
              <ul class="about-list list-unstyled open-sans-font">
                <li>
                  <span class="title">{{ translate('firstName')}}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('prenomInfo')}}
                  </span>
                </li>
                <li>
                  <span class="title">{{ translate('lastName') }}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('nomInfo') }}
                  </span>
                </li>
                <li>
                  <span class="title">{{ translate('Age') }}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('infoAge') }}
                  </span>
                </li>
                <li>
                  <span class="title">{{ translate('Nationality') }}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('infoNationalite') }}
                  </span>
                </li>
                <li>
                  <span class="title">{{ translate('internship') }}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('infoInternship') }}
                  </span>
                </li>
                <li>
                  <span class="title">{{ translate('address') }}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('addressInfo') }}
                  </span>
                </li>
                <li>
                  <span class="title">{{ translate('phone') }}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('phoneInfo') }}
                  </span>
                </li>
                <li>
                  <span class="title">{{ translate('email') }}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('emailInfo') }}
                  </span>
                </li>
                <li>
                  <span class="title">{{ translate('insta') }}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('instaInfo') }}
                  </span>
                </li>
                <li>
                  <span class="title">{{ translate('langages') }}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('langagesInfo') }}
                  </span>
                </li>
              </ul>
              <!-- End Personnal Info -->
            </div>
            <!-- {/* End personal info */} -->

            <div class="col-12 mt-1">
              <a class="button" :href="`${publicPath}CV Lucas JAOUEN - English.pdf`" download>
                <span class="button-text">{{translate('labelDownloadCV')}}</span>
                <span class="button-icon fa fa-download"></span>
              </a>
            </div>
            <!-- {/* End download button */} -->
          </div>
        </div>
        <!-- {/*  Personal Info Ends */} -->

        <!-- {/*  Boxes Starts */} -->
        <div class="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
          <!-- Start AchievementsInfo -->
          <div class="row">
            <div
              class="col-6"
            >
              <div class="box-stats with-margin">
                <h3 class="poppins-font position-relative">
                  {{ translate('achievementTitle1') }}
                </h3>
                <p class="open-sans-font m-0 position-relative text-uppercase">
                  {{ translate('achievementsubTitle1') }}
                  <span class="d-block">{{ translate('achievementsubTitle1bis') }}</span>
                </p>
              </div>
            </div>
            <div
              class="col-6"
            >
              <div class="box-stats with-margin">
                <h3 class="poppins-font position-relative">
                  {{ translate('achievementTitle2') }}
                </h3>
                <p class="open-sans-font m-0 position-relative text-uppercase">
                  {{ translate('achievementsubTitle2') }}
                  <span class="d-block">{{ translate('achievementsubTitle2bis') }}</span>
                </p>
              </div>
            </div>
            <div
              class="col-6"
            >
              <div class="box-stats with-margin">
                <h3 class="poppins-font position-relative">
                  {{ translate('achievementTitle3') }}
                </h3>
                <p class="open-sans-font m-0 position-relative text-uppercase">
                  {{ translate('achievementsubTitle3') }}
                  <span class="d-block">{{ translate('achievementsubTitle3bis') }}</span>
                </p>
              </div>
            </div>
            <div
              class="col-6"
            >
              <div class="box-stats with-margin">
                <h3 class="poppins-font position-relative">
                  {{ translate('achievementTitle4') }}
                </h3>
                <p class="open-sans-font m-0 position-relative text-uppercase">
                  {{ translate('achievementsubTitle4') }}
                  <span class="d-block">{{ translate('achievementsubTitle4bis') }}</span>
                </p>
              </div>
            </div>
          </div>
          <!-- End AchievementsInfo -->
        </div>
        <!-- {/* Achievements Ends */} -->
      </div>
      <!-- {/* End .row */} -->

      <hr class="separator" />

      <!-- {/* Skills Starts */} -->
      <div class="row">
        <div class="col-12">
          <h3
            class="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600"
          >
            My Skills
          </h3>
        </div>
        <!-- Start Skill Info -->

        <div
          class="col-6 col-md-3 mb-3 mb-sm-5"
          :key="skills.id"
          v-for="skills in skillsContent"
        >
          <div :class="`c100 ${skills.skillClass}`">
            <span>{{ skills.skillPercent }}%</span>
            <div class="slice">
              <div class="bar"></div>
              <div class="fill"></div>
            </div>
          </div>
          <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {{ skills.skillName }}
          </h6>
        </div>
        <!-- End Skill Info -->
      </div>
      <!-- {/* Skills Ends */} -->

      <hr class="separator mt-1" />

      <!-- {/* Experience & Education Starts */} -->
      <div class="row">
        <div class="col-12">
          <h3
            class="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600"
          >
            Experience <span>&</span> Education
          </h3>
        </div>
        <div class="col-lg-6 m-15px-tb">
          <div class="resume-box">
            <!-- Start Experience Info -->
            <ul>
              <li><!-- v-for="experience in experienceContent" :key="experience.id"-->
                <div class="icon">
                  <i class="fa fa-briefcase"></i>
                </div>
                <span class="time open-sans-font text-uppercase">{{
                  translate('experienceContentyear1')
                }}</span>
                <h5 class="poppins-font text-uppercase">
                  {{ translate('experienceContentposition1') }}
                  <span class="place open-sans-font">{{ translate('experienceContentcompnayName1') }}</span>
                </h5>
                <p  style="margin-bottom: 10px;" class="open-sans-font">{{ translate('experienceContentdetails1') }}</p>
                <p  style="margin-bottom: 10px;"  class="open-sans-font">{{ translate('experienceContentdetails1bis') }}</p>
                <p  style="margin-bottom: 10px;"  class="open-sans-font">{{ translate('experienceContentdetails1tiers') }}</p>
              </li>
              <li><!-- v-for="experience in experienceContent" :key="experience.id"-->
                <div class="icon">
                  <i class="fa fa-briefcase"></i>
                </div>
                <span class="time open-sans-font text-uppercase">{{
                  translate('experienceContentyear2')
                }}</span>
                <h5 class="poppins-font text-uppercase">
                  {{ translate('experienceContentposition2') }}
                  <span class="place open-sans-font">{{ translate('experienceContentcompnayName2') }}</span>
                </h5>
                <p  style="margin-bottom: 10px;" class="open-sans-font">{{ translate('experienceContentdetails2') }}</p>
                <p  style="margin-bottom: 10px;"  class="open-sans-font">{{ translate('experienceContentdetails2bis') }}</p>
                <p  style="margin-bottom: 10px;"  class="open-sans-font">{{ translate('experienceContentdetails2tiers') }}</p>
              </li>
              <li><!-- v-for="experience in experienceContent" :key="experience.id"-->
                <div class="icon">
                  <i class="fa fa-briefcase"></i>
                </div>
                <span class="time open-sans-font text-uppercase">{{
                  translate('experienceContentyear3')
                }}</span>
                <h5 class="poppins-font text-uppercase">
                  {{ translate('experienceContentposition3') }}
                  <span class="place open-sans-font">{{ translate('experienceContentcompnayName3') }}</span>
                </h5>
                <p  style="margin-bottom: 10px;" class="open-sans-font">{{ translate('experienceContentdetails3') }}</p>
                <p  style="margin-bottom: 10px;"  class="open-sans-font">{{ translate('experienceContentdetails3bis') }}</p>
                <p  style="margin-bottom: 10px;"  class="open-sans-font">{{ translate('experienceContentdetails3tiers') }}</p>
              </li>
            </ul>
            <!-- End Experience Info -->
          </div>
        </div>
        <div class="col-lg-6 m-15px-tb">
          <div class="resume-box">
            <!-- Start eductation Info -->
            <ul>
              <li> <!-- v-for="education in educationContent" :key="education.id"-->
                <div class="icon">
                  <i class="fa fa-briefcase"></i>
                </div>
                <span class="time open-sans-font text-uppercase">{{
                  translate('educationContentyear1')
                }}</span>
                <h5 class="poppins-font text-uppercase">
                  {{ translate('educationdegree1') }}
                  <span class="place open-sans-font">{{ translate('educationinstitute1') }}</span>
                </h5>
                <p class="open-sans-font">{{ translate('educationdetails1') }}</p>
              </li>
              <li> <!-- v-for="education in educationContent" :key="education.id"-->
                <div class="icon">
                  <i class="fa fa-briefcase"></i>
                </div>
                <span class="time open-sans-font text-uppercase">{{
                  translate('educationContentyear2')
                }}</span>
                <h5 class="poppins-font text-uppercase">
                  {{ translate('educationContentdegree2') }}
                  <span class="place open-sans-font">{{ translate('educationContentinstitute2') }}</span>
                </h5>
                <p class="open-sans-font">{{ translate('educationContentdetails2') }}</p>
              </li>
              <li> <!-- v-for="education in educationContent" :key="education.id"-->
                <div class="icon">
                  <i class="fa fa-briefcase"></i>
                </div>
                <span class="time open-sans-font text-uppercase">{{
                  translate('educationContentyear3')
                }}</span>
                <h5 class="poppins-font text-uppercase">
                  {{ translate('educationContentdegree3') }}
                  <span class="place open-sans-font">{{ translate('educationContentinstitute3') }}</span>
                </h5>
                <p class="open-sans-font">{{ translate('educationContentdetails3') }}</p>
              </li>
              <li> <!-- v-for="education in educationContent" :key="education.id"-->
                <div class="icon">
                  <i class="fa fa-briefcase"></i>
                </div>
                <span class="time open-sans-font text-uppercase">{{
                  translate('educationContentyear4')
                }}</span>
                <h5 class="poppins-font text-uppercase">
                  {{ translate('educationContentdegree4') }}
                  <span class="place open-sans-font">{{ translate('educationContentinstitute4') }}</span>
                </h5>
                <p class="open-sans-font">{{ translate('educationContentdetails4') }}</p>
              </li>
            </ul>
            <!-- End Education Info -->
          </div>
        </div>
      </div>
      <!-- {/*  Experience & Education Ends */} -->
    </div>
  </section>
  <!-- End IndexMain -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end hero banner-->
        </div>
      </div>
      <!-- End Hero content tabs -->

      <div class="tab-pane fade about" id="about">
        <div>
          <div class="title-section text-left text-sm-center">
            <h1>{{ translate('apropos')}} <span>{{ translate('moi')}} </span></h1>
            <span class="title-bg">Resume</span>
          </div>
          <!-- {/* End title */} -->
          <!-- Start IndexMain -->
            <section class="main-content">
    <div class="container">
      <div class="row">
        <!-- {/* Personal Info Starts */} -->

        <div class="col-xl-6 col-lg-5 col-12">
          <div class="row">
            <div class="col-12">
              <h3 class="text-uppercase custom-title mb-0 ft-wt-600">
                {{ translate('infoPersTitle')}}
              </h3>

              <!-- <h3 class="text-uppercase custom-title mb-0 ft-wt-600" style="text-align: center">
                personal infos
              </h3> -->
            </div>
            <!-- {/* End .col */} -->

            <div class="col-12 d-block d-sm-none">
              <img
                :src="imgMobile"
                class="img-fluid main-img-mobile"
                alt="about avatar"
              />
            </div>
            <!-- {/* image for mobile menu */} -->

            <div class="col-12">
              <!-- Start Personnal info -->
              <ul class="about-list list-unstyled open-sans-font">
                <li>
                  <span class="title">{{ translate('firstName')}}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('prenomInfo')}}
                  </span>
                </li>
                <li>
                  <span class="title">{{ translate('lastName') }}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('nomInfo') }}
                  </span>
                </li>
                <li>
                  <span class="title">{{ translate('Age') }}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('infoAge') }}
                  </span>
                </li>
                <li>
                  <span class="title">{{ translate('Nationality') }}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('infoNationalite') }}
                  </span>
                </li>
                <li>
                  <span class="title">{{ translate('internship') }}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('infoInternship') }}
                  </span>
                </li>
                <li>
                  <span class="title">{{ translate('address') }}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('addressInfo') }}
                  </span>
                </li>
                <li>
                  <span class="title">{{ translate('phone') }}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('phoneInfo') }}
                  </span>
                </li>
                <li>
                  <span class="title">{{ translate('email') }}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('emailInfo') }}
                  </span>
                </li>
                <li>
                  <span class="title">{{ translate('insta') }}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('instaInfo') }}
                  </span>
                </li>
                <li>
                  <span class="title">{{ translate('langages') }}: </span>
                  <span
                    class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
                  >
                    {{ translate('langagesInfo') }}
                  </span>
                </li>
              </ul>
              <!-- End Personnal Info -->
            </div>
            <!-- {/* End personal info */} -->

            <div class="col-12 mt-1">
              <a class="button" :href="`${publicPath}CV Lucas JAOUEN - English.pdf`" download>
                <span class="button-text">{{translate('labelDownloadCV')}}</span>
                <span class="button-icon fa fa-download"></span>
              </a>
            </div>
            <!-- {/* End download button */} -->
          </div>
        </div>
        <!-- {/*  Personal Info Ends */} -->

        <!-- {/*  Boxes Starts */} -->
        <div class="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
          <!-- Start AchievementsInfo -->
          <div class="row">
            <div
              class="col-6"
            >
              <div class="box-stats with-margin">
                <h3 class="poppins-font position-relative">
                  {{ translate('achievementTitle1') }}
                </h3>
                <p class="open-sans-font m-0 position-relative text-uppercase">
                  {{ translate('achievementsubTitle1') }}
                  <span class="d-block">{{ translate('achievementsubTitle1bis') }}</span>
                </p>
              </div>
            </div>
            <div
              class="col-6"
            >
              <div class="box-stats with-margin">
                <h3 class="poppins-font position-relative">
                  {{ translate('achievementTitle2') }}
                </h3>
                <p class="open-sans-font m-0 position-relative text-uppercase">
                  {{ translate('achievementsubTitle2') }}
                  <span class="d-block">{{ translate('achievementsubTitle2bis') }}</span>
                </p>
              </div>
            </div>
            <div
              class="col-6"
            >
              <div class="box-stats with-margin">
                <h3 class="poppins-font position-relative">
                  {{ translate('achievementTitle3') }}
                </h3>
                <p class="open-sans-font m-0 position-relative text-uppercase">
                  {{ translate('achievementsubTitle3') }}
                  <span class="d-block">{{ translate('achievementsubTitle3bis') }}</span>
                </p>
              </div>
            </div>
            <div
              class="col-6"
            >
              <div class="box-stats with-margin">
                <h3 class="poppins-font position-relative">
                  {{ translate('achievementTitle4') }}
                </h3>
                <p class="open-sans-font m-0 position-relative text-uppercase">
                  {{ translate('achievementsubTitle4') }}
                  <span class="d-block">{{ translate('achievementsubTitle4bis') }}</span>
                </p>
              </div>
            </div>
          </div>
          <!-- End AchievementsInfo -->
        </div>
        <!-- {/* Achievements Ends */} -->
      </div>
      <!-- {/* End .row */} -->

      <hr class="separator" />

      <!-- {/* Skills Starts */} -->
      <div class="row">
        <div class="col-12">
          <h3
            class="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600"
          >
            {{translate('skills')}}
          </h3>
        </div>
        <!-- Start Skill Info -->

        <div
          class="col-6 col-md-3 mb-3 mb-sm-5"
          :key="skills.id"
          v-for="skills in skillsContent"
        >
          <div :class="`c100 ${skills.skillClass}`">
            <span>{{ skills.skillPercent }}%</span>
            <div class="slice">
              <div class="bar"></div>
              <div class="fill"></div>
            </div>
          </div>
          <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {{ skills.skillName }}
          </h6>
        </div>
        <!-- End Skill Info -->
      </div>
      <!-- {/* Skills Ends */} -->

      <hr class="separator mt-1" />

      <!-- {/* Experience & Education Starts */} -->
      <div class="row">
        <div class="col-12">
          <h3
            class="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600"
          >
            Experience <span>&</span> Education
          </h3>
        </div>
        <div class="col-lg-6 m-15px-tb">
          <div class="resume-box">
            <!-- Start Experience Info -->
            <ul>
              <li><!-- v-for="experience in experienceContent" :key="experience.id"-->
                <div class="icon">
                  <i class="fa fa-briefcase"></i>
                </div>
                <span class="time open-sans-font text-uppercase">{{
                  translate('experienceContentyear1')
                }}</span>
                <h5 class="poppins-font text-uppercase">
                  {{ translate('experienceContentposition1') }}
                  <span class="place open-sans-font">{{ translate('experienceContentcompnayName1') }}</span>
                </h5>
                <p  style="margin-bottom: 10px;" class="open-sans-font">{{ translate('experienceContentdetails1') }}</p>
                <p  style="margin-bottom: 10px;"  class="open-sans-font">{{ translate('experienceContentdetails1bis') }}</p>
                <p  style="margin-bottom: 10px;"  class="open-sans-font">{{ translate('experienceContentdetails1tiers') }}</p>
              </li>
              <li><!-- v-for="experience in experienceContent" :key="experience.id"-->
                <div class="icon">
                  <i class="fa fa-briefcase"></i>
                </div>
                <span class="time open-sans-font text-uppercase">{{
                  translate('experienceContentyear2')
                }}</span>
                <h5 class="poppins-font text-uppercase">
                  {{ translate('experienceContentposition2') }}
                  <span class="place open-sans-font">{{ translate('experienceContentcompnayName2') }}</span>
                </h5>
                <p  style="margin-bottom: 10px;" class="open-sans-font">{{ translate('experienceContentdetails2') }}</p>
                <p  style="margin-bottom: 10px;"  class="open-sans-font">{{ translate('experienceContentdetails2bis') }}</p>
                <p  style="margin-bottom: 10px;"  class="open-sans-font">{{ translate('experienceContentdetails2tiers') }}</p>
              </li>
              <li><!-- v-for="experience in experienceContent" :key="experience.id"-->
                <div class="icon">
                  <i class="fa fa-briefcase"></i>
                </div>
                <span class="time open-sans-font text-uppercase">{{
                  translate('experienceContentyear3')
                }}</span>
                <h5 class="poppins-font text-uppercase">
                  {{ translate('experienceContentposition3') }}
                  <span class="place open-sans-font">{{ translate('experienceContentcompnayName3') }}</span>
                </h5>
                <p  style="margin-bottom: 10px;" class="open-sans-font">{{ translate('experienceContentdetails3') }}</p>
                <p  style="margin-bottom: 10px;"  class="open-sans-font">{{ translate('experienceContentdetails3bis') }}</p>
                <p  style="margin-bottom: 10px;"  class="open-sans-font">{{ translate('experienceContentdetails3tiers') }}</p>
              </li>
            </ul>
            <!-- End Experience Info -->
          </div>
        </div>
        <div class="col-lg-6 m-15px-tb">
          <div class="resume-box">
            <!-- Start eductation Info -->
            <ul>
              <li> <!-- v-for="education in educationContent" :key="education.id"-->
                <div class="icon">
                  <i class="fa fa-briefcase"></i>
                </div>
                <span class="time open-sans-font text-uppercase">{{
                  translate('educationContentyear1')
                }}</span>
                <h5 class="poppins-font text-uppercase">
                  {{ translate('educationdegree1') }}
                  <span class="place open-sans-font">{{ translate('educationinstitute1') }}</span>
                </h5>
                <p class="open-sans-font">{{ translate('educationdetails1') }}</p>
              </li>
              <li> <!-- v-for="education in educationContent" :key="education.id"-->
                <div class="icon">
                  <i class="fa fa-briefcase"></i>
                </div>
                <span class="time open-sans-font text-uppercase">{{
                  translate('educationContentyear2')
                }}</span>
                <h5 class="poppins-font text-uppercase">
                  {{ translate('educationContentdegree2') }}
                  <span class="place open-sans-font">{{ translate('educationContentinstitute2') }}</span>
                </h5>
                <p class="open-sans-font">{{ translate('educationContentdetails2') }}</p>
              </li>
              <li> <!-- v-for="education in educationContent" :key="education.id"-->
                <div class="icon">
                  <i class="fa fa-briefcase"></i>
                </div>
                <span class="time open-sans-font text-uppercase">{{
                  translate('educationContentyear3')
                }}</span>
                <h5 class="poppins-font text-uppercase">
                  {{ translate('educationContentdegree3') }}
                  <span class="place open-sans-font">{{ translate('educationContentinstitute3') }}</span>
                </h5>
                <p class="open-sans-font">{{ translate('educationContentdetails3') }}</p>
              </li>
              <li> <!-- v-for="education in educationContent" :key="education.id"-->
                <div class="icon">
                  <i class="fa fa-briefcase"></i>
                </div>
                <span class="time open-sans-font text-uppercase">{{
                  translate('educationContentyear4')
                }}</span>
                <h5 class="poppins-font text-uppercase">
                  {{ translate('educationContentdegree4') }}
                  <span class="place open-sans-font">{{ translate('educationContentinstitute4') }}</span>
                </h5>
                <p class="open-sans-font">{{ translate('educationContentdetails4') }}</p>
              </li>
            </ul>
            <!-- End Education Info -->
          </div>
        </div>
      </div>
      <!-- {/*  Experience & Education Ends */} -->
    </div>
  </section>
  <!-- End IndexMain -->
        </div>
      </div>
      <!-- End about content tabs -->

      <div class="tab-pane fade portfolio professional" id="portfolio">
        <div
          class="title-section text-left text-sm-center"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h1>{{translate('mon')}} <span>portfolio</span></h1>
          <span class="title-bg">{{translate('works')}} </span>
        </div>
        <!-- {/* End title */} -->
        <PortfolioInfo />
      </div>
      <!-- End portfolio content tabs -->

      <div class="tab-pane fade contact" id="contact">
        <div class="title-section text-left text-sm-center">
          <h1>{{translate('enter')}} <span>{{translate('touch')}}</span></h1>
          <span class="title-bg">contact</span>
        </div>
        <div class="container">
          <div class="row">
            <!-- {/* Left Side Starts */} -->
            <div class="col-12 col-lg-4">
              <h3 class="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                {{translate('contactTitle')}}
              </h3>
              <p class="open-sans-font mb-4">
                {{translate('paragContact')}}
              </p>
              <p class="open-sans-font custom-span-contact position-relative">
                <i class="fa fa-map position-absolute"></i>
                <span class="d-block">{{translate('addressCarte')}}</span>88 rue de Limoges , Angouleme 16000.
              </p>
              <!-- {/* End .custom-span-contact */} -->

              <p class="open-sans-font custom-span-contact position-relative">
                <i class="fa fa-envelope-open position-absolute"></i>
                <span class="d-block">{{translate('mailMe')}}</span>
                <a href="lucas.jaouen1@gmail.com">lucas.jaouen1@gmail.com</a>
              </p>
              <!-- {/* End .custom-span-contact */} -->

              <p class="open-sans-font custom-span-contact position-relative">
                <i class="fa fa-phone-square position-absolute"></i>
                <span class="d-block">{{translate('callMe')}}</span>
                <a href="Tel: +336 70 86 88 18">+336 70 86 88 18</a>
              </p>
              <!-- {/* End Address */} -->

              <SocialInfo />
              <!-- {/* End Social */} -->
            </div>
            <!-- {/* Left Side Ends */} -->

            <!-- {/* Contact Form Starts */} -->
            <div class="col-12 col-lg-8">
              <form ref="form" class="contactform" @submit.prevent="sendEmail">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="YOUR NAME"
                        v-model="name"
                        required
                      />
                    </div>
                  </div>
                  <!-- {/* End .col */} -->

                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <input
                        type="email"
                        name="user_email"
                        placeholder="YOUR EMAIL"
                        required
                        v-model="email"
                      />
                    </div>
                  </div>
                  <!-- {/* End .col */} -->

                  <div class="col-12 col-md-12">
                    <div class="form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="YOUR SUBJECT"
                        required
                        v-model="subject"
                      />
                    </div>
                  </div>
                  <!-- {/* End .col */} -->

                  <div class="col-12">
                    <div class="form-group">
                      <textarea
                        name="message"
                        placeholder="YOUR MESSAGE"
                        required
                        v-model="message"
                      ></textarea>
                    </div>
                  </div>
                  <!-- {/* End .col */} -->

                  <div class="col-12">
                    <button type="submit" class="button">
                      <span class="button-text">{{translate('labelBtnSendMail')}}</span>
                      <span class="button-icon fa fa-send"></span>
                    </button>
                  </div>
                  <!-- {/* End .col */} -->
                </div>
              </form>
            </div>
            <!-- {/* Contact Form Ends */} -->
          </div>
        </div>
        <!-- {/* End .container */} -->
      </div>
      <!-- End contact content tabs -->

      <div class="tab-pane fade blog" id="blog">
        <div class="title-section text-left text-sm-center">
          <h1>{{translate('mon')}} <span>blog</span></h1>
          <span class="title-bg">posts</span>
        </div>
        <div class="container">
          <!-- {/* Articles Starts */} -->
          <div class="row pb-50" style="justify-content : center">
            <BlogInfo />
          </div>
          <!-- {/* Articles Ends */} -->
        </div>
      </div>
      <!-- End blog content tabs -->
    </div>
  </main>
</template>

<script>
import SocialInfo from "@/components/SocialInfo.vue";
import BlogInfo from "@/components/blog/BlogInfo.vue";
import PortfolioInfo from "@/components/portfolio/PortfolioInfo.vue";
import en from '@/en.js';
import fr from '@/fr.js';
import emailjs from "@emailjs/browser";

export default {
  components: {
    SocialInfo,
    BlogInfo,
    PortfolioInfo,
  },
  mixins: [en, fr],
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      lang: "en",
      heroContent: {
        heroImage: require(`@/assets/images/hero/dark.jpg`),
        heroMobileImage: require(`@/assets/images/hero/img-mobile.jpg`),
      },
      imgMobile: require(`@/assets/images/hero/img-mobile.jpg`),
      // cv: require(`@/assets/images/cv_lucas_jaouen.pdf`),
      publicPath: process.env.BASE_URL,
      // achievementsContent: [
      //   { id: 1, title: "3", subTitle1: "years of", subTitle2: "experience" },
      //   { id: 2, title: "10", subTitle1: "completed", subTitle2: "projects" },
      //   { id: 3, title: "30", subTitle1: "Happy", subTitle2: "associates" },
      //   { id: 4, title: "200", subTitle1: "Nice", subTitle2: "meeting" },
      // ],
      // personalInfoContent: [
      //   { id: 1, meta: "first name", metaInfo: "Lucas" },
      //   { id: 2, meta: "last name", metaInfo: "JAOUEN" },
      //   { id: 3, meta: "Age", metaInfo: "22 Years" },
      //   { id: 4, meta: "Nationality", metaInfo: "French" },
      //   { id: 5, meta: "Internship", metaInfo: "30/05/22 to 21/07/22" },
      //   { id: 6, meta: "Address", metaInfo: "Angouleme" },
      //   { id: 7, meta: "phone", metaInfo: "+33670868818" },
      //   { id: 8, meta: "Email", metaInfo: "lucas.jaouen1@gmail.com" },
      //   { id: 9, meta: "Insta", metaInfo: "lucas_jaouen" },
      //   { id: 10, meta: "langages", metaInfo: "French, English, Spanish" },
      // ],
      skillsContent: [
        { id: 1, skillClass: "p50", skillPercent: "50", skillName: "C/R" },
        {
          id: 2,
          skillClass: "p75",
          skillPercent: "75",
          skillName: "JAVA / Python",
        },
        { id: 3, skillClass: "p85", skillPercent: "85", skillName: "HTML / CSS / JS" },
        { id: 4, skillClass: "p40", skillPercent: "40", skillName: "PHP" },
        {
          id: 5,
          skillClass: "p95",
          skillPercent: "95",
          skillName: "WORDPRESS",
        },
        { id: 6, skillClass: "p30", skillPercent: "30", skillName: "Blender / Maya 3D / Unity 3D" },
        { id: 7, skillClass: "p50", skillPercent: "50", skillName: "ANGULAR / VUE / GIT" },
        { id: 8, skillClass: "p70", skillPercent: "70", skillName: "Quasar" },
      ],
    };
  },
  methods: {
    translate(prop) {
      return this[this.lang][prop];
    },
    sendEmail() {
      emailjs
        .sendForm(
          "service_k6v0b9o",
          "template_cgehyq9",
          this.$refs.form,
          "FMR-Q_rbP4XvwGmCl",
          {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message,
          }
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            alert("Message sent !");
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert("Message not sent", error);
          }
        );
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
  }
};
</script>
