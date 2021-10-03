
<script>
import consanants from "@/data/consanants.json";
import Sound from "@/components/Sound.vue";
import * as ramda from "ramda";
export default {
  components: {
    Sound,
  },
  data() {
    return {
      consanants,
      pickedChars: new Set(),
    };
  },
  methods: {
    check(char) {
      console.log(char);
      if (this.pickedChars.has(char)) {
        this.pickedChars.delete(char);
      } else {
        this.pickedChars.add(char);
      }
    },
    practice(type) {
      const phonemes = ramda.filter((phoneme) => {
        const x = this;
        return x.pickedChars.has(phoneme.char);
      })(this.consanants);
      this.$router.push({ name: "practice", params: { type, phonemes } });
      console.log(type, this.pickedChars);
    },
  },
};
</script>

<template lang="pug">
.select
  div check characters you want to practice and then click "Pick Sound" or "Pick IPA"
  div Pick Sound will show you a IPA and 2 sounds from your sellection and you have to pick which sound is the IPA
  div Pick IPA will show you a sound and 2 IPA from your sellection and you have to pick which IPA is the sound
  .symbols
    template(v-for="{ char, sound } in consanants", key=char)
      .symbol(v-if="sound")
        span.char {{ char }}
        Sound(:soundUrl="sound")
        input.practice(type="checkbox", v-on:click="check(char)")
  button(v-on:click="practice('sound')") Pick Sound
  button(v-on:click="practice('char')") Pick IPA
  button(v-on:click="practice('listen')") Just See
</template>

<style scoped>
.symbols {
  display: flex;
  flex-wrap: wrap;
  background: lightblue;
}
</style>