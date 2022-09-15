<template>
  <div
    class="col-12 col-md-6 col-lg-6 col-xl-4 mb-30"
    v-for="item in blogs"
    :key="item.id"
  >
    <article
      class="post-container"
      data-bs-toggle="modal"
      data-bs-target="#blogModal"
      @click="handleBlogItem(item.id)"
    >
      <div class="post-thumb">
        <div class="d-block position-relative overflow-hidden">
          <img :src="item.img" class="img-fluid" alt="item.title" />
        </div>
      </div>
      <!-- {/* End .thumb */} -->
      <div class="post-content">
        <div class="entry-header">
          <h3>{{ item.title }}</h3>
        </div>
        <div class="entry-content open-sans-font">
          <p> 
            {{ item.description1.slice(0, 143) }} <!-- nombre de lettres en aperçu de description blog -->
          </p>
        </div>
      </div>
      <!-- {/* End .post-content */} -->
    </article>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="blogModal"
    tabindex="-1"
    aria-labelledby="blogModal"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg blog-modal"
    >
      <div class="modal-content">
        <button class="close-modal" data-bs-dismiss="modal" aria-label="Close">
          <img src="../../assets/images/cancel.svg" alt="close image" />
        </button>
        <!-- close modal -->
        <div class="modal-body">
          <div class="box_inner about">
            <div class="box_inner blog-post">
              <!-- {/* Article Starts */} -->
              <article>
                <div class="title-section text-left text-sm-center">
                  <h1>Post <span>Details</span></h1>
                  <span class="title-bg">posts</span>
                </div>
                <!-- {/* Meta Starts */} -->

                <div class="meta open-sans-font">
                  <span> <i class="fa fa-user"></i> {{ blog.commentor}} </span>
                  <span class="date">
                    <i class="fa fa-calendar"></i> {{ blog.date }}
                  </span>
                  <span> <i class="fa fa-tags"></i> {{ blog.tag }} </span>
                  <!-- <div class="selectWrapper-switch-lang">
                    <select class="selectBox" name="lang" v-model="lang">
                    <option value="blogMixin">English</option>
                    <option value="blogMixinFr">French</option>
                  </select>
                  </div> -->
                </div>
                <!-- {/* Meta Ends */} -->

                <!-- {/* Article Content Starts */} -->
                <h1>{{ blog.title }}</h1>
                <img :src="blog.img" class="img-fluid" alt="Blog" />
                <div class="blog-excerpt open-sans-font pb-5">
                  <p>
                    {{ blog.description1 }}
                  </p>
                  <div class="quotebox">
                    <div class="icon">
                      <img :src="blogQuote" alt="blog quote" />
                    </div>
                    <p>
                      {{ blog.description2 }}
                    </p>
                  </div>
                  <p>
                    {{ blog.description3 }}
                  </p><br/>
                  <h4 class="title_gras">
                    {{ blog.description4 }}
                  </h4>
                  <p>
                    {{ blog.description5 }}
                  </p>
                  <p>
                    {{ blog.description6 }}
                  </p>
                  <p>
                    {{ blog.description7 }}
                  </p>
                  <p>
                    {{ blog.description8 }}
                  </p>
                  <p>
                    {{ blog.description9 }}
                  </p>
                  <p>
                    {{ blog.description10 }}
                  </p><br/>
                  <h4 class="title_gras">
                    {{ blog.description11 }}
                  </h4>
                  <p>
                    {{ blog.description12 }}
                  </p>
                  <p>
                    {{ blog.description13 }}
                  </p>
                  <p>
                    {{ blog.description14 }}
                  </p>
                  <br/>
                  <h4 class="title_gras">
                    {{ blog.description15 }}
                  </h4>
                  <p>
                    {{ blog.description16 }}
                  </p>
                  <p>
                    {{ blog.description17 }}
                  </p>
                  <br/>
                  <h4 class="title_gras">
                    {{ blog.description18 }}
                  </h4>
                  <p>
                    {{ blog.description19 }}
                  </p>
                  <p>
                    {{ blog.description20 }}
                  </p><br/>
                  <h4 class="title_gras">
                    {{ blog.description21 }}
                  </h4>
                  <p>
                    {{ blog.description22 }}
                  </p>
                  <p>
                    {{ blog.description23 }}
                  </p>
                  <!-- <p>
                    {{ blog.description20 }}
                  </p> -->
                </div>
                <!-- {/* Article Content Ends */} -->
              </article>
              <!-- {/* Article Ends */} -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal -->
</template>

<script>
import blogMixin from "@/mixin/blog-mixin";
import blogMixinFr from "@/mixin/blog-mixinfr";
// import en from '@/en.js';
// import fr from '@/fr.js';

export default {
  name: "FancyBlogs",  
  mixins: [blogMixin, blogMixinFr],
  data() {
    return {
      blogQuote: require(`@/assets/images/blog/quote.svg`),
      blog: {},
      lang: "blogs"
    };
  },
  methods: {
    handleBlogItem(id) {
      this.blog = this.blogs.find((item) => item.id == id);
    },
    translate(prop) {
      return this[this.lang][prop];
    }
  },
};
</script>

<style lang="scss" scoped></style>
