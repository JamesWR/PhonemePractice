
<script>
import Guess from "@/components/Guess.vue";
export default {
  components: {
    Guess
  },
  props: {
    phonemes: Array,
    type: String
  },
  data() {
    return {
      ...this.genGuess(),
      state: 'guessing'
    }
  },
  methods: {
    genGuess() {
      const right = Math.floor(Math.random() * this.phonemes.length)
      const wrong = Math.floor(Math.random() * (this.phonemes.length - 1))
      return {
        right: this.phonemes[right],
        wrong: this.phonemes[wrong < right ? wrong : wrong + 1]
      }
    },
    setGuess() {
      const {right, wrong} = this.genGuess()
      this.right = right
      this.wrong = wrong
      this.state = 'guessing'
    },
    handleGuess(correct) {
      this.state = correct ? 'right' : 'wrong'
    }
  }
}
</script>

<template lang="pug">
  .practice
    Guess(
      v-if="state == 'guessing'"
      :right="right"
      :wrong="wrong"
      :type="type"
      v-on:guess="(correct) => {handleGuess(correct)}"
    )
    .right(v-if="state == 'right'") right
      button(v-on:click="setGuess()") next
    .wrong(v-if="state == 'wrong'") wrong
      button(v-on:click="setGuess()") next
    button
      router-link(to="select") Back
</template>