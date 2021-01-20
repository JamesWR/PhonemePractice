<script>
import Sound from "@/components/Sound.vue";
export default {
  name: "Guess",
  components: {
    Sound,
  },
  props: {
    right: Object,
    wrong: Object,
    type: String
  },
  data() {
    return {
      correctPos: Math.floor(Math.random() * 2),
    };
  },
  computed: {
    sound1: function () {
      return this.correctPos == 0 ? this.right.sound : this.wrong.sound
    },
    sound2: function () {
      return this.correctPos == 1 ? this.right.sound : this.wrong.Sound
    },
    char1: function () {
      return this.correctPos == 0 ? this.right.char : this.wrong.char
    },
    char2: function () {
      return this.correctPos == 1 ? this.right.char : this.wrong.char
    },
  },
  methods: {
    guess(num) {
      this.$emit('guess', num == this.correctPos)
    }
  }
};
</script>

<template lang="pug">
.guess()
  .correct which is
    span(v-if="type=='sound'") {{' ' + right.char }}
    Sound(v-if="type=='char'" :soundUrl="right.sound")
  div option 1:
    Sound(v-if="type!='char'" :soundUrl="sound1")
    span(v-if="type!='sound'") {{' ' + char1}}
  div option 2:
    Sound(v-if="type!='char'" :soundUrl="sound2")
    span(v-if="type!='sound'") {{' ' + char2}}
  template(v-if="type=='listen'")
    button.guess(v-on:click='guess(0)') {{'new set'}}
  template(v-else)
    button.guess(v-on:click='guess(0)') {{'1'}}
    button.guess(v-on:click='guess(1)') {{'2'}}
</template>
