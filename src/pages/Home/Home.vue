<template>
    <div>
        <TypeNav></TypeNav>
        <List></List>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor v-for="floor in floorList" :key="floor.id" :floor="floor"></Floor>
        <Brand></Brand>
    </div>
</template>

<script>
import List from "@/pages/Home/List";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import {mapState} from "vuex";

export default {
    name: "Home",
    components: {List, Recommend, Rank, Like, Floor, Brand},
    computed: {
        ...mapState("home", ["floorList"])
    },
    mounted() {
        this.$store.dispatch("home/floorList");
    }
}
</script>

<style scoped>

</style>