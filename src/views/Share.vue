<template>
  <div class="about">
    <div id="grid">
      <div id="left">
        <div v-for="review in reviews" :key="review.id">
          <hr />
          <p>{{ review.text }}</p>
          <p>
            <i>-- {{ review.author }}</i>
          </p>
        </div>
      </div>
      <div id="right">
        <h3>Add a Review</h3>
        <form v-on:submit.prevent="addReview">
          <input v-model="addedName" placeholder="Name">
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
  data () {
    return {
      reviews: {},
      numReviews: 0,
      addedName: '',
      addedComment: '',
    }
  },
  methods: {
    addReview() {
      this.reviews[this.numReviews] = {
        author: this.addedName,
        text: this.addedComment,
        insertedByUser: true,
      };
      this.numReviews++;
      this.addedName = '';
      this.addedComment = '';
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
</style>
