<template>
  <div class="about">
    <div id="grid">
      <div id="left">
        <div class="reviewz" v-for="review in reviews" :key="review.id">
          <hr />
          <p>{{ review.text }}</p>
          <p>
            <i>-- {{ review.author }}</i>
          </p>
          <p>
            <button
              v-if="review.insertedByUser == true"
              class="edit"
              @click="edit(review.id)"
            >
              edit
            </button>
            <button
              v-if="review.insertedByUser == true"
              class="edit"
              @click="deleteReview(review.id)"
            >
              delete
            </button>
          </p>
        </div>
        <span> placeholder </span>
        <span> placeholder </span>
      </div>
      <div id="right">
        <h3>Add a Testimonial</h3>
        <form v-on:submit.prevent="addReview">
          <input v-model="addedName" placeholder="Name" />
          <br />
          <br />
          <textarea v-model="addedComment"></textarea>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: {},
      numReviews: 0,
      addedName: "",
      addedComment: "",
    };
  },
  created() {
    this.reviews[this.numReviews] = {
      id: this.numReviews,
      author: "Chaunce F.",
      text:
        "I like Browser Cleaner more and more each day because it makes my life a lot easier. Dude, your stuff is the bomb!",
      insertedByUser: false,
    };
    this.numReviews++;
    this.reviews[this.numReviews] = {
      id: this.numReviews,
      author: "Waly U.",
      text:
        "Thanks guys, keep up the good work! If you aren't sure, always go for Browser Cleaner",
      insertedByUser: false,
    };
    this.numReviews++;
    this.reviews[this.numReviews] = {
      id: this.numReviews,
      author: "Danny Q.",
      text:
        "Browser Cleaner is exactly what our business has been lacking. Thank you so much for your help.",
      insertedByUser: false,
    };
    this.numReviews++;
    this.reviews[this.numReviews] = {
      id: this.numReviews,
      author: "Madeline Q.",
      text:
        "Not able to tell you how happy I am with Browser Cleaner. Browser Cleaner has really helped our business.",
      insertedByUser: false,
    };
    this.numReviews++;
    this.reviews[this.numReviews] = {
      id: this.numReviews,
      author: "Mitchel S.",
      text:
        "I like Browser Cleaner more and more each day because it makes my life a lot easier. I will let my mum know about this, she could really make use of Browser Cleaner!",
      insertedByUser: false,
    };
    this.numReviews++;
    this.reviews[this.numReviews] = {
      id: this.numReviews,
      author: "Anurag E.",
      text: "Browser Cleaner did exactly what you said it does.",
      insertedByUser: false,
    };
    this.numReviews++;
    this.reviews[this.numReviews] = {
      id: this.numReviews,
      author: "Hannibal E.",
      text: "Definitely worth the investment.",
      insertedByUser: false,
    };
    this.numReviews++;
    this.reviews[this.numReviews] = {
      id: this.numReviews,
      author: "Tobey H.",
      text:
        "Browser Cleaner is great. Try this now. I don't always clop, but when I do, it's because of Browser Cleaner.",
      insertedByUser: false,
    };
    this.numReviews++;
    this.reviews[this.numReviews] = {
      id: this.numReviews,
      author: "Ellissa T.",
      text: "Browser Cleaner is the next killer app.",
      insertedByUser: false,
    };
    this.numReviews++;
    this.reviews[this.numReviews] = {
      id: this.numReviews,
      author: "Ros Y.",
      text:
        "I wish I would have thought of it first. Thanks to Browser Cleaner, we've just launched our 5th website!",
      insertedByUser: false,
    };
    this.numReviews++;
    this.reviews[this.numReviews] = {
      id: this.numReviews,
      author: "Graham X.",
      text:
        "I would gladly pay over 600 dollars for Browser Cleaner. We've seen amazing results already.",
      insertedByUser: false,
    };
    this.numReviews++;
  },
  methods: {
    addReview() {
      this.reviews[this.numReviews] = {
        id: this.numReviews,
        author: this.addedName,
        text: this.addedComment,
        insertedByUser: true,
      };
      this.numReviews++;
      this.addedName = "";
      this.addedComment = "";
    },
    edit(id) {
      this.addedName = this.reviews[id].author;
      this.addedComment = this.reviews[id].text;
      this.deleteReview(id);
    },
    deleteReview(id) {
      scroll(0, 0);
      var list = document.getElementsByClassName("reviewz");
      list[id].innerHTML = '';
      this.reviews.splice(id,1);
    },
  },
};
</script>

<style scoped>
#grid {
  padding: 30px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "left right";
}
#left {
  grid-area: left;
}
#right {
  grid-area: right;
}
hr {
  width: 75%;
}
p {
  width: 75%;
  text-align: center;
  margin-left: 9em;
}
span {
  margin: 4em 2em 4em 2em;
  color: white;
}
input {
  font-size: 1.4em;
  width: 35%;
}
textarea {
  font-size: 1.4em;
  height: 6em;
  width: 40%;
}
button {
  font-size: 1.4em;
  width: 20%;
}
.edit {
  border: 0px solid white;
  background-color: white;
  font-size: .8em;
  height: 10px;
  margin: 0 1em 1em 1em;
  width: 8px;
}
</style>
